/// <reference path="../../../typings/angularjs/angular.d.ts"/>

'use strict';

angular.module('lilybook').controller('HeaderCtrl', function (authSvc) {

	this.logout = function() {
		authSvc.$unauth();
	};

});
