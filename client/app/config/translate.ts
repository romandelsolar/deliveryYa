module supedidos.config {
	'use strict';

	angular
		.module('supedidos.config')
		.config(appConfig)
        .run(appRun);

    appConfig.$inject = ['$translateProvider', 'envConfig'];

    function appConfig($translateProvider, envConfig) {

    	// Set language locale prefix
    	$translateProvider.useStaticFilesLoader({
    		prefix: '/lang/',
    		suffix: '.json'
    	});

    	$translateProvider.preferredLanguage(envConfig.lang);

        $translateProvider.useSanitizeValueStrategy('escape');
    }

    appRun.$inject = ['$rootScope'];

    function appRun($rootScope) {
        $rootScope.$on('$translateChangeSuccess', function () {
    		$rootScope.i18nLoaded = true;
    	});
    }

}
