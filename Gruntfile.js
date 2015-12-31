module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

	    pkg: grunt.file.readJSON('package.json'),

		watch : {
			files : [],
		    tasks : []
		},
		concat: {

	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: ['public/**/*.js'],
	        dest: 'public/dist/<%= pkg.name %>.js'
	      }
       },
		uglify : {
			dist : {
					'dist/app.min.js': 'public/*.js',
				   }
		},
		jsdoc : {

			dist : {
				src     : [
						   'public/app/*.js', 
						   'public/app/**/*.js',
						   'server/*.js',
						   'server/**/*.js'
						  ],
				options : {
					destination : 'Doc',
				}
			}
		}
	});

	grunt.registerTask('build', ['concat']);
}