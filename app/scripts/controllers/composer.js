'use strict';

angular.module('lilybook').controller('ComposerCtrl', function ($stateParams, composerSvc, compositionSvc) {

	var self = this;

	self.gridOptions = {
		showGridFooter: true,
		columnDefs: [
			{ field: 'title', width: '40%' },
			{ field: 'opus', width: '15%', displayName: 'Opus (Op.)' },
			{ field: 'number', width: '15%', displayName: 'Number (No.)' },
			{ field: 'instrumentation', width: '15%' },
			{ field: 'type', width: '15%' }
		],
		data: []
	};

	composerSvc.getComposer($stateParams.vanity).then(function (composer) {
		console.log(composer);
		self.composer = composer;
		compositionSvc.getCompositionsByComposer(composer).then(function (compositions) {
			console.log(compositions);
			self.compositions = compositions;
			self.gridOptions.data = compositions.map(function (composition) {
				return {
					title: composition.title,
					opus: composition.opus,
					number: composition.number,
					instrumentation: composition.instrumentation,
					type: composition.type
				};
			});
		});
	});

});
