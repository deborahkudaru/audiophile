import CartIcon from "@/public/icons/CartIcon";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between bg-dark text-white p-4 items-center">
            <div>
                <Link href="/" className="font-bold text-xl">audiopile</Link>
            </div>
            <ul className="flex gap-4 font-light text-sm">
                <li>
                    <Link href="/">HOME</Link>
                </li>
                 <li>
                    <Link href="/">HEADPHONES</Link>
                </li>
                 <li>
                    <Link href="/">SPEAKERS</Link>
                </li>
                 <li>
                    <Link href="/">EARPHONES</Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    )
}