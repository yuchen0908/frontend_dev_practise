// loading geoJson
import data from '/map_dev/assets/surry_hills_around.json' assert {type: 'json'};
// loading mapbox api key
import apiAccess from '/map_dev/assets/mapbox_apikey.json' assert {type: 'json'};

// reference: https://docs.mapbox.com/mapbox.js/example/v1.0.0/plain-leaflet/
const mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=' + apiAccess['mapbox_apikey'], {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       tileSize: 512,
       zoomOffset: -1
});

// the default location of the map, lat long
const mapObj = L.map('map')
.addLayer(mapboxTiles)
.setView([-33.865143, 151.209900], 12);


// adding marker to Museum station
const marker = L.marker([-33.87575980203651, 151.2100168026207]).addTo(mapObj);
// adding popup message to Leaflet objects like marker or polygon
// the message can either be string or html
let popupTemplate = `
    <p><b>Museum Station</b></p>
    <div style='text-align:center'>
        <img src="https://live.staticflickr.com/7612/27733479000_ab03703c41_b.jpg" width=100px height=66.7px />
    </div>
    
`;
marker.bindPopup(popupTemplate);

// adding circle
const circle = L.circle([-33.87575980203651, 151.2100168026207], {
    radius:500,
    color:'green',              // edge color
    fillColor: 'lightgreen',    // fill color
    fillOpacity: 0.2            // fill Opacity
}).addTo(mapObj);

// add a polygon
// reference - how to use geoJson: https://www.igismap.com/add-load-geojson-file-point-polyline-polygon-map-leaflet-js/
// reference - doc: https://leafletjs.com/examples/geojson/
L.geoJson(data, {
    onEachFeature: function(f, fl) {
        fl.bindPopup(f.properties.name);
    }
}).addTo(mapObj);
