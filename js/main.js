//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));

cells = [];

settings = {
  cols: 10,
  rows: 10,
  width: 500,
  height: 500
};

let m = new Maze(settings);
m.depthSearch();
m.display();