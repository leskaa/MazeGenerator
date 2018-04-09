'use strict';
const rc = rough.canvas(document.getElementById("canvas"));
let ctx = canvas.getContext("2d"); //for displaying text

//moved to maze class
//let numOfCols = 10, numOfRows = 10;

let cells = [];
//let cells = [...Array(10)].map(e => Array(10).fill(0));
for (let y = 0; y < numOfCols; y++) {
  for (let x = 0; x < numOfRows; x++) {
    cells.push(new Cell(x, y));
  }
}

console.log(cells);

let current = cells[0];
current.visited = true;
