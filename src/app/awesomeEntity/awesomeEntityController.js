(function(){
    'use_strict';

    angular.module('awesomeEntity')

        .controller('awesomeEntityController', awesomeEntityController);

        awesomeEntityController.$inject = ['Zen'];
        function awesomeEntityController(Zen){

     		var vm =  this;
     		vm.zenPhrase = Zen.data;
      
        }


})();
