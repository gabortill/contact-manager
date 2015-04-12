'use strict';

module.exports = function (grunt) {

	// load npm tasks
	require('load-grunt-tasks')(grunt);

	// displays the execution time of grunt tasks
	if (process.env.NODE_ENV !== 'production') {
		require('time-grunt')(grunt);
	}

	// loads the various task configuration files
	var configs = require('load-grunt-configs')(grunt);

	grunt.initConfig(configs);

	// tasks
	grunt.registerTask('default', [
		'sass:default',
		'autoprefixer',
		'html2js:main',
		'jsbeautifier',
		'jscs',
		'uglify',
		'concurrent:default'
	]);
};
