(function () {
	'use strict';

	angular
		.module('cm')
		.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
			$locationProvider
				.html5Mode(true)
				.hashPrefix('!');

			$routeProvider
				.when('/', {
					templateUrl: 'list.tpl.html'
				})
				.when('/404', {
					templateUrl: '404.tpl.html'
				})
				.otherwise({
					redirectTo: '/404'
				});
		}]);
}());
