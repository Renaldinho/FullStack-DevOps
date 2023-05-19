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


        stage('Build production Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com','access-token') {
                        def customImage = docker.build("renaldinho/project", "-f docker/production/Dockerfile .")
                        customImage.push()
                    }
                }
            }
        }
        stage('Deploy to Heroku') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'herokuCredentials', passwordVariable: 'HEROKU_API_KEY', usernameVariable: 'HEROKU_USERNAME')]) {
                        sh "docker pull renaldinho/project:latest"
                        sh "heroku container:login"
                        sh "docker tag renaldinho/project:latest registry.heroku.com/devops-exam-project/web"
                        sh "docker push registry.heroku.com/devops-exam-project/web"
                        sh "heroku container:release web --app devops-exam-project"
                    }
                }
            }
        }
    }
}
