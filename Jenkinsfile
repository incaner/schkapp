pipeline {
    agent { label 'vm2' }
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
                    npm install
                    npm install vite
                    npm install @sveltejs/adapter-netlify
                    npm install jsdom
                    npm install vitest
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