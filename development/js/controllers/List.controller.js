(function () {
	'use strict';

	function ListController(ContactService) {
		var self = this;

		// get the contacts
		self.contacts = ContactService.getContacts();

		// sorting options
		self.options = [{
			label: 'sort by name',
			value: 'name'
		}, {
			label: 'sort by position',
			value: 'position'
		}];

		// default value for sorting
		self.orderBy = self.options[0];
	}

	ListController.$inject = ['ContactService'];

	angular
		.module('cm')
		.controller('ListController', ListController);
}());
