"use client";

import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";
import { useState, useEffect } from "react";
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-dark relative">
      {/* Add spacing at the top for mobile */}
      <div className="pt-4 lg:pt-0 px-5 md:px-10 lg:px-20">
        <nav className="flex justify-between text-white py-6 items-center border-b border-white/10">
          <button
            className="lg:hidden z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-transform"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="absolute lg:static md:left-28 left-1/2 -translate-x-1/2 md:transform-none md:ml-8">
            <Link
              href="/"
              className="font-bold text-2xl md:text-xl tracking-wider hover:text-primary transition-colors block whitespace-nowrap"
            >
              audiophile
            </Link>
          </div>

          <ul className="hidden lg:flex gap-8 font-bold text-[13px] tracking-widest">
            <li>
              <Link href="/" className="hover:text-primary transition">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/headphones"
                className="hover:text-primary transition"
              >
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
      </div>

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
              className="fixed top-[73px] left-0 right-0 bg-white z-50 lg:hidden overflow-hidden shadow-2xl"
            >
              {/* Product Categories - Scrollable content */}
              <div className="px-6 py-14 md:py-12 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-6xl mx-auto">
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
                      className="bg-gray-light rounded-lg flex flex-col items-center justify-center py-12 md:py-8 relative min-h-52 md:min-h-40 w-full hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      <div
                        className="absolute -top-12 md:-top-10 flex items-center justify-center"
                        style={{
                          filter:
                            "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
                        }}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={120}
                          height={120}
                          className="object-contain w-30 h-30 md:w-24 md:h-24"
                          style={{
                            width: "120px",
                            height: "120px",
                          }}
                        />
                      </div>

                      <div className="mt-16 md:mt-14 flex flex-col items-center text-center">
                        <h2 className="text-dark text-lg md:text-base font-bold tracking-widest">
                          {category.name}
                        </h2>

                        <Link
                          href={category.link}
                          className="text-[13px] md:text-[12px] font-bold hover:text-gray-700 transition-colors flex items-center gap-2 mt-4 md:mt-3"
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