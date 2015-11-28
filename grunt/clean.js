module.exports = {
    dist: ['dist/*'],
    dists:[
        'dist/css/**',
        'dist/js/*.js',
        'dist/vendor/angular/',
        'dist/js/directives',
        'dist/js/services',
        'dist/js/filters',
        'dist/index.min.html'
    ],
    angular:[
        "src/vendor/angular/*.js",
        "src/vendor/angular/angular-animate/*.js",
        "src/vendor/angular/angular-cookies/*.js",
        "src/vendor/angular/angular-resource/*.js",
        "src/vendor/angular/angular-sanitize/*.js",
        "src/vendor/angular/angular-touch/*.js"
    ]
};