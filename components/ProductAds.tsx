import Image from "next/image";

export default function ProductAds() {
  return (
    <div>
      <section className="text-white bg-primary rounded-lg flex items-center gap-8 px-8 py-16 mx-6 md:mx-12 mb-12">
        <Image src={"/images/speaker.png"} alt="" width={410.23} height={493} />
        <div>
          <h2 className="font-bold text-[56px]">ZXP SPEAKER</h2>
          <p className="text-[15px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
            <button className="bg-black text-white px-8 font-bold text-[13px] py-3">SEE PRODUCT</button>
        </div>
      </section>

      <section className="bg-gray-light rounded-lg flex items-center gap-8 px-8 py-16 mx-6 md:mx-12">
        <div>
            <h2>ZX7 SPEAKER</h2>
            <button>SEE PRODUCT</button>
        </div>
         <Image src={"/images/speaker.png"} alt="" width={410.23} height={493} />
      </section>

      <section>
        <h2>YX1 EARPHONES</h2>
        <button>SEE PRODUCT</button>
      </section>
    </div>
  );
}
