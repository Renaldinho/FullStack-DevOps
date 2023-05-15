pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }
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
