(function () {
	'use strict';

	function ModifyController($location, $routeParams, $scope, ContactService) {
		var self = this;
		var contactIndex = $routeParams.index;

		self.isModify = true;

		self.contact = ContactService.getContactsByIndex(contactIndex);

		$scope.$watch('avatar', function () {
			if ($scope.avatar) {
				self.contact.avatar = $scope.avatar;
			}
		});

		self.save = function () {
			ContactService.updateContact(contactIndex, self.contact);

			$location.path('/');
		};

		self.remove = function () {
			ContactService.removeContactByIndex(contactIndex);

			$location.path('/');
		};
	}

	ModifyController.$inject = ['$location', '$routeParams', '$scope', 'ContactService'];

	angular
		.module('cm')
		.controller('ModifyController', ModifyController);
}());
