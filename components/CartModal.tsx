"use client";
import Image from "next/image";
import { useCart, CartItem } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CartModal() {
  const { cart, removeItem, setQuantity, subtotal, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    router.push("/checkout");
  };

  const handleRemoveAll = () => {
    if (cart.length > 0) {
      toast(
        (t) => (
          <div className="flex flex-col gap-4 p-2">
            <p className="font-bold text-base tracking-wide">
              REMOVE ALL ITEMS?
            </p>
            <p className="text-sm text-gray-600">
              This will clear your entire cart.
            </p>
            <div className="flex gap-3 justify-end mt-2">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded font-bold text-xs tracking-wider hover:bg-gray-200 transition"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  clearCart();
                  toast.dismiss(t.id);
                }}
                className="px-6 py-2.5 bg-primary text-white rounded font-bold text-xs tracking-wider hover:bg-opacity-90 transition"
              >
                REMOVE ALL
              </button>
            </div>
          </div>
        ),
        {
          duration: 1000,
          style: {
            background: "white",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          },
        }
      );
    }
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity === 1) {
      toast(
        (t) => (
          <div className="flex flex-col gap-4 p-2">
            <p className="font-bold text-base tracking-wide">
              REMOVE {item.name.toUpperCase()}?
            </p>
            <p className="text-sm text-gray-600">
              This item will be removed from your cart.
            </p>
            <div className="flex gap-3 justify-end mt-2">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded font-bold text-xs tracking-wider hover:bg-gray-200 transition"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  removeItem(item.id);
                  toast.dismiss(t.id);
                }}
                className="px-6 py-2.5 bg-primary text-white rounded font-bold text-xs tracking-wider hover:bg-opacity-90 transition"
              >
                REMOVE
              </button>
            </div>
          </div>
        ),
        {
          style: {
            background: "white",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          },
        }
      );
    } else {
      setQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    setQuantity(item.id, item.quantity + 1);
  };

  return (
    <section className="bg-white rounded-lg p-8 w-[377px] shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-lg tracking-wider">
          CART <span>({cart.length})</span>
        </h3>
        {cart.length > 0 && (
          <button
            className="text-[15px] text-gray-600 underline hover:text-primary transition"
            onClick={handleRemoveAll}
          >
            Remove all
          </button>
        )}
      </div>

      <div className="space-y-6 mb-8 max-h-60 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🛒</span>
            </div>
            <p className="text-gray-500 font-medium">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-1">
              Add some products to get started
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 group">
              <div className="bg-gray-light rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={item.image || "/images/headphone.png"}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[15px] truncate">{item.name}</p>
                <p className="text-sm text-gray-600 font-bold">
                  $ {item.price.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-light flex items-center gap-3 px-3 rounded">
                <button
                  className="text-gray-600 hover:text-primary py-2 text-sm transition hover:scale-110"
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
                <p className="font-bold text-[13px] w-4 text-center">
                  {item.quantity}
                </p>
                <button
                  className="text-gray-600 hover:text-primary py-2 text-sm transition hover:scale-110"
                  aria-label={`Increase ${item.name}`}
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
              </div>
              <button
                className="ml-2 text-xs text-red-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-700"
                onClick={() => {
                  removeItem(item.id);
                }}
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-[15px] text-gray-600 font-medium">TOTAL</p>
            <p className="font-bold text-lg">$ {subtotal.toLocaleString()}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-primary text-white py-4 font-bold text-[13px] tracking-wider rounded hover:bg-opacity-90 transition transform hover:scale-[1.02] active:scale-[0.98]"
          >
            CHECKOUT
          </button>
        </>
      )}
    </section>
  );
}
