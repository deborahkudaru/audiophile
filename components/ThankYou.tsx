import Image from "next/image";
import Link from "next/link";

interface OrderConfirmationProps {
  orderId: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }[];
  totals: {
    subtotal: number;
    shipping: number;
    tax: number;
    grandTotal: number;
  };
}

import { useCart } from "@/context/CartContext";

export default function OrderConfirmation({
  orderId,
  items,
  totals,
}: OrderConfirmationProps) {
  const { clearCart } = useCart();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-12">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-bold text-[32px] leading-9 mb-4">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className="text-[15px] text-gray-600 mb-2">
          You will receive an email confirmation shortly.
        </p>
        <p className="text-[13px] text-gray-500 mb-6">
          Order ID: <span className="font-medium">{orderId}</span>
        </p>

        {/* Order Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 rounded-lg overflow-hidden mb-6">
          {/* Items List */}
          <div className="md:col-span-3 bg-gray-light p-6">
            {items && items.length > 0 ? (
              <>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={items[0]?.image || "/images/headphone.png"}
                      alt={items[0]?.name || "Product"}
                      className="w-8 h-8 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[15px]">{items[0]?.name}</p>
                    <p className="text-gray-600 text-[14px]">
                      $ {items[0]?.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-gray-600 text-[15px] font-bold">
                    x{items[0]?.quantity}
                  </span>
                </div>

                {items.length > 1 && (
                  <>
                    <div className="border-t border-gray-300 my-3"></div>
                    <p className="text-gray-600 text-[12px] font-bold text-center">
                      and {items.length - 1} other item(s)
                    </p>
                  </>
                )}
              </>
            ) : (
              <p className="text-gray-600 text-center py-4">No items in order</p>
            )}
          </div>

          <div className="md:col-span-2 bg-black text-white p-6 flex flex-col justify-center">
            <p className="text-gray-400 text-[15px] mb-2">GRAND TOTAL</p>
            <p className="font-bold text-lg">
              $ {totals?.grandTotal.toLocaleString() || "0"}
            </p>
          </div>
        </div>

        <Link
          href="/"
          onClick={clearCart}
          className="bg-primary text-white w-full py-4 text-center block font-bold text-[13px] tracking-wider hover:bg-opacity-90 transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
