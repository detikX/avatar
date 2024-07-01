const map = L.map('map').setView([-1.2910469065280155, 112.12226540832819], 4.5);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// const baseballIcon = L.icon({
// 	iconUrl: 'img/baseball-marker.png',
// 	iconSize: [32, 37],
// 	iconAnchor: [16, 37],
// 	popupAnchor: [0, -28]
// });

$(".nilai").html(bicycleRental.investasi)
// console.log(pertambanganRental.investasi);
$("#tambang").html(pertambanganRental.investasi)
function onEachFeature(feature, layer) {

    var data_konflik = feature.properties.status_konflik_proses;
    var konflik = feature.properties.status_konflik_proses == null || "" ? "-" : data_konflik;
    var luas = feature.properties.luas;
    var sektor = feature.properties.nama_sektor;
    var parsInt = parseInt(luas);
    var luasVal = parsInt.toLocaleString('id')
    if (feature.properties) {
        // <p>I started out as a GeoJSON ${feature.geometry.type}, but now I'm a Leaflet vector!</p>
        let popupContent = `
                <h3>${feature.properties.judul}</h3>
                <div><small>Luas: ${luasVal} Ha</small></div>
                <div><small>Sektor: ${sektor}</small></div>
                <div><small>Status: ${konflik}</small></div>
                <div><small>Provinsi: ${feature.properties.nm_propinsi} </small></div>
                <div><small>Kabupaten: ${feature.properties.nm_kabupaten} </small></div>
                <div>
                    <p>
                        ${feature.properties.short_narasi}
                    </p>
                </div>
            `;
        // popupContent += feature.properties.judul;
        layer.bindPopup(popupContent);
    }

}

/* global campus, bicycleRental, freeBus, coorsField */
const bicycleRentalLayer = L.geoJSON([bicycleRental], {

    style(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature,

    pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#ff7800',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

const pertambanganLayer = L.geoJSON([pertambanganRental], {

    style(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature,

    pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#4a86e8',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);



// const coorsLayer = L.geoJSON(coorsField, {

// 	pointToLayer(feature, latlng) {
// 		return L.marker(latlng, {icon: baseballIcon});
// 	},

// 	onEachFeature
// }).addTo(map);