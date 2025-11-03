"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import OrderConfirmation from "../../components/ThankYou";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  payment: "e-money" | "cod";
  eMoneyNumber: string;
  eMoneyPin: string;
};

export default function Checkout() {
  const router = useRouter();
  const { cart, subtotal } = useCart();
  const createOrder = useMutation(api.orders.createOrder);

  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);

  const shipping = 50;
  const tax = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + tax;

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormFields, string>> = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.zip.trim()) e.zip = "ZIP code is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.country.trim()) e.country = "Country is required";

    if (form.payment === "e-money") {
      if (!form.eMoneyNumber.trim())
        e.eMoneyNumber = "e-Money number is required";
      if (!form.eMoneyPin.trim()) e.eMoneyPin = "e-Money PIN is required";
      if (!/^\d{9}$/.test(form.eMoneyNumber))
        e.eMoneyNumber = "e-Money number must be 9 digits";
      if (!/^\d{4}$/.test(form.eMoneyPin))
        e.eMoneyPin = "e-Money PIN must be 4 digits";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;
  if (cart.length === 0) return;

  setLoading(true);

  try {
    const newOrderId = await createOrder({
      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      shipping: {
        address: form.address,
        city: form.city,
        country: form.country,
        zip: form.zip,
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "",
      })),
      totals: {
        subtotal,
        shipping,
        tax,
        grandTotal,
      },
    });

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: newOrderId,
        customer: {
          name: form.name,
          email: form.email,
        },
        items: cart,
        totals: {
          subtotal,
          shipping,
          tax,
          grandTotal,
        },
      }),
    });
    setCurrentOrderId(newOrderId);
    setShowThankYou(true);
  } catch (err) {
    console.error("Checkout error:", err);
  } finally {
    setLoading(false);
  }
};


  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:py-16 md:py-10 py-5">
      <div className="max-w-6xl mx-auto md:px-10 px-5">
        <button
          className="text-gray-600 lg:mb-20 mb-10 hover:text-primary font-medium"
          onClick={handleGoBack}
        >
          Go back
        </button>

        {showThankYou && currentOrderId ? (
          <OrderConfirmation 
            orderId={currentOrderId}
            items={cart}
            totals={{
              subtotal,
              shipping,
              tax,
              grandTotal
            }}
          />
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {/* Left Side - Form */}
            <form
              className="lg:col-span-2 bg-white rounded-lg p-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <h2 className="text-[32px] font-bold mb-8">CHECKOUT</h2>

              {/* Billing Details */}
              <div className="mb-8">
                <h3 className="text-primary text-[13px] font-bold mb-4 tracking-wider">
                  BILLING DETAILS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] font-bold mb-2 block">
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      type="text"
                      placeholder="Alexei Ward"
                      className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                    />
                    {errors.name && (
                      <p id="error-name" className="text-red-600 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-[12px] font-bold mb-2 block">
                      Email Address
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      type="email"
                      placeholder="alexei@mail.com"
                      className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "error-email" : undefined
                      }
                    />
                    {errors.email && (
                      <p id="error-email" className="text-red-600 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-[12px] font-bold mb-2 block">
                    Phone Number
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    type="tel"
                    placeholder="+1 202-555-0136"
                    className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                  />
                  {errors.phone && (
                    <p id="error-phone" className="text-red-600 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h3 className="text-primary text-[13px] font-bold mb-4 tracking-wider">
                  SHIPPING INFO
                </h3>
                <div className="mb-4">
                  <label className="text-[12px] font-bold mb-2 block">
                    Address
                  </label>
                  <input
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.address}
                    aria-describedby={
                      errors.address ? "error-address" : undefined
                    }
                  />
                  {errors.address && (
                    <p id="error-address" className="text-red-600 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] font-bold mb-2 block">
                      ZIP Code
                    </label>
                    <input
                      value={form.zip}
                      onChange={(e) =>
                        setForm({ ...form, zip: e.target.value })
                      }
                      type="text"
                      placeholder="10001"
                      className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                        errors.zip ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.zip}
                      aria-describedby={errors.zip ? "error-zip" : undefined}
                    />
                    {errors.zip && (
                      <p id="error-zip" className="text-red-600 text-xs mt-1">
                        {errors.zip}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-[12px] font-bold mb-2 block">
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      type="text"
                      placeholder="New York"
                      className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? "error-city" : undefined}
                    />
                    {errors.city && (
                      <p id="error-city" className="text-red-600 text-xs mt-1">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-[12px] font-bold mb-2 block">
                    Country
                  </label>
                  <input
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    type="text"
                    placeholder="United States"
                    className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-invalid={!!errors.country}
                    aria-describedby={
                      errors.country ? "error-country" : undefined
                    }
                  />
                  {errors.country && (
                    <p id="error-country" className="text-red-600 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              {/* Payment Details */}
              <div className="mb-8">
                <h3 className="text-primary text-[13px] font-bold mb-4 tracking-wider">
                  PAYMENT DETAILS
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <label className="text-[12px] font-bold">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        className="mr-3 accent-primary"
                        checked={form.payment === "e-money"}
                        onChange={() =>
                          setForm({ ...form, payment: "e-money" })
                        }
                      />
                      <span className="text-[14px] font-bold">e-Money</span>
                    </label>
                    <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        className="mr-3 accent-primary"
                        checked={form.payment === "cod"}
                        onChange={() => setForm({ ...form, payment: "cod" })}
                      />
                      <span className="text-[14px] font-bold">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>

                {form.payment === "e-money" && (
                  <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <label className="text-[12px] font-bold mb-2 block">
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        placeholder="238521993"
                        value={form.eMoneyNumber}
                        onChange={(e) =>
                          setForm({ ...form, eMoneyNumber: e.target.value })
                        }
                        className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                          errors.eMoneyNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        maxLength={9}
                      />
                      {errors.eMoneyNumber && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.eMoneyNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-[12px] font-bold mb-2 block">
                        e-Money PIN
                      </label>
                      <input
                        type="password"
                        placeholder="6891"
                        value={form.eMoneyPin}
                        onChange={(e) =>
                          setForm({ ...form, eMoneyPin: e.target.value })
                        }
                        className={`w-full border rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary ${
                          errors.eMoneyPin
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        maxLength={4}
                      />
                      {errors.eMoneyPin && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.eMoneyPin}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {form.payment === "cod" && (
                  <div className="mt-4 flex items-start gap-4 p-4 rounded-lg">
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

                    <p className="text-[14px] text-gray-600 leading-6">
                      The Cash on Delivery option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || cart.length === 0}
                className="w-full bg-primary text-white px-8 py-4 rounded font-bold text-[13px] tracking-wider hover:bg-opacity-90 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "CONTINUE"}
              </button>
            </form>

            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 lg:p-8 w-full">
                <h3 className="text-[18px] font-bold mb-6 tracking-wider">
                  SUMMARY
                </h3>

                {cart.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-6 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src={item.image || "/images/headphone.png"}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-[15px] truncate">
                              {item.name}
                            </p>
                            <p className="text-gray-600 text-[14px]">
                              $ {item.price.toLocaleString()}
                            </p>
                          </div>
                          <span className="text-gray-600 text-[15px] font-bold">
                            x{item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-[15px] uppercase">
                          Total
                        </span>
                        <span className="font-bold text-[18px]">
                          $ {subtotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-[15px] uppercase">
                          Shipping
                        </span>
                        <span className="font-bold text-[18px]">
                          $ {shipping}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-[15px] uppercase">
                          VAT (Included)
                        </span>
                        <span className="font-bold text-[18px]">
                          $ {tax.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t">
                      <span className="text-gray-600 text-[15px] uppercase">
                        Grand Total
                      </span>
                      <span className="font-bold text-[18px] text-primary">
                        $ {grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
