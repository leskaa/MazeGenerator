var canvas;
cells = [];
running = false;
var settings;
var m;

function handleSubmit() {
  settings = {
    cols: $( '#size-text-box' ).val(),
    rows: $( '#size-text-box' ).val(),
    width: windowWidth > 800 ? 800 : windowWidth-30,
    height: windowWidth > 800 ? 800 : windowWidth-30,
    fps: $( '#fps-slider' ).val()
  };
    m = new Maze(settings);
    running = true; 
    $( '.container').slideToggle(700);
}

  function setup(){
    canvas = createCanvas(windowWidth > 800 ? 800 : windowWidth-30, windowWidth > 800 ? 800 : windowWidth-30);
  }

  canvas.position(50,50);

  function draw() {
    if(running){
    background('#FFF');
    m.generate();
    m.display();
    }
  }
