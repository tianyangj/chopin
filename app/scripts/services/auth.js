/* global Firebase */

'use strict';

angular.module('lilybook').factory('authSvc', function ($firebaseAuth) {

  var ref = new Firebase('https://chopin.firebaseio.com');

  return $firebaseAuth(ref);

});