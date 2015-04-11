(function () {
	'use strict';

	function ModifyController($location, $routeParams, ContactService) {
		var self = this;
		var contactIndex = $routeParams.index;

		self.contact = ContactService.getContactsByIndex(contactIndex);

		self.save = function () {
			ContactService.updateContact(contactIndex, self.contact);

			$location.path('/');
		};
	}

	ModifyController.$inject = ['$location', '$routeParams', 'ContactService'];

	angular
		.module('cm')
		.controller('ModifyController', ModifyController);
}());
