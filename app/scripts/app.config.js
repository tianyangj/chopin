'use strict';

angular.module('lilybook').config(function ($locationProvider, $sceDelegateProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');

    $sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'*://www.youtube.com/**'
    ]);

});