"use client";

import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-dark relative">
      <nav className="flex justify-between text-white py-6 items-center mx-20 border-b border-gray-700">
        <div>
          <Link href="/" className="font-bold text-xl">
            audiopile
          </Link>
        </div>
        <ul className="flex gap-4 font-light text-sm">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link href="/earphones">EARPHONES</Link>
          </li>
        </ul>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <CartIcon />
        </button>
      </nav>

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="absolute right-20 top-24 z-50">
            <CartModal />
          </div>
        </>
      )}
    </div>
  );
}