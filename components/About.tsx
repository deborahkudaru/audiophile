import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <h1 className="font-bold text-[40px]">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h1>
        <p className="text-[15px] leading-[26px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src={"/images/image-two.png"}
        alt="About Image"
        width={1110}
        height={592}
      />
    </div>
  );
}
