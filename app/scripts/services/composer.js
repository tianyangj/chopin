/* global Parse */

'use strict';

angular.module('lilybook').factory('composerSvc', function ($q) {

  var ref;
  var Composer = Parse.Object.extend('Composer');

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

  var getFeaturedComposers = function () {
    var defer = $q.defer();
    var query = new Parse.Query(Composer);
    query.exists('image');
    query.ascending('vanity');
    query.limit(3);
    query.find().then(function (results) {
      defer.resolve(results.map(function (r) {
        return {
          id: r.id,
          fullname: r.get('fullName'),
          shortname: r.get('shortName'),
          bio: r.get('description'),
          vanity: r.get('vanity'),
          image: r.get('image').url()
        };
      }));
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  return {
    createComposer: createComposer,
    getComposer: getComposer,
    getComposers: getComposers,
    getFeaturedComposers: getFeaturedComposers
  };

});