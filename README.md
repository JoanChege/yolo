# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`

## Navigate to the Client Folder 
 `cd client`

## Run the folllowing command to install the dependencies 
 `npm install`

## Run the folllowing to start the app
 `npm start`

## Open a new terminal and run the same commands in the backend folder
 `cd ../backend`

 `npm install`

 `npm start`

 ### Go ahead a nd add a product (note that the price field only takes a numeric input)


 Set hosts as all that are stated in the hosts inventory file

become: true: This option instructs Ansible to run the tasks below with elevated privileges (typically root) on the target machines. This is required for package management and configuration updates.

pre_tasks: This section defines tasks that run before to the primary tasks in the playbook. This contains two tasks related to package management on Debian-based systems:
Update apt cache: This task makes use of the apt module, with the update_cache option set to yes. This guarantees that the package list is up to date before trying upgrades.
Upgrade packages: This task makes use of the apt module again, but this time with the upgrade option set to yes. This initiates the update of any existing packages on the target machines.

tasks:
1. clone the github repo and set a destination
2. start docker service
3. build the client docker image
4. run the built client container
5. build the backend docker image
6. run the built backend image

PUSH THE IMAGES TO A GOOGLE ARTIFACT REGISTRY

###
CREATE KUBE DEPLOYMENTS FOR BACKEND AND CLIENT SIDE
CREATE KUBE SERVICE FOR BOTH BACKEND AND CLIENT SIDE

### CONNECT TO GCLOUD and GKE
install the gcloud settings
initialize gcloud, connect to account with billing
choose project in gcloud
create GKE cluster
run the commant to fetch and set up your authenitication credentials for the GKE cluster
verify kubectl is configured to communicate with cluster
deploy the application's backend and client deployment and service yaml files

### rename yaml files
rename service and deployment yaml files for backend and client

add loadbalancer to the service yaml files

## URL 
CLIENT:https://34.71.250.187/
BACKEND:https://34.123.219.149:5000