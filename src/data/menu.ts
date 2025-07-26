// src/data/menu.ts
export const headerMenu = [
    { name: 'Nuestros Servicios', link: '/style-guide', showArrow: false,
        children: [
            { name: 'Proyectos de Arquitectura', link: '/servicios/proyectos-arquitectura' },
            { name: 'Regularizaciones', link: '/servicios/regularizaciones' },
            { name: 'Diseño Arquitectónico', link: '/servicios/diseno-arquitectonico' }
        ]
    },
    { name: 'Sobre +Arq', link: '/nosotros' }

];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

