"use client";

import AlsoLike from "@/components/AlsoLike";
import About from "@/components/About";
import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import { useRouter } from "next/navigation";

export default function ProductDetail() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="lg:px-20 md:px-10 px-5 pt-10 lg:pt-20">
        <button
          onClick={handleGoBack}
          className="text-[15px] text-gray-600 hover:text-primary font-medium"
        >
          Go back
        </button>
      </div>

      {/* Product Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-8 lg:py-12 items-center">
        <div className="bg-gray-light rounded-lg lg:p-16 p-8 flex items-center justify-center">
          <div
            className="w-full max-w-[349px] h-[300px] lg:h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/headphone.png"
              alt="Headphone"
              width={349.24}
              height={386}
              className="object-contain md:h-[243px] md:w-[220px] h-[201px] w-[181px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 text-left lg:text-left">
          <h2 className="font-bold text-3xl lg:text-[40px] leading-tight lg:leading-11 max-w-full lg:max-w-[445.5px]">
            XX99 MARK I HEADPHONES
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <p className="font-bold text-lg tracking-wider">$ 1,750</p>
          <div className="flex gap-4 items-center lg:justify-start w-full">
            <div className="bg-gray-light flex items-center justify-between gap-4 px-4 flex-1 max-w-[120px]">
              <button className="text-gray-600 hover:text-primary font-bold py-3 text-sm">
                -
              </button>
              <p className="font-bold text-sm">1</p>
              <button className="text-gray-600 hover:text-primary font-bold py-3 text-sm">
                +
              </button>
            </div>
            <button className="bg-primary text-white px-6 lg:px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition flex-1">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* Features & In The Box Section */}
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-12 lg:py-20">
        <div className="col-span-2">
          <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
            FEATURES
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600 mb-6">
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p className="text-[15px] leading-[25px] text-gray-600">
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </p>
        </div>
        <div className="lg:flex lg:flex-col grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-0">
          <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
            IN THE BOX
          </h2>
          <ul className="space-y-3">
            <li className="text-[15px] text-gray-600">
              <span className="text-primary font-bold mr-6">1x</span>
              Headphone Unit
            </li>
            <li className="text-[15px] text-gray-600">
              <span className="text-primary font-bold mr-6">2x</span>
              Replacement Earcups
            </li>
            <li className="text-[15px] text-gray-600">
              <span className="text-primary font-bold mr-6">1x</span>
              User Manual
            </li>
            <li className="text-[15px] text-gray-600">
              <span className="text-primary font-bold mr-6">1x</span>
              3.5mm Audio Cable
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 lg:px-20 md:px-10 px-5 pb-12 lg:pb-20">
        <div className="space-y-4 lg:space-y-8">
          <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/img13.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110"
            />
          </div>
          <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/img2.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110"
            />
          </div>
        </div>
        <div className="rounded-lg h-[369px] lg:h-[608px] overflow-hidden grayscale">
          <Image
            src="/images/img6.png"
            alt="Product gallery"
            width={635}
            height={592}
            className="object-cover w-full h-full scale-110"
          />
        </div>
      </section>

      <AlsoLike />
      <ProductCategory />
      <About />
    </div>
  );
}
