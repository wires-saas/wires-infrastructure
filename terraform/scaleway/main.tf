terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
      version = "2.59.0"
    }
    local = {
      source = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

resource "scaleway_vpc_private_network" "wires_private_network" {
  name = "wires-prod-private-network"
  tags = ["terraform", "prod"]
  enable_default_route_propagation = false
  
  # dhcp
  ipv4_subnet {
    subnet = "172.16.12.0/22"
  }
}

# Gateway for Internet access from instances inside private network

resource "scaleway_vpc_public_gateway_ip" "main" {}

resource "scaleway_vpc_public_gateway" "main" {
  name = "wires-prod-gateway"
  type = "VPC-GW-S"
  ip_id = scaleway_vpc_public_gateway_ip.main.id

  bastion_enabled  = true
  bastion_port     = 61000
  
  tags = ["terraform", "prod", "gateway"]
}

# HTTP traffic (port 80)
resource "scaleway_vpc_public_gateway_pat_rule" "http" {
  gateway_id   = scaleway_vpc_public_gateway.main.id
  private_ip   = "172.16.12.2"
  private_port = 80
  public_port  = 80
  protocol     = "tcp"
}

# HTTPS traffic (port 443)
resource "scaleway_vpc_public_gateway_pat_rule" "https" {
  gateway_id   = scaleway_vpc_public_gateway.main.id
  private_ip   = "172.16.12.2"
  private_port = 443
  public_port  = 443
  protocol     = "tcp"
}

resource "scaleway_vpc_gateway_network" "main" {
  gateway_id         = scaleway_vpc_public_gateway.main.id
  private_network_id = scaleway_vpc_private_network.wires_private_network.id
  enable_masquerade = true
  ipam_config {
    push_default_route = true
  }
}

resource "scaleway_instance_security_group" "web-security-group" {
  name        = "web-security-group"
  description = "Security group for web server allowing SSH, HTTP, and HTTPS traffic"

  inbound_default_policy  = "drop"
  outbound_default_policy = "accept"

  inbound_rule {
    action = "accept"
    port   = "22"
  }

  inbound_rule {
    action = "accept"
    port   = "80"
  }

  inbound_rule {
    action = "accept"
    port   = "443"
  }
}

resource "scaleway_instance_server" "wires-prod-0" {
  name  = "wires-prod-0"
  type  = "DEV1-S"
  image = "debian_bookworm"

  tags = ["terraform", "prod"]

  root_volume {
    size_in_gb = 10
  }

  security_group_id = scaleway_instance_security_group.web-security-group.id

  private_network {
    pn_id = scaleway_vpc_private_network.wires_private_network.id
  }
}

resource "scaleway_instance_ip" "public_dev_ip" {}

resource "scaleway_instance_server" "wires-dev-0" {
  name  = "wires-dev-0"
  type  = "DEV1-S"
  image = "debian_bookworm"

  tags = ["terraform", "dev"]

  ip_id = scaleway_instance_ip.public_dev_ip.id

  root_volume {
    size_in_gb = 10
  }
}

resource "local_file" "ansible_inventory" {
 filename = "inventory.yml"
 content = templatefile("${path.module}/inventory.tpl", {
   prod_servers = [
     scaleway_instance_server.wires-prod-0
   ]
   dev_servers = [
     scaleway_instance_server.wires-dev-0
   ]
   bastion_ip = scaleway_vpc_public_gateway_ip.main.address
   bastion_port = scaleway_vpc_public_gateway.main.bastion_port
 })
}

resource "local_file" "ssh_config" {
 filename = "ssh_config"
 content = templatefile("${path.module}/ssh_config.tpl", {
   prod_servers = [
     scaleway_instance_server.wires-prod-0
   ]
   dev_servers = [
     scaleway_instance_server.wires-dev-0
   ]
   bastion_ip = scaleway_vpc_public_gateway_ip.main.address
   bastion_port = scaleway_vpc_public_gateway.main.bastion_port
 })
}

### OUTPUTS ###

output "wires_dev_0_public_ip" {
  description = "Public IP address of the wires-dev-0 server"
  value       = scaleway_instance_ip.public_dev_ip.address
}

output "wires_prod_gateway_ip" {
  description = "Public IP address of the prod gateway"
  value       = scaleway_vpc_public_gateway_ip.main.address
}

output "wires_prod_private_network" {
  description = "IP range of the prod private network"
  value       = scaleway_vpc_private_network.wires_private_network.ipv4_subnet[0].subnet
}