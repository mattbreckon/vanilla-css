module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },

        concat: {
            dist: {
                src: ['build/js/main.js'],
                dest: 'build/js/scripts.js'
            }
        },

        uglify: {
            build: {
                src: 'build/js/scripts.js',
                dest: 'assets/js/scripts.min.js'
            }
        },

        sass: {
            build: {
                files: {
                    'assets/css/style.css': 'build/css/style.scss'
                }
            }
        },

        cssmin: {
            build: {
                src: 'build/css/style.css',
                dest: 'assets/css/style.min.css'
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },

            css: {
                files: ['build/css/*.scss'],
                tasks: ['sass']
            }//,
            /*
            js: {
                files: ['build/js/*.js'],
                tasks: ['concat']
            }
            //*/
        }
    });

    grunt.registerTask('default', []);

};