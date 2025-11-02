import AlsoLike from "@/components/AlsoLike";
import About from "@/components/About";
import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";

export default function ProductDetail() {
  return (
    <div>
      <div className="lg:px-20 md:px-10 px-5 pt-20">
        <button className="text-[15px] text-gray-600 hover:text-primary font-medium">
          Go back
        </button>
      </div>

      <section className="grid grid-cols-2 gap-16 lg:px-20 md:px-10 px-5 py-12 items-center">
        <div className="bg-gray-light rounded-lg p-16 flex items-center justify-center">
          <div
            className="w-[349px] h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src="/images/headphone.png"
              alt="Headphone"
              width={349.24}
              height={386}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-primary text-sm font-bold tracking-[10px]">
            NEW PRODUCT
          </p>
          <h2 className="font-bold text-[40px] leading-11 max-w-[445.5px]">
            XX99 Mark II Headphones
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className="font-bold text-lg tracking-wider">$ 2,999</p>
          <div className="flex gap-4 items-center">
            <div className="bg-gray-light flex items-center gap-4 px-4">
              <button className="text-gray-600 hover:text-primary font-bold py-3 text-sm">
                -
              </button>
              <p className="font-bold text-sm">1</p>
              <button className="text-gray-600 hover:text-primary font-bold py-3 text-sm">
                +
              </button>
            </div>
            <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 grid-cols-1 gap-16 px-20 py-20">
        <div className="col-span-2">
          <h2 className="font-bold text-[32px] mb-8">FEATURES</h2>
          <p className="text-[15px] leading-[25px] text-gray-600 mb-6">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether youre taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that youll
            never miss a beat.
          </p>
          <p className="text-[15px] leading-[25px] text-gray-600">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5.0 compliant connectivity
            and 17 hour battery life, the XX99 Mark II headphones gives you
            superior sound, cutting-edge technology, and a modern design
            aesthetic.
          </p>
        </div>
        <div className="lg:flex lg:flex-col grid grid-cols-2 justify-between">
          <h2 className="font-bold text-[32px] mb-8">IN THE BOX</h2>
          <ul className="space-y-2">
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
              Travel Bag
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:gap-6 lg:px-20 md:px-10 px-5 pb-20">
        <div className="space-y-8">
          <div className="rounded-lg lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/image-two.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110 md:w-[277px] md:h-[174px]"
            />
          </div>
          <div className="rounded-lg lg:h-72 overflow-hidden grayscale">
            <Image
              src="/images/image-three.png"
              alt="Product gallery"
              width={445}
              height={280}
              className="object-cover w-full h-full scale-110 md:w-[277px] md:h-[174px]"
            />
          </div>
        </div>
        <div className="rounded-lg lg:h-[608px] overflow-hidden grayscale">
          <Image
            src="/images/hero-image.png"
            alt="Product gallery"
            width={635}
            height={592}
            className="object-cover w-full h-full scale-110 md:w-[395px] md:h-[368px]"
          />
        </div>
      </section>

      <AlsoLike />
      <ProductCategory />
      <About />
    </div>
  );
}
