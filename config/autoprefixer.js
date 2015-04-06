'use strict';

module.exports = {
	options: {
		browsers: [
			'last 3 version',
			'ie >= 9'
		]
	},
	no_dest: {
		src: '<%= path.css.main %>'
	}
};
