requirejs.config({
	baseUrl: '/themes/simple/javascript/app',
	paths: {

		// Angular App
		app: 'app',
		appServices: 'services',
		appControllers: 'controllers',
		appModels: 'models',
		appDirectives: 'directives',
		appFilters: 'filters',

		// Bower components
        angular: '/themes/simple/bower_components/angular/angular',
        angularResource: '/themes/simple/bower_components/angular-resource/angular-resource.min',
		jquery: '/themes/simple/bower_components/jquery/dist/jquery.min'
	}, 
	shim: {		
		app: {
			deps: ['angular', 'appServices', 'appControllers', 'appModels', 'appDirectives', 'appFilters']
		},
		angular: {
			exports: 'angular'
		},	
		angularResource: {
			deps: ['angular']
		}
	}
});

require(['app'], function() {
	angular.bootstrap(document, ['app']);
});