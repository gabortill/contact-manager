(function () {
	'use strict';

	function businessCard() {
		return {
			link: function (scope, elem) {},
			replace: true,
			restrict: 'E',
			templateUrl: 'directive.businessCard.tpl.html'
		};
	}

	angular
		.module('cm')
		.directive('businessCard', businessCard);
}());
