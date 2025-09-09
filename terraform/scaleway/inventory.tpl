prod:
  hosts:
%{ for instance in prod_servers ~}
    ${instance.name}:
      ansible_user: root
%{ if instance.public_ip != null && instance.public_ip != "" ~}
      ansible_host: ${instance.public_ip}
      server_role: frontend
%{ else ~}
      ansible_host: ${[for ip in instance.private_ips : ip.address if can(regex("^[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+$", ip.address))][0]}
      server_role: backend
%{ endif ~}
      environment: prod
%{ if instance.public_ip == null || instance.public_ip == "" ~}
      ansible_ssh_common_args: '-o ProxyCommand="ssh -W %h:%p root@${bastion_ip}"'
%{ endif ~}
%{ endfor ~}

dev:
  hosts:
%{ for instance in dev_servers ~}
    ${instance.name}:
      ansible_host: ${instance.public_ip != null ? instance.public_ip : instance.private_ip}
      ansible_user: root
      environment: dev
%{ endfor ~}