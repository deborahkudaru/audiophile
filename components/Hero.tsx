"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-dark text-white">
      {/* Mobile/Tablet View */}
      <div className="lg:hidden relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1.25 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Content with Staggered Animation */}
        <div className="relative z-10 min-h-[600px] flex items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-[398px] flex flex-col gap-6 text-center lg:mx-0 md:mx-0 mx-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.p
              className="text-sm text-white/50 tracking-[10px] font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NEW PRODUCT
            </motion.p>
            <motion.h1
              className="font-bold text-4xl leading-tight tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              XX99 MARK II HEADPHONES
            </motion.h1>
            <motion.p
              className="font-medium text-[15px] leading-[25px] text-white/75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/products/xx99-mark-ii-headphones">
                <motion.button
                  className="bg-primary font-bold text-[13px] tracking-wider py-4 px-8 hover:bg-opacity-90 transition"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEE PRODUCT
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop View (Updated) */}
      <div className="hidden lg:flex justify-between items-center px-20 relative overflow-hidden min-h-[750px]">
        {/* Left Content */}
        <motion.div
          className="max-w-[420px] flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            className="text-sm text-white/50 tracking-[10px] font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NEW PRODUCT
          </motion.p>
          <motion.h1
            className="font-bold text-[60px] leading-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            XX99 MARK II HEADPHONES
          </motion.h1>
          <motion.p
            className="font-semibold text-[16px] leading-7 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/products/xx99-mark-ii-headphones">
              <motion.button
                className="bg-primary font-bold text-[13px] py-3 px-8 hover:bg-primary-light"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FBAF85",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                SEE PRODUCT
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image (Cropped + Taller Section) */}
        <motion.div
          className="relative w-[560px] h-[680px] overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={540}
            height={588}
            priority
            className="object-cover object-center scale-[1.18]"
          />
        </motion.div>
      </div>
    </div>
  );
}
