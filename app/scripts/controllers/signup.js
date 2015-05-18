'use strict';

angular.module('lilybook').controller('SignupCtrl', function (authSvc, userSvc) {

  var that = this;

  that.submit = function () {
    authSvc.$createUser({
      email: that.email,
      password: that.password
    }).then(function (user) {
      userSvc.createUser({
        uid: user.uid,
        email: that.email,
        firstname: that.firstname,
        lastname: that.lastname
      }).then(function () {
        authSvc.$authWithPassword({
          email: that.email,
          password: that.password
        });
      });
    }).catch(function (error) {
      that.error = error;
    });
  };

});
