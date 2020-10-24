// Cria Mapa
const map = L.map("mapid").setView([-22.9139675,-43.2054656], 12.5);

// Cria e adiciona tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Cria marcadores
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// Criar  popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>'
);

let marker = undefined;

// Cria e adiciona marcadores
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // Passando para os input dentro de #mapid
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Limpar qualquer marcador anterior
  if (marker != undefined) {
    map.removeLayer(marker);
  }

  // adiciona o icone ao marker
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

let total = 1
// adicionar o campo de fotos
function addPhotoField() {
  // Controle do total de imagens
  const error = document.querySelector(".error");
  if(total == 6){
    error.innerHTML = 'Limite de Imagens alcançado'
    error.style.display = 'block'
    document.querySelector(".images").style.border = "1px dashed red";
    return
  }
  // Pegar o Container de Fotos
  const container = document.querySelector("#images");
  // Preparar os containers .new-upload para clonagem
  const fieldContainer = document.querySelectorAll(".new-upload");
  // Verificar se o campo está preenchido antes de clonar
  const input = fieldContainer[fieldContainer.length - 1].children[0].value;
  if (input == "") {
    error.style.display = "block";
    error.innerHTML = 'Cole o link da imagem antes de adicionar outro campo'
    document.querySelector(".images").style.border = "1px dashed red";
    return;
  }
  error.style.display = "none";
  document.querySelector(".images").style.border = "1px dashed #96D2F0";
  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );
  // Limpar o campo antes de adicionar
  newFieldContainer.children[0].value = "";
  // Adicionar ao HTML
  container.appendChild(newFieldContainer);
  total ++
  /* Adiciona o botão de remoção
    newFieldContainer.children[1].style.display = 'flex'
    fieldContainer.forEach((container) => {
        container.children[1].style.display = 'flex'
    })
    */
}

function removePhotoField(event) {
  // Pegar o .new-upload clicado
  const newUpload = event.currentTarget.parentNode;
  // Verifica se existe somente um .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length > 1) {
    // Remove do container
    newUpload.remove();
    total--
  }
  // Caso Seja o ultimo container, o botão apaga o texto
  if (fieldsContainer.length < 2) {
    newUpload.children[0].value = "";
    /*
        Ou remover o botão de excluir
        new.Upload.children[1].style.display = 'none'
        */
  }
}

// Alternar a Classe Active
function toggleActive(event) {
    // Recebe o botão clicado
    const button = event.currentTarget;
    // Recupera todos os botões
    const buttons = document.querySelectorAll(".button-select button");
    // Verifica os botões e remove a class .Active
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    // Adiciona a class .Active ao botão clicado.
    button.classList.add("active");
    // Atualizar o input hidden dos botões
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
  }
  
function validate(event) {
  // verificar se lat e lng está preenchidos
  if(false){
    event.preventDefault()
    alert('Escolha um ponto no mapa!')
  }
}