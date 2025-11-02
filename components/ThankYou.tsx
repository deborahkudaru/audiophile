export default function OrderConfirmation() {
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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-12">
        {/* Success Icon */}
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
        <p className="text-[15px] text-gray-600 mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 rounded-lg overflow-hidden mb-6">
          {/* Items List */}
          <div className="md:col-span-3 bg-gray-light p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[15px]">{cartItems[0].name}</p>
                <p className="text-gray-600 text-[14px]">
                  $ {cartItems[0].price.toLocaleString()}
                </p>
              </div>
              <span className="text-gray-600 text-[15px] font-bold">
                x{cartItems[0].quantity}
              </span>
            </div>

            {cartItems.length > 1 && (
              <>
                <div className="border-t border-gray-300 my-3"></div>
                <p className="text-gray-600 text-[12px] font-bold text-center">
                  and {cartItems.length - 1} other item(s)
                </p>
              </>
            )}
          </div>

          <div className="md:col-span-2 bg-black text-white p-6 flex flex-col justify-center">
            <p className="text-gray-400 text-[15px] mb-2">GRAND TOTAL</p>
            <p className="font-bold text-lg">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <button className="bg-primary text-white w-full py-4 font-bold text-[13px] tracking-wider hover:bg-opacity-90 transition">
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}