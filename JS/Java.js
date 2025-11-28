const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // 1. Alternar (Toggle) la clase nav-active
        nav.classList.toggle('nav-active');

        // 2. Animar los enlaces
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // El retraso (delay) hace que aparezcan uno tras otro
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 3. Animación del icono de hamburguesa
        burger.classList.toggle('toggle');
    });
}

// Ejecutar la función principal
navSlide();



// ... (código anterior del menú hamburguesa) ...

// Script para el carrusel de videos
const scrollContainer = document.querySelector('.video-scroll-container');
const btnAtras = document.querySelector('.btn-atras');
const btnAdelante = document.querySelector('.btn-adelante');

if(scrollContainer && btnAtras && btnAdelante) {
    btnAdelante.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    btnAtras.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
}