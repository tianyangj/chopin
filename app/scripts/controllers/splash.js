/// <reference path="../../../typings/angularjs/angular.d.ts"/>

'use strict';

angular.module('lilybook').controller('SplashCtrl', function (composerSvc) {

	var self = this;

	self.heros = [
		{
			image: 'images/hero1.jpg',
			headline: 'Example headline.',
			text: 'Note: If you\'re viewing this page via a file:// URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.',
			action: '<a class="btn btn-lg btn-primary" href="/signup">Sign up today</a>'
		},
		{
			image: 'images/hero2.jpg',
			headline: 'Another example headline.',
			text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id',
			action: '<a class="btn btn-lg btn-primary" href="#">Learn more</a>'
		},
		{
			image: 'images/hero3.jpg',
			headline: 'One more for good measure.',
			text: 'dolor id nibh ultricies vehicula ut id elit..',
			action: '<a class="btn btn-lg btn-primary" href="#">Browse gallery</a>'
		}
	];

	composerSvc.getFeaturedComposers().then(function (composers) {
		self.composers = composers;
	});

});
