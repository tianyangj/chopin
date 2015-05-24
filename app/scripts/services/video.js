/* global Parse */

'use strict';

angular.module('lilybook').factory('videoSvc', function ($q, mapperSvc) {

	var Video = Parse.Object.extend('Video');

	var getVideosByComposition = function (composition) {
		var defer = $q.defer();
		var query = new Parse.Query(Video);
		query.equalTo('composition', composition.base);
		query.find().then(function (results) {
			defer.resolve(results.map(mapperSvc.videoMapper));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getVideosByComposition: getVideosByComposition
	};

});