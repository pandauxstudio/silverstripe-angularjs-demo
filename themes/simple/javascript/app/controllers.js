define('appControllers', ['jquery', 'lib', 'angular', 'angularResource'], function(jquery, lib, angular) {

	var appControllers = angular.module('app.controllers', []);

	appControllers.controller('MainController', ['$scope', '$rootScope', 'AJAXService', 'RSSFeed', 'RSSItem', function($scope, $rootScope, AJAXService, RSSFeed, RSSItem) {
		
		$scope.localData = null;
		$scope.localDataReady = false;

		$scope.crossDomainData = null;
		$scope.crossDomainDataReady = false;

		AJAXService.getLocalData().then(function(result) {
			$scope.localData = result.data;
			$scope.localDataReady = true;
		});

		AJAXService.getCrossDomainData().then(function(result) {
			$scope.crossDomainData = result;
			$scope.crossDomainDataReady = true;
		});

	}]);

});