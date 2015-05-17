'use strict';

/**
 * @ngdoc function
 * @name lilybook.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lilybook
 */
angular.module('lilybook')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
