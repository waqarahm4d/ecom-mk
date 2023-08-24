import { Product } from "./types";
import P1 from '/public/p1.png'
import P2 from 'public/p2.png'
import P3 from 'public/p3.png'
import P4 from 'public/feature.webp'
import m3 from 'public/event3.webp'

export const ProductsList:Product[] = [
    {  
        id:'p1',
        name: 'Brushed Raglan Sweatshirt',
        slug: 'brushed-raglan-sweatshirt',
        image: [P1],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "female",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
    {
        id:'p2',
        name: 'Cameryn Sash Tie Dress',
        slug: 'cameryn-sash-tie-dress',
        image: [P1, P3, P2],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "male",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
    {
        id:'p3',
        name: 'Flex Sweatshirt',
        slug: 'flex-sweatshirt',
        image: [P4, m3],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "kids",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
    {
        id:'p4',
        name: 'Brushed Raglan',
        slug: 'brushed-raglan',
        image: [P1, P3],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "female",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
    {
        id:'p5',
        name: 'Flex Shirt',
        slug: 'flex-shirt',
        image: [P2, P3],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "male",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
    {
        id:'p6',
        name: 'Cameryn Sash Tie',
        slug: 'cameryn-sash-tie',
        image: [P1, P3, P2],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "kids",
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        price: 250,
        discounted: 197,
        qty: 1
    },
]