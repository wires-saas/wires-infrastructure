terraform {
  required_providers {
    ovh = {
      source = "ovh/ovh"
      version = "2.7.0"
    }
  }
}

variable "endpoint" {
  type = string
  default = "ovh-eu"
}

variable "application_key" {
  type = string
  sensitive = true
}

variable "application_secret" {
  type = string
  sensitive = true
}

variable "consumer_key" {
  type = string
  sensitive = true
}

provider "ovh" {
  endpoint           = var.endpoint
  application_key    = var.application_key
  application_secret = var.application_secret
  consumer_key       = var.consumer_key
}

resource "ovh_domain_zone" "wires_fr" {}

variable "scaleway_state_path" {
  type        = string
  description = "Path to the Scaleway Terraform state file"
  default     = "../scaleway/terraform.tfstate"
}

data "terraform_remote_state" "scaleway" {
  backend = "local"
  config = {
    path = var.scaleway_state_path
  }
}

variable "dev_subdomains" {
  type = list(string)
  default = ["dev", "www.dev", "db.dev", "database.dev", "api.dev", "mgo01.dev", "mgo02.dev", "mgo03.dev", "storage.dev", "docker.dev", "webhooks.dev"]
}

resource "ovh_domain_zone_record" "dev_subdomain_a" {
  for_each  = toset(var.dev_subdomains)
  zone      = ovh_domain_zone.wires_fr.name
  subdomain = each.value
  fieldtype = "A"
  target    = data.terraform_remote_state.scaleway.outputs.wires_dev_0_public_ip
  ttl       = "300"
}

resource "ovh_domain_zone_record" "prod_root_a" {
  zone      = ovh_domain_zone.wires_fr.name
  subdomain = ""
  fieldtype = "A"
  target    = data.terraform_remote_state.scaleway.outputs.wires_prod_gateway_ip
  ttl       = "300"
}

variable "prod_subdomains" {
  type = list(string)
  default = ["www", "db", "database", "api", "mgo01", "mgo02", "mgo03", "storage", "docker", "webhooks"]
}

resource "ovh_domain_zone_record" "prod_subdomain_a" {
  for_each  = toset(var.prod_subdomains)
  zone      = ovh_domain_zone.wires_fr.name
  subdomain = each.value
  fieldtype = "A"
  target    = data.terraform_remote_state.scaleway.outputs.wires_prod_gateway_ip
  ttl       = "300"
}

