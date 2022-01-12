module.exports = {
    apps: [{
        name: "serve",
        script: "serve",
        env: {
            PM2_SERVE_PATH: '.',
            PM2_SERVE_PORT: 8080,
            PM2_SERVE_BASIC_AUTH: 'true',
    				PM2_SERVE_BASIC_AUTH_USERNAME: 'username',
    				PM2_SERVE_BASIC_AUTH_PASSWORD: 'password'
        }
    }]
}
