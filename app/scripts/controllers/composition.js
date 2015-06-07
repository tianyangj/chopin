'use strict';

angular.module('lilybook').controller('CompositionCtrl', function ($stateParams, youtubeEmbedUtils, pdfDelegate, compositionSvc, videoSvc, sheetSvc) {

	var self = this;

	compositionSvc.getCompositionById($stateParams.id).then(function (composition) {
		self.composition = composition;
		self.getEditUrl = function () {
			return '/admin/composition/' + composition.id;
		};
		videoSvc.getVideosByComposition(composition).then(function (videos) {
			videos.forEach(function (video) {
				video.vid = youtubeEmbedUtils.getIdFromURL(video.embed);
				video.thumbnail = 'https://img.youtube.com/vi/' + video.vid + '/hqdefault.jpg';
			});
			self.videos = videos;
		});
		sheetSvc.getSheetByComposition(composition).then(function (sheet) {
			self.sheet = sheet;
			self.totalPages = sheet.lastPage - sheet.firstPage + 1;
			self.basePage = sheet.firstPage - 1;
		});
	});

	self.pageChanged = function () {
		pdfDelegate.$getByHandle('sheetMusic').goToPage(self.basePage + self.currentPage);
	};

});
