"use client";

import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRightIcon from "@/public/icons/Arrow";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface Category {
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "HEADPHONES",
    image: "/images/headphone.png",
    link: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: "/images/speaker.png",
    link: "/speakers",
  },
  {
    name: "EARPHONES",
    image: "/images/earphone.png",
    link: "/earphones",
  },
];

export default function Navbar() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark relative">
      <nav className="flex justify-between text-white py-6 items-center px-5 md:px-10 lg:px-20 border-b border-gray-700">
        <div className="flex items-center gap-8">
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div>
            <Link href="/" className="font-bold text-xl tracking-wider">
              audiophile
            </Link>
          </div>
        </div>

        <ul className="hidden lg:flex gap-8 font-bold text-[13px] tracking-widest">
          <li>
            <Link href="/" className="hover:text-primary transition">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/headphones" className="hover:text-primary transition">
              HEADPHONES
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-primary transition">
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link href="/earphones" className="hover:text-primary transition">
              EARPHONES
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="hover:opacity-70 transition"
        >
          <div className="relative">
            <CartIcon />
            {cart.length > 0 && (
              <div className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full" />
            )}
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                height: { duration: 0.4 },
              }}
              className="fixed top-[73px] left-0 right-0 bg-white z-50 lg:hidden overflow-hidden"
            >
              {/* Product Categories - Responsive Height */}
              <div className="px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 w-full max-w-6xl mx-auto">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                      }}
                      className="bg-gray-light rounded-lg flex flex-col items-center justify-center py-8 md:py-6 relative min-h-40 md:min-h-[140px] w-full hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className="absolute -top-8 md:-top-6 w-16 h-16 md:w-14 md:h-14 flex items-center justify-center"
                        style={{
                          filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
                        }}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>

                      <div className="mt-12 md:mt-10 flex flex-col items-center text-center">
                        <h2 className="text-dark text-base md:text-sm font-bold tracking-widest">
                          {category.name}
                        </h2>

                        <Link
                          href={category.link}
                          className="text-[12px] md:text-[11px] font-bold hover:text-gray-700 transition-colors flex items-center gap-2 mt-3 md:mt-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          SHOP
                          <ArrowRightIcon />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-6 md:right-12 lg:right-20 top-24 z-50"
            >
              <CartModal onClose={() => setIsCartOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}