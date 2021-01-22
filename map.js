
//  --- ----- Main Map Configuration - Do Not Edit
var mymap = L.map('mapid').setView([31.7619 , -106.4850], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2Vic2hhY2tlciIsImEiOiJja2s3cGxpNmswZ2ZhMnZxczc4Z3ZucWViIn0.3dUnc3YSmb1-lswPbL7D_Q'
}).addTo(mymap);
// ----------- End of map configuration

// Add markers to the map - for electric bikes in El Paso

//We can create markers icons of different colors, see this link - https://github.com/pointhi/leaflet-color-markers 

//Marker Icons of different colors 
// Green Marker
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

// Blue Marker 
var blueIcon = new L.Icon({
iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
shadowSize: [41, 41]
});

// Red Marker 
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });

  

// Add the markers to the map

// ---- University and Oregon
var marker1 = L.marker([31.773005359825955, -106.50097053149781],{icon: redIcon}).addTo(mymap);
//Add pop-up to the marker
marker1.bindPopup("<b>University and Oregon</b><br>B-Cycle");



// ---- UTEP Sun Bowl Drive South
var marker2 = L.marker([31.77032604498686, -106.5070138905196],{icon: greenIcon}).addTo(mymap);
//Add pop-up to the marker
marker2.bindPopup("<b>UTEP Sun Bowl Drive South</b><br>B-Cycle");



// ---- Downtown Transfer Center
var marker3 = L.marker([31.75608678530313, -106.4899527668934],{icon: blueIcon}).addTo(mymap);
//Add pop-up to the marker
marker3.bindPopup("<b>Downtown Transfer Center</b><br>B-Cycle");