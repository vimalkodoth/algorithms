//Singleton Design Pattern
const Service  = (function(){
    let instance;

    function SingletonService() {
       this.service = function() {
         console.log('hello world');
       }
    }

    return {
      getInstance : function() {
          if(instance) return instance;
          instance = new SingletonService();
          return instance;
      }
    }
})();


Service.getInstance() === Service.getInstance();