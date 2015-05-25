'use strict';

angular.module('lilybook.admin', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
]).config(function ($routeProvider) {
    $routeProvider.when('/admin/composition/:id?', {
        templateUrl: 'views/admins/composition.html',
        controller: 'AdminCompositionCtrl',
        controllerAs: 'composition',
        resolve: {
            auth: ['userSvc', function (userSvc) {
                return userSvc.isAuthenticated();
            }]
        }
    });
});
