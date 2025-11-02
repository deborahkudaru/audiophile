"use client";

import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Product } from "@/types/product";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Headphone() {
  const products = useQuery(api.products.getProductsByCategory, {
    category: "headphones",
  }) as Product[] | undefined;

  // Get the specific headphones in the order they should appear
  const xx99MarkII = products?.find(
    (product) => product.slug === "xx99-mark-ii-headphones"
  );
  const xx99MarkI = products?.find(
    (product) => product.slug === "xx99-mark-i-headphones"
  );
  const xx59 = products?.find((product) => product.slug === "xx59-headphones");

  // Refs for scroll animations
  const markIIRef = useRef(null);
  const markIRef = useRef(null);
  const xx59Ref = useRef(null);

  const markIIInView = useInView(markIIRef, { once: true });
  const markIInView = useInView(markIRef, { once: true });
  const xx59InView = useInView(xx59Ref, { once: true });

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
      <motion.h1
        className="font-bold text-white bg-dark text-[40px] text-center p-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        HEADPHONES
      </motion.h1>

      {/* XX99 Mark II Headphones Section */}
      {xx99MarkII && (
        <motion.section
          ref={markIIRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={markIIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={
              markIIInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={
              markIIInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {xx99MarkII.isNew && (
              <motion.p
                className="text-primary text-sm font-bold tracking-[10px]"
                initial={{ opacity: 0 }}
                animate={markIIInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                NEW PRODUCT
              </motion.p>
            )}
            <motion.h2
              className="font-bold text-[40px] leading-11"
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {xx99MarkII.name.toUpperCase()}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {xx99MarkII.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${xx99MarkII.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}

      {/* XX99 Mark I Headphones Section */}
      {xx99MarkI && (
        <motion.section
          ref={markIRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={markIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={
              markIInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {xx99MarkI.isNew && (
              <motion.p
                className="text-primary text-sm font-bold tracking-[10px]"
                initial={{ opacity: 0 }}
                animate={markIInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                NEW PRODUCT
              </motion.p>
            )}
            <motion.h2
              className="font-bold text-[40px] leading-11"
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {xx99MarkI.name.toUpperCase()}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {xx99MarkI.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                markIInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${xx99MarkI.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={markIInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
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
          </motion.div>
        </motion.section>
      )}

      {/* XX59 Headphones Section */}
      {xx59 && (
        <motion.section
          ref={xx59Ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 items-center py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={xx59InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="bg-gray-light rounded-lg lg:p-10 lg:px-0 py-5 px-7 flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={xx59InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 lg:w-[445px] lg:mx-0 mx-auto text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={xx59InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {xx59.isNew && (
              <motion.p
                className="text-primary text-sm font-bold tracking-[10px]"
                initial={{ opacity: 0 }}
                animate={xx59InView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                NEW PRODUCT
              </motion.p>
            )}
            <motion.h2
              className="font-bold text-[40px] leading-11"
              initial={{ opacity: 0, y: 20 }}
              animate={
                xx59InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {xx59.name.toUpperCase()}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[25px] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={
                xx59InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {xx59.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                xx59InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${xx59.slug}`}
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}

      <ProductCategory />
      <About />
    </div>
  );
}
