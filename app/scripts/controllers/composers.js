'use strict';

angular.module('lilybook').controller('ComposersCtrl', function ($modal, composerSvc) {

	var self = this;

	self.open = function () {
		$modal.open({
			templateUrl: 'views/modals/add-composer.html',
			size: 'lg',
			controller: 'AddComposerCtrl',
			controllerAs: 'addComposer',
			backdrop: 'static'
		});
	};

	composerSvc.getComposers(0, 20).then(function (composers) {
		self.list = composers;
	});

});
