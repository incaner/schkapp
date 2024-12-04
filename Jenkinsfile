pipeline {
    agent any
    environment{
        DB_API_CLIENT_ID = 'c57b44f9568c1bf138fae3630f8026c8'
        DB_API_CLIENT_SECRET = credentials('db-api-secret')

        NETLIFY_SITE_ID = '38b67bdc-47af-46a3-94fe-6316ac28879c'
        NETLIFY_AUTH_TOKEN = credentials('netlify')
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
                    npm i -D @sveltejs/adapter-netlify
                    npm install netlify-cli --save-dev
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
        stage('Deploy'){
            steps{
                sh '''
                    echo "Deploying to Netlify"
                    netlify deploy --prod
                '''
            }
        }
    }
}