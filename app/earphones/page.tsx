"use client"

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product"; 

export default function Earphones() {
  const products = useQuery(api.products.getProductsByCategory, {
    category: "earphones",
  }) as Product[] | undefined;

  const yx1Earphones = products?.find(
    (product) => product.slug === "yx1-wireless-earphones"
  );

  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        EARPHONES
      </h1>

      {yx1Earphones && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center">
            <div
              className="w-[349px] h-[386px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={yx1Earphones.image}
                alt={yx1Earphones.name}
                width={421}
                height={381}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left">
            {yx1Earphones.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {yx1Earphones.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {yx1Earphones.description}
            </p>
            <div>
              <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="lg:px-20 md:px-10 px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            ?.filter((product) => product.slug !== "yx1-wireless-earphones")
            .map((product) => (
              <div
                key={product._id}
                className="bg-gray-light rounded-lg p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-4">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>
                <button className="bg-primary text-white px-6 py-2 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
                  SEE PRODUCT
                </button>
              </div>
            ))}
        </div>
      </section>

      <ProductCategory />
      <About />
    </div>
  );
}
