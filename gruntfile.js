module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/css/main.min.css': 'sass/main.scss'
                }
            }
        },

        uglify: {
            options: {
                banner: '',
                compress: true,
                sourceMap: true
            },
            main: {
                files: {
                    'public/js/main.min.js': [
                        'js/jquery-3.0.0.min.js',
                        'js/main.js'
                    ]
                }

            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            },
            uglify_main: {
                files: ['js/**/*.js'],
                tasks: ['uglify:main']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    // Tasks to be executed
    grunt.registerTask('default', ['watch']);
};
