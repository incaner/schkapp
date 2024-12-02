pipeline {
    agent any

    environment{
        
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Build'){
            steps{
                sh '''
                    ls -la
                    vite --version
                    npm --version
                    vite build
                '''
            }

        }
    }
}