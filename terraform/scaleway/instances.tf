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
