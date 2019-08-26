event_location={};
function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude + '  ' + longitude);
    initMap2(latitude, longitude);
}
function error() {
    status.textContent = 'Unable to retrieve your location';
    console.log(status.textContent);
}
function initMap() {
    navigator.geolocation.getCurrentPosition(success, error);
}

//Set up some of our variables.
var map; //Will contain map object.
var marker = false; ////Has the user plotted their location marker? 

//Function called to initialize / create the map.
//This is called when the page has loaded.
function initMap2(latitude, longitude) {
    console.log(latitude + ' ' + longitude);
    //The center location of our map.
    //var centerOfMap = new google.maps.LatLng(52.357971, -6.516758);
    var centerOfMap = new google.maps.LatLng(latitude, longitude);
    myLatlng = new google.maps.LatLng(latitude, longitude);

    //Map options.
    var options = {
        center: centerOfMap, //Set center.
        zoom: 16 //The zoom value.
    };
      
    //Create the map object.
    map = new google.maps.Map(document.getElementById('map'), options);
    
    var myLatLng = { lat: latitude, lng: longitude };
    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Party Spot!',
        draggable: true //make it draggable
    });
    marker.setPosition(myLatLng);
    //Listen for drag events!
    google.maps.event.addListener(marker, 'dragend', function (event) {
        markerLocation();
    });

    //Listen for any clicks on the map.
    google.maps.event.addListener(map, 'click', function (event) {
        //Get the location that the user clicked.
        var clickedLocation = event.latLng;
        console.log(clickedLocation);
        //If the marker hasn't been added.
        if (marker === false) {
            //Create the marker.
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true //make it draggable
            });

        } else {
            //Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation);
        }
        //Get the marker's location.
        markerLocation();
    });
}

//This function will get the marker's current location and then add the lat/long
//values to our textfields so that we can save the location.
function markerLocation() {
    //Get location.      
    var currentLocation = marker.getPosition();
    console.log(currentLocation.lat());
    //Add lat and lng values to a field that we can save.
    //document.getElementById('lat').value = currentLocation.lat(); //latitude
    //document.getElementById('lng').value = currentLocation.lng(); //longitude
    event_location[event_index].lat= currentLocation.lat(); 
    event_location[event_index].long = currentLocation.lng(); 
}


//Load the map when the page has finished loading.
//google.maps.event.addDomListener(window, 'load', initMap);

