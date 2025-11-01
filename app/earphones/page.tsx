import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function Earphones() {
  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        EARPHONES
      </h1>
      <section className="grid grid-cols-2 gap-16 px-20 items-center py-20 mb-32">
        <div className="bg-gray-light rounded-lg p-10 flex items-center justify-center">
          <div
            className="w-[349px] h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/earphone.png"
              alt="Earphone"
              width={421}
              height={381}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[445px]">
          <p className="text-primary text-sm font-bold tracking-[10px]">
            NEW PRODUCT
          </p>
          <h2 className="font-bold text-[40px] leading-11">
            YX1 WIRELESS EARPHONES
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <div>
            <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
      <ProductCategory />
      <About />
    </div>
  );
}
