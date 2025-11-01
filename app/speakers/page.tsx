import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function SPEAKERS() {
  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        SPEAKERS
      </h1>
      <section className="grid grid-cols-2 gap-16 px-20 items-center py-20">
        <div className="bg-gray-light rounded-lg p-10 flex items-center justify-center">
          <div
            className="w-[349px] h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/speaker.png"
              alt="Speaker"
              width={291.24}
              height={350}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[445px]">
          <p className="text-primary text-sm font-bold tracking-[10px]">
            NEW PRODUCT
          </p>
          <h2 className="font-bold text-[40px] leading-11">ZX9 SPEAKER</h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Upgrade your sound system with the all new ZX9 active speaker. Its
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <div>
            <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-16 px-20 items-center mb-32">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-[40px] leading-11">ZX7 SPEAKER</h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <div>
            <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
              SEE PRODUCT
            </button>
          </div>
        </div>
        <div className="bg-gray-light rounded-lg p-10 flex items-center justify-center">
          <div
            className="w-[349px] h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/image-four.png"
              alt="Speaker"
              width={291.24}
              height={350}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      <ProductCategory />
      <About />
    </div>
  );
}