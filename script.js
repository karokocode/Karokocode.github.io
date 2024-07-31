document.addEventListener('DOMContentLoaded', async () => {
    console.log('La página se ha cargado completamente.')
    const response = await fetch('poemas.json');
    const poemas = await response.json();
    const container = document.querySelector('.container');
    poemas.forEach(poema => {
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        quoteDiv.innerHTML = `
            <p>${poema.text}</p>
            <p class="author">- ${poema.author}</p>
        `;
        container.appendChild(quoteDiv);
    });
});
