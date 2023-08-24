"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import m1 from "public/event1.webp";
import m2 from "public/event2.webp";
import { imageURL } from "../../sanity/lib/client";

interface IImage {
  image: string | string[] | StaticImageData[] | any;
}

function ProductImageThumbnails({ image }: IImage) {
  const [path, setPath] = useState("");
  return (
    <div className="product_images flex-1 flex flex-col items-start md:flex-row">
      <div className="main_image mb-4 md:order-2">
        <Image
          src={path ? path : imageURL(image[0]).url()}
          alt=""
          width={500}
          height={400}
          className="h-[650px] object-cover object-top rounded border border-[#cfcfcf] border-solid"
        />
      </div>
      <div className="thumbnails relative flex flex-row md:flex-col gap-4 px-4 justify-start md:order-1">
        {image.map((thumb: string, i: number) => (
          <Image
            key={i}
            src={imageURL(thumb).url()}
            onMouseEnter={() => setPath(imageURL(thumb).url())}
            alt="thumbnail"
            width={100}
            height={80}
            className="thumbnail h-24 object-cover object-top cursor-pointer rounded border border-[#cfcfcf] hover:border-black border-solid"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImageThumbnails;
