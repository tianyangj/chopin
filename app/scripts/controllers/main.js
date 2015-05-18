'use strict';

angular.module('lilybook').controller('MainCtrl', function ($scope, $location, authSvc, userSvc) {

  var that = this;

  authSvc.$onAuth(function (account) {
    console.log('$onAuth changed', account);
    that.account = account;
    if (account) {
      userSvc.getUser(account.uid).then(function (user) {
        that.user = user;
        $location.path('/home');
      });
    } else {
      that.user = null;
      $location.path('/');
    }
  });

  $scope.$on('$routeChangeError', function (event, next, previous, error) {
    console.log('$routeChangeError', arguments);
    if (error === 'AUTH_REQUIRED') {
      $location.path('/login');
    }
  });

});
