module.exports = {
    min: {
        files: {
            'dist/css/app.min.css': [
                'src/css/bootstrap.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
}