$( '#fpsslider' ).change(function(){
  $( '#js-genspeed' ).text("Generation Speed: " + $( '#fpsslider' ).val() + " fps");
});