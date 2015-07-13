module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'bundle.js' : 'assets/js/**'
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/*.js']
      }
    },
    mochaTest: {
      test: {
        src: ['test/tictactoe.test.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('test', ['mochaTest']);
}
