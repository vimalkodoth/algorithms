function Queue() {
    this.store = "";
}

Queue.prototype.enqueue = function(value) {
    this.store = this.store.concat(value, '-');
}

Queue.prototype.dequeue = function() {
    const value = this.store.slice(0,this.store.indexOf('-'));
    this.store = this.store.slice(this.store.indexOf('-')+1);
    return value;
}

Queue.prototype.size = function() {
    return this.store.match(/-/g).length
}

var queue = new Queue();

queue.enqueue('x');
queue.dequeue();
queue.enqueue('y');
queue.enqueue('z');
queue.dequeue();
queue.size();
queue.dequeue();