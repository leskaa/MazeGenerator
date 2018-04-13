$( '#fpsslider' ).change(function(){
  $( '#js-genspeed' ).text("Generation Speed: " + $( '#fpsslider' ).val() + " fps");
});

function delayReload(){
  timeoutID = window.setTimeout(reloadPage, 300);
}

function reloadPage(){
  location.reload();
}

let downloadButton = $( '#js-download');
downloadButton.click(function(){
  var dataURL = canvas.toDataURL('image/png');
  downloadButton.attr('href', dataURL);
});

let reloadButton = $( '#js-gen' );
reloadButton.click(function(){
  running = false;
  $( '#canvas' ).fadeToggle();
  $( '.bottom-buttons' ).fadeToggle();
  delayReload();
});

let width = window.innerWidth;
$( '#js-width' ).val(Math.floor(width));
$( '#js-height' ).val(Math.floor(width));

if(width < 480){
  $( '#canvas' ).attr('width', width);
  $( '#canvas' ).attr('height', width);
}

if(width > 480){
  $( '#canvas' ).attr('width', width);
  $( '#canvas' ).attr('height', width);
}

$( document ).ready(function() {
  $( 'form' ).fadeToggle(1200);
});



