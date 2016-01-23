(function(){
  'use_strict';

  angular.module('awesomeEntity')

    .factory('awesomeEntityFactory', awesomeEntityFactory);
    

    awesomeEntityFactory.$inject = ['$http'];
    function awesomeEntityFactory($http){

      return {
        getZen:function(){
          return $http.get('https://api.github.com/zen');
        }
      }

    }



})();
