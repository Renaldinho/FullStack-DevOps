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
                sh 'npm install --save-dev cypress mochawesome mochawesome-merge mochawesome-report-generator'
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
        stage('Generate Report') {
             steps {
                 sh 'npx mochawesome-merge cypress/reports/mocha/*.json > mochawesome.json'
                 sh 'npx marge mochawesome.json'
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
