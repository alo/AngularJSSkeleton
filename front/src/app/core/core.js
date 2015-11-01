(function() {
    'use strict';

    angular.module('core',
        [
            'ui.router'
        ])
        .config(
        ['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                .state('app.core', {
                    url: '/core',
                    template: '<div ui-view class="fade-in-up"></div>'
                })
            }
        ]
    );

})();