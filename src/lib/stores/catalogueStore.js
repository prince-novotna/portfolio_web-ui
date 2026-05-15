import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Čát Čapát: Legume Chips informational pamphlet, 2024",
        description: "Protesters have flooded the streets of Dublin as fuel prices skyrocket.",
        category: "design",
        tags: ["politics", "local"],
        featured: false,
        image: "/images/catalogue/legume-chips.jpg",
        alt: "Legume chips info pamphlet design for Cat Capat",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "2",
        title: "Brno University of Technology online lecture overlay, 2023",
        description: "Journalists scramble as they try to ucover the secret of what has upset Obama. ", 
        category: "design",
        tags: ["sad", "politics"],
        featured: false,
        image: "/images/catalogue/VUT-border.jpg",
        alt: "Youtube video overlay for Brno University of Technology",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "3",
        title: "Mockup of DnD inspired graphic T-shirt, 2023",
        description: "A professional harp-lover recounts falling in love with an instrument",
        category: "design",
        tags: ["music", "love"],
        featured: true,
        image: "/images/catalogue/alea-shirt.jpg",
        alt: "Graphic T-shirt DnD inspired mockup design",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "4",
        title: "Custom pixel font, 2026",
        description: "Taxes are NOT fun, multiple witnesses state.",
        category: "design",
        tags: ["sad", "money"],
        featured: true,
        image: "/images/catalogue/typeface_specimen.jpg",
        alt: "Typeface speciment of a custom blocky pixel font",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "5",
        title: "Blackout Jack: ashtray asset, 2026",
        description: "A calming walk in the woods results in instantaneous self-combustion.",
        category: "programming",
        tags: ["nature", "radiation", "local warming"],
        featured: true,
        image: "/images/catalogue/ashtray_render.jpg",
        alt: "Low-poly 3D render of an ashtray",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "6",
        title: "Blackout Jack: Moscow Milk asset, 2026",
        description: "People came to watch a coupel of lads jam it out with some instruments.",
        category: "programming",
        tags: ["gorilla", "concert", "local"],
        featured: false,
        image: "/images/catalogue/milk carton_render.jpg",
        alt: "Low-poly 3D render of a milk carton",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "7",
        title: "Blackout Jack: fuzzy dice asset, 2026",
        description: "Howl with the wolves like Maroon 5.",
        category: "programming",
        tags: ["mindfulness", "love", "mental clarity"],
        featured: false,
        image: "/images/catalogue/dice render.jpg",
        alt: "Low-poly 3D render of fuzzy dice",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "8",
        title: "Global Game Jam 2026: Masked Encounters, 2026",
        description: "Separating recyclable materials like a boss.",
        category: "programming",
        tags: ["nature", "local"],
        featured: false,
        image: "/images/catalogue/masked-encounters.jpg",
        alt: "Illustartion of characters from the game Masked Encounters",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "9",
        title: "DnD inspired bust illustration, 2025",
        description: "Nely opened seafood restaurant in Dublin wins an award thanks to delightful fish dish",
        category: "art",
        tags: ["fish", "food"],
        featured: false,
        image: "/images/catalogue/xandhur.jpg",
        alt: "Drawing of a young adult DnD tiefling winking and smiling",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "10",
        title: "3D model of glass teacup, 2026",
        description: "A different onlook on games as more of a learning tool rather than something harmful.",
        category: "art",
        tags: ["internet", "childcare",],
        featured: false,
        image: "/images/catalogue/teacup_render.jpg",
        alt: "3D model of a glass teacup half-full of an orange liquid",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "11",
        title: "Sketch, 2026",
        description: "The oldest captive gorilla from Berlin ZOO turns 69 years old.",
        category: "art",
        tags: ["animals", "gorilla"],
        featured: false,
        image: "/images/catalogue/sketch.jpg",
        alt: "shaded sketch of a man from the front and up-close profile",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "12",
        title: "Action pose form sketches, 2025",
        description: "Oh yeah, this fish can drive, baby.",
        category: "art",
        tags: ["fish", "world record"],
        featured: false,
        image: "/images/catalogue/wuxia-sketch.jpg",
        alt: "sketches of action pose with sword from different angles",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "13",
        title: "3D model of book, 2025",
        description: "A humanoid robot arrested after expressed agression towards an eldery woman.",
        category: "art",
        tags: ["robot", "police"],
        featured: false,
        image: "/images/catalogue/book_render.jpg",
        alt: "3D model of a book with dramatic lighting",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    {
        id: "14",
        title: "Gavis Bettel Bettelgoose Birthday Bash contribution, 2024",
        description: "A UFO (Unidentified Flying Object) spotted flying over New York City leaves conspiracists stunned.",
        category: "art",
        tags: ["UFO", "conspiracy"],
        featured: false,
        image: "/images/catalogue/bettel-goose.jpg",
        alt: "Drawing of a goose with a Gavis Bettel hat and neck scarf and a cupcake",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    },
    /*{
        id: "15",
        title: "Titanic exhibition reopens its doors",
        description: "Beloved exhibition about the infamous sunken cruise reopens after massive success.",
        category: "entertainment",
        tags: ["museum", "learning"],
        featured: false,
        image: "/images/catalogue/item-15.png",
        alt: "Closeup photograph of Titanic model",
        article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget imperdiet eros. Praesent at elit ex. Mauris id dignissim nulla, ac malesuada purus. Nulla facilisi. Nullam ex lorem, ornare sed augue quis, ornare posuere mi. Fusce ultrices volutpat nulla sed efficitur. Curabitur eget nulla rutrum lorem feugiat condimentum. Nunc cursus non velit vitae ornare. Nulla quam dui, porttitor et dui eget, sodales dignissim odio. Vestibulum nibh nulla, interdum in tortor bibendum, dapibus congue dolor. In tincidunt diam ut dolor porttitor tincidunt.",
                    "Mauris non diam sed ante laoreet iaculis. Donec pellentesque augue mauris, sit amet viverra nisl condimentum vel. Maecenas rhoncus arcu sit amet nisi malesuada, vel lacinia elit sagittis. Etiam iaculis consequat dignissim. Donec sagittis, mi eget tincidunt euismod, est neque volutpat ipsum, non sodales risus mauris a justo. Quisque at nisl ultrices, sodales risus vel, ultricies leo. Etiam sagittis sit amet ligula a hendrerit. In massa eros, semper a bibendum nec, viverra eget velit. Suspendisse id leo eros.",
                    "Nulla vitae sem imperdiet, pharetra elit vitae, placerat tellus. Morbi pretium placerat mauris, at ultrices urna accumsan at. Maecenas cursus finibus mauris, non auctor sapien sodales facilisis. Etiam quis quam sed augue rhoncus suscipit eu quis erat. Donec eu rutrum erat. Proin eleifend aliquam erat ut tempor. Proin fringilla consequat metus eget tempus. Fusce varius dui sit amet justo hendrerit, vitae rutrum turpis tempor. Nam bibendum sem enim, id scelerisque nisl commodo quis. Mauris ut velit vestibulum, iaculis ligula et, vulputate erat. Morbi posuere eu dui eget consectetur. Nunc efficitur, lacus a condimentum auctor, ex dolor fermentum enim, quis consequat diam erat id massa. Sed ac tincidunt velit, vel viverra ipsum.",
                    "Sed vitae felis faucibus, maximus erat et, imperdiet lorem. Cras imperdiet laoreet lorem. Fusce euismod tortor a urna sodales, sit amet cursus ante pulvinar. Fusce nunc est, placerat vitae placerat vel, cursus eu sem. Nulla a neque dolor. Pellentesque ex dolor, pharetra eget nisi id, blandit ullamcorper quam. Curabitur vel mauris a velit viverra auctor. Ut in odio eget tellus pulvinar luctus id viverra dolor. Etiam cursus dui nec nisi suscipit vestibulum. Sed lobortis, quam non eleifend tempor, orci mi pretium metus, sit amet volutpat lectus tellus convallis odio. Aliquam id justo a magna dictum feugiat. Duis auctor urna non leo euismod, quis mollis enim posuere. Sed turpis ipsum, laoreet nec velit a, varius malesuada odio."]
    }*/
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
