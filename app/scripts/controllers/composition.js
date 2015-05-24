'use strict';

angular.module('lilybook').controller('CompositionCtrl', function ($routeParams, compositionSvc, videoSvc) {

	var self = this;

	compositionSvc.getCompositionById($routeParams.id).then(function (composition) {
		console.log(composition);
		self.composition = composition;
		videoSvc.getVideosByComposition(composition).then(function (videos) {
			console.log(videos);
			self.videos = videos;
		});
	});

});
