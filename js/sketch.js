var canvas;
var cells = [];
var running;
var settings = {
  width: 400,
  height: 400,
  rows: 20,
  cols: 20,
  fps: 30,
  instant: false
};
var m;

$("#configWindow").fadeToggle(1200);//when the page loads fade the menu in

$("#fps-slider").change(function() {
  $("#slide-label").text("FPS (" + $("#fps-slider").val() + ")");
});

$("#background-picker").change(function() {
  $("body").css("background-color", $("#background-picker").val());
});

function handleSubmit() {
  settings.rows = $("#size-text-box").val();
  settings.cols = $("#size-text-box").val();
  settings.fps = $("#fps-slider").val();
  settings.instant = $('#instant').is(":checked");
  frameRate(Number(settings.fps));
  $("#configWindow").slideToggle(1200);

  if(window.innerWidth < 786){
  settings.width = window.innerWidth-30;
  settings.height = window.innerWidth-30;
  }else {
    settings.width = 600;
    settings.height = 600;
  }

  m = new Maze(settings);

  canvas = createCanvas(settings.width + 1, settings.height + 1);
  canvas.parent("sketch-holder");

  $('.bottom-buttons button').slideToggle(1200);
  $('#sketch-holder').slideToggle(1200);

  running = true;
}

function setup() {
}

function draw() {
  if (running) {
    background($("#background-picker").val());
    fill($("#maze-color-picker").val())
    m.display();
    if(settings.instant) {
      m.generate();
      while(m.current != cells[0]) {
        m.generate();
      }
    }
    m.generate();
  }
}

let newButton = $('#new-maze');
let downloadButton = $('#download-button');

newButton.click(function(){
  $('.bottom-buttons button').fadeToggle(600);
  $('#sketch-holder').fadeToggle(600);
  $('#fps-slider').val(30);
  $('#instant').prop('checked', false);
  timeoutID = window.setTimeout(function(){
    location.reload();
  }, 700);
});

downloadButton.click(function(){
  save(canvas, 'maze.png');
});
