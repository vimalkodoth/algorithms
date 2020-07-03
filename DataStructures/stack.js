function Stack() {
    this.store = "";
}

Stack.prototype.push = function(value) {
    this.store = this.store.concat('-', value);
}

Stack.prototype.pop = function() {
    const value = this.store.slice(this.store.lastIndexOf('-')+1);
    this.store = this.store.substring(0,this.store.lastIndexOf('-'));
    return value;
}

Stack.prototype.size = function() {
    return this.store.match(/-/g).length
}

var stack = new Stack();

stack.push('x');
stack.push('y');
stack.pop();
stack.push('z');
stack.size();