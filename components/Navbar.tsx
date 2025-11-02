"use client";

import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark relative">
      <nav className="flex justify-between text-white py-6 items-center px-5 md:px-10 lg:px-20 border-b border-gray-700">
        {/* Mobile Menu Button */}
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
          <CartIcon />
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
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-[73px] bg-dark w-64 h-full z-50 lg:hidden border-r border-gray-700"
            >
              <ul className="flex flex-col gap-6 p-8 font-bold text-[13px] tracking-widest text-white">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/headphones"
                    className="hover:text-primary transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HEADPHONES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/speakers"
                    className="hover:text-primary transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/earphones"
                    className="hover:text-primary transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
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
              <CartModal />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
