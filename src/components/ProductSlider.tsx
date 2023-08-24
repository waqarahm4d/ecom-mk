'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { ProductsList } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
// import { IProduct, ProductsList } from "@/lib/products";


function ProductSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const getProducts: Product[] = ProductsList
  return (
    <div className="product_slider mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight 1g:text-2x1">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#0062f5] inline-flex" />
        </div>
      </div>
      {/* slider  */}
      <div className="slider p-4">
      <Slider {...settings} className="">
      {getProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              slug={product.slug}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              discounted={product.discounted}
            
            />
          ))}
      </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
