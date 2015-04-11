'use strict';

module.exports = {
	main: {
		options: {
			sourceMap: true,
			sourceMapIncludeSources: true,
			sourceMapName: '<%= path.js.main.min %>.map'
		},
		files: {
			'<%= path.js.main.min %>': [
				'development/js/module.js',
				'development/js/routes.js',
				'development/js/controllers/**/*.js',
				'development/js/directives/**/*.js',
				'development/js/services/**/*.js'
			]
		}
	}
};
