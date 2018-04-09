class Maze {
  constructor() {
    this.settings = {
      cols: 10,
      rows: 10,
      width: 800,
      height: 800
    };

    this.cells = [];
    fillCells();
  }

  display() {
    cells.forEach(function(element) {
      element.display();
    });
  }

  fillCells(){
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        cells.push(new Cell(x, y));
      }
    }
  }
}
