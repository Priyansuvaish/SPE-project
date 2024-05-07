pipeline {
    agent any

    tools {
        jdk "JDK"
        git "Default"
    }
    environment {
         DOCKER_GAN_NAME = 'ganache'
         DOCKER_ETH_NAME = 'eth-back'
         DOCKER_FRONTEND = 'gan-frontend'
         GITHUB_REPO_URL = 'https://github.com/Priyansuvaish/SPE-project.git'
    }

    stages {
          stage('Checkout') {
            steps {
                script {
                    git branch: 'main', url: "${GITHUB_REPO_URL}"
                }
            }
        }
        stage('Build and Test Backend code') {
            steps {
                script {
                dir("/var/lib/jenkins/workspace/eth-project") {
                sh 'hardhat compile' 
                }
            }
        }
        }
     stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKER_IMAGE_NAME}", '.')
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script{
                    docker.withRegistry('', 'docker') {
                    sh 'docker tag scientific_calculator secy2520/scientific_calculator:latest'
                    sh 'docker push secy2520/scientific_calculator'
                    }
                 }
            }
        }
        stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: 'inventory'
                     )
                }
            }
        }
    
       
     }
    }
