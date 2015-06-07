/* global Parse */

'use strict';

angular.module('lilybook').directive('lbUploadSheet', function (mapperSvc) {
	return {
		restrict: 'E',
		template: '<input type="file" />',
		scope: {
			composition: '=',
			sheet: '='
		},
		link: function (scope, el) {
			el.find('input').on('change', function () {
				if (this.files.length) {
					var file = this.files[0];
					var parseFile = new Parse.File('sheet.pdf', file);
					parseFile.save().then(function () {
						var sheet = new Parse.Object('Sheet');
						sheet.set('pdf', parseFile);
						sheet.set('composition', scope.composition.base);
						sheet.save().then(function (result) {
							scope.sheet = mapperSvc.sheetMapper(result);
							scope.$apply();
						});
					});
				}
			});
		}
	};
});