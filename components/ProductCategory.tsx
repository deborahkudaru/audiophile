import ArrowRightIcon from "@/public/icons/Arrow";
import Image from "next/image";

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
    <section className="w-full py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-gray-light rounded-lg flex flex-col items-center justify-center py-8 relative"
          >
            <div
              className="absolute -top-20 w-40 h-40 flex items-center justify-center"
              style={{
                filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="mt-20 flex flex-col items-center text-center">
              <h2 className="text-dark text-lg font-bold tracking-widest">
                {category.name}
              </h2>

              <button className="text-[13px] font-bold hover:text-gray-700 transition-colors flex items-center gap-4 mt-4">
                SHOP
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
