module.exports = function(grunt) {

    var gtx = require('gruntfile-gtx').wrap(grunt);
    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);
    //Download packages from Bower(bower.json)
    gtx.alias('dev:init', ['bower-install-simple', 'copy:dev']);


    //TODO:: ADD PRODUCTION TASK

    // tast to test angular new version
    gtx.alias('dev:update', ['clean:angular', 'copy:angular']);
    gtx.finalise();

}