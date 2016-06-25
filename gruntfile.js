module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),

  grunt.initConfig({
    options: {
      sourcemap: true
    },
    sass: {
      dist: {
        files: {
          'css/app.css' : '**/*.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('dev',['sass']);
};
