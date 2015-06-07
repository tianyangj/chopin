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

	var updateSheet = function (sheet) {
		var defer = $q.defer();
		var query = new Parse.Query(Sheet);
		query.equalTo('objectId', sheet.id);
		query.first().then(function (_sheet) {
			_sheet.save({
				firstPage: sheet.firstPage,
				lastPage: sheet.lastPage
			}).then(function (result) {
				defer.resolve(mapperSvc.sheetMapper(result));
			});
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getSheetByComposition: getSheetByComposition,
		updateSheet: updateSheet
	};

});