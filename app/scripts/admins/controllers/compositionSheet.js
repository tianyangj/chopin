'use strict';

angular.module('lilybook').controller('AdminCompositionSheetCtrl', function (composition, sheetSvc) {

	var self = this;

	self.composition = composition;

	if (composition) {
		sheetSvc.getSheetByComposition(composition).then(function (sheet) {
			self.sheet = sheet;
		});
	}

	self.save = function (sheet) {
		sheetSvc.updateSheet(sheet);
	};

});