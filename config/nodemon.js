module.exports = {
	default: {
		script: '<%= path.node.entry %>'
	},
	options: {
		ignore: [
			'production/**',
			'node_modules/**'
		]
	}
};
