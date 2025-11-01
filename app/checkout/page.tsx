export default function Checkout() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        <button className="text-gray-600 mb-6 hover:text-black">Go back</button>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="col-span-2 bg-white rounded-lg p-8">
            <h2 className="text-[32px] font-bold mb-8">CHECKOUT</h2>

            {/* Billing Details */}
            <div className="mb-8">
              <h3 className="text-primary text-[13px] font-bold mb-4">
                BILLING DETAILS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alexei I"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alexei@gmail.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[12px] font-bold mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mb-8">
              <h3 className="text-primary text-[13px] font-bold mb-4">
                SHIPPING INFO
              </h3>
              <div className="mb-4">
                <label className="text-[12px] font-bold mb-2 block">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold mb-2 block">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold mb-2 block">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[12px] font-bold mb-2 block">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="United States"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-primary text-[13px] font-bold mb-4">
                PAYMENT DETAILS
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <label className="text-[12px] font-bold">Payment Method</label>
                <div className="space-y-3">
                  <label className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-primary">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-3"
                      defaultChecked
                    />
                    <span className="text-[14px] font-bold">e-Money</span>
                  </label>
                  <label className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-primary">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="text-[14px] font-bold">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 flex gap-4">
                <svg
                  className="w-12 h-12 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#D87D4A" opacity="0.3" />
                  <path
                    d="M24 16v16M16 24h16"
                    stroke="#D87D4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  The Cash on Delivery option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so there is no issues.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-[18px] font-bold mb-6">SUMMARY</h3>

              {/* Cart Items */}
              <div className="space-y-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[15px]">XX99 MK II</p>
                    <p className="text-gray-600 text-[14px]">$ 2,999</p>
                  </div>
                  <span className="text-gray-600 text-[15px] font-bold">
                    x1
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[15px]">XX59</p>
                    <p className="text-gray-600 text-[14px]">$ 899</p>
                  </div>
                  <span className="text-gray-600 text-[15px] font-bold">
                    x2
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-400 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[15px]">YX1</p>
                    <p className="text-gray-600 text-[14px]">$ 599</p>
                  </div>
                  <span className="text-gray-600 text-[15px] font-bold">
                    x1
                  </span>
                </div>
              </div>

              {/* Summary Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-[15px]">TOTAL</span>
                  <span className="font-bold text-[18px]">$ 5,396</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-[15px]">SHIPPING</span>
                  <span className="font-bold text-[18px]">$ 50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-[15px]">
                    VAT (INCLUDED)
                  </span>
                  <span className="font-bold text-[18px]">$ 1,079</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 pt-4">
                <span className="text-gray-600 text-[15px]">GRAND TOTAL</span>
                <span className="font-bold text-[18px] text-primary">
                  $ 5,446
                </span>
              </div>

              <button className="w-full bg-primary text-white font-bold text-[13px] py-4 rounded hover:bg-opacity-90 transition">
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
