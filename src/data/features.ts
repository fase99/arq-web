import * as Icons from 'lucide-astro';
import edificioImg from '@assets/images/edificio.jpg';
import defaultHeroImg from '@assets/images/home/default-hero.jpg';
import developerImg from '@assets/images/home/developer.jpg';
import proyectoImg from '@assets/images/proyecto.png';
import regulaImg from '@assets/images/regularizacion.jpg';
import diseñoImg from '@assets/images/diseño.png';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Icons.Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    image?: string | ImageMetadata;
}

export interface FeatureList {
    id: string;
    features: Feature[];
    displayType?: 'grid' | 'carousel';
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        displayType: 'carousel',
        features: [
            {
                icon: Icons.Building2,
                title: 'Proyectos de Arquitectura',
                description: 'Desarrollamos anteproyectos, permisos, especialidades, supervisión y ejecución de obras. Desde la concepción hasta la entrega final.',
                image: proyectoImg
            },
            {
                icon: Icons.FileCheck,
                title: 'Regularizaciones',
                description: 'Normalizamos tu propiedad ante la DOM, el SII y las entidades correspondientes. Proceso rápido y sin complicaciones legales.',
                image: regulaImg
            },
            {
                icon: Icons.PencilRuler,
                title: 'Diseño Arquitectónico',
                description: 'Creamos espacios funcionales, estéticos y únicos. Del concepto inicial a la realidad, cuidando cada detalle del diseño.',
                image: diseñoImg
            }
        ]
    }
};
