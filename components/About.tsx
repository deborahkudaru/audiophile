import Image from "next/image";

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:px-20 md:px-10 px-5 items-center lg:py-32 py-20">
      <div className="lg:w-[445px] text-center lg:text-left m-auto lg:m-0 order-2 lg:order-1">
        <h1 className="font-bold text-[40px] mb-8">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h1>
        <p className="text-[15px] leading-[26px] text-gray-600">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="relative w-full lg:h-[600px] h-[300px] rounded-lg overflow-hidden grayscale order-1 lg:order-2">
        <Image
          src={"/images/image-two.png"}
          alt="About Image"
          fill
          className="object-cover scale-150 object-left"
        />
      </div>
    </div>
  );
}
