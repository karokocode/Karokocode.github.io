document.addEventListener('DOMContentLoaded', async () => {
    console.log('La página se ha cargado completamente.');
    try {
        const poemas = await cargarPoemas();
        mostrarPoemas(poemas);
    } catch (error) {
        console.error('Error al cargar los poemas:', error);
    }
});

async function cargarPoemas() {
    const response = await fetch('poemas.json');
    if (!response.ok) {
        throw new Error('Error al obtener los poemas: ' + response.statusText);
    }
    return response.json();
}

function mostrarPoemas(poemas) {
    const container = document.querySelector('.container');
    poemas.forEach((poema, index) => {
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        quoteDiv.innerHTML = `
            <h2>${poema.title}</h2>
            <p>${poema.text}</p>
            <p class="author">- ${poema.author}</p>
        `;
        container.appendChild(quoteDiv);
        setTimeout(() => {
            quoteDiv.classList.add('show');
        }, 100 * index);
    });
}