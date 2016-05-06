/**
 * Set of app controllers. \
 * Find out more about AngularJS filters here: https://docs.angularjs.org/guide/controller.
 *
 * @module envmon.services
 */

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


		/*$scope.rssfeeds = [];
		$scope.rssListLoaded = false;
		$scope.rssFeedLimit = 3;
		$scope.rssItemLimit = 1;

		// Fetch a list of RSS feeds.
		RSSService.getRSSList($scope.rssFeedLimit).then(function(rssFeeds) {

			$scope.rssListLoaded = true;
			$scope.rssfeeds = $.map(rssFeeds, function(rssFeed) { return new RSSFeed(rssFeed); });

			// Loop over each RSS feed.
			$.each($scope.rssfeeds, function(idx, rssFeed) {

				// Get the RSS feed data and inject it into each RSSFeed object.
				RSSService.getRSSFeed(rssFeed.url, $scope.rssItemLimit).then(function(feedData) {

					if(feedData) {
						rssFeed.setTitle(feedData.Title);
						rssFeed.setItems($.map(feedData.Items, function(item) { return new RSSItem(item); }));
						rssFeed.setVisible(true);
					}
				});
		
			});

		}); */

	}]);

});