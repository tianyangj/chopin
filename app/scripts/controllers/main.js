/* global Parse */

'use strict';

angular.module('lilybook').controller('MainCtrl', function ($rootScope, $location, userSvc) {

  var self = this;

  Parse.initialize('fHO4LtJRfsdhQBBicYZpdpj3BQHHQCVEiDPkS4ZI', '3gzRyAZnxtQLn1IofC4Layn6cc487e4n5Jin6FzM');

  userSvc.current().then(function (user) {
    $rootScope.user = user;
  });

  self.signup = function (email, password, firstname, lastname) {
    userSvc.signUp(email, password, firstname, lastname).then(function (user) {
      self.error = null;
      $rootScope.user = user;
      $location.path('/home');
    }, function (error) {
        self.error = error;
      });
  };

  self.login = function (email, password) {
    userSvc.logIn(email, password).then(function (user) {
      self.error = null;
      $rootScope.user = user;
      $location.path('/home');
    }, function (error) {
        self.error = error;
      });
  };

  self.logout = function () {
    userSvc.logOut().then(function () {
      $rootScope.user = null;
      $location.path('/');
    });
  };

  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
    console.log('$routeChangeError', arguments);
    if (error === 'AUTH_REQUIRED') {
      $location.path('/login');
    }
  });

});
