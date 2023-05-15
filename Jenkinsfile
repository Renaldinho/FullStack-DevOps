pipeline {
    agent any

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
        stage('Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

    }
}
