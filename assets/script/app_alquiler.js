const container = document.querySelector('#alquiler .row');

let cards = '';

propiedadesAlquiler.forEach(prop => {
  let petHTML = '';
  let smokeHTML = '';

  if (prop.pets){
    petHTML = `
    <p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
    `
  } else {
    petHTML = `
    <p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
    </p>
    `
  }

  if (prop.smoke){
    smokeHTML = `
    <p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
    </p>
    `
  } else {
    smokeHTML = `
    <p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>
    `
  }
  
  cards += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="./assets/img/alquiler_1.jpg"
        class="card-img-top"
        alt="${prop.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${prop.nombre}
        </h5>
        <p class="card-text">
          ${prop.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
        </p>
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
})

container.innerHTML = cards