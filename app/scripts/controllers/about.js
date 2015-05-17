'use strict';

/**
 * @ngdoc function
 * @name chopinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chopinApp
 */
angular.module('chopinApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
