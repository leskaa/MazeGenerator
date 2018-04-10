class Maze {
  constructor(config) {
    this.cols = config.cols;
    this.rows = config.rows;
    this.w = config.width;
    this.h = config.height;

    this.fillCells();

    this.current;
    this.next;
    this.stack = [];
  }

  fillCells(){
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        cells.push(new Cell(x, y, this.w/this.cols, this.h/this.rows));
      }
    }
  }

  depthSearch(){
    this.current = cells[0];
  }

  backtrack(){
    
  }

  display() {
    cells.forEach(function(element) {
      element.display();
    });
  }
}