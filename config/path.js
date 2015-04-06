module.exports = {
	css: {
		main: 'production/css/main.min.css'
	},
	html2js: {
		base: 'development/view/'
	},
	index: 'production/index.html',
	js: {
		config: 'config/**/*.js',
		main: {
			dev: 'development/js/**/*.js',
			min: 'production/js/main.min.js'
		},
		templates: {
			min: 'production/js/templates.min.js'
		}
	},
	node: {
		entry: 'server.js'
	},
	sass: {
		all: 'development/sass/**/*.scss',
		entry: 'development/sass/main.scss'
	},
	view: {
		dest: 'production/js/templates.js',
		srcs: 'development/view/**/*.tpl.html'
	}
};
