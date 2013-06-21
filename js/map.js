    var map;
    var marker;
    var center;
    var infoWindow;

$(window).load(function() {

    $('.static-map').remove();

    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(25.682008,-100.309747),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };


      map = new google.maps.Map(document.getElementById("map"),
          mapOptions);
      var image_marker="../img/marker-map.png";
      marker=new google.maps.Marker({map:map, position: new google.maps.LatLng(25.682008,-100.309747), title:"Códdica", icon: image_marker});
      var contentString='<div class="heading">'+
        '<p>C&oacute;ddica. Dise&ntilde;o + C&oacute;digo</p>'+
      '</div>'+
      '<address>Escobedo 810,<br> C.P. 75400 Col. Centro,<br> Monterrey, N.L., M&eacute;xico</address>'+
      '<p>Tel. 8114896387</p>';
      infoWindow= new google.maps.InfoWindow({content: contentString});
    }
    initialize();

    google.maps.event.addDomListener(map, "idle", function(){
      center=map.getCenter();
    });

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map,marker);
  });

});

$(window).resize(function(){
  map.setCenter(center);
});