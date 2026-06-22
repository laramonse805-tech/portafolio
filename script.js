document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const root = document.documentElement;

    // TEMAS LIMITADOS ÚNICAMENTE A COLORES (Sin tocar fuentes ni cajas)
    const themes = {
        'btn-all': {
            '--bg-page': '#0a0504',       // Warm/Magazine por defecto (1.jpg)
            '--text-main': '#fbf8f5',
            '--text-muted': '#a69f99',
            '--accent-color': '#f07e26',
            '--card-border': '1px solid rgba(251, 248, 245, 0.1)'
        },
        'btn-editorial': {
            '--bg-page': '#130402',       // Resalta la vibra fuego/óxido de 1.jpg
            '--text-main': '#ffece5',
            '--text-muted': '#bfa097',
            '--accent-color': '#cc2b14',  // Rojo intenso
            '--card-border': '1px solid rgba(204, 43, 20, 0.2)'
        },
        'btn-urban': {
            '--bg-page': '#0a0f18',       // Fondo frío/callejero nocturno (2.jpg)
            '--text-main': '#e3f0ff',
            '--text-muted': '#6c8299',
            '--accent-color': '#00d2d3',  // Turquesa Y2K
            '--card-border': '1px solid rgba(0, 210, 211, 0.2)'
        },
        'btn-contrast': {
            '--bg-page': '#000000',       // Negro y Blanco Puro (3.jpg)
            '--text-main': '#ffffff',
            '--text-muted': '#777777',
            '--accent-color': '#f48c06',  // Naranja plano de acento
            '--card-border': '1px solid #222222'
        }
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const buttonId = button.id;

            // Cambiar la atmósfera cromática sin alterar tamaños
            if (themes[buttonId]) {
                Object.entries(themes[buttonId]).forEach(([property, value]) => {
                    root.style.setProperty(property, value);
                });
            }

            // Filtrado clásico de tarjetas
            projectCards.forEach(card => {
                if (buttonId === 'btn-all') {
                    card.classList.remove('hide');
                } else if (buttonId === 'btn-editorial' && card.classList.contains('editorial')) {
                    card.classList.remove('hide');
                } else if (buttonId === 'btn-urban' && card.classList.contains('urban')) {
                    card.classList.remove('hide');
                } else if (buttonId === 'btn-contrast' && card.classList.contains('contrast')) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});