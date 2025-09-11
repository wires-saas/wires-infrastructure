resource "local_file" "ansible_inventory" {
  filename = "config/inventory.yml"
  content = templatefile("${path.module}/config/inventory.tpl", {
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
  filename = "config/ssh_config"
  content = templatefile("${path.module}/config/ssh_config.tpl", {
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
