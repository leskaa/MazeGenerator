//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));

cells = [];

settings = {
  cols: 3,
  rows: 3,
  width: 500,
  height: 500
};

let m = new Maze(settings);
m.display();
m.depthSearch();
console.log(m.keepChecking());