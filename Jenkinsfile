pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('access-token')
    }

    tools {
        nodejs 'node-20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install --force'
                sh 'npm install -g @angular/cli --force'
                sh 'npm install mocha-junit-reporter --save-dev --legacy-peer-deps'
            }
        }
        stage('Run Application') {
            steps {
                sh 'npm start &'
            }
        }

        stage('Tests') {
            steps {
                wrap([$class: 'Xvfb']) {
                    sh 'npm run cypress:run -- --reporter mocha-junit-reporter --reporter-options mochaFile=result.xml'
                }
                junit 'result.xml'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com','access-token') {
                        def customImage = docker.build("renaldinho/project")
                        customImage.push()
                    }
                }
            }
        }
    }
}
