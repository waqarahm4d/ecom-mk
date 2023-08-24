import { ICategory } from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category(props: ICategory) {
    return (
        <div className="z-[1] mb-7 lg:mb-0 overflow-hidden mx-auto group relative shadow-lg rounded">
            <Link href={`/category/${props.slug}`}>
                <Image
                    src={props.image}
                    alt="Tops"
                    className="rounded duration-500 group-hover:scale-125 h-full object-fill"
                />
                <div
                    className="absolute -bottom-0 lg:-bottom-24 lg:group-hover:bottom-0 duration-500
                            scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead
                            text-center text-mywhite w-full"
                >
                    <h1 className="uppercase">{props.name}</h1>
                </div>
            </Link>
        </div>
    );
}

export default Category;
