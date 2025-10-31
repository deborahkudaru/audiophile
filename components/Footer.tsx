import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <nav>
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
            <Link href="/">HEADPHONES</Link>
          </li>
          <li>
            <Link href="/">SPEAKERS</Link>
          </li>
          <li>
            <Link href="/">EARPHONES</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>
      </div>
      <p>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}
