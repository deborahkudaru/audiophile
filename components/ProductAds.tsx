import Image from "next/image";

export default function ProductAds() {
  return (
    <div className="lg:px-20 md:px-10 px-5">
      <section className="relative text-white bg-primary rounded-lg grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-8 md:px-20 py-16 lg:py-10 overflow-hidden mb-12">
        {/* Decorative spiral circles */}
        <div className="absolute -left-32 lg:left-0 top-1/2 -translate-y-1/2 w-[558px] h-[558px] rounded-full border border-white/10"></div>
        <div className="absolute -left-28 lg:left-4 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/15"></div>
        <div className="absolute -left-24 lg:left-8 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div>
        <div className="absolute -left-20 lg:left-12 top-1/2 -translate-y-1/2 w-[320px] h-80 rounded-full border border-white/25"></div>
        <div className="absolute -left-16 lg:left-16 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-white/30"></div>
        <div className="absolute -left-12 lg:left-20 top-1/2 -translate-y-1/2 w-80 h-40 rounded-full border border-white/35"></div>

        <Image
          src={"/images/speaker.png"}
          alt=""
          width={410.23}
          height={493}
          className="relative lg:top-20 z-10 w-auto lg:h-[493px] md:h-[237px] h-auto mx-auto lg:mx-0"
        />
        <div className="pb-16 relative z-10 w-[349px] m-auto lg:m-0 text-center lg:text-left">
          <h2 className="font-bold text-[56px]">ZX9 SPEAKER</h2>
          <p className="text-[15px] mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white px-8 font-bold text-[13px] py-3 lg:mt-0 mt-10">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <section className="relative rounded-lg overflow-hidden mb-12 h-80">
        <Image
          src={"/images/image-zero.png"}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "80% 70%" }}
        />

        <div className="relative z-10 px-8 md:px-16 py-16 h-full flex flex-col justify-center">
          <h2 className="font-bold text-[28px] mb-6">ZX7 SPEAKER</h2>
          <button className="font-bold px-8 py-3 rounded-sm text-[13px] border border-black bg-transparent hover:bg-black hover:text-white transition w-fit">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mb-12">
        <div className="rounded-lg overflow-hidden relative h-80">
          <Image
            src={"/images/image-one.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-gray-light rounded-lg flex flex-col justify-center px-16">
          <h2 className="text-[28px] font-bold mb-6">YX1 EARPHONES</h2>
          <button className="border border-black px-8 py-3 w-fit font-bold text-[13px]">
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
}
