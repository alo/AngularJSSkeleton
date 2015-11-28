(function(){
    'use_strict';

    app

        .controller('awesomeEntityController', awesomeEntityController);

        awesomeEntityController.$inject = ['Zen'];
        function awesomeEntityController(Zen){

     		var vm =  this;
     		vm.zenPhrase = Zen.data;
      
        }


})();
