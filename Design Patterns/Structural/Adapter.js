//Adapter pattern
const Circle = function() {
    this.shape = 'circle'
    console.log(this.shape+' is created with color red');
}

Circle.prototype.move = function(left, top) {
    console.log(this.shape+' is moved '+left+' '+top);
}

Circle.prototype.tint = function(clr) {
    console.log(this.shape+' is colored with '+clr);
}

Circle.prototype.get = function() {
    return this;
}

//Prototype design pattern - Create React and copy prototype object from Circle to Rect by cloning
const Rect = function() {
    this.shape = 'rectangle'
    console.log('rectangle is created');
}

function clone(src, des){
for(let prop in src.prototype){
    des.prototype[prop] = src.prototype[prop]
}
}

clone(Circle, Rect) // Protoype design pattern - Clone.

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
    //Instanitate rectangle object here for example
    const rect = new Rect();
    rect.tint('green');

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
        //Consider our classes are having 'get' method but our abstract factory expect a getInstance method.
        return new Adapter(this.types[type]).getInstance();
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

//Adapter implements expected interface by the abstract factory.
function Adapter(Cls) {
    this.instance = new Cls();
}
Adapter.prototype.getInstance = function () {
    return this.instance.get();
}


CreateCircleAbstractFactory.getInstance().register('red', RedCircleBuilder);
CreateCircleAbstractFactory.getInstance().register('blue', BlueCircleBuilder);

CreateCircleAbstractFactory.getInstance().create('red'); // type 'red'
CreateCircleAbstractFactory.getInstance().create('blue'); // type 'blue'
