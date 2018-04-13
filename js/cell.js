class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;
    this.filled = false;
  }

  display() {
    if (this.top) {
        rc.line(this.x * this.w, this.y * this.h, this.x * this.w + this.w, this.y * this.h, {
          roughness: 0,
          stroke: '#86E7B8',
          strokeWidth: width/(width/3.3)
        });
    }

    if (this.right) {
        rc.line(this.x * this.w + this.w, this.y * this.h, this.x * this.w + this.w, this.y * this.h + this.h, {
          roughness: 0,
          stroke: '#86E7B8',
          strokeWidth: width/(width/3.3)
        });
    }

    if (this.bottom) {
        rc.line(this.x * this.w, this.y * this.h + this.h, this.x * this.w + this.w, this.y * this.h + this.h, {
          roughness: 0,
          stroke: '#86E7B8',
          strokeWidth: width/(width/3.3)
        });
    }

    if (this.left) {
        rc.line(this.x * this.w, this.y * this.h, this.x * this.w, this.y * this.h + this.h, {
          roughness: 0,
          stroke: '#86E7B8',
          strokeWidth: width/(width/3.3)
        });
    }
  }

  removeEdge(side) {
    switch (side) {
      case 1:
        this.top = false;
        break;
      case 2:
        this.right = false;
        break;
      case 3:
        this.bottom = false;
        break;
      case 4:
        this.left = false;
        break;
    }
  }

  getRandomNeighbor() { //returns a random neighbor cell
    let neighbors = [];

    let top = cells[index(this.x, this.y - 1)];
    let right = cells[index(this.x + 1, this.y)];
    let bottom = cells[index(this.x, this.y + 1)];
    let left = cells[index(this.x - 1, this.y)];

    if (top != undefined && top.visited == false && this.y > 0) {
      neighbors.push(top);
    }

    if (right != undefined && right.visited == false && this.x < settings.cols - 1) {
      neighbors.push(right);
    }

    if (bottom != undefined && bottom.visited == false && this.y < settings.rows - 1) {
      neighbors.push(bottom);
    }

    if (left != undefined && left.visited == false && this.x > 0) {
      neighbors.push(left);
    }

    let n = Math.floor(Math.random() * neighbors.length - 1) + 1;

    return neighbors[n];
  }
}

//gets the array index of a cell from its row/col number
function index(x, y) {
  return x + y * settings.cols;
}