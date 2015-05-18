/* global Firebase */

'use strict';

angular.module('lilybook').factory('userSvc', function ($q) {

  var ref = new Firebase('https://chopin.firebaseio.com/users');

  var createUser = function (user) {
    var defer = $q.defer();
    ref.child(user.uid).set(user, function (error) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(user);
      }
    });
    return defer.promise;
  };

  var getUser = function (uid) {
    var defer = $q.defer();
    ref.child(uid).on('value', function (snapshot) {
      defer.resolve(snapshot.val());
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  return {
    createUser: createUser,
    getUser: getUser
  };

});