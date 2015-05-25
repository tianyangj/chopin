/* global Parse */

'use strict';

angular.module('lilybook').factory('instrumentationSvc', function ($q, mapperSvc) {

	var Instrumentation = Parse.Object.extend('Instrumentation');

	var getInstruments = function () {
		var defer = $q.defer();
		var query = new Parse.Query(Instrumentation);
		query.find().then(function (results) {
			defer.resolve(results.map(mapperSvc.instrumentationMapper));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getInstruments: getInstruments
	};

});