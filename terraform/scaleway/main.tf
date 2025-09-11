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