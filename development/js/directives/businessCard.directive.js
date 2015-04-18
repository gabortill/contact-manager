(function () {
	'use strict';

	function businessCard() {
		return {
			link: function (scope, elem) {
				elem.on('click', function () {
					elem[0].childNodes[0].classList.toggle('card__flipper--inverse');
				});
			},
			replace: true,
			restrict: 'E',
			templateUrl: 'directive.businessCard.tpl.html'
		};
	}

	angular
		.module('cm')
		.directive('businessCard', businessCard);
}());
