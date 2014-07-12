module.exports = function(grunt){
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    pathSpecE2e: ['Gruntfile.js', './scss/**/*.scss', './www/js/**/*.js', './www/**/*.html', 'protractor.conf.js', './tests/spec-e2e/*.js'],

    pathSpec: ['Gruntfile.js', './www/js/**/*.js', './tests/spec/*.js'],

    pathDev: ['Gruntfile.js', './scss/**/*.scss', './www/js/**/*.js', './tests/spec/*.js', './www/**/*.html'],

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['./www/js/app/**/*.js'],
        dest: './www/js/dist/build.js'
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: './www/css',
        src: ['*.css', '!*.min.css'],
        dest: './www/css/dist/',
        ext: '.min.css'
      }
    },

    jshint: {
      files: ['Gruntfile.js', './www/js/**/*.js', './tests/spec*/*.js'],
      options: {
        // options here to override JSHint defaults
        '-W032': false,
        laxcomma: true,
        asi: true,
        globals: {
          console: true
          //module: true,
          //document: true
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          // 'destination': 'source'
          './www/css/ionic.app.css': './scss/ionic.app.scss',
          './www/css/app.css': './scss/app.scss'
        }
      }
    },

    testem: {
      options: {
        launch_in_ci: [
          'chrome'
        ],
        debug: true
      },

      main: {
        src: ['./www/js/dist/*.js', './www/specs/*.js']
      }
    },

    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat'],
        options: {
          spawn: false,
        },
      },

      e2e: {
        files: ['<%= pathSpecE2e %>'],
        tasks: ['sass', 'jshint', 'concat', 'e2e'],
        options: {
          spawn: false,
        },
      },

      spec: {
        files: ['<%= pathSpec %>'],
        tasks: ['sass', 'jshint', 'concat'],
        options: {
        	spawn: false
        },
      },

      dev: {
      	files: ['<%= pathDev %>'],
      	tasks: ['sass', 'jshint', 'concat'],
      	options: {
      		spawn: false
					, livereload: true
      	},
      },

      css: {
        files: ['./scss/**/*.scss'],
        tasks: ['sass']
      },
    },

    connect: {
      dev: {
        options: {
          port: 9000
          , middleware: function (connect) {
            return [
              connect.static(__dirname)
            ]
          }
        }
      }
    },

    protractor: {
      options: {
        keepAlive: true
        , noColor: false
        , configFile: 'protractor.conf.js'
      }
      , dev: {
        options: {
          args: {
            chromeOnly: true
          }
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-csslint')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-protractor-runner')
  grunt.loadNpmTasks('grunt-testem')

  grunt.registerTask('default', ['sass'])
  grunt.registerTask('dist', ['jshint','sass','concat'])
  grunt.registerTask('e2e', ['protractor'])
}