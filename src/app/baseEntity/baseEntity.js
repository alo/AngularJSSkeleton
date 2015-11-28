(function() {

    'use strict';

    angular.module('baseEntity', [
        'ui.router'
    ])

    .config(
    ['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.baseEntity', {
                    url: '/baseEntity',
                    templateUrl: 'app/baseEntity/view/baseEntity.html',
                    controller: 'baseEntityController',
                    controllerAs: 'vm'
                }) 
            }
        ]
    );

})();