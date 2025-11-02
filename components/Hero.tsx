import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-dark text-white">
      {/* Mobile/Tablet View */}
      <div className="lg:hidden relative overflow-hidden">
        {/* Background Image - Cover whole background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover opacity-40 scale-125 md:scale-110 object-center"
            priority
            style={{ transform: 'translate(0%, 5%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[600px] flex items-center justify-center px-6 py-20">
          <div className="max-w-[398px] flex flex-col gap-6 text-center lg:mx-0 md:mx-0 mx-10">
            <p className="text-sm text-white/50 tracking-[10px] font-normal">
              NEW PRODUCT
            </p>
            <h1 className="font-bold text-4xl leading-tight tracking-wider">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="font-medium text-[15px] leading-[25px] text-white/75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <button className="bg-primary font-bold text-[13px] tracking-wider py-4 px-8 hover:bg-opacity-90 transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between min-h-screen items-center px-20">
        <div className="max-w-[398px] flex flex-col gap-6">
          <p className="text-sm text-white/50 tracking-[10px] font-normal">
            NEW PRODUCT
          </p>
          <h1 className="font-bold text-[56px] leading-[58px]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="font-semibold text-[15px] leading-[25px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
            priority
          />
        </div>
      </div>
    </div>
  );
}