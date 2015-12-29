module.exports = function (grunt) {
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

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-jsdoc");

	grunt.registerTask('build', ['concat']);
}