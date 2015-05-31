'use strict';

angular.module('lilybook').config(function ($stateProvider) {
    $stateProvider
    .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>'
    })
    .state('admin.composition', {
        url: '/composition/:id',
        params: {
            id: { value: null, squash: true }
        },
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