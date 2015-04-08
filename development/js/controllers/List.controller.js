(function () {
	'use strict';

	function ListController(ContactService) {
		var self = this;

		self.contacts = ContactService.getContacts();
	}

	ListController.$inject = ['ContactService'];

	angular
		.module('cm')
		.controller('ListController', ListController);
}());
