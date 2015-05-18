'use strict';

angular.module('lilybook').controller('MainCtrl', function (authSvc, userSvc) {

  var that = this;

  authSvc.$onAuth(function (account) {
    console.log('$onAuth changed', account);
    that.account = account;
    if (account) {
      userSvc.getUser(account.uid).then(function (user) {
        that.user = user;
      });
    } else {
      that.user = null;
    }
  });

});
