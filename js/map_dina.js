/*MAPA DINÁMICO*/

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(7.1371883,-75.659334),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function showPosition(position) {
    window.alert("Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude);
	var mapProp = {
    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
}

google.maps.event.addDomListener(window, 'load', showPosition);


/*
function Location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(LPosition);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}


function initialize() {
	var mapProp = {
    center:new google.maps.LatLng(7.1371883,-75.659334),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
	var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
   
}
	google.maps.event.addDomListener(window, 'load', initialize);


function LPosition() {
  var mapProp = {
    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
}
google.maps.event.addDomListener(window, 'load', LPosition);
*/