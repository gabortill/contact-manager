'use strict';

module.exports = {
	client: {
		src: [
			'<%= path.js.main.dev %>'
		],
		options: {
			jshintrc: '.jshintrc'
		}
	},
	grunt: {
		src: [
			'Gruntfile.js',
			'<%= path.js.config %>'
		],
		options: {
			node: true
		}
	},
	server: {
		src: [
			'<%= path.node.entry %>'
		],
		options: {
			node: true
		}
	}
};
