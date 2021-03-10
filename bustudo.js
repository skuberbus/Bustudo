/*

This JS file renders the Google Map via the Google map API,
fetches bus locations from umd.io, and places markers on the
map.

*/


// global vars
var map = {};
var map_rendered = false;
var markersArray = {};
var curr_buses = {};
var image;

// initializes the Google Map
function initMap() {
  var umd = {lat: 38.9869, lng: -76.9426 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: umd
  });

  map_rendered = true;

  image = {
    url: 'buses.svg',
    scaledSize: new google.maps.Size(60, 60)
  };

}
