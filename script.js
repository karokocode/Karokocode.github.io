document.addEventListener('DOMContentLoaded', async () => {
    console.log('La página se ha cargado completamente.');
    try {
        const response = await fetch('poemas.json');
        if (!response.ok) {
            throw new Error('Red no disponible');
        }
        const poemas = await response.json();
        const container = document.querySelector('.container');
        poemas.forEach((poema, index) => {
            const quoteDiv = document.createElement('div');
            quoteDiv.className = 'quote';
            quoteDiv.innerHTML = `
                <p>${poema.text}</p>
                <p class="author">- ${poema.author}</p>
            `;
            container.appendChild(quoteDiv);
            // Añadir una pequeña demora para la animación
            setTimeout(() => {
                quoteDiv.classList.add('show');
            }, 100 * index);
        });
    } catch (error) {
        console.error('Error al cargar los poemas:', error);
    }
});
