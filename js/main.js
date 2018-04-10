const rc = rough.canvas(document.getElementById("canvas"));

let m = new Maze(settings);
m.display();

cells[0].getRandomNeighbor();