module.exports = function (grunt) {
	grunt.initConfig({
		
		watch : {
			files : ["README.md"],
		    tasks : ["holla"]
		},
		concat : {

		},
		uglify : {

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
					destination : 'doc',
				}
			}

		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-jsdoc");

	grunt.registerTask('holla', function() {
		console.log('Setting up grunt');
	});
}