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
                script{
                    def viteInstall = sh(
                        script: 'npm list vite --depth=0 || true',
                        returnStatus: true) == 0
                    if (!viteInstall){
                        echo 'Vite is not installed, installing vite...'
                        sh 'npm install vite'
                    }else{
                        echo 'Vite is already installed'
                    }
                }
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