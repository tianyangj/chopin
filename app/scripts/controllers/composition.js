'use strict';

angular.module('lilybook').controller('CompositionCtrl', function ($routeParams, compositionSvc) {

	var self = this;

	compositionSvc.getCompositionById($routeParams.id).then(function (composition) {
		console.log(composition);
		self.composition = composition;
	});

});
