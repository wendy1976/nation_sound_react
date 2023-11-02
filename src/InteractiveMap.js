// Importer la bibliothèque Leaflet
import L from 'leaflet';

// Créer une fonction pour initialiser la carte
function initMap() {
    // Créer une carte centrée sur la France
    const map = L.map('map').setView([46.2276, 2.2137], 6);

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Ajouter un marqueur pour Paris
    L.marker([48.8566, 2.3522]).addTo(map)
        .bindPopup('Paris');

    // Ajouter un marqueur pour Lyon
    L.marker([45.7640, 4.8357]).addTo(map)
        .bindPopup('Lyon');

    // Ajouter un marqueur pour Marseille
    L.marker([43.2965, 5.3698]).addTo(map)
        .bindPopup('Marseille');
}

// Appeler la fonction pour initialiser la carte
initMap();
