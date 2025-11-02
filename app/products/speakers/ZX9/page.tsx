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
              src="/images/speaker.png"
              alt="Headphone"
              width={349.24}
              height={386}
              className="object-contain md:h-[243px] md:w-[220px] h-[201px] w-[181px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 text-left lg:text-left">
          <p className="text-primary text-sm font-bold tracking-[10px]">
            NEW PRODUCT
          </p>
          <h2 className="font-bold text-3xl lg:text-[40px] leading-tight lg:leading-11 max-w-full lg:max-w-[445.5px]">
            ZX9 SPEAKER
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <p className="font-bold text-lg tracking-wider">$ 2,999</p>
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p className="text-[15px] leading-[25px] text-gray-600">
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
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
            <li className="text-[15px] text-gray-600">
              <span className="text-primary font-bold mr-6">1x</span>
              10m Optical Cable
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 lg:px-20 md:px-10 px-5 pb-12 lg:pb-20">
        <div className="space-y-4 lg:space-y-8">
          <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/img5.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110"
            />
          </div>
          <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/img7.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110"
            />
          </div>
        </div>
        <div className="rounded-lg h-[369px] lg:h-[608px] overflow-hidden grayscale">
          <Image
            src="/images/img12.png"
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
