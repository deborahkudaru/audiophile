import Image from "next/image";

export default function Checkout() {
  return (
    <div className="bg-gray-100 min-h-screen lg:py-16 md:py-10 py-5">
      <div className="max-w-6xl mx-auto md:px-10 px-5">
        <button className="text-gray-600 lg:mb-20 mb-10 hover:text-primary">
          Go back
        </button>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8">
            <h2 className="text-[32px] font-bold mb-8">CHECKOUT</h2>

            {/* Billing Details */}
            <div className="mb-8">
              <h3 className="text-primary text-[13px] font-bold mb-4">
                BILLING DETAILS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                <label className="text-[12px] font-bold">Payment Method</label>
                <div className="space-y-3">
                  <label className="flex items-center border border-primary-light rounded-lg px-4 py-3 cursor-pointer hover:border-primary">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-3"
                      defaultChecked
                    />
                    <span className="text-[14px] font-bold">e-Money</span>
                  </label>
                  <label className="flex items-center border border-primary-light rounded-lg px-4 py-3 cursor-pointer hover:border-primary">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="text-[14px] font-bold">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>

              <div className="rounded-lg p-6 lg:flex gap-4 hidden">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                    fill="#D87D4A"
                  />
                </svg>

                <p className="text-[15px] text-gray-600 leading-relaxed">
                  The Cash on Delivery option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so there is no issues.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Summary - Full Width */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 w-full">
              <h3 className="text-[18px] font-bold mb-6">SUMMARY</h3>

              {/* Cart Items */}
              <div className="space-y-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/headphone.png"
                      alt="XX99 MK II"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
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
                  <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/headphone-three.png"
                      alt="XX59"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
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
                  <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/earphone.png"
                      alt="YX1"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
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

              <button className="w-full bg-primary text-white font-bold text-[13px] py-4 rounded hover:bg-primary-light transition">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}