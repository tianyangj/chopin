'use strict';

angular.module('lilybook').controller('AdminCompositionCtrl', function (composition) {

	this.composition = composition;

	this.hasId = function () {
		return composition === undefined || composition === null;
	};
});