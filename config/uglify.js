'use strict';

module.exports = {
	main: {
		options: {
			sourceMap: true,
			sourceMapIncludeSources: true,
			sourceMapName: '<%= path.js.main.min %>.map'
		},
		files: {
			'<%= path.js.main.min %>': '<%= path.js.main.dev %>'
		}
	}
};
