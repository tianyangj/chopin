'use strict';

angular.module('lilybook').config(function ($stateProvider) {
    $stateProvider
    .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>'
    })
    .state('admin.composition', {
        abstract: true,
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
            }],
            composition: ['$stateParams', 'compositionSvc', function ($stateParams, compositionSvc) {
                if ($stateParams.id) {
                    return compositionSvc.getCompositionById($stateParams.id);
                }
            }]
        }
    })
    .state('admin.composition.detail', {
        url: '',
        templateUrl: 'views/admins/composition-detail.html',
        controller: 'AdminCompositionDetailCtrl',
        controllerAs: 'detail',
        resolve: {
            composition: ['composition', function (composition) {
                return composition;
            }]
        }
    })
    .state('admin.composition.video', {
        views: {
            'video': {
                templateUrl: 'views/admins/composition-video.html',
                controller: 'AdminCompositionVideoCtrl',
                controllerAs: 'video',
                resolve: {
                    composition: ['composition', function (composition) {
                        return composition;
                    }]
                }
            }
        }
    })
    .state('admin.composition.sheet', {
        views: {
            'sheet': {
                templateUrl: 'views/admins/composition-sheet.html',
                controller: 'AdminCompositionSheetCtrl',
                controllerAs: 'sheet',
                resolve: {
                    composition: ['composition', function (composition) {
                        return composition;
                    }]
                }
            }
        }
    });
});