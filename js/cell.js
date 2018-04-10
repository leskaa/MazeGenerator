//GLOBAL VARIABLES
cells = [];

settings = {
  cols: 10,
  rows: 10,
  width: 500,
  height: 500
};

class Cell {
  constructor(x, y ,w ,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;
  }

  display() {
    if(this.top == true) {
      rc.line(this.x*this.w, this.y*this.h, this.x*this.w+this.w, this.y*this.h);
        } 
    if(this.right == true) {
      rc.line(this.x*this.w+this.w, this.y*this.h, this.x*this.w+this.w, this.y*this.h+this.h);
        }
    if(this.bottom == true) {
      rc.line(this.x*this.w, this.y*this.h+this.h, this.x*this.w+this.w, this.y*this.h+this.h);
        }
    if(this.left == true) {
      rc.line(this.x*this.w, this.y*this.h, this.x*this.w, this.y*this.h+this.h);
        }
  }

  removeEdge(num) {
    switch (num) {
        case 1: this.top = false; break;
        case 2: this.right = false; break;
        case 3: this.bottom = false; break;
        case 4: this.left = false; break;
    }
  }

  getRandomNeighbor(){
    console.log(cells[index(this.x, this.y)]);

    let n = Math.floor(Math.random() * 4) + 1;
    console.log(n);

    switch(n){
      case 1: break;
      case 2: break;
      case 3: break;
      case 4: break;
    }
  }
}

//gets the array index of a cell from its row/col number
function index(x, y) {
  return x + y * settings.cols;
}
