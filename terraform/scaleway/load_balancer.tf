# Load Balancer - Smallest possible configuration
resource "scaleway_lb" "main" {
  name            = "wires-lb"
  type            = "LB-S"  # Smallest load balancer type
  zone            = "fr-par-2"
  assign_flexible_ip = false

  tags = ["terraform", "prod", "load-balancer"]

  private_network {
    private_network_id = scaleway_vpc_private_network.wires_private_network.id
  }
}

# Backend - Points to the production servers
resource "scaleway_lb_backend" "main" {
  lb_id            = scaleway_lb.main.id
  name             = "wires-api-backend"
  forward_protocol = "http"
  forward_port     = 443
  forward_port_algorithm = "roundrobin"
  server_ips = [local.prod_server_private_ip]

  health_check_https {
    host_header = "api.wires.fr"
    method = "GET"
    uri = "/health"
    code = 200
  }

  health_check_timeout = "5s"
  health_check_delay = "30s"
  health_check_max_retries = 3
  health_check_port = 443
}

# Frontend - HTTP
resource "scaleway_lb_frontend" "http" {
  lb_id        = scaleway_lb.main.id
  backend_id   = scaleway_lb_backend.main.id
  name         = "wires-http-frontend"
  inbound_port = 80
}

# Frontend - HTTPS
resource "scaleway_lb_frontend" "https" {
  lb_id        = scaleway_lb.main.id
  backend_id   = scaleway_lb_backend.main.id
  name         = "wires-https-frontend"
  inbound_port = 443
}
