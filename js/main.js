//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));
const context = canvas.getContext('2d');

cells = [];

settings = {
  cols: 30,
  rows: 30,
  width: 500,
  height: 500
};

let m = new Maze(settings);

var FPS = 60;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {}
function draw() {
    context.clearRect(0, 0, settings.width, settings.height);
    m.display();
    m.depthSearch();
}