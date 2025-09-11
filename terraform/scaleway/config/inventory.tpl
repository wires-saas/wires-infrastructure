prod:
  hosts:
%{ for instance in prod_servers ~}
    ${instance.name}:
      ansible_user: root
      ansible_host: ${[for ip in instance.private_ips : ip.address if can(regex("^[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+$", ip.address))][0]}
      environment: prod
%{ if instance.public_ip == null || instance.public_ip == "" ~}
      ansible_ssh_common_args: '-J bastion@${bastion_ip}:${bastion_port}'
%{ endif ~}
%{ endfor ~}

dev:
  hosts:
%{ for instance in dev_servers ~}
    ${instance.name}:
      ansible_user: root
      ansible_host: ${instance.public_ip != null ? instance.public_ip : instance.private_ip}
      environment: dev
%{ endfor ~}