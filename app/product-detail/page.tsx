import AlsoLike from "@/components/AlsoLike";
import ProductAds from "/@components/ProductAds"
import About from "/@components/About"
import Image from "next/image";

export default function ProductDetail() {
  return (
    <div>
      <button>Go back</button>

      <section>
        <div>
          <Image src="" alt="" width={0} height={0} />
          <div>
            <p>NEW PRODUCT</p>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p>$2.99</p>
            <div>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
            <h2>FEATURES</h2>
            <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
        </div>
        <div>
            <h2>IN THE BOX</h2>

        </div>
      </section>

      <section>
        <Image src="" alt="" width={0} height={0} />
        <Image src="" alt="" width={0} height={0} />
        <Image src="" alt="" width={0} height={0} />
      </section>
      <AlsoLike />
      <ProductAds />
      <About />
    </div>
  );
}
