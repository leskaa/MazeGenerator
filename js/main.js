//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));
const context = canvas.getContext('2d');

cells = [];

settings = {//make sure cols/rows evenly divides into width/height (visual bug)
  cols: 20,
  rows: 20,
  width: 800,
  height: 800
};

let m = new Maze(settings);

var FPS = 10;
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