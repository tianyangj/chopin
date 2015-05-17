/* global Firebase */

'use strict';

angular.module('lilybook').factory('userSvc', function ($q) {

  var ref = new Firebase('https://chopin.firebaseio.com/users');

  var createUser = function (user) {
    var defer = $q.defer();
    ref.set(user, function (error) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(user);
      }
    });
    return defer.promise;
  };

  return {
    createUser: createUser
  };

});