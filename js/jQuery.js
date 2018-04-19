var windowWidth = window.innerWidth;

$( "#fps-slider" ).change(function(){
  $( "#slide-label" ).text("FPS (" + $( "#fps-slider" ).val() + ")");
});

function delayReload(){
  timeoutID = window.setTimeout(reloadPage, 300);
}

function reloadPage(){
  location.reload();
}

let downloadButton = $("#js-download");
downloadButton.click(function() {
  var dataURL = canvas.toDataURL("image/png");
  downloadButton.attr("href", dataURL);
});

let reloadButton = $("#js-gen");
reloadButton.click(function() {
  running = false;
  $("#canvas").fadeToggle();
  delayReload();
});

$( document ).ready(function() {
  $( 'form' ).fadeToggle(1200);
});



