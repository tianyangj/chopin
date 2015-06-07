'use strict';

angular.module('lilybook').config(function ($locationProvider) {

	$locationProvider.html5Mode(false).hashPrefix('!');

});