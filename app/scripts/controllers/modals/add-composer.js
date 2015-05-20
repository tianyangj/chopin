'use strict';

angular.module('lilybook').controller('AddComposerCtrl', function ($location) {
	
	this.root = $location.protocol() + '://' + $location.host() + '/';
	
	this.submit = function() {
		console.log(this);	
	};
	
});
