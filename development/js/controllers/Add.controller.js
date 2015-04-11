(function () {
	'use strict';

	function AddController() {
		console.log('add controller');
	}

	angular
		.module('cm')
		.controller('AddController', AddController);
}());
