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
    'ui.bootstrap',
    'lilybook.admin'
  ])
  .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**'
    ]);
    
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
        controllerAs: 'home',
        resolve: {
          auth: ['userSvc', function(userSvc) {
            return userSvc.isAuthenticated();
          }]
        }
      })
      .when('/composers', {
        templateUrl: 'views/composers.html',
        controller: 'ComposersCtrl',
        controllerAs: 'composers',
        resolve: {
          auth: ['userSvc', function(userSvc) {
            return userSvc.isAuthenticated();
          }]
        }
      })
      .when('/composer/:vanity', {
        templateUrl: 'views/composer.html',
        controller: 'ComposerCtrl',
        controllerAs: 'composer'
      })
      .when('/composition/:title/:id', {
        templateUrl: 'views/composition.html',
        controller: 'CompositionCtrl',
        controllerAs: 'composition'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
