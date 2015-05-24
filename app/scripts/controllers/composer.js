'use strict';

angular.module('lilybook').controller('ComposerCtrl', function ($routeParams, composerSvc, compositionSvc) {

	var self = this;

	composerSvc.getComposer($routeParams.vanity).then(function (composer) {
		console.log(composer);
		self.composer = composer;
		compositionSvc.getCompositionsByComposer(composer).then(function (compositions) {
			console.log(compositions);
			self.compositions = compositions;
		});
	});

});