import type { Icon } from 'lucide-astro';
import { CheckCircle, ShieldCheck, Users, Lightbulb, Building } from 'lucide-astro';

export interface Benefit {
    icon: Icon;
    title: string;
    description: string;
}

export const benefitsLists = {
    main: {
        eyebrow: "¿POR QUÉ ELEGIRNOS?",
        title: 'Beneficios de trabajar con nosotros',
        description: 'Descubre por qué somos la mejor opción para tu proyecto. Te ofrecemos tranquilidad, eficiencia y resultados excepcionales.',
        benefits: [
            
            {
                icon: ShieldCheck,
                title: 'Gestión integral de proyectos',
                description: 'Nos encargamos de todo, desde el diseño y los permisos hasta la supervisión de la obra, para que no tengas que preocuparte por nada.'
            },
            {
                icon: Building,
                title: 'Diseño personalizado y funcional',
                description: 'Creamos espacios únicos que reflejan tu estilo y se adaptan a tus necesidades, combinando estética y funcionalidad a la perfección.'
            },
            {
                icon: Users,
                title: 'Cumplimiento normativo asegurado',
                description: 'Navegamos la complejidad de las regulaciones y permisos para garantizar que tu proyecto cumpla con toda la normativa vigente, evitando multas y retrasos.'
            }
        ]
    }
};
