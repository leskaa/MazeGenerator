class Maze {
  constructor(cols, rows, w, h) {
    this.cols = cols;
    this.rows = rows;
    this.w = w;
    this.h = h;

    this.cells = [];
    this.fillCells();

    this.current;
    this.next;
    this.stack = [];
    this.neighbors = [];
  }

  fillCells(){
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        this.cells.push(new Cell(x, y, this.w/this.cols, this.h/this.rows));
      }
    }
  }

  getRandomNeighbor(){

  }

  depthSearch(){
    this.current = cells[0];
  }

  backtrack(){
    
  }

  display() {
    this.cells.forEach(function(element) {
      element.display();
    });
  }
}
