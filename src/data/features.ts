import * as Icons from 'lucide-astro';
// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Icons.Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Icons.Building2,
                title: 'Proyectos de Arquitectura',
                description: 'Desarrollamos anteproyectos, permisos, especialidades, supervisión y ejecición de obras.'
            },
            {
                icon: Icons.Shield,
                title: 'Regularizaciones',
                description: 'Normalizamos tu propiedad ante la DOM, el SII y las entidades correspondientes. Rápido y sin complicaciones.'
            },
            {
                icon: Icons.PencilRuler,
                title: 'Diseño Arquitectónico',
                description: 'Creamos espacios funcionales, estéticos y únicos. Del diseño a la realidad, cuidando cada detalle.'
            },
            {
                icon: Icons.Lightbulb,
                title: 'Consultoría Especializada',
                description: 'Equipo multidisciplinario con años de experiencia. Soluciones personalizadas para cada proyecto arquitectónico.'            
            }
        ]
    }
};
