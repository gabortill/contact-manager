'use strict';

module.exports = {
	default: {
		options: {
			sourcemap: 'auto',
			style: 'compressed'
		},
		files: {
			'<%= path.css.main %>': '<%= path.sass.entry %>'
		}
	}
};
