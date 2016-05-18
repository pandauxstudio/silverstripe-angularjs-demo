define('appModels', ['angular'], function(angular) {
	
	var appModels = angular.module('app.models', []);


	
	appModels.factory("RSSFeed", ["$http", function($http) {
		function RSSFeed(data) {
			this.title = data.title || "";
			this.items = data.items || [];
			this.url = data.URL || "";
			this.order = data.SortOrder || 0;
			this.visible = false;
		}

		RSSFeed.prototype.setTitle = function(title) {
			this.title = title;
		}
		RSSFeed.prototype.setItems = function(items) {
			this.items = items;
		}
		RSSFeed.prototype.setVisible = function(visible) {
			this.visible = visible;
		}

		return RSSFeed;
	}]);

	appModels.factory("RSSItem", function() {
		function RSSItem(data) {
 			this.date = data.Date || "";
			this.description = data.Description || "";
			this.link = data.Link || "";
			this.title = data.Title || "";
		}

		RSSItem.prototype.getDescription = function() {
			return this.description;
		}
		RSSItem.prototype.getTitle = function() {
			return this.title;
		}
		RSSItem.prototype.date = function() {
			return this.date;
		}

		return RSSItem;
	});
});