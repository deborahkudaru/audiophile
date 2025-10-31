import Image from "next/image";

export default function ProductAds() {
  return (
    <div>
      <section className="text-white bg-primary rounded-lg flex items-end gap-8 px-8 overflow-hidden mx-6 md:mx-12 mb-12">
        <Image src={"/images/speaker.png"} alt="" width={410.23} height={493} />
        <div className="pb-16">
          <h2 className="font-bold text-[56px]">ZXP SPEAKER</h2>
          <p className="text-[15px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white px-8 font-bold text-[13px] py-3">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <section className="bg-gray-light rounded-lg grid grid-cols-2 px-8 py-16 mx-6 md:mx-12 mb-12">
        <div>
          <h2 className="font-bold text-[28px]">ZX7 SPEAKER</h2>
          <button className="font-bold px-8 py-3 rounded-sm text-[13px] border border-black">
            SEE PRODUCT
          </button>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={"/images/image-zero.png"}
            alt=""
            width={410.23}
            height={493}
            className="scale-[2] object-cover object-left"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mx-6 md:mx-12">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={"/images/image-one.png"}
            alt=""
            width={410.23}
            height={493}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-light rounded-lg flex flex-col justify-center px-8">
          <h2 className="text-[28px] font-bold">YX1 EARPHONES</h2>
          <button className="border border-black px-8 py-3 w-fit mt-4">
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
}