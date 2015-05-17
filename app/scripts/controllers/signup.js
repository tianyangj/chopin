'use strict';

angular.module('lilybook').controller('SignupCtrl', function ($scope, $firebaseAuth) {
  
  var authSvc = $firebaseAuth(new Firebase('https://chopin.firebaseio.com/users'));
  
  $scope.form = {};
  $scope.signup = function () {
    console.log($scope.form)
    authSvc.$createUser({
      email: $scope.form.email,
      password: $scope.form.password
    }).then(function(user){
      console.log(user);
    })
  };
});
