pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Renaldinho/FullStack-DevOps'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Run Application') {
            steps {
                sh 'ng serve'
            }
        }
    }
}
