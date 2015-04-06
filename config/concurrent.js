'use strict';

module.exports = {
	default: {
		tasks: [
			'nodemon:default',
			'watch'
		],
		options: {
			logConcurrentOutput: true
		}
	}
};
