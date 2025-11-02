"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:px-20 md:px-10 px-5 items-center lg:py-32 py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Text Content */}
      <motion.div
        className="lg:w-[445px] text-center lg:text-left m-auto lg:m-0 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold text-[40px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </motion.h1>
        <motion.p
          className="text-[15px] leading-[26px] text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="relative w-full lg:h-[600px] h-[300px] rounded-lg overflow-hidden grayscale order-1 lg:order-2"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 50, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.4 },
        }}
      >
        <Image
          src={"/images/image-two.png"}
          alt="About Image"
          fill
          className="object-cover scale-150 object-left"
        />
      </motion.div>
    </motion.div>
  );
}
