$( '#fpsslider' ).change(function(){
  $( '#js-genspeed' ).text("Generation Speed: " + $( '#fpsslider' ).val() + " fps");
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

//$( '#canvas' )



