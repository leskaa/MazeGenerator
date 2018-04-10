class Maze {
  constructor(config) {
    this.cols = config.cols;
    this.rows = config.rows;
    this.w = config.width;
    this.h = config.height;

    this.fillCells();
  }

  fillCells(){
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        cells.push(new Cell(x, y, this.w/this.cols, this.h/this.rows));
      }
    }
  }

  depthSearch(){
    let stack = [];
    let current = cells[0];
    let next =  current.getRandomNeighbor();
    current.visited = true;

    while(current.getRandomNeighbor()){
      next = current.getRandomNeighbor();
      stack.push(current);

      if(next.x > current.x){//next is to the right
        current.removeEdge(2);
        next.removeEdge(4);
      }

      if(next.x < current.x){//next is to the left
        current.removeEdge(4);
        next.removeEdge(2);
      }

      if(next.y > current.y){//next is on the bottom
        current.removeEdge(3);
        next.removeEdge(1);
      }

      if(next.y < current.y){//next is on top of current
        current.removeEdge(1);
        next.removeEdge(3);
      }

      current = next;
      current.visited = true;
    }

    console.log(stack);
  }

  keepChecking(){
    let count = 0;
    for(let i = 0; i < cells.length; i++){
      if(cells[i].visited){
        count++;
      }
    }
    return count != cells.length;
  }

  display() {
    cells.forEach(function(element) {
      element.display();
    });
  }
}