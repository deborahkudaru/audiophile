import Image from "next/image";

export default function Hero(){
    return(
        <div className="flex justify-between min-h-screen bg-black text-white items-center px-20">
            <div>
                <p className="text-sm">NEW PRODUCT</p>
                <h1 className="font-bold text-[56px] leading-[58px]">XX99 MARK II HEADPHONES</h1>
                <p className="font-semibold text-[15px] leading-[25px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="font-bold text-[13px]">SEE PRODUCT</button>
            </div>
            <div>
                <Image src="/images/hero-image.png" alt="Hero Image" width={708.8} height={886} />
            </div>
        </div>
    )
}