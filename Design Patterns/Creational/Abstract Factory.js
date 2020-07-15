const RedCircle = function() {}

RedCircle.prototype.create = function() {
  console.log('red circle created');
}

const BlueCircle = function() {}

BlueCircle.prototype.create = function() {
  console.log('blue circle created');
}

//Factory
const CreateCircleAbstractFactory  = (function(){
    let instance;

    function CreateCircleAbstractFactory() {
       this.types = {}
       this.create = function(type){
         return new this.types[type]().create();
       };
       this.register = function(type, cls){
         if(cls.prototype.create){ // Duck Typing
           this.types[type] = cls;
         }
       };
    }

    return {
      getInstance : function() {
          if(instance) return instance;
          instance = new CreateCircleAbstractFactory();
          return instance;
      }
    }
})();


CreateCircleAbstractFactory.getInstance().register('red', RedCircle);
CreateCircleAbstractFactory.getInstance().register('blue', BlueCircle);

CreateCircleAbstractFactory.getInstance().create('red'); // type 'red'
CreateCircleAbstractFactory.getInstance().create('blue'); // type 'blue'
