const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Recebe Valores do Banco
const coordinates = document.querySelector('[data-lat]')

// Cria Mapa
const map = L.map("mapid", options).setView([coordinates.dataset.lat, coordinates.dataset.lng], 15);

// Cria e adiciona tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Cria marcadores
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

// Cria e adiciona marcadores
L.marker([coordinates.dataset.lat, coordinates.dataset.lng], { icon }).addTo(map);

// Galeria de Imagens
function selectImage(event) {
  const button = event.currentTarget;

  // Remover a classe Active
  const buttons = document.querySelectorAll(".images button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  // Atualizar o container de Imagem

  // Adicionar a classe Active ao botão clicado
  button.classList.add("active");
}