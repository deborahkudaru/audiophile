import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import About from "@/components/About";

export default function Headphone() {
  return (
    <div>
      <h1 className="font-bold text-white text-[40px] text-center p-20">
        HEADPHONES
      </h1>
      <section>
        <Image src="" alt="" width={0} height={0} />
        <div>
          <p>NEW PRODUCT</p>
          <h2 className="font-bold text-[40px]">XX99 Mark II Headphones</h2>
          <p className="text-[15px]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button>SEE PRODUCT</button>
        </div>
      </section>
      <section>
        <h2>XX99 Mark I Headphones</h2>
        <p>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button>SEE PRODUCT</button>
      </section>
      <section>
        <h2>XX59 Headphones</h2>
        <p>
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button>SEE PRODUCT</button>
      </section>
      <ProductCategory />
      <About />
    </div>
  );
}
