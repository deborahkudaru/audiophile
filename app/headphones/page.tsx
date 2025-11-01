import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function Headphone() {
  return (
    <div className="">
      <h1 className="font-bold text-white bg-dark text-[40px] text-center p-20">
        HEADPHONES
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
              src="/images/headphone.png"
              alt="Headphone image"
              width={349.24}
              height={386}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[445px]">
          <p className="text-primary text-sm font-bold tracking-[10px]">
            NEW PRODUCT
          </p>
          <h2 className="font-bold text-[40px] leading-11">
            XX99 Mark II Headphones
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
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
          <h2 className="font-bold text-[40px] leading-11">
            XX99 Mark I Headphones
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
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
              src="/images/headphone-one.png"
              alt="Headphone image"
              width={349.24}
              height={386}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-16 px-20 items-center mb-32">
        <div className="bg-gray-light rounded-lg p-10 flex items-center justify-center">
          <div
            className="w-[349px] h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/headphone-three.png"
              alt="Headphone image"
              width={349.24}
              height={386}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-[40px] leading-11">
            XX59 Headphones
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
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
