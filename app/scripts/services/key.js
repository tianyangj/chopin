/* global Parse */

'use strict';

angular.module('lilybook').factory('keySvc', function ($q, mapperSvc) {

	var Key = Parse.Object.extend('Key');

	var getKeys = function () {
		var defer = $q.defer();
		var query = new Parse.Query(Key);
		query.find().then(function (results) {
			defer.resolve(results.map(mapperSvc.keyMapper));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getKeys: getKeys
	};

});