resource "scaleway_vpc_private_network" "wires_private_network" {
  name = "wires-prod-private-network"
  tags = ["terraform", "prod"]
  enable_default_route_propagation = false
  
  ipv4_subnet {
    subnet = "172.16.12.0/22"
  }
}

# Gateway : internet access from private instances
resource "scaleway_vpc_public_gateway_ip" "main" {}

resource "scaleway_vpc_public_gateway" "main" {
  name = "wires-prod-gateway"
  type = "VPC-GW-S"
  ip_id = scaleway_vpc_public_gateway_ip.main.id

  bastion_enabled  = true
  bastion_port     = 61000
  
  tags = ["terraform", "prod", "gateway"]
}

locals {
  prod_server_private_ip = [for ip in scaleway_instance_server.wires-prod-0.private_ips : ip.address if can(regex("^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$", ip.address))][0]
}

resource "scaleway_vpc_public_gateway_pat_rule" "http" {
  gateway_id   = scaleway_vpc_public_gateway.main.id
  private_ip   = local.prod_server_private_ip
  private_port = 80
  public_port  = 80
  protocol     = "tcp"
}

resource "scaleway_vpc_public_gateway_pat_rule" "https" {
  gateway_id   = scaleway_vpc_public_gateway.main.id
  private_ip   = local.prod_server_private_ip
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
