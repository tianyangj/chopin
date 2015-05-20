'use strict';

angular.module('lilybook').controller('ComposersCtrl', function ($modal) {

	this.open = function() {
		$modal.open({
			templateUrl: 'views/modals/add-composer.html',
			size: 'lg',
			controller: 'AddComposerCtrl',
			controllerAs: 'addComposer',
			backdrop: 'static'
		});
	};
	
});
