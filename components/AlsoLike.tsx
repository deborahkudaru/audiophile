import Image from "next/image";

export default function AlsoLike() {
  const products = [
    {
      id: 1,
      name: "XX99 MARK I",
      image: "/images/headphone.png",
    },
    {
      id: 2,
      name: "XX59",
      image: "/images/headphone-three.png",
    },
    {
      id: 3,
      name: "ZX9 SPEAKER",
      image: "/images/speaker.png",
    },
  ];

  return (
    <div className="px-20 py-20">
      <h2 className="font-bold text-[32px] text-center mb-16">
        YOU MAY ALSO LIKE
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center gap-8">
            <div className="bg-gray-light rounded-lg w-full h-80 flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={143}
                height={193}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-2xl tracking-wider">
              {product.name}
            </h3>
            <button className="bg-primary text-white px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition">
              SEE PRODUCT
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}