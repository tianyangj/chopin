'use strict';

angular.module('lilybook').controller('AdminCompositionDetailCtrl', function (composition, compositionSvc, composerSvc, definitionSvc) {

	var self = this;

	self.composition = composition;

	composerSvc.getAllComposers().then(function (composers) {
		self.composers = composers;
		if (composition) {
			composers.some(function (composer) {
				if (composer.fullname === composition.composer.fullname) {
					self.composerSelected = composer;
					return true;
				}
			});
		}
	});

	definitionSvc.getCompositionTypes().then(function (types) {
		self.types = types;
		if (composition) {
			types.some(function (type) {
				if (type.name === composition.type) {
					self.typeSelected = type;
					return true;
				}
			});
		}
	});

	definitionSvc.getKeys().then(function (keys) {
		self.keys = keys;
		if (composition) {
			keys.some(function (key) {
				if (key.name === composition.key) {
					self.keySelected = key;
					return true;
				}
			});
		}
	});

	definitionSvc.getInstruments().then(function (instruments) {
		self.instruments = instruments;
		if (composition) {
			instruments.some(function (instrument) {
				if (instrument.name === composition.instrumentation) {
					self.instrumentSelected = instrument;
					return true;
				}
			});
		}
	});

	definitionSvc.getRCM().then(function (rcm) {
		self.rcm = rcm;
		if (composition) {
			rcm.some(function (r) {
				if (r.name === composition.rcm) {
					self.rcmSelected = r;
					return true;
				}
			});
		}
	});

	definitionSvc.getABRSM().then(function (abrsm) {
		self.abrsm = abrsm;
		if (composition) {
			abrsm.some(function (a) {
				if (a.name === composition.abrsm) {
					self.abrsmSelected = a;
					return true;
				}
			});
		}
	});

	definitionSvc.getHenle().then(function (henle) {
		self.henle = henle;
		if (composition) {
			henle.some(function (h) {
				if (h.name === composition.henle) {
					self.henleSelected = h;
					return true;
				}
			});
		}
	});

	self.submit = function () {
		var composition = {
			id: self.composition.id,
			title: self.composition.title,
			composer: self.composerSelected,
			opus: self.composition.opus,
			number: self.composition.number,
			type: self.typeSelected,
			key: self.keySelected,
			instrumentation: self.instrumentSelected,
			rcm: self.rcmSelected,
			abrsm: self.abrsmSelected,
			henle: self.henleSelected,
			wikipedia: self.composition.wikipedia,
			imslp: self.composition.imslp
		};
		if (composition.id) {
			compositionSvc.updateComposition(composition).then(function (composition) {
				self.composition = composition;
			});
		} else {
			compositionSvc.createComposition(composition).then(function (composition) {
				self.composition = composition;
			});
		}
	};

});