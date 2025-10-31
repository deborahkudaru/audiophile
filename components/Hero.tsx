import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-between min-h-screen bg-dark text-white items-center px-20">
      <div className="max-w-[398px] flex flex-col gap-6">
        <p className="text-sm">NEW PRODUCT</p>
        <h1 className="font-bold text-[56px] leading-[58px]">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="font-semibold text-[15px] leading-[25px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div>
          <button className="bg-primary font-bold text-[13px] py-3 px-8 rounded-sm hover:bg-primary-light">
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={708.8}
          height={886}
        />
      </div>
    </div>
  );
}
