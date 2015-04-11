(function () {
	'use strict';

	function config($locationProvider, $routeProvider) {
		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');

		$routeProvider
			.when('/', {
				controller: 'ListController',
				controllerAs: 'list',
				templateUrl: 'list.tpl.html'
			})
			.when('/404', {
				templateUrl: '404.tpl.html'
			})
			.when('/add', {
				controller: 'AddController',
				controllerAs: 'edit',
				templateUrl: 'edit.tpl.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}

	config.$inject = ['$locationProvider', '$routeProvider'];

	angular
		.module('cm')
		.config(config);
}());
