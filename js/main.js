$(document).ready(function(){
	$(".flexnav").flexNav({ 'animationSpeed' : 'fast' });

	$('#slider-id').liquidSlider({
		mobileNavigation:false,
		autoHeight:true,
		slideEaseDuration:600
	});

    $('.buscar-boton').click(function(){
        $('.busqueda').slideToggle('fast');
    });

    $('.submit-form').click(function(){
        $('form').submit();
    });

});


$(window).load(function() {
    $('.flexslider').flexslider({
    	controlNav: false,
        smoothHeight: true
    });



  });

var breakpointsearch=760;
$(window).bind("load resize", function(){
  var container_width = $('#fb-contenedor').width();
    $('#fb-contenedor').html('<div class="fb-like-box" ' +
    'data-href="https://www.facebook.com/pages/C%C3%B3ddica/166567273493678"' +
    ' data-width="' + container_width + '" data-height="350" data-show-faces="false" ' +
    'data-stream="true" data-header="true"></div>');
    FB.XFBML.parse( );
      if ($(window).width() > breakpointsearch) {
            $('.busqueda').slideDown('fast');
      }else{
            $('.busqueda').slideUp('fast');

      }
});
