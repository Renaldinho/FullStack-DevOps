pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('Docker-Token')
    }

    tools {
        nodejs 'node-20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install --force'
                sh 'npm install -g @angular/cli --force'
            }
        }
        stage('Run Application') {
            steps {
                sh 'ng build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'Docker-Token') {
                        def customImage = docker.build("renaldinho/project")

                        customImage.push()
                    }
                }
            }
        }
    }
}
