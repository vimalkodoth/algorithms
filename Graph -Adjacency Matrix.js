//Adjancency Matrix
class Graph {
    constructor(){
      this._nodes = [];
    }

    addNode(node) {
      this._nodes.push([]);
    }

    addEdge(v1, v2) {
      for(let i=0; i< v2; i++){
        if(this._nodes[v1][i] === undefined){
           this._nodes[v1][i] = 0;
        }
      }
      this._nodes[v1][v2] = 1
    }

  }

  //space complexity will be O(N^2);
  const g = new Graph();

  g.addNode(0);
  g.addNode(1);
  g.addNode(2);
  g.addNode(3);
  g.addNode(4);
  g.addNode(5);

  g.addEdge(3,4);
  g.addEdge(1,2);

  g._nodes
