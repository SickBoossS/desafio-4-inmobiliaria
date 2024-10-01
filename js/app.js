// Arreglos con las propiedades
const propiedadesVenta = [
    {
        nombre: 'Casa en la Playa',
        src: 'img/casa_playa.jpg',
        descripcion: 'Hermosa casa frente al mar.',
        ubicacion: 'Viña del Mar',
        habitaciones: 3,
        costo: 120000,
        smoke: false,
        pets: true
    },
    // Agrega más propiedades...
];

const propiedadesAlquiler = [
    {
        nombre: 'Departamento en Santiago',
        src: 'img/departamento_santiago.jpg',
        descripcion: 'Departamento céntrico y moderno.',
        ubicacion: 'Santiago Centro',
        habitaciones: 2,
        costo: 85000,
        smoke: true,
        pets: false
    },
    // Agrega más propiedades...
];

// Función para renderizar las propiedades
function renderizarPropiedades(propiedades, idContenedor, limite = 0) {
    const contenedor = document.getElementById(idContenedor);
    let propiedadesAMostrar = propiedades;

    if (limite > 0) {
        propiedadesAMostrar = propiedades.slice(0, limite);
    }

    propiedadesAMostrar.forEach(propiedad => {
        const template = `
            <div class="propiedad">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Costo: $${propiedad.costo}</p>
                <p>${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
                <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
            </div>
        `;
        contenedor.innerHTML += template;
    });
}

// Función para redireccionar a todas las propiedades
function verTodas(tipo) {
    if (tipo === 'venta') {
        window.location.href = 'propiedades_venta.html';
    } else if (tipo === 'alquiler') {
        window.location.href = 'propiedades_alquiler.html';
    }
}

// Renderiza en la página principal
if (document.getElementById('lista-venta')) {
    renderizarPropiedades(propiedadesVenta, 'lista-venta', 3);
}

if (document.getElementById('lista-alquiler')) {
    renderizarPropiedades(propiedadesAlquiler, 'lista-alquiler', 3);
}

// Renderiza en las páginas de venta y alquiler
if (document.getElementById('lista-venta')) {
    renderizarPropiedades(propiedadesVenta, 'lista-venta');
}

if (document.getElementById('lista-alquiler')) {
    renderizarPropiedades(propiedadesAlquiler, 'lista-alquiler');
}
