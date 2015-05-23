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
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl',
        controllerAs: 'splash'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'/*,
        resolve: {
          auth: ['authSvc', function(authSvc) {
            return authSvc.$requireAuth();
          }]
        }*/
      })
      .when('/composers', {
        templateUrl: 'views/composers.html',
        controller: 'ComposersCtrl',
        controllerAs: 'composers',
        resolve: {
          auth: ['authSvc', function(authSvc) {
            return authSvc.$requireAuth();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
