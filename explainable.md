Set hosts as all that are stated in the hosts inventory file

become: true: This option instructs Ansible to run the tasks below with elevated privileges (typically root) on the target machines. This is required for package management and configuration updates.

pre_tasks: This section defines tasks that run before to the primary tasks in the playbook. This contains two tasks related to package management on Debian-based systems:
Update apt cache: This task makes use of the apt module, with the update_cache option set to yes. This guarantees that the package list is up to date before trying upgrades.
Upgrade packages: This task makes use of the apt module again, but this time with the upgrade option set to yes. This initiates the update of any existing packages on the target machines.

tasks:
The first task is to clone the github repo and set a destination
the second task is to start docker service
the third task is to build the client docker image
