import { StaticImageData } from "next/image"

export type Product = {
    id: string,
    name: string,
    image: string | string[] | StaticImageData[], 
    slug: string,
    price: number,
    discounted?: number,
    category: string, 
    description: string, 
    size: string[],
    color: string[],
    qty: number
}
export type Cart = {
    id: string,
    name: string,
    image: string | StaticImageData, 
    slug: string,
    price: number,
    discounted?: number | undefined,
    category: string,
    size: string,
    color: string,
    qty: number,
    uuid: string | number | undefined
}