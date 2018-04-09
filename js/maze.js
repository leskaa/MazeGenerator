class Maze {
  constructor() {
    this.settings = {
      cols: 10,
      rows: 10,
      width: 800,
      height: 800
    };
  }

  display() {
    //moved from main.js
    for (let i = 0; i < cells.length; i++) {
      //cells[i].removeEdge(1);//To test removing top edges
      //cells[i].removeEdge(3);//To test removing bottom edges
      cells[i].display();
    }
  }
}
