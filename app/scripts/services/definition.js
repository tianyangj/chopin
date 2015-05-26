/* global Parse */

'use strict';

angular.module('lilybook').factory('definitionSvc', function ($q) {

	var RCM = Parse.Object.extend('RCM');
	var ABRSM = Parse.Object.extend('ABRSM');
	var Henle = Parse.Object.extend('Henle');
	var Key = Parse.Object.extend('Key');
	var CompositionType = Parse.Object.extend('CompositionType');
	var Instrumentation = Parse.Object.extend('Instrumentation');

	var getRCM = function () {
		var defer = $q.defer();
		var query = new Parse.Query(RCM);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var getABRSM = function () {
		var defer = $q.defer();
		var query = new Parse.Query(ABRSM);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var getHenle = function () {
		var defer = $q.defer();
		var query = new Parse.Query(Henle);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var getKeys = function () {
		var defer = $q.defer();
		var query = new Parse.Query(Key);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var getCompositionTypes = function () {
		var defer = $q.defer();
		var query = new Parse.Query(CompositionType);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	var getInstruments = function () {
		var defer = $q.defer();
		var query = new Parse.Query(Instrumentation);
		query.find().then(function (results) {
			defer.resolve(results.map(function (result) {
				return {
					base: result,
					id: result.id,
					name: result.get('name')
				};
			}));
		}, function (error) {
				defer.reject(error);
			});
		return defer.promise;
	};

	return {
		getRCM: getRCM,
		getABRSM: getABRSM,
		getHenle: getHenle,
		getKeys: getKeys,
		getCompositionTypes: getCompositionTypes,
		getInstruments: getInstruments
	};

});