'use strict';

(function () {
  PDFJS.workerSrc = 'bower_components/pdfjs-dist/build/pdf.worker.js';
})();

angular.module('lilybook', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngSanitize',
  'ngTouch',
  'pdf',
  'ui.bootstrap',
  'ui.router',
  'ui.utils',
  'xeditable',
  'youtube-embed'
]);