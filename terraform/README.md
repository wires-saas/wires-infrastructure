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
- **Side-effects**: on `terraform apply`, populates ssh_config and inventory.yml

## Usage

1. **Deploy Infrastructure First**: run Scaleway terraform to create servers and networks
2. **Configure DNS**: run OVH terraform to create DNS records pointing to the infrastructure

## Configuration

- For Scaleway use `scw config` CLI tool
- For OVH duplicate and modify `ovh.auto.tfvars.example` (removing .example suffix)

## Infra

Internet -> Gateway -> Load balancer -> Instance

Public ------- Private -----------------------------

## Next steps

Add multiple instances, and design an alternative infra based on Kubernetes
