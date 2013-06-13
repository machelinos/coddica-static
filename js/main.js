$(document).ready(function(){
	$(".flexnav").flexNav({ 'animationSpeed' : 'fast' });

	$('#slider-id').liquidSlider({
		mobileNavigation:false,
		autoHeight:true,
		slideEaseDuration:600
	});


});

$(window).load(function() {
    $('.flexslider').flexslider({
    	controlNav: false,
        smoothHeight: true
    });
  });

var breakpointsearch=768;
$(window).bind("load resize", function(){
    console.log(search_open);

  var container_width = $('#fb-contenedor').width();
    $('#fb-contenedor').html('<div class="fb-like-box" ' +
    'data-href="https://www.facebook.com/pages/C%C3%B3ddica/166567273493678"' +
    ' data-width="' + container_width + '" data-height="350" data-show-faces="false" ' +
    'data-stream="true" data-header="true"></div>');
    FB.XFBML.parse( );
      if ($(window).width() < breakpointsearch) {
        $('.busqueda').slideUp('fast');
        $('.buscar-boton').click(function(){
            $('.busqueda').stop().slideToggle('fast');
        });

      } else {
        search_open=true;
            $('.busqueda').slideDown('fast');
      }
});
