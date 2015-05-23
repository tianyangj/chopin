'use strict';

angular.module('lilybook').controller('ComposerCtrl', function ($routeParams, composerSvc) {

	var self = this;

	composerSvc.getComposer($routeParams.vanity).then(function (composer) {
		console.log(composer);
		self.composer = composer;
	});

});
