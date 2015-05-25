/* global Parse */

'use strict';

angular.module('lilybook').factory('compositionSvc', function ($q, mapperSvc) {

  var Composition = Parse.Object.extend('Composition');

  var getCompositionsByComposer = function (composer) {
    var defer = $q.defer();
    var query = new Parse.Query(Composition);
    query.equalTo('composer', composer.base);
    query.include('key');
    query.include('instrumentation');
    query.include('type');
    query.find().then(function (results) {
      defer.resolve(results.map(mapperSvc.compositionMapper));
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  var getCompositionById = function (id) {
    var defer = $q.defer();
    var query = new Parse.Query(Composition);
    query.equalTo('objectId', id);
    query.include('key');
    query.include('instrumentation');
    query.include('type');
    query.include('rcm');
    query.include('abrsm');
    query.include('henle');
    query.include('composer');
    query.first().then(function (result) {
      defer.resolve(mapperSvc.compositionMapper(result));
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };
  
  var setComposition = function (composition) {
    console.log('set', composition);
  };

  return {
    getCompositionsByComposer: getCompositionsByComposer,
    getCompositionById: getCompositionById,
    setComposition: setComposition
  };

});