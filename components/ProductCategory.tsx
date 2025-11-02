import ArrowRightIcon from "@/public/icons/Arrow";
import Image from "next/image";
import Link from "next/link";

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

export default function ProductCategory() {
  return (
    <section className="w-full lg:py-40 md:py-20 py-10 lg:px-20 md:px-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-gray-light rounded-lg flex flex-col items-center justify-center py-8 relative mt-24 md:mt-28 lg:mt-32"
          >
            <div
              className="absolute lg:-top-32 md:-top-24 -top-20 w-40 h-40 flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 35px 35px rgba(0, 0, 0, 0.45))",
              }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="object-contain lg:w-[180px] lg:h-[180px] md:w-[140px] md:h-[140px] w-[120px] h-[120px] transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-12 flex flex-col items-center text-center">
              <h2 className="text-dark text-lg font-bold tracking-widest">
                {category.name}
              </h2>

              <Link href={category.link} className="text-[13px] font-bold hover:text-gray-700 transition-colors flex items-center gap-4 mt-4">
                SHOP
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
