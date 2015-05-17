'use strict';

/**
 * @ngdoc function
 * @name chopinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chopinApp
 */
angular.module('chopinApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
