'use strict';

/**
 * @ngdoc overview
 * @name lilybook
 * @description
 * # lilybook
 *
 * Main module of the application.
 */
angular
  .module('lilybook', [
    'ngAnimate',
    'ngRoute',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
