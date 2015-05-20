'use strict';

angular.module('lilybook').controller('AddComposerCtrl', function ($location, $modalInstance, composerSvc) {

	var that = this;

	that.root = $location.protocol() + '://' + $location.host() + '/';

	that.submit = function () {
		composerSvc.getComposer(that.vanity).then(function (composer) {
			if (!composer) {
				composerSvc.createComposer({
					vanity: that.vanity,
					fullname: that.fullname,
					image: that.image,
					description: that.description
				}).then(function () {
					$modalInstance.close();
				});
			} else {
				alert('vanity exist!');
			}
		});
	};

});
