# Terraform

This directory contains Terraform configurations for managing infrastructure across two cloud providers.

## Commands

- `terraform init`
- `terraform plan`
- `terraform apply`

## Directory Structure

### `ovh/` - for DNS Management

- **Purpose**: manages DNS records for the `wires.fr` domain
- **Dependencies**: references Scaleway state to get public IP addresses for DNS records

### `scaleway/` - for infrastructure Management

- **Purpose**: manages cloud infrastructure including servers, networking, and security

## Usage

1. **Deploy Infrastructure First**: run Scaleway terraform to create servers and networks
2. **Configure DNS**: run OVH terraform to create DNS records pointing to the infrastructure

## Configuration

Each directory contains :

- `main.tf` - Main terraform configuration
- `*.auto.tfvars` - Variable values (sensitive data, git ignored)
- `*.auto.tfvars.example` - Example variable file
- `terraform.tfstate*` - State files (git ignored)

`terraform/scaleway` generates `inventory.yml` based on `inventory.tpl` when running `terraform apply`
This file is referenced in ansible configuration.
