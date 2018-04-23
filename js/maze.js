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
  
      //creating the opening/exit gaps
      cells[0].removeEdge(1);
      cells[cells.length - 1].removeEdge(3);
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
          this.current.removeEdge(2);
          this.next.removeEdge(4);
        }
  
        if (this.next.x < this.current.x) {
          this.current.removeEdge(4);
          this.next.removeEdge(2);
        }
  
        if (this.next.y > this.current.y) {
          this.current.removeEdge(3);
          this.next.removeEdge(1);
        }
  
        if (this.next.y < this.current.y) {
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
      cells.forEach(function(element) {
        element.display();
      });
      if (this.current != cells[0]) {
        rect(
          this.current.x * this.current.w + this.current.w * 0.1,
          this.current.y * this.current.h + this.current.h * 0.1,
          this.current.w - this.current.w * 0.2,
          this.current.h - this.current.h * 0.2
        );
        if (this.trailOne != null) {
          rect(
            this.trailOne.x * this.trailOne.w + this.trailOne.w * 0.2,
            this.trailOne.y * this.trailOne.h + this.trailOne.h * 0.2,
            this.trailOne.w - this.trailOne.w * 0.4,
            this.trailOne.h - this.trailOne.h * 0.4
          );
        }
        if (this.trailTwo != null) {
          rect(
            this.trailTwo.x * this.trailTwo.w + this.trailTwo.w * 0.3,
            this.trailTwo.y * this.trailTwo.h + this.trailTwo.h * 0.3,
            this.trailTwo.w - this.trailTwo.w * 0.6,
            this.trailTwo.h - this.trailTwo.h * 0.6
          );
        }
        if (this.trailThree != null) {
          rect(
            this.trailThree.x * this.trailThree.w + this.trailThree.w * 0.4,
            this.trailThree.y * this.trailThree.h + this.trailThree.h * 0.4,
            this.trailThree.w - this.trailThree.w * 0.8,
            this.trailThree.h - this.trailThree.h * 0.8
          );
        }
        this.trailThree = this.trailTwo;
        this.trailTwo = this.trailOne;
        this.trailOne = this.current;
      }
    }
  }
