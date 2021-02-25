function initMap() {
L.mapquest.key = '1dxQ2G5nqPPKmZCahWnljKsdFoe2FFIu';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.87859, -117.23589],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});
L.marker([32.87859, -117.23589]).addTo(map);
}