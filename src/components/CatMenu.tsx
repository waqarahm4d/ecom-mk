import { ICategory } from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CatMenu(props: ICategory) {
  return (
    <li className="w-[90%] m-auto text-center">
      <Link
        href={`/category/${props.slug}`}
        className="block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <Image
                    src={props.image}
                    alt="Tops"
                    className="duration-500 m-auto group-hover:scale-125 w-[100px] h-[105px] object-contain rounded-full shadow-slate-400"
                />
        <div className="text-sm m-auto rounded-full border-gray-400 p-2 border border-solid font-medium leading-none">{props.name}</div>
                
      </Link>
    </li>
  );
}

export default CatMenu;
