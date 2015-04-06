module.exports = {
	options: {
		base: '<%= path.html2js.base %>',
		htmlmin: {
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true
		}
	},
	main: {
		src: [
			'<%= path.view.srcs %>'
		],
		dest: '<%= path.view.dest %>'
	}
};
