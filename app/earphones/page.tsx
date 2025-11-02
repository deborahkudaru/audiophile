"use client";

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Earphones() {
  const products = useQuery(api.products.getProductsByCategory, {
    category: "earphones",
  }) as Product[] | undefined;

  const yx1Earphones = products?.find(
    (product) => product.slug === "yx1-wireless-earphones"
  );

  // Loading state
  if (products === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading earphones...</p>
        </div>
      </div>
    );
  }

  const otherProducts = products?.filter(
    (product) => product.slug !== "yx1-wireless-earphones"
  );

  return (
    <div className="">
      <motion.h1
        className="font-bold text-white bg-dark text-[40px] text-center p-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        EARPHONES
      </motion.h1>

      {/* Main YX1 Earphones Section */}
      {yx1Earphones && (
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {yx1Earphones.isNew && (
              <motion.p
                className="text-primary text-sm font-bold tracking-[10px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                NEW PRODUCT
              </motion.p>
            )}
            <motion.h2
              className="font-bold text-[40px] leading-11"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {yx1Earphones.name.toUpperCase()}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {yx1Earphones.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${yx1Earphones.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}

      {/* Other Earphones Grid Section */}
      <motion.section
        className="lg:px-20 md:px-10 px-5 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProducts?.map((product, index) => (
            <motion.div
              key={product._id}
              className="bg-gray-light rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </motion.div>
              <h3 className="font-bold text-lg mb-4">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {product.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ProductCategory />
      <About />
    </div>
  );
}
