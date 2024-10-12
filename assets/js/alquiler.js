const propiedadesAlquiler= [
    {
        nombre:'Apartamento en el centro de la ciudad',
        src:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion:'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        direccion:'123 Main Street, Anytown, CA 91234',
        habitaciones:2,
        baños:2,
        costo:2000,
        smoke:false,
        pets:true
    },

    {
        nombre:'Apartamento luminoso con vista al mar',
        src:'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion:'Este hermoso apartamento ofrece una vista impresionante al mar.',
        direccion:'456 Ocean Avenue, Seaside Town, CA 56789.',
        habitaciones: 3,
        baños: 3,
        costo:2500,
        smoke: true,
        pets: true
    },

    {
        nombre:'Condominio moderno en zona residencial',
        src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion:'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        direccion:'123 Main Street, Anytown, CA 91234.',
        habitaciones:2,
        baños:2,
        costo:2200,
        smoke: false,
        pets: false
    },

    {
        nombre:'Cabaña en la playa',
        src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/18/a2/0a/9-person-cabana-with.jpg?w=700&h=-1&s=1',
        descripcion:'hermosa cabaña en la playa para escapada romántica.',
        direccion:'1739 Avenida Marina, CA 91234.',
        habitaciones: 1,
        baños:1,
        costo:1800,
        smoke:true,
        pets:false 
    }
];

const alquilerDiv = document.querySelector("#propiedadesAlquiler");
let contenidoHTML = "";

for (const propiedadA of propiedadesAlquiler) {

  const fumarTexto = propiedadA.smoke ? "Se permite fumar" : "No se permite fumar";
  const mascotaTexto=propiedadA.pets ? "Se permiten mascotas" : "No se permiten mascotas";
  contenidoHTML += `
    <div class="card" style="width: 18rem; margin: 1rem;">
      <img src="${propiedadA.src}" class="card-img-top" alt="${propiedadA.nombre}">
      <div class="card-body">
        <h5 class="card-title">${propiedadA.nombre}</h5>
        <p class="card-text">${propiedadA.descripcion}</p>
        <p class="card-text">${propiedadA.direccion}</p>
        <p class="card-text"> Habitaciones: ${propiedadA.habitaciones}</p>
        <p class="card-text"> Baños: ${propiedadA.baños}</p>
        <p class="card-text">Costo: $${propiedadA.costo}</p>
        <p class="card-text">${fumarTexto}</p> 
        <p class="card-text">${mascotaTexto}</p> 
      </div>
    </div>
  `;
}

alquilerDiv.innerHTML = contenidoHTML;