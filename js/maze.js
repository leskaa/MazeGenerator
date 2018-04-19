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
          this.current.x * this.current.w + 2,
          this.current.y * this.current.h + 2,
          this.current.w - 4,
          this.current.h - 4
        );
        if (this.trailOne != null) {
          rect(
            this.trailOne.x * this.trailOne.w + 10,
            this.trailOne.y * this.trailOne.h + 10,
            this.trailOne.w - 20,
            this.trailOne.h - 20
          );
        }
        if (this.trailTwo != null) {
          rect(
            this.trailTwo.x * this.trailTwo.w + 14,
            this.trailTwo.y * this.trailTwo.h + 14,
            this.trailTwo.w - 28,
            this.trailTwo.h - 28
          );
        }
        if (this.trailThree != null) {
          rect(
            this.trailThree.x * this.trailThree.w + 18,
            this.trailThree.y * this.trailThree.h + 18,
            this.trailThree.w - 36,
            this.trailThree.h - 36
          );
        }
        this.trailThree = this.trailTwo;
        this.trailTwo = this.trailOne;
        this.trailOne = this.current;
      }
    }
  }
