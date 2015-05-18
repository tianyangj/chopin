'use strict';

angular.module('lilybook').controller('SplashCtrl', function () {

	this.heros = [
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
	
	this.composers = [
		{
			image: 'images/composers/chopin.jpg',
			heading: 'Frédéric Chopin',
			text: 'Frédéric François Chopin (1810 – 1849) was a Polish pianist and composer of the Romantic era. He is widely regarded as one of the most famous, influential and prolific composers for piano.   Chopin was born in the village of Zelazowa Wola, Poland, to a Polish mother and French-expatriate father. Hailed in his homeland as a child prodigy, at age twenty Chopin left for Paris. There he made a career as performer, teacher and composer, and adopted the French version of his given names, "Frédéric-François."'
		},
		{
			image: 'images/composers/beethoven.jpg',
			heading: 'Ludwig van Beethoven',
			text: 'Ludwig van Beethoven (1770 – 1827) was a German composer and pianist. He is widely regarded as one of history\'s greatest composers, and was the predominant figure in the transitional period between the Classical and Romantic eras in Western classical music. His reputation and genius have inspired and, in many cases intimidated, ensuing generations of composers, musicians, and audiences.'
		},
		{
			image: 'images/composers/rachmaninoff.jpg',
			heading: 'Sergei Rachmaninoff',
			text: 'Sergei Vasilievich Rachmaninoff (April, 1873 – March 1943) was a Russian composer, pianist, and conductor, one of the last great champions of the Romantic style of European classical music. "Sergei Rachmaninoff" was the spelling the composer himself used while living in the West throughout the latter half of his life. However, transliterations of his name include Sergey or Serge, and Rachmaninov, Rachmaninow, Rakhmaninov or Rakhmaninoff. '
		}
	];

});
