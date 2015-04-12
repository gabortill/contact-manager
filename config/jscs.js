'use strict';

module.exports = {
	client: {
		files: {
			src: [
				'<%= path.js.main.dev %>'
			]
		},
		options: {
			config: '.jscsrc'
		}
	},
	grunt: {
		src: [
			'Gruntfile.js',
			'<%= path.js.config %>'
		],
		options: {
			config: '.jscsrc'
		}
	},
	server: {
		src: [
			'Gruntfile.js',
			'<%= path.js.config %>'
		]
	}
};
