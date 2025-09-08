terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
      version = "2.59.0"
    }
  }
}

variable "access_key" {
  type = string
  sensitive = true
}

variable "secret_key" {
  type = string
  sensitive = true
}

variable "organization_id" {
  type = string
  sensitive = true
}

variable "project_id" {
  type = string
  sensitive = true
}

variable "region" {
  type = string
  default = "fr-par"
}

variable "zone" {
  type = string
  default = "fr-par-2"
}

provider "scaleway" {
  access_key      = var.access_key
  secret_key      = var.secret_key
  organization_id = var.organization_id
  project_id      = var.project_id

  region          = var.region
  zone            = var.zone
}

resource "scaleway_vpc_private_network" "wires_private_network" {
  name = "wires-prod-private-network"
  tags = ["terraform", "prod"]
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


resource "scaleway_instance_ip" "public_ip" {}

resource "scaleway_instance_server" "wires-prod-0" {
  name  = "wires-prod-0"
  type  = "DEV1-S"
  image = "debian_bookworm"

  tags = ["terraform", "prod"]

  ip_id = scaleway_instance_ip.public_ip.id

  root_volume {
    size_in_gb = 10
  }

  security_group_id = scaleway_instance_security_group.web-security-group.id

  private_network {
    pn_id = scaleway_vpc_private_network.wires_private_network.id
  }
}

resource "scaleway_instance_server" "wires-prod-1" {
  name  = "wires-prod-1"
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

data "scaleway_instance_ip" "public_dev_ip" {
  address = "51.159.159.142"
}

resource "scaleway_instance_server" "wires-dev-0" {
  name  = "wires-dev-0"
  type  = "DEV1-S"
  image = "debian_bookworm"

  tags = ["terraform", "dev"]

  ip_id = data.scaleway_instance_ip.public_dev_ip.id

  root_volume {
    size_in_gb = 10
  }
}

output "wires_dev_0_public_ip" {
  description = "Public IP address of the wires-dev-0 server"
  value       = data.scaleway_instance_ip.public_dev_ip.address
}