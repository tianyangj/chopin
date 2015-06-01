'use strict';

angular.module('lilybook').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('app', {
		abstract: true,
		url: '',
		templateUrl: 'views/layout.html'
	})
	.state('app.splash', {
		url: '/',
		templateUrl: 'views/splash.html',
		controller: 'SplashCtrl',
        controllerAs: 'splash'
	})
	.state('app.login', {
		url: '/login',
        templateUrl: 'views/pages/login.html'
	})
	.state('app.signup', {
		url: '/signup',
        templateUrl: 'views/pages/signup.html'
	})
	.state('app.home', {
		url: '/home',
        templateUrl: 'views/home.html',
		controller: 'HomeCtrl',
        controllerAs: 'home',
        resolve: {
          	auth: ['userSvc', function(userSvc) {
            	return userSvc.isAuthenticated();
          	}]
        }
	})
	.state('app.composers', {
		url: '/composers',
        templateUrl: 'views/composers.html',
        controller: 'ComposersCtrl',
        controllerAs: 'composers',
        resolve: {
          	auth: ['userSvc', function(userSvc) {
            	return userSvc.isAuthenticated();
          	}]
        }
 	})
   	.state('app.composer', {
		url: '/composer/:vanity',
        templateUrl: 'views/pages/composer.html',
        controller: 'ComposerCtrl',
        controllerAs: 'composer'
  	})
   	.state('app.composition', {
		url: '/composition/:title/:id',
        templateUrl: 'views/pages/composition.html',
        controller: 'CompositionCtrl',
        controllerAs: 'composition'
    });

	$urlRouterProvider.otherwise('/');

});