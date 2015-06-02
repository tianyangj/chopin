'use strict';

angular.module('lilybook').controller('CompositionCtrl', function ($stateParams, youtubeEmbedUtils, compositionSvc, videoSvc) {

	var self = this;

	compositionSvc.getCompositionById($stateParams.id).then(function (composition) {
		console.log(composition);
		self.composition = composition;
		self.getEditUrl = function () {
			return '/admin/composition/' + composition.id;
		};
		videoSvc.getVideosByComposition(composition).then(function (videos) {
			videos.forEach(function (video) {
				video.vid = youtubeEmbedUtils.getIdFromURL(video.embed);
			});
			self.videos = videos;
		});
	});

});
