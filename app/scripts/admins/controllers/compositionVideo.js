'use strict';

angular.module('lilybook').controller('AdminCompositionVideoCtrl', function (composition, videoSvc) {

	var self = this;

	self.composition = composition;

	if (composition) {
		videoSvc.getVideosByComposition(composition).then(function (videos) {
			self.videos = videos;
		});
	}

	self.save = function (video) {
		video.composition = composition;
		if (video.id) {
			videoSvc.updateVideo(video);
		} else {
			videoSvc.createVideo(video).then(function (result) {
				video.id = result.id;
			});
		}
	};

	self.add = function () {
		self.videos.push({});
	};

	self.remove = function (video) {
		videoSvc.deleteVideo(video).then(function () {
			videoSvc.getVideosByComposition(composition).then(function (videos) {
				self.videos = videos;
			});
		});
	};

});