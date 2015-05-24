/* global Parse */

'use strict';

angular.module('lilybook').factory('compositionSvc', function ($q) {

  var Composition = Parse.Object.extend('Composition');

  var compositionMapper = function (composition) {
    return {
      base: composition,
      id: composition.id,
      title: composition.get('title'),
      opus: composition.get('opus'),
      number: composition.get('number'),
      key: composition.get('key').get('name'),
      instrumentation: composition.get('key').get('name'),
      type: composition.get('type').get('name'),
      wikipedia: composition.get('wikipedia'),
      imslp: composition.get('imslp'),
      rcm: composition.get('rcm') ? composition.get('rcm').get('name') : undefined,
      abrsm: composition.get('abrsm') ? composition.get('abrsm').get('name') : undefined,
      henle: composition.get('henle') ? composition.get('henle').get('name') : undefined
    };
  };

  var getCompositionsByComposer = function (composer) {
    var defer = $q.defer();
    var query = new Parse.Query(Composition);
    query.equalTo('composer', composer.base);
    query.include('key');
    query.include('instrumentation');
    query.include('type');
    query.include('rcm');
    query.include('abrsm');
    query.include('henle');
    query.find().then(function (results) {
      defer.resolve(results.map(compositionMapper));
    }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  };

  return {
    getCompositionsByComposer: getCompositionsByComposer
  };

});