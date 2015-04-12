'use strict';

module.exports = {
	client: {
		src: [
			'<%= path.js.main.dev %>'
		]
	},
	grunt: {
		src: [
			'Gruntfile.js',
			'<%= path.js.config %>'
		]
	},
	server: {
		src: [
			'<%= path.node.entry %>'
		]
	},
	options: {
		js: {
			braceStyle: 'collapse',
			breakChainedMethods: false,
			e4x: false,
			evalCode: false,
			indentChar: ' ',
			indentLevel: 0,
			indentSize: 4,
			indentWithTabs: true,
			jslintHappy: true,
			keepArrayIndentation: false,
			keepFunctionIndentation: false,
			maxPreserveNewlines: 2,
			preserveNewlines: true,
			spaceAfterAnonFunction: true,
			spaceBeforeConditional: true,
			spaceInParen: false,
			unescapeStrings: false,
			wrapLineLength: 0
		}
	}
};
