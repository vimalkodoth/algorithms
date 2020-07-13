class HashTable {
  constructor(){
    this.MIN_STORAGE_SIZE = 5;
    this.storage = new Array(this.MIN_STORAGE_SIZE);
    this.numItems = 0;
    this.loadFactor = this.numItems / this.storage.length;
  }

  resize(size) {
    const newTable = new Array(size);
    this.storage.forEach(item => {
       if(item){
         item.forEach(([key, val]) => {
           const index = this.hash(key, size);
           newTable[index] = newTable[index] || [];
           newTable[index].push([key, val]);
         })
       }
    })
    this.storage = newTable;
  }

  hash(x, size){
    return x.split('').reduce((acc, next, i) => {
      return ((acc+ x.charCodeAt(i)) * 1021) % (size || this.storage.length);
    },0)
  }

  set(key, val) {
    this.numItems++;
    this.loadFactor = this.numItems / this.storage.length;
    if(this.loadFactor >= 0.8) {
      console.log(`[Hash]Resizing Storage to Double `+ this.storage.length*2);
      this.resize(this.storage.length*2);
    }
    const index = this.hash(key);
    this.storage[index] = this.storage[index] || [];
    this.storage[index].push([key,val]);
  }

  get(key) {
    const index = this.hash(key);
    const store = this.storage[index];
    if(!store) return;
    const item = store.find(([k, value]) => key === k);
    return item && item[1];
  }

  remove(key) {
    if(this.loadFactor === 0) {
      console.log(`[Hash] Table is empty`);
      return;
    }
    if(this.loadFactor <= 0.2 && this.storage.length > this.MIN_STORAGE_SIZE) {
       console.log(`[Hash]Resizing Storage to Half `+ Math.floor(this.storage.length/2));
       this.resize(Math.floor(this.storage.length/2));
    }
    const index = this.hash(key);
    const itemIndex = this.storage[index].findIndex(([k, value]) => key === k);
    this.storage[index].splice(itemIndex, 1);
    this.numItems--;
    this.loadFactor = this.numItems / this.storage.length;
    return;
  }
}


const table = new HashTable();

table;
table.set('hello world', 10);
table.set('hello worl', 10);
table.set('hello', 10);
table.set('he', 10);
table.storage.length
table.remove('he');
table.remove('hello');
console.log(table.storage[1])
table.remove('hello worl');
table.remove('hello world');
table.storage.length;
table.numItems;
table.get('hello')
table.remove('hello world');
