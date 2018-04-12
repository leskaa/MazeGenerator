$( '#fpsslider' ).change(function(){
  $( '#js-genspeed' ).text("Generation Speed: " + $( '#fpsslider' ).val() + " fps");
});

let width = window.innerWidth;
$( '#js-width' ).val(width);
$( '#js-height' ).val(width);
