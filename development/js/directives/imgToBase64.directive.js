(function () {
	'use strict';

	function imgToBase64() {
		return {
			restrict: 'A',
			link: function (scope, elem) {
				var reader = new FileReader();

				elem.on('change', function () {
					reader.readAsDataURL(elem[0].files[0]);
				});

				reader.addEventListener('load', function () {
					scope.avatar = reader.result;
					scope.$apply();
				});
			}
		};
	}

	angular
		.module('cm')
		.directive('imgToBase64', imgToBase64);
}());
