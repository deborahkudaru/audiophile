import Image from "next/image";

export default function CartModal() {
  const cartItems = [
    {
      id: 1,
      name: "XX99 MK II",
      price: 2999,
      quantity: 1,
      image: "/images/headphone.png",
    },
    {
      id: 2,
      name: "XX59",
      price: 899,
      quantity: 2,
      image: "/images/headphone-three.png",
    },
    {
      id: 3,
      name: "YX1",
      price: 599,
      quantity: 1,
      image: "/images/earphone.png",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-white rounded-lg p-8 w-[377px] shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-lg tracking-wider">
          CART <span>({cartItems.length})</span>
        </h3>
        <button className="text-[15px] text-gray-600 underline hover:text-primary">
          Remove all
        </button>
      </div>

      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="bg-gray-light rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold text-[15px]">{item.name}</p>
              <p className="text-sm text-gray-600 font-bold">
                $ {item.price.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-light flex items-center gap-3 px-3">
              <button className="text-gray-600 hover:text-primary py-2 text-sm">
                -
              </button>
              <p className="font-bold text-[13px] w-4 text-center">
                {item.quantity}
              </p>
              <button className="text-gray-600 hover:text-primary py-2 text-sm">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-[15px] text-gray-600 font-medium">TOTAL</p>
        <p className="font-bold text-lg">$ {total.toLocaleString()}</p>
      </div>

      <button className="bg-primary text-white w-full py-4 font-bold text-[13px] tracking-wider hover:bg-opacity-90 transition">
        CHECKOUT
      </button>
    </section>
  );
}