var mymap = L.map('mapid').setView([38.6270, 90.1994], 18);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(mymap);

var marker = L.marker([38.6270,-90.1994]).addTo(mymap);

var geojsonFeature ={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "The Clover and the Bee"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.345447,
          38.590825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Gokul"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.297814,
          38.655604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Mission Taco"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21594,
          38.6154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Twisted Ranch"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.199845,
          38.610691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Meskerem"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.242708,
          38.602291
        ]
      }
    }
  ]
}

marker.bindPopup("<b>Saint Louis!</b><br>I've Got Great Food").openPopup();



