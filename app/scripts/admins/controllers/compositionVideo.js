'use strict';

angular.module('lilybook').controller('AdminCompositionVideoCtrl', function (composition) {

	var self = this;

	self.composition = composition;

	console.log('AdminCompositionVideoCtrl', self);

	self.submit = function () {
		console.log('video submit...');
	};

});