/* global Firebase */

'use strict';

angular.module('lilybook').factory('composerSvc', function ($q) {

  var ref = new Firebase('https://chopin.firebaseio.com/composers');

  var createComposer = function (composer) {
    var defer = $q.defer();
    ref.child(composer.vanity).set(composer, function (error) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(composer);
      }
    });
    return defer.promise;
  };

  var getComposer = function (vanity) {
    var defer = $q.defer();
    ref.child(vanity).on('value', function (snapshot) {
      defer.resolve(snapshot.val());
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  var getComposers = function (skip, limit) {
    skip = skip || 0;
    limit = limit || 10;
    var defer = $q.defer();
    ref.on('value', function (snapshot) {
      defer.resolve(snapshot.val());
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  return {
    createComposer: createComposer,
    getComposer: getComposer,
    getComposers: getComposers
  };

});