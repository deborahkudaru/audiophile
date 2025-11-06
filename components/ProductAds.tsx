"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const slugify = (name: string) =>
  name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProductAds() {
  const zx9Ref = useRef(null);
  const zx7Ref = useRef(null);
  const yx1Ref = useRef(null);

  const zx9InView = useInView(zx9Ref, { once: true });
  const zx7InView = useInView(zx7Ref, { once: true });
  const yx1InView = useInView(yx1Ref, { once: true });

  return (
    <div className="lg:px-20 md:px-10 px-5">
      {/* ZX9 SPEAKER Section */}
      <motion.section
        ref={zx9Ref}
        className="relative text-white bg-primary rounded-lg grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-8 md:px-20 py-16 lg:py-10 overflow-hidden mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={zx9InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative circles - centered on mobile, behind image on desktop */}
        <div className="absolute left-1/2 lg:left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10 z-0"></div>
        <div className="absolute left-1/2 lg:left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/10 z-0"></div>
        <div className="absolute left-1/2 lg:left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/10 z-0"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={
            zx9InView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={"/images/speaker.png"}
            alt="ZX9 Speaker"
            width={410.23}
            height={493}
            className="relative lg:top-20 z-10 w-auto lg:h-[493px] md:h-[237px] h-[200px] mx-auto lg:mx-0"
          />
        </motion.div>

        <motion.div
          className="pb-16 relative z-10 w-full max-w-[349px] m-auto lg:m-0 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={zx9InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-bold text-[36px] md:text-[56px] leading-tight">
            ZX9 SPEAKER
          </h2>
          <p className="text-[15px] mb-6 mt-4">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/products/${slugify("ZX9 SPEAKER")}`}
              className="bg-black text-white px-8 font-bold text-[13px] py-3 hover:bg-gray-800 transition inline-block"
              aria-label="See ZX9 Speaker product page"
            >
              SEE PRODUCT
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ZX7 SPEAKER Section */}
      <motion.section
        ref={zx7Ref}
        className="relative rounded-lg overflow-hidden mb-12 h-60 md:h-80"
        initial={{ opacity: 0, x: -50 }}
        animate={zx7InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* flipped container */}
        <div className="absolute inset-0 transform scale-x-[-1]">
          <Image
            src="/images/image-zero.png"
            alt="ZX7 Speaker"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          className="relative z-10 px-6 md:px-16 py-8 md:py-16 h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={zx7InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="font-bold text-[24px] md:text-[28px] mb-4 md:mb-6">
            ZX7 SPEAKER
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/products/${slugify("ZX7 SPEAKER")}`}
              className="font-bold px-6 md:px-8 py-3 rounded-sm text-[13px] border border-black bg-transparent hover:bg-black hover:text-white transition w-fit inline-block"
              aria-label="See ZX7 Speaker product page"
            >
              SEE PRODUCT
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* YX1 EARPHONES Section */}
      <motion.section
        ref={yx1Ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={yx1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="rounded-lg overflow-hidden relative h-60 md:h-80"
          initial={{ opacity: 0, x: -30 }}
          animate={yx1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={"/images/image-one.png"}
            alt="YX1 Earphones"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="bg-gray-light rounded-lg flex flex-col justify-center px-6 md:px-16 py-12 md:py-0"
          initial={{ opacity: 0, x: 30 }}
          animate={yx1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[24px] md:text-[28px] font-bold mb-4 md:mb-6">
            YX1 EARPHONES
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/products/${slugify("YX1 WIRELESS EARPHONES")}`}
              className="border border-black px-6 md:px-8 py-3 w-fit font-bold text-[13px] hover:bg-black hover:text-white transition inline-block"
              aria-label="See YX1 Earphones product page"
            >
              SEE PRODUCT
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
