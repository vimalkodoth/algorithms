function Graph() {
    this._nodes = {};
  }

  Graph.prototype.addNode = function(value) {
    if(value === undefined) return;
    this._nodes[value] = this._nodes[value] || [];
  }

  Graph.prototype.addEdge = function(value1, value2) {
    if(!this._nodes[value1] || !this._nodes[value2]) return;
    this._nodes[value1].push(value2);
    //this._nodes[value2].push(value1);
  }

  Graph.prototype.DFS = function(value, funct, map) {
     map = map || {};
     if(!map[value]) funct(value);
     this._nodes[value].forEach((val) => {
       if(map[val]) return;
       funct(val);
       map[val] = true;
       this.DFS(val, funct, map)
     })
     return;
  }

  Graph.prototype.BFS = function(value, funct) {
    const map = {};
    let queue = [value];
    while(queue.length){
      const item = queue.shift();
      if(map[item]) continue;
      funct(item);
      map[item] = true;
      queue = queue.concat(this._nodes[item])
    }
  }

  const g = new Graph();


  g.addNode('A');
  g.addNode('B');
  g.addNode('C');
  g.addNode('D');
  g.addNode('E');
  g.addNode('F');

  g.addEdge('A','C');
  g.addEdge('A','B');
  g.addEdge('C','D');
  g.addEdge('C','E');
  g.addEdge('D','B');
  g.addEdge('D','E');
  g.addEdge('E','F');

  g.DFS('A', function(value) { console.log(value)});
  console.log('....*****....');
  g.BFS('A', function(value) { console.log(value)});