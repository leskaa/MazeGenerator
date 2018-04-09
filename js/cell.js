class Cell {
  constructor(x, y) {
    this.x = x; //rework how the variables here related to the maze settings
    this.y = y;
    this.w = 80;
    this.h = 80;

    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;

    this.neighbors = [];
  }

  display() {
    console.log(index(this.x, this.y));
  }

  removeEdge(num) {
    switch (num) {
        case 1: this.top = false; break;
        case 2: this.right = false; break;
        case 3: this.bottom = false; break;
        case 4: this.left = false; break;
    }
  }
}

//gets the array index of a cell from its row/col number
function index(x, y) {
  return x + y * numOfCols;
}
