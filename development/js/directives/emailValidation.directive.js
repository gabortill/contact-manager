(function () {
	'use strict';

	function emailValidation() {

		// email validation pattern
		var emailRegex = /\S+@\S+\.\S+/;

		return {
			require: 'ngModel',
			restrict: 'A',
			link: function (scope, elm, attrs, ctrl) {

				// only apply the validator if ngModel is present and Angular has added the email validator
				if (ctrl && ctrl.$validators.email) {

					// this will overwrite the default Angular email validator
					ctrl.$validators.email = function (modelValue) {
						return ctrl.$isEmpty(modelValue) || emailRegex.test(modelValue);
					};
				}
			}
		};
	}

	angular
		.module('cm')
		.directive('emailValidation', emailValidation);
}());
