pipeline {
    agent any
    environment{
        DB_API_CLIENT_ID = 'c57b44f9568c1bf138fae3630f8026c8'
        DB_API_CLIENT_SECRET = credentials('db-api-secret')
    }
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