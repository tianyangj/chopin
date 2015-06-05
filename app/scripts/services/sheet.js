/* global Parse */

'use strict';

angular.module('lilybook').factory('sheetSvc', function ($q, mapperSvc) {

	var Sheet = Parse.Object.extend('Sheet');

	var getSheetByComposition = function (composition) {
		var defer = $q.defer();
		var query = new Parse.Query(Sheet);
		query.equalTo('composition', composition.base);
		query.first().then(function (_sheet) {
			if (_sheet) {
				defer.resolve(mapperSvc.sheetMapper(_sheet));
			} else {
				defer.reject('NOT_FOUND');
			}
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	/*var createVideo = function (video) {
		var defer = $q.defer();
		var _video = new Video();
		_video.save({
			title: video.title,
			embed: video.embed,
			composition: video.composition.base
		}).then(function (result) {
			defer.resolve(mapperSvc.videoMapper(result));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var updateVideo = function (video) {
		var defer = $q.defer();
		var query = new Parse.Query(Video);
		query.equalTo('objectId', video.id);
		query.first().then(function (_video) {
			_video.save({
				title: video.title,
				embed: video.embed,
				composition: video.composition.base
			}).then(function (result) {
				defer.resolve(mapperSvc.videoMapper(result));
			});
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var deleteVideo = function (video) {
		var defer = $q.defer();
		var query = new Parse.Query(Video);
		query.equalTo('objectId', video.id);
		query.first().then(function (_video) {
			_video.destroy().then(function (result) {
				defer.resolve(result.id);
			});
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};*/

	return {
		getSheetByComposition: getSheetByComposition
	};

});