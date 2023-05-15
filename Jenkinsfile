pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('Docker-Token')
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
                sh 'docker build -t renaldinho/project:tag .'
            }
        }
        stage('Push Docker Image') {
            steps {
                    sh "docker login -u renaldinho -p $DOCKERHUB_CREDENTIALS"
                    sh "docker push renaldinho/project:tag"
                }
            }
        }
    }
}
