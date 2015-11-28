(function() {

    'use strict';

    angular.module('awesomeEntity', [
        'ui.router'
    ])

    .config(
    ['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('app.awesomeEntity', {
                    url: '/awesomeEntity',
                    templateUrl: 'app/awesomeEntity/view/awesomeEntity.html',
                    controller: 'awesomeEntityController',
                    controllerAs: 'vm',
                    resolve: {
                        Zen: zen
                    }
                    
                }) 
            }
        ]
    );


    zen.$inject = ['awesomeEntityFactory']
    function zen(awesomeEntityFactory){
        return awesomeEntityFactory.getZen();
    }


})();