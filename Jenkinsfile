pipeline {
    agent any

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
                    npm --version
                    vite build
                '''
            }

        }
    }
}