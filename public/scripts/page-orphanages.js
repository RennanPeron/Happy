// Cria Mapa
const map = L.map('mapid').setView([-22.9316705,-43.2311269], 13.25);

// Cria e adiciona tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// Cria marcadores
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170,2]
})

function addMarker({id, name, lat, lng}) {
    // Criar  popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    // Cria e adiciona marcadores
    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanageSpan = document.querySelectorAll('.orphanages span')
orphanageSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})