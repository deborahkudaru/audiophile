"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartModal() {
  const { cart, removeItem, setQuantity, subtotal } = useCart();

  return (
    <section className="bg-white rounded-lg p-8 w-[377px] shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-lg tracking-wider">
          CART <span>({cart.length})</span>
        </h3>
        <button
          className="text-[15px] text-gray-600 underline hover:text-primary"
          onClick={() => {
            // implement Remove all? call clearCart if you want
          }}
        >
          Remove all
        </button>
      </div>

      <div className="space-y-6 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="bg-gray-light rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src={item.image || "/images/headphone.png"}
                alt={item.name}
                width={40}
                height={40}
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
              <button
                className="text-gray-600 hover:text-primary py-2 text-sm"
                aria-label={`Decrease ${item.name}`}
                onClick={() => setQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <p className="font-bold text-[13px] w-4 text-center">
                {item.quantity}
              </p>
              <button
                className="text-gray-600 hover:text-primary py-2 text-sm"
                aria-label={`Increase ${item.name}`}
                onClick={() => setQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="ml-2 text-xs text-red-600"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-[15px] text-gray-600 font-medium">TOTAL</p>
        <p className="font-bold text-lg">$ {subtotal.toLocaleString()}</p>
      </div>

      <a
        href="/checkout"
        className="block text-center bg-primary text-white w-full py-4 font-bold text-[13px] tracking-wider rounded hover:bg-opacity-90 transition"
      >
        CHECKOUT
      </a>
    </section>
  );
}
