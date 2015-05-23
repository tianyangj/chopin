/* global Parse */
/* global Firebase */

'use strict';

angular.module('lilybook').factory('userSvc', function ($q) {

  var current = function () {
    var defer = $q.defer();
    var user = Parse.User.current();
    if (user) {
      defer.resolve({
        uid: user.id,
        email: user.get('email'),
        firstname: user.get('firstname'),
        lastname: user.get('lastname')
      });
    } else {
      defer.resolve(null);
    }
    return defer.promise;
  };

  var signUp = function (email, password, firstname, lastname) {
    var defer = $q.defer();
    Parse.User.signUp(email, password, {
      email: email,
      firstname: firstname,
      lastname: lastname
    }).then(function (user) {
      defer.resolve({
        uid: user.id,
        email: user.get('email'),
        firstname: user.get('firstname'),
        lastname: user.get('lastname')
      });
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  var logIn = function (username, password) {
    var defer = $q.defer();
    Parse.User.logIn(username, password).then(function (user) {
      defer.resolve({
        uid: user.id,
        email: user.get('email'),
        firstname: user.get('firstname'),
        lastname: user.get('lastname')
      });
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  var logOut = function () {
    var defer = $q.defer();
    Parse.User.logOut().then(function () {
      defer.resolve();
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  return {
    current: current,
    signUp: signUp,
    logIn: logIn,
    logOut: logOut
  };

});