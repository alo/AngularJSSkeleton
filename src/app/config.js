// config
var app =
angular.module('app')

	.constant("config",
    {
        //Your constants 
        "var"		    : "val",
        "homeState" : "app.inicio",
        "url" : window.location.origin
	})

    //INTERCEPTOR POR $HHTP ERRORS
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.timeout = 5000;

        var checkResponse = function ($q) {
            return {
                'responseError': function (rejection) {
                    if(rejection.status === 401) {
                        console.error("Not autorized");
                        location.replace('#/access/signout');
                    }else if(rejection.status === 502) {
                        console.error("Bad Gateway");
                        location.replace('#/access/signout');
                    }
                    return $q.reject(rejection);
                }
            };
        };
        $httpProvider.interceptors.push(checkResponse);

}]);


