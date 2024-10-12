const propiedadesVenta=[
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        direccion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
      },
    
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
      direccion:'789 Mountain Road, Summit Peaks, CA 23456.',
      habitaciones: 2,
      baños: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },

    {
     nombre: 'Penthouse de lujo con terraza panorámica',
     src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
     descripcion:'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
     direccion: '567 Skyline Avenue, Skyview City, CA 56789.',
     habitaciones: 3,
     baños: 3,
     costo: 4500,
     smoke: false,
     pets: true
    },

    {
      nombre:'Casa en barrio residencial',
      src:'https://http2.mlstatic.com/D_NQ_NP_712273-MLC73228252515_122023-O.webp',
      descripcion: 'Casa sencilla de un piso para persona sola o pareja.',
      direccion:'157 Eagle Road, Black City, CA 972197.',
      habitaciones:2,
      baños:2,
      costo:3000,
      smoke:true,
      pets:false  
    }
]

const ventaDiv = document.querySelector("#propiedadesVenta");
let contenidoHTML = "";

for (const propiedad of propiedadesVenta) {

  const fumarTexto = propiedad.smoke ? "Se permite fumar" : "No se permite fumar";
  const mascotaTexto=propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas";
  contenidoHTML += `
    <div class="card" style="width: 18rem; margin: 1rem;">
      <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p class="card-text">${propiedad.direccion}</p>
        <p class="card-text"> Habitaciones: ${propiedad.habitaciones}</p>
        <p class="card-text"> Baños: ${propiedad.baños}</p>
        <p class="card-text">Costo: $${propiedad.costo}</p>
        <p class="card-text">${fumarTexto}</p> 
        <p class="card-text">${mascotaTexto}</p> 
      </div>
    </div>
  `;
}

ventaDiv.innerHTML = contenidoHTML;
