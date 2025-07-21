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
                icon: Icons.User,
                title: 'Proyectos de Arquitectura',
                description: 'Desarrollamos anteproyectos, permisos, especialidades, supervisión y ejecición de obras.'
            },
            {
                icon: Icons.Shield,
                title: 'Regularizaciones',
                description: 'Normalizamos tu propiedad ante la DOM, el SII y las entidades correspondientes. Rápido y sin complicaciones.'
            },
            {
                icon: Icons.TabletSmartphone,
                title: 'Diseño Arquitectónico',
                description: 'Creamos espacios funcionales, estéticos y únicos. Del diseño a la realidad, cuidando cada detalle.'
            },
            {
                icon: Icons.Smile,
                title: 'Consultoría Especializada',
                description: 'Equipo multidisciplinario con años de experiencia. Soluciones personalizadas para cada proyecto arquitectónico.'            
            }
        ]
    },
    // secondary: {
    //     id: 'secondary',
    //     features: [
    //         {
    //             icon: Heart,
    //             title: 'Made with Love',
    //             description: 'Crafted with attention to detail'
    //         },
    //         {
    //             icon: Coffee,
    //             title: 'Always Fresh',
    //             description: 'Regular updates and improvements'
    //         },
    //         {
    //             icon: Smile,
    //             title: 'User Friendly',
    //             description: 'Intuitive and easy to use'
    //         }
    //     ]
    // }
};
