const ventas = document.querySelector('#venta .row');
const alquileres = document.querySelector('#alquiler .row');

let cardsVentas = '', cardsAlquileres = ''

for(let i = 0; i < 3; i++){
  renderVenta(propiedadesVenta[i])
  renderAlquiler(propiedadesAlquiler[i])
}

function renderVenta(prop){
  let petHTML = checkPets(prop);
  let smokeHTML = checkSmoke(prop);
  
  cardsVentas += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="./assets/img/${prop.src}.jpg"
        class="card-img-top"
        alt="${prop.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">${prop.nombre}</h5>
        <p class="card-text">${prop.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${prop.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
        ${smokeHTML}
        ${petHTML}
      </div>
    </div>
  </div>
  `
  ventas.innerHTML = cardsVentas
}

function renderAlquiler(prop){
  let petHTML = checkPets(prop);
  let smokeHTML = checkSmoke(prop);
  
  cardsAlquileres += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="./assets/img/${prop.src}.jpg"
        class="card-img-top"
        alt="${prop.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">${prop.nombre}</h5>
        <p class="card-text">${prop.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${prop.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
        ${smokeHTML}
        ${petHTML}
      </div>
    </div>
  </div>
  `

  alquileres.innerHTML = cardsAlquileres
}

function checkPets(propiedad){
  if (propiedad.pets){
    return `
    <p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
    `
  } else {
    return `
    <p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
    </p>
    `
  }
}

function checkSmoke(propiedad){
  if (propiedad.smoke){
    return `
    <p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
    </p>
    `
  } else {
    return `
    <p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>
    `
  }
}