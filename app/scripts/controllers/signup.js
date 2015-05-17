'use strict';

angular.module('lilybook').controller('SignupCtrl', function (authSvc, userSvc) {

  this.submit = function () {
    authSvc.$createUser({
      email: this.email,
      password: this.password
    }).then(angular.bind(this, function (data) {
      var user = {};
      user[data.uid] = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname
      };
      userSvc.createUser(user).then(function () {
        console.log('suc', arguments)
      });
    })).catch(angular.bind(this, function (error) {
      this.error = error;
    }));
  };

});
