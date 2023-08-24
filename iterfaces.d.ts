import { Image } from "sanity";

export interface CartProduct {
    _id: string;
    name: string;
    price: number;
    totalPrice: number;
    category: string;
    image: Array<Image>;
    userId: string;
    quantity: number;
}