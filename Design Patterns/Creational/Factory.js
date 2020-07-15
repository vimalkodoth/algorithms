const RedCircle = function() {
    console.log('red circle created');
  }

  const BlueCircle = function() {
    console.log('blue circle created');
  }

  //Factory
  const CreateCircleFactory  = (function(){
      let instance;

      function CreateCircleFactory() {
         this.create = function(color) {
           if(color === 'blue'){
             return new BlueCircle();
           } else {
             return new RedCircle();
           }
         }
      }

      return {
        getInstance : function() {
            if(instance) return instance;
            instance = new CreateCircleFactory();
            return instance;
        }
      }
  })();


  CreateCircleFactory.getInstance().create('red');
  CreateCircleFactory.getInstance().create('blue');