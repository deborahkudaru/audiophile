import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AlsoLike() {
  const products = [
    {
      id: 1,
      name: "XX99 MARK I",
      image: "/images/headphone.png",
      slug: "xx99-mark-i-headphones", 
    },
    {
      id: 2,
      name: "XX59",
      image: "/images/headphone-three.png",
      slug: "xx59-headphones",
    },
    {
      id: 3,
      name: "ZX9 SPEAKER",
      image: "/images/speaker.png",
      slug: "zx9-speaker", 
    },
  ];

  return (
    <div className="lg:px-20 md:px-10 px-5 py-20">
      <h2 className="font-bold text-[32px] text-center mb-16">
        YOU MAY ALSO LIKE
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <motion.div
              className="bg-gray-light rounded-lg w-full lg:h-80 md:h-72 p-5 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={143}
                height={193}
                className="object-contain w-[73px] h-[98px] md:w-[143px] md:h-[193px]"
              />
            </motion.div>

            <motion.h3
              className="font-bold text-2xl tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              {product.name}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/products/${product.slug}`} 
                  className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-primary-light transition inline-block"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}