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

variable "subdomains" {
  type = list(string)
  default = ["dev", "www.dev", "db.dev", "database.dev", "api.dev", "mgo01.dev", "mgo02.dev", "mgo03.dev", "storage.dev", "docker.dev", "webhooks.dev"]
}

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

resource "ovh_domain_zone_record" "subdomain_a" {
  for_each  = toset(var.subdomains)
  zone      = ovh_domain_zone.wires_fr.name
  subdomain = each.value
  fieldtype = "A"
  target    = data.terraform_remote_state.scaleway.outputs.wires_dev_0_public_ip
  ttl       = "60"
}


