'use strict';

angular.module('lilybook').controller('SignupCtrl', function (authSvc, userSvc) {

  this.submit = function () {
    authSvc.$createUser({
      email: this.email,
      password: this.password
    }).then(angular.bind(this, function (user) {
      userSvc.createUser({
        uid: user.uid,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname
      }).then(function () {
        console.log('suc', arguments);
      });
    })).catch(angular.bind(this, function (error) {
      this.error = error;
    }));
  };

});
