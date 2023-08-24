import P1 from 'public/p1.png'
import P2 from 'public/p2.png'
import P3 from 'public/p3.png'
import P4 from 'public/feature.webp'
import m1 from 'public/event1.webp'
import m2 from 'public/event2.webp'
import m3 from 'public/event3.webp'
import { StaticImageData } from 'next/image'

export interface ICategory {
    id:string,
    name: string,
    slug: string,
    image: StaticImageData | string
}

export const CategoryList:ICategory[] = [
    {
        id:'c1',
        name: 'Male',
        slug: 'male',
        image: m2
    },
    {
        id:'c2',
        name: 'Female',
        slug: 'female',
        image: P2
    },
    {
        id:'c3',
        name: 'Kids',
        slug: 'kids',
        image: m3
    },
    {
        id:'c4',
        name: 'Sports',
        slug: 'sports',
        image: P1
    }
]