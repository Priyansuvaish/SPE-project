pipeline {
    agent any

    tools {
        
        git "Default"
        nodejs 'nodejs'
      // dockerTool 'dockeri'
    }
    environment {
         DOCKER_GAN_NAME = 'ganache'
         DOCKER_ETH_NAME = 'eth-backs'
         DOCKER_FRONTEND = 'gan-frontend'
         GITHUB_REPO_URL = 'https://github.com/Priyansuvaish/SPE-project.git'
    }

    stages {
          stage('Checkout') {
            steps {
                script {
                    git branch: 'main', url: "${GITHUB_REPO_URL}"
                    sh 'docker --version'
                }
            }
        }
        stage('Installing hardhat')
        {
            steps {
                script 
                {
                dir("/var/lib/jenkins/workspace/eth-project/eth-backs/") 
                 {
                    sh 'npm install --save-dev hardhat --arch=arm64 --force'
                    // sh 'npm install'  
                     sh 'node -v'
                     
                     
                 }
                }
            }
        }
        /*stage('Build frontend code')
        {
            
            steps {
                script {
                dir("/var/lib/jenkins/workspace/eth-project/product-identification/") {
                sh 'npm install'
                sh 'npm run build ' 
                }
            }
        }
            
            
        }*/
            
       /*stage('Build and Test Backend code') {
            steps {
                script {
                dir("/var/lib/jenkins/workspace/eth-project/eth-backs/") {
                sh 'npx hardhat compile' 
               // sh 'docker --version'
                }
            }
        }
        }*/

        
        stage('Build Docker Image for the ganache Blockchain') {
            steps {
                script {
                    // Build Docker image
                      sh 'docker --version'
                    sh 'docker build -t eth-backs -f /var/lib/jenkins/workspace/eth-project/dockerfile_ganache .'
                    //  docker.withRegistry('', 'dockers')
                    // {
                       
                    // //docker.build("${DOCKER_GAN_NAME}", '-f /Users/jasssadana/.jenkins/workspace/eth-project/dockerfile_ganache .')
                    // }
                }
            }
        }
     stage('Build Docker Image for the Backend') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKER_ETH_NAME}", '-f /var/lib/jenkins/workspace/eth-project/eth-backs/docker_backend .')
                }
            }
        }
        /*stage('Push Docker Images') {
            steps {
                script{
                    docker.withRegistry('', 'docker') {
                    sh 'docker tag scientific_calculator secy2520/scientific_calculator:latest'
                    sh 'docker push secy2520/scientific_calculator'
                    }
                 }
            }
        }*/
        /*stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: 'inventory'
                     )
                }
            }
        }*/
    
       
     }
    }
