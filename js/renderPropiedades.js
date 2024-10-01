// renderPropiedades.js

function renderizarPropiedades(propiedades, elemento, limite = null) {
    const contenedor = document.getElementById(elemento);
    contenedor.innerHTML = '';

    const propiedadesMostrar = limite ? propiedades.slice(0, limite) : propiedades;

    propiedadesMostrar.forEach(propiedad => {
        const template = `
            <div class="propiedad">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Ubicación: ${propiedad.ubicacion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Precio: $${propiedad.costo}</p>
                <p>Fumar: ${propiedad.smoke ? 'Permitido' : 'Prohibido'}</p>
                <p>Mascotas: ${propiedad.pets ? 'Permitido' : 'Prohibido'}</p>
            </div>
        `;
        contenedor.innerHTML += template;
    });
}

export { renderizarPropiedades };
