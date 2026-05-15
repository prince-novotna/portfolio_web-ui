import { writable, derived } from 'svelte/store';

/**
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Cat Capat: Legume Chips informational pamphlet, 2024",
        description: "Handout pamphlet design for snack brand Cat Capat.",
        category: "design",
        image: "/images/catalogue/legume-chips.jpg",
        alt: "Legume chips info pamphlet design for Cat Capat",
    },
    {
        id: "2",
        title: "Brno University of Technology online lecture overlay, 2023",
        description: "Overlay for Brno University of Technology's youtube reuploads of lectures.", 
        category: "design",
        image: "/images/catalogue/VUT-border.jpg",
        alt: "Youtube video overlay for Brno University of Technology",
    },
    {
        id: "3",
        title: "Mockup of DnD inspired graphic T-shirt, 2023",
        description: "Mockup for a later foil transfer printed T-shirt, inspired by Dungeons & Dragons.",
        category: "design",
        image: "/images/catalogue/alea-shirt.jpg",
        alt: "Graphic T-shirt DnD inspired mockup design",
    },
    {
        id: "4",
        title: "Custom pixel font, 2026",
        description: "Custom 10x10 blocky pixel font, inspired by audio interfaces and arcade game fonts.",
        category: "design",
        image: "/images/catalogue/typeface_specimen.jpg",
        alt: "Typeface speciment of a custom blocky pixel font",
    },
    {
        id: "5",
        title: "Blackout Jack: ashtray asset, 2026",
        description: "Low-poly asset of an ashtray for 3D video game Blackout Jack in collaboration with 4th year students.",
        category: "programming",
        image: "/images/catalogue/ashtray_render.jpg",
        alt: "Low-poly 3D render of an ashtray",
    },
    {
        id: "6",
        title: "Blackout Jack: Moscow Milk asset, 2026",
        description: "Low-poly asset of a milk carton for 3D video game Blackout Jack in collaboration with 4th year students.",
        category: "programming",
        image: "/images/catalogue/milk carton_render.jpg",
        alt: "Low-poly 3D render of a milk carton",
    },
    {
        id: "7",
        title: "Blackout Jack: fuzzy dice asset, 2026",
        description: "Low-poly asset of fuzzy dice for 3D video game Blackout Jack in collaboration with 4th year students.",
        category: "programming",
        image: "/images/catalogue/dice render.jpg",
        alt: "Low-poly 3D render of fuzzy dice",
    },
    {
        id: "8",
        title: "Global Game Jam 2026: Masked Encounters, 2026",
        description: "Art for Global Game Jam 2026 of mask themed game demo - Masked Encounters, a murder mystery dating game.",
        category: "programming",
        image: "/images/catalogue/masked-encounters.jpg",
        alt: "Illustartion of characters from the game Masked Encounters",
    },
    {
        id: "9",
        title: "DnD inspired bust illustration, 2025",
        description: "Bust illustration of personal Dungeons & Dragons character - Xan'dhur, a necromancer tiefling.",
        category: "art",
        image: "/images/catalogue/xandhur.jpg",
        alt: "Drawing of a young adult DnD tiefling winking and smiling",
    },
    {
        id: "10",
        title: "3D model of glass teacup, 2026",
        description: "3D model of a glass teacup half-full of orange juice for a class project.",
        category: "art",
        image: "/images/catalogue/teacup_render.jpg",
        alt: "3D model of a glass teacup half-full of an orange liquid",
    },
    {
        id: "11",
        title: "Sketch, 2026",
        description: "Sketch from memory.",
        category: "art",
        image: "/images/catalogue/sketch.jpg",
        alt: "shaded sketch of a man from the front and up-close profile",
    },
    {
        id: "12",
        title: "Action pose form sketches, 2025",
        description: "Rough sketches of an action pose from different angles for a class project.",
        category: "art",
        image: "/images/catalogue/wuxia-sketch.jpg",
        alt: "sketches of action pose with sword from different angles",
    },
    {
        id: "13",
        title: "3D model of book, 2025",
        description: "3D model of a hard-cover book for a class project.",
        category: "art",
        image: "/images/catalogue/book_render.jpg",
        alt: "3D model of a book with dramatic lighting",
    },
    {
        id: "14",
        title: "Gavis Bettel Bettelgoose Birthday Bash contribution, 2024",
        description: "Drawn contribution for the 2024 Gavis Bettel birthday fan project.",
        category: "art",
        image: "/images/catalogue/bettel-goose.jpg",
        alt: "Drawing of a goose with a Gavis Bettel hat and neck scarf and a cupcake",
    },
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
