(function () {
	'use strict';

	function AddController($location, $scope, ContactService) {
		console.log('add controller');

		var self = this;

		$scope.$watch('avatar', function () {
			self.contact = self.contact || {};
			self.contact.avatar = $scope.avatar;
		});

		self.save = function () {
			ContactService.addContact(self.contact);

			$location.path('/');
		};
	}

	AddController.$inject = ['$location', '$scope', 'ContactService'];

	angular
		.module('cm')
		.controller('AddController', AddController);
}());
