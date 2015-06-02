'use strict';

angular.module('lilybook').controller('AdminCompositionSheetCtrl', function (composition) {

	var self = this;

	self.composition = composition;

	console.log('AdminCompositionSheetCtrl', self);

	self.submit = function () {
		console.log('sheet submit...');
	};

});