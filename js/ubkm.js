function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function showPosition(position) {
	window.alert("Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude + "\n Exactitud: " + position.coords.accuracy);
	document.getElementById("ubicacion").src = "https://maps.googleapis.com/maps/api/staticmap?center=" +position.coords.latitude+","+position.coords.longitude+"&zoom=18&size=700x380&key=AIzaSyBT0JuHfqpVmZL6Rpv7nc5aSl7rUyE6-Lg&format=jpg&maptype=hybrid";
	
}


/*------------------------------------------------------------*/




