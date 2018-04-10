const rc = rough.canvas(document.getElementById("canvas"));

let m = new Maze(settings);
m.display();

console.log(cells[0].getRandomNeighbor());

//console.log(cells[0]);

//console.log("Cells: " + cells);