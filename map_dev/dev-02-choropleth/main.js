// loading mapbox api key
import apiAccess from '/map_dev/assets/mapbox_apikey.json' assert {type: 'json'};


mapboxgl.accessToken = apiAccess['mapbox_apikey'];
const map = new mapboxgl.Map({
container: 'map', // container ID
style: "mapbox://styles/yuchen0908/clckhvble000t15rqv2j7dfme", // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
center: [151.209900, -33.865143], // starting position
zoom: 12 // starting zoom
});
