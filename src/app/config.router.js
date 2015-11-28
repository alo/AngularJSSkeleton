(function() {

    'use strict';

    /**
     * Sección de configuracion de ruteo de la aplicación
     */
    angular.module('app')
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on("$stateChangeError", console.log.bind(console));
                $rootScope.$on("$stateChangeError", function(){
                    console.error('unexpected state error !! ')
                });
            }])

        .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/baseEntity');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'app/core/commons/app.html'
                    })
            }
        ]
    );

}());