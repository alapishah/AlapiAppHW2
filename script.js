var mymap = L.map('mapid').setView([38.6270, 90.1994], 18);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

var marker = L.marker([38.6270,-90.1994]).addTo(mymap);

var circle = L.circle([38.590825, -90.345447], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle1 = L.circle([38.655604, -90.297814], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle2 = L.circle([38.6154, -90.21594], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle3 = L.circle([38.610691, -90.199845], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


var circle4 = L.circle([38.602291, -90.242708], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


marker.bindPopup("<b>Saint Louis!</b><br>I am the greatest City.").openPopup();
circle.bindPopup("The Clover and The Bee");
circle1.bindPopup("Gokul");
circle2.bindPopup("Mission Taco");
circle3.bindPopup("Twisted Ranch");
circle4.bindPopup("Meskerem");


