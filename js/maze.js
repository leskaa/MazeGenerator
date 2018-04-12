class Maze {
  constructor(config) {
    this.cols = config.cols;
    this.rows = config.rows;
    this.w = config.width;
    this.h = config.height;

    this.stack = [];

    this.fillCells();

    this.current = cells[0];
    this.trailOne = null;
    this.trailTwo = null;
    this.trailThree = null;
  }

  fillCells() {
    for (let y = 0; y < this.cols; y++) {
      for (let x = 0; x < this.rows; x++) {
        cells.push(new Cell(x, y, this.w / this.cols, this.h / this.rows));
      }
    }
  }

  generate() {

    this.current.visited = true;
    this.next = this.current.getRandomNeighbor();
    this.current.filled = true;

    if (this.next != null) {

      this.stack.push(this.current);

      if (this.next.x > this.current.x) {
        //next is to the right
        this.current.removeEdge(2);
        this.next.removeEdge(4);
      }

      if (this.next.x < this.current.x) {
        //next is to the left
        this.current.removeEdge(4);
        this.next.removeEdge(2);
      }

      if (this.next.y > this.current.y) {
        //next is on the bottom
        this.current.removeEdge(3);
        this.next.removeEdge(1);
      }

      if (this.next.y < this.current.y) {
        //next is on top of current
        this.current.removeEdge(1);
        this.next.removeEdge(3);
      }

      this.current = this.next;
      this.current.filled = false;
      this.current.visited = true;


    } else if (this.stack.length > 0) {
      this.current = this.stack.pop();
    }
  }

  display() {
    cells.forEach(function (element) {
      element.display();
    });
    if (this.current != cells[0]) {
      rc.rectangle(this.current.x * this.current.w + 2, this.current.y * this.current.h + 2, this.current.w - 4, this.current.h - 4, {
        roughness: 0,
        fill: '#93FF96',
        fillStyle: 'solid',
        strokeWidth: 0.01
      });
      if (this.trailOne != null) {
        rc.rectangle(this.trailOne.x * this.trailOne.w + 6, this.trailOne.y * this.trailOne.h + 6, this.trailOne.w - 12, this.trailOne.h - 12, {
          roughness: 0,
          fill: '#B2FFA8',
          fillStyle: 'solid',
          strokeWidth: 0.01
        });
      }
      if (this.trailTwo != null) {
        rc.rectangle(this.trailTwo.x * this.trailTwo.w + 8, this.trailTwo.y * this.trailTwo.h + 8, this.trailTwo.w - 16, this.trailTwo.h - 16, {
          roughness: 0,
          fill: '#B2FFA8',
          fillStyle: 'solid',
          strokeWidth: 0.01
        });
      }
      if (this.trailThree != null) {
        rc.rectangle(this.trailThree.x * this.trailThree.w + 10, this.trailThree.y * this.trailThree.h + 10, this.trailThree.w - 20, this.trailThree.h - 20, {
          roughness: 0,
          fill: '#D0FFB7',
          fillStyle: 'solid',
          strokeWidth: 0.01
        });
      }
      this.trailThree = this.trailTwo;
      this.trailTwo = this.trailOne;
      this.trailOne = this.current;
    }
  }
}