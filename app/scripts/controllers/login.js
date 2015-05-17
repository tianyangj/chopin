'use strict';

angular.module('lilybook').controller('LoginCtrl', function (authSvc) {
  
  this.submit = function() {
    authSvc.$authWithPassword({
      email: this.email,
      password: this.password
    }).then(function(user) {
      console.log(user);
    }).catch(angular.bind(this, function (error) {
      this.error = error;
    }));
  };
  
});
