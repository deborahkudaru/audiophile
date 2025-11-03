"use client";

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <motion.h1 
        className="font-bold text-white bg-dark text-[40px] text-center p-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        SPEAKERS
      </motion.h1>

      {/* ZX9 SPEAKER Section */}
      {zx9Speaker && (
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
              className="w-[327px] h-[327px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={zx9Speaker.image}
                alt={zx9Speaker.name}
                width={291.24}
                height={350}
                className="object-contain lg:w-[291.24px] lg:h-[350px] md:h-[202px] md:w-[140.62px] h-[202px] w-[140.62px]"
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
            {zx9Speaker.isNew && (
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
              {zx9Speaker.name.toUpperCase()}
            </motion.h2>
            <motion.p 
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {zx9Speaker.description}
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
                  href={`/products/${zx9Speaker.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-primary-light transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}

      {/* ZX7 SPEAKER Section */}
      {zx7Speaker && (
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {zx7Speaker.isNew && (
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
              {zx7Speaker.name.toUpperCase()}
            </motion.h2>
            <motion.p 
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {zx7Speaker.description}
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
                  href={`/products/${zx7Speaker.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-primary-light transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div
              className="w-[327px] h-[327px] flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={zx7Speaker.image}
                alt={zx7Speaker.name}
                width={291.24}
                height={350}
                className="object-contain lg:w-[291px] lg:h-[350px] md:h-[202px] md:w-[140.62px] h-[202px] w-[140.62px]"
              />
            </div>
          </motion.div>
        </motion.section>
      )}

      <ProductCategory />
      <About />
    </div>
  );
}