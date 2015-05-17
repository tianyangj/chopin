'use strict';

/**
 * @ngdoc function
 * @name lilybook.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lilybook
 */
angular.module('lilybook')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
