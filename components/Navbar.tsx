import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-dark">
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
      <CartIcon />
    </nav>
    </div>
  );
}
