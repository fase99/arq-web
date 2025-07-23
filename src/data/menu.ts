// src/data/menu.ts

export const headerMenu = [
    { name: 'Nuestros Servicios', link: '/style-guide', showArrow: false,
        children: [
            { name: 'Servicio Basico', link: '/style-guide#typography' },
            { name: 'Servicio Intermedio', link: '/style-guide#colors' },
            { name: 'Servicio Avanzado', link: '/style-guide#links' },
            { name: 'Servicio Avanzado+', link: '/style-guide#buttons' }
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

