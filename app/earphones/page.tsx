import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function Earphones() {
  return (
    <div>
      <h1 className="font-bold text-white text-[40px] text-center p-20">
        SPEAKERS
      </h1>
      <section>
        <Image src="" alt="" width={0} height={0} />
        <div>
          <p>NEW PRODUCT</p>
          <h2 className="font-bold text-[40px]">YX1 WIRELESS HEADPHONES</h2>
          <p className="text-[15px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button>SEE PRODUCT</button>
        </div>
      </section>
      <ProductCategory />
      <About />
    </div>
  );
}
