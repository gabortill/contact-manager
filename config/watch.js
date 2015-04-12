module.exports = {
	options: {
		livereload: true
	},
	grunt: {
		files: [
			'Gruntfile.js',
			'<%= path.js.config %>'
		],
		tasks: [
			'jsbeautifier:grunt',
			'jscs:grunt'
		]
	},
	index: {
		files: [
			'<%= path.index %>'
		],
		tasks: []
	},
	jsClient: {
		files: [
			'<%= path.js.main.dev %>'
		],
		tasks: [
			'jsbeautifier:client',
			'jscs:client',
			'uglify'
		]
	},
	jsServer: {
		files: [
			'<%= path.node.entry %>'
		],
		tasks: [
			'jsbeautifier:server',
			'jscs:server'
		]
	},
	sass: {
		files: [
			'<%= path.sass.all %>'
		],
		tasks: [
			'sass:default',
			'autoprefixer'
		]
	},
	view: {
		files: [
			'<%= path.view.srcs %>'
		],
		tasks: [
			'html2js:main'
		]
	}
};
