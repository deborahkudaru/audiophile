"use client";

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product";
import Link from "next/link";

export default function SPEAKERS() {
  const products = useQuery(api.products.getProductsByCategory, {
    category: "speakers",
  }) as Product[] | undefined;

  // Get the specific speakers in the order they should appear
  const zx9Speaker = products?.find(
    (product) => product.slug === "zx9-speaker"
  );
  const zx7Speaker = products?.find(
    (product) => product.slug === "zx7-speaker"
  );

  // Loading state
  if (products === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading speakers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        SPEAKERS
      </h1>

      {/* ZX9 SPEAKER Section */}
      {zx9Speaker && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center">
            <div
              className="w-[349px] h-[386px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={zx9Speaker.image}
                alt={zx9Speaker.name}
                width={291.24}
                height={350}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left">
            {zx9Speaker.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {zx9Speaker.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {zx9Speaker.description}
            </p>

            <div>
              <Link
                href={`/products/${zx9Speaker.slug}`}
                className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ZX7 SPEAKER Section */}
      {zx7Speaker && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20">
          <div className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left order-2 lg:order-1">
            {zx7Speaker.isNew && (
              <p className="text-primary text-sm font-bold tracking-[10px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] leading-11">
              {zx7Speaker.name.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[25px] text-gray-600">
              {zx7Speaker.description}
            </p>

            <div>
              <Link
                href={`/products/${zx7Speaker.slug}`}
                className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
              >
                SEE PRODUCT
              </Link>
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
                src={zx7Speaker.image}
                alt={zx7Speaker.name}
                width={291.24}
                height={350}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      <ProductCategory />
      <About />
    </div>
  );
}
