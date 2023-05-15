pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install --force'
            }
        }
        stage('Run Application') {
            steps {
                sh 'ng serve'
            }
        }
        stage('Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

    }
}
