document.addEventListener('DOMContentLoaded', () => {
    // MENÚ RESPONSIVE
    const hamburger = document.querySelector('.hamburger');
    const navArea = document.querySelector('.nav-area');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navArea.classList.toggle('active');
        });
    }

    // CERRAR MENÚ AL HACER CLICK EN UN ENLACE (Mejora UX en móvil)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navArea.classList.remove('active');
        });
    });

    // EFECTO SCROLL (OPCIONAL)
    // Reduce un poco el padding del header al bajar para dar más espacio de lectura
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });
});