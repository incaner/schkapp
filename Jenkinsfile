pipeline {
    agent any
    environment{
        DB_API_CLIENT_ID = 'c57b44f9568c1bf138fae3630f8026c8'
        DB_API_CLIENT_SECRET = credentials('db-api-secret')

        NETLIFY_SITE_ID = '38b67bdc-47af-46a3-94fe-6316ac28879c'
        NETLIFY_AUTH_TOKEN = credentials('netlify')
    }
    stages {
        stage('Preparation'){
            steps{
                sh '''
                    npm install --save-dev vite
                    npm install -D @sveltejs/adapter-netlify
                    npm install --save-dev jsdom
                    npm install --save-dev vitest
                    npm install --save-dev netlify-cli 
                '''
            }
        }
        stage('Test'){
            steps{
                sh '''
                    npm run test
                '''
            }
        }
        stage('Build'){
            steps{
                sh '''
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
    post {
        always{
            junit 'junit-report.xml'
        }
    }
}