//Builder design pattern
const Circle = function() {
    console.log('circle is created with color red');
  }

  Circle.prototype.move = function(left, top) {
    console.log('circle is moved '+left+' '+top);
  }

  Circle.prototype.tint = function(clr) {
    console.log('circle is colored with'+clr);
  }

  Circle.prototype.get = function() {
    return this;
  }

  const RedCircleBuilder = function() {
     //builder steps below
      this.item = new Circle(); // creates circle - default is assumed to be red.
      this.init();
  }

  RedCircleBuilder.prototype.init = function() {
    //NOTHING
  }

  RedCircleBuilder.prototype.get = function() {
    return this.item;
  }

  const BlueCircleBuilder = function() {
     //builder steps below
     this.item = new Circle(); //creates circle
     this.init(); // in this case, init does color circle blue
  }

  BlueCircleBuilder.prototype.init = function() {
    console.log('circle is colored blue');
  }

  BlueCircleBuilder.prototype.get = function() {
    return this.item;
  }

  // Abstract Factory
  const CreateCircleAbstractFactory  = (function(){
      let instance;

      function CreateCircleAbstractFactory() {
         this.types = {}
         this.create = function(type){
           return new this.types[type]().get();
         };
         this.register = function(type, cls){
           if(cls.prototype.get && cls.prototype.init){ // Duck Typing
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


  CreateCircleAbstractFactory.getInstance().register('red', RedCircleBuilder);
  CreateCircleAbstractFactory.getInstance().register('blue', BlueCircleBuilder);

  CreateCircleAbstractFactory.getInstance().create('red'); // type 'red'
  CreateCircleAbstractFactory.getInstance().create('blue'); // type 'blue'
