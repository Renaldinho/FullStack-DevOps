pipeline {
    agent any

    stages {
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
