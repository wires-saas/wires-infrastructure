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
