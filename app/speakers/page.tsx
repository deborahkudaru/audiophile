import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function SPEAKERS() {
  return (
    <div>
      <h1 className="font-bold text-white text-[40px] text-center p-20">
        SPEAKERS
      </h1>
      <section>
        <Image src="" alt="" width={0} height={0} />
        <div>
          <p>NEW PRODUCT</p>
          <h2 className="font-bold text-[40px]">ZX9 SPEAKER</h2>
          <p className="text-[15px]">
           Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </p>
          <button>SEE PRODUCT</button>
        </div>
      </section>
      <section>
        <h2>ZX7 SPEAKER</h2>
        <p>
          Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
        </p>
        <button>SEE PRODUCT</button>
      </section>
      <ProductCategory />
      <About />
    </div>
  );
}
