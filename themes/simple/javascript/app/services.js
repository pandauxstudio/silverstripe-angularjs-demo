/**
 * Set of app services. \
 * Find out more about AngularJS filters here: https://docs.angularjs.org/guide/services.
 *
 * @module envmon.services
 */

define('appServices', ['angular'], function(angular) {

	var appServices = angular.module('app.services', []);


	appServices.factory('AJAXService', function($http) {
		return {
			getLocalData: function() {
				return $http.get('home/getTestData').then(function(result) {
					return result.data;
				});
			},
			getCrossDomainData: function() {
				return $http.get('http://hilltop.gw.govt.nz/Data.hts?Service=Hilltop&Request=CollectionList').then(function(result) {
					return result.data;
				});
			}
		}
	});


	appServices.factory('RSSService', function($http) {
		return {
			getRSSList: function(limit) {
				return $http.get(CONSTANTS.Link+'RSSList', {
					'params': {
						'limit': limit
					}
				}).then(function(result) {
					return result.data;
				});
			},
			getRSSFeed: function(url, limit) {
				return $http.get(CONSTANTS.Link + 'RSSFeed', { 
					'params': {
						'limit': limit,
						'rss_url': url
					}
				}).then(function(result) {
					return result.data;
				});
			}
		}
	});

});