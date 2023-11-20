// const FRIDGES = {
//     name: "Fridges",
//     items: []
// };
const LAPTOPS = {
    name: "Labtops",
    items: []
};
const FURNITURE = {
    name: "Furniture",
    items: []
};
const HAIR = {
    name: "Self Care",
    items: []
};
const TABLETS = {
    name: "Tablets",
    items: []
};
// const WATER = {
//     name: "Water Dispensers",
//     items: []
// };
// const TV = {
//     name: "TV",
//     items: []
// };

const AUDIO_EQUIPMENT = {
    name: "Audio Equipment",
    items: []

};
const HOMEGOODS = {
    name: "Home Goods",
    items: []
};

// for (let i = 0; i < 7; i++) {
//     FRIDGES.items.push({
//         className: `respond-product`,
//         src: `./products/fridges/pic${i}.jpg`,
//     })
// }
for (let i = 0; i < 4; i++) {
    LAPTOPS.items.push({
        className: `respond-product`,
        src: `./products/laptops/pic${i}.jpg`,
    })
}
for (let i = 0; i < 3; i++) {
    FURNITURE.items.push({
        className: `respond-product`,
        src: `./products/furniture/pic${i}.jpg`,
    })
}
for (let i = 0; i < 1; i++) {
    HAIR.items.push({
        className: `respond-product`,
        src: `./products/hair/pic${i}.jpg`,
    })
}
for (let i = 0; i < 1; i++) {
    TABLETS.items.push({
        className: `respond-product`,
        src: `./products/tablets/pic${i}.jpg`,
    })
}
// for (let i = 0; i < 3; i++) {
//     WATER.items.push({
//         className: `respond-product`,
//         src: `./products/water/pic${i}.jpg`,
//     })
//}
// for (let i = 0; i < 1; i++) {
//     TV.items.push({
//         className: `respond-product`,
//         src: `./products/tv/pic${i}.jpg`,
//     })
//}
for (let i = 0; i < 8; i++) {
    HOMEGOODS.items.push({
        className: `respond-product`,
        src: `./products/home_goods/pic${i}.jpg`,
    })
}
for (let i = 0; i < 2; i++) {
    AUDIO_EQUIPMENT.items.push({
        className: `respond-product`,
        src: `./products/speakers/pic${i}.jpg`,
    })
}

export const PRODUCTS = [
    //FRIDGES, 
    LAPTOPS,
    FURNITURE,
    HAIR,
    TABLETS,
    // WATER,
    // TV,
    HOMEGOODS,
    AUDIO_EQUIPMENT
]
