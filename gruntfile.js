module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'build/js/main.js'
        ],
        dest: 'build/js/scripts.js'
      }
    },

    uglify: {
      build: {
        src: 'build/js/scripts.js',
        dest: 'assets/js/scripts.min.js'
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'build/css',
          cssDir: 'assets/css'
        }
      }
    },

    watch: {
      css: {
        files: ['build/css/*.scss'],
        tasks: ['compass']
      }
    }
  });

  grunt.registerTask('default', []);
};
