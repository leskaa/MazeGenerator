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

  depthSearch() {

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
      rc.rectangle(this.current.x * this.current.w, this.current.y * this.current.h, this.current.w, this.current.h, {
        roughness: 0,
        fill: 'rgba(255, 0, 0, 0.9)',
        fillStyle: 'solid',
        strokeWidth: 0.1
      });
      if (this.trailOne != null) {
        rc.rectangle(this.trailOne.x * this.trailOne.w, this.trailOne.y * this.trailOne.h, this.trailOne.w, this.trailOne.h, {
          roughness: 0,
          fill: 'rgba(255, 0, 30, 0.6)',
          fillStyle: 'solid',
          strokeWidth: 0.1
        });
      }
      if (this.trailTwo != null) {
        rc.rectangle(this.trailTwo.x * this.trailTwo.w, this.trailTwo.y * this.trailTwo.h, this.trailTwo.w, this.trailTwo.h, {
          roughness: 0,
          fill: 'rgba(255, 0, 60, 0.3)',
          fillStyle: 'solid',
          strokeWidth: 0.1
        });
      }
      if (this.trailThree != null) {
        rc.rectangle(this.trailThree.x * this.trailThree.w, this.trailThree.y * this.trailThree.h, this.trailThree.w, this.trailThree.h, {
          roughness: 0,
          fill: 'rgba(255, 0, 90, 0.2)',
          fillStyle: 'solid',
          strokeWidth: 0.1
        });
      }
      this.trailThree = this.trailTwo;
      this.trailTwo = this.trailOne;
      this.trailOne = this.current;
    }
  }
}