//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));
const context = canvas.getContext('2d');

cells = [];

running = false;

settings;
let m;

function handleSubmit() {
  settings = {
    cols: $( '#js-col' ).val(),
    rows: $( '#js-row' ).val(),
    width: $( '#js-width' ).val(),
    height: $( '#js-height' ).val(),
    fps: $( '#fpsslider' ).val()
    }

    m = new Maze(settings);
  
  running = true;
  $( '#mazeconfig' ).slideToggle(700);

  setInterval(function () {
    update();
    draw();
  }, 1000 / settings.fps);
}

  function update() {}

  function draw() {
    if(running){
    context.clearRect(0, 0, settings.width, settings.height);
    m.generate();
    m.display();
    }
  }
