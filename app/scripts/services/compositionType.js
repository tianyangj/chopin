/* global Parse */

'use strict';

angular.module('lilybook').factory('compositionTypeSvc', function ($q, mapperSvc) {

	var CompositionType = Parse.Object.extend('CompositionType');

	var getTypes = function () {
		var defer = $q.defer();
		var query = new Parse.Query(CompositionType);
		query.find().then(function (results) {
			defer.resolve(results.map(mapperSvc.compositionTypeMapper));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getTypes: getTypes
	};

});