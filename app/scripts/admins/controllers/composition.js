'use strict';

angular.module('lilybook.admin').controller('AdminCompositionCtrl', function ($routeParams, compositionSvc, videoSvc, composerSvc, definitionSvc) {

	var self = this;

	compositionSvc.getCompositionById($routeParams.id).then(function (composition) {

		console.log(composition);
		self.composition = composition;

		videoSvc.getVideosByComposition(composition).then(function (videos) {
			self.videos = videos;
		});

		definitionSvc.getCompositionTypes().then(function (types) {
			self.types = types;
			types.some(function (type) {
				if (type.name === composition.type) {
					self.typeSelected = type;
					return true;
				}
			});
		});

		definitionSvc.getKeys().then(function (keys) {
			self.keys = keys;
			keys.some(function (key) {
				if (key.name === composition.key) {
					self.keySelected = key;
					return true;
				}
			});
		});

		definitionSvc.getInstruments().then(function (instruments) {
			self.instruments = instruments;
			instruments.some(function (instrument) {
				if (instrument.name === composition.instrumentation) {
					self.instrumentSelected = instrument;
					return true;
				}
			});
		});

		composerSvc.getAllComposers().then(function (composers) {
			self.composers = composers;
			composers.some(function (composer) {
				if (composer.fullname === composition.composer.fullname) {
					self.composerSelected = composer;
					return true;
				}
			});
		});
	}, function (error) {
			if (error === 'NOT_FOUND') {
				definitionSvc.getCompositionTypes().then(function (types) {
					self.types = types;
				});
				definitionSvc.getKeys().then(function (keys) {
					self.keys = keys;
				});
				definitionSvc.getInstruments().then(function (instruments) {
					self.instruments = instruments;
				});
				composerSvc.getAllComposers().then(function (composers) {
					self.composers = composers;
				});
			}
		});

	self.submit = function () {
		console.log(self);
		var composition = {
			id: self.composition.id,
			title: self.composition.title,
			composer: self.composerSelected,
			opus: self.composition.opus,
			number: self.composition.number,
			type: self.typeSelected,
			key: self.keySelected,
			instrumentation: self.instrumentSelected,
			wikipedia: self.composition.wikipedia,
			imslp: self.composition.imslp
		};
		if (composition.id) {
			compositionSvc.updateComposition(composition).then(function () {
				console.log('update suc', arguments);
			});
		} else {
			compositionSvc.createComposition(composition).then(function () {
				console.log('create suc', arguments);
			});
		}
	};

});
