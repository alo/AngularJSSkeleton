(function(){
  'use_strict';

    app

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
