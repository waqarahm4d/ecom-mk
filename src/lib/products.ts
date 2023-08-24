import P1 from 'public/p1.png'
import P2 from 'public/p2.png'
import P3 from 'public/p3.png'
import P4 from 'public/feature.webp'
import E1 from 'public/event3.webp'
import { StaticImageData } from 'next/image'

export interface IProduct {
    id:string,
    name: string,
    slug: string,
    image: StaticImageData[] | string[] | string,
    description: string,
    category: string,
    price: number,
    discounted?: number,
    size: string[],
    color: string[],
    qty: number
}

export const ProductsList:IProduct[] = [
    {
        id:'p1',
        name: 'Brushed Raglan Sweatshirt',
        slug: 'brushed-raglan-sweatshirt',
        image: [P1,E1,P4],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "female",
        price: 230,
        // discounted: 185,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1 
    },
    {
        id:'p2',
        name: 'Cameryn Sash Tie Dress',
        slug: 'cameryn-sash-tie-dress',
        image: [P2,E1,P4],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "male",
        price: 190,
        discounted: 125,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1
    },
    {
        id:'p3',
        name: 'Flex Sweatshirt',
        slug: 'flex-sweatshirt',
        image: [P3,E1,P4],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "kids",
        price: 250,
        discounted: 177,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1
    },
    {
        id:'p4',
        name: 'Brushed Raglan',
        slug: 'brushed-raglan',
        image: [P4,E1,P2],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "female",
        price: 190,
        discounted: 125,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1
    },
    { 
        id:'p5',
        name: 'Flex Shirt',
        slug: 'flex-shirt',
        image: [P1,E1,P4],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "male",
        price: 350,
        discounted: 177,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1
    },
    {
        id:'p6',
        name: 'Cameryn Sash Tie',
        slug: 'cameryn-sash-tie',
        image: [P1,E1,P4],
        description: "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.",
        category: "kids",
        price: 190,
        discounted: 125,
        size: ['S', 'M', 'L' ,'XL'],
        color: ['#ffffff', '#000000', '#e60000'],
        qty: 1
    },
]