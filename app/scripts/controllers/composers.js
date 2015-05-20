'use strict';

angular.module('lilybook').controller('ComposersCtrl', function ($modal, composerSvc) {

	var that = this;

	that.open = function () {
		$modal.open({
			templateUrl: 'views/modals/add-composer.html',
			size: 'lg',
			controller: 'AddComposerCtrl',
			controllerAs: 'addComposer',
			backdrop: 'static'
		});
	};

	composerSvc.getComposers().then(function (composers) {
		that.list = composers;
	});

});
