'use strict';

angular.module('lilybook').controller('CompositionCtrl', function ($routeParams, compositionSvc, videoSvc) {

	var self = this;

	compositionSvc.getCompositionById($routeParams.id).then(function (composition) {
		console.log(composition);
		self.composition = composition;
		self.getEditUrl = function () {
			return '/admin/composition/' + composition.id;
		};
		videoSvc.getVideosByComposition(composition).then(function (videos) {
			console.log(videos);
			self.videos = videos;
		});
	});

});
