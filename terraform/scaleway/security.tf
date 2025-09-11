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
