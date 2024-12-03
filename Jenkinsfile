pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Preparation'){
            steps{
                sh '''
                    npm install vite
                '''
            }
        }
        stage('Build'){
            steps{
                sh '''
                    ls -la
                    npm run build
                    ls -la
                '''
            }

        }
    }
}