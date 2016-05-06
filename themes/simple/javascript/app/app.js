define('app', ['jquery', 'angular'], function(jquery, angular) {

	/* DOM Elements */
	
	var app = angular.module('app', ['app.services', 'app.controllers', 'app.models', 'app.directives', 'app.filters', 'ngResource'] );

	app.factory('httpInterceptor', function ($q, $rootScope, $log) {

	    var numLoadings = 0;

	    return {
	        request: function (config) {

	            numLoadings++;

	            $rootScope.loading = true;
	            return config || $q.when(config);

	        },
	        response: function (response) {

	            if ((--numLoadings) === 0) {
	                $rootScope.loading = false;
	            }

	            return response || $q.when(response);

	        },
	        responseError: function (response) {

	            if (!(--numLoadings)) {
	                $rootScope.loading = true;
	            }

	            return $q.reject(response);
	        }
	    };
	});

	app.config(function ($httpProvider) {
	    $httpProvider.interceptors.push('httpInterceptor');
	});
});