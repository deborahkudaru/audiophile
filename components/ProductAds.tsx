import Image from "next/image";

export default function ProductAds() {
  return (
    <div>
      <section className="relative text-white bg-primary rounded-lg flex items-end gap-8 px-8 overflow-hidden mx-6 md:mx-12 mb-12">
        {/* Decorative circles */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[558px] h-[558px] rounded-full border border-white/20"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[444px] h-[444px] rounded-full border border-white/20"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/20"></div>
        
        <Image src={"/images/speaker.png"} alt="" width={410.23} height={493} className="relative z-10" />
        <div className="pb-16 relative z-10">
          <h2 className="font-bold text-[56px]">ZX9 SPEAKER</h2>
          <p className="text-[15px] mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white px-8 font-bold text-[13px] py-3">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <section className="relative bg-gray-light rounded-lg overflow-hidden mx-6 md:mx-12 mb-6 h-[320px]">
        <Image
          src={"/images/image-zero.png"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative z-10 px-16 py-16">
          <h2 className="font-bold text-[28px] mb-6">ZX7 SPEAKER</h2>
          <button className="font-bold px-8 py-3 rounded-sm text-[13px] border border-black bg-transparent hover:bg-black hover:text-white transition">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mx-6 md:mx-12">
        <div className="rounded-lg overflow-hidden relative h-[320px]">
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