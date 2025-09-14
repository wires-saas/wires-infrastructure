resource "scaleway_k8s_cluster" "cluster" {
  name                        = "wires-k8s-cluster"
  type                        = "kapsule"
  version                     = "1.33.4"
  cni                         = "cilium"
  private_network_id          = scaleway_vpc_private_network.wires_private_network.id
  delete_additional_resources = false
}

resource "scaleway_k8s_pool" "pool" {
  cluster_id = scaleway_k8s_cluster.cluster.id
  name       = "wires-k8s-pool"
  node_type  = "DEV1-M"
  size       = 1
  min_size   = 1
  max_size   = 1
  autoscaling = false
  autohealing = false
  public_ip_disabled = true
}

resource "kubernetes_namespace" "dev" {
  metadata {
    name = "dev"
    labels = {
      environment = "dev"
    }
  }
}

resource "kubernetes_namespace" "prod" {
  metadata {
    name = "prod"
    labels = {
      environment = "prod"
    }
  }
}