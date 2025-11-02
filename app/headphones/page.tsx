"use client"

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product";

export default function Headphone() {
  const products = useQuery(api.products.getProductsByCategory, {
    category: "headphones",
  }) as Product[] | undefined;

  // Get the specific headphones in the order they should appear
  const xx99MarkII = products?.find(product => product.slug === "xx99-mark-ii-headphones");
  const xx99MarkI = products?.find(product => product.slug === "xx99-mark-i-headphones");
  const xx59 = products?.find(product => product.slug === "xx59-headphones");

  // Loading state
  if (products === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading headphones...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        HEADPHONES
      </h1>
      
      {/* XX99 Mark II Headphones Section */}
      {xx99MarkII && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center">
            <div
              className="w-[349px] h-[386px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={xx99MarkII.image}
                alt={xx99MarkII.name}
                width={349.24}
                height={386}
                className="object-contain w-full h-full md:h-[243px] md:w-[220px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left">
            {xx99MarkII.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {xx99MarkII.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {xx99MarkII.description}
            </p>
            <div>
              <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </section>
      )}

      {/* XX99 Mark I Headphones Section */}
      {xx99MarkI && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left order-2 lg:order-1">
            {xx99MarkI.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {xx99MarkI.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {xx99MarkI.description}
            </p>
            <div>
              <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
                SEE PRODUCT
              </button>
            </div>
          </div>

          <div className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center order-1 lg:order-2">
            <div
              className="w-[349px] h-[386px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={xx99MarkI.image}
                alt={xx99MarkI.name}
                width={349.24}
                height={386}
                className="object-contain w-full h-full md:h-[243px] md:w-[220px]"
              />
            </div>
          </div>
        </section>
      )}

      {/* XX59 Headphones Section */}
      {xx59 && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center">
            <div
              className="w-[349px] h-[386px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={xx59.image}
                alt={xx59.name}
                width={349.24}
                height={386}
                className="object-contain w-full h-full md:h-[243px] md:w-[220px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left">
            {xx59.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {xx59.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {xx59.description}
            </p>
            <div>
              <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </section>
      )}
      
      <ProductCategory />
      <About />
    </div>
  );
}