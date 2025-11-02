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
};

export default function Checkout() {
  const router = useRouter();
  const { cart, subtotal, clearCart } = useCart();
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
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

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

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (cart.length === 0) {
      return;
    }

    setLoading(true);

    try {
      const orderId = await createOrder({
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

      setShowThankYou(true);
      clearCart();
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

        {showThankYou ? (
          <OrderConfirmation />
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
                      aria-describedby={errors.email ? "error-email" : undefined}
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
                      onChange={(e) => setForm({ ...form, zip: e.target.value })}
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
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
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
                  <label className="text-[12px] font-bold">Payment Method</label>
                  <div className="space-y-3">
                    <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        className="mr-3 accent-primary"
                        checked={form.payment === "e-money"}
                        onChange={() => setForm({ ...form, payment: "e-money" })}
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

                {form.payment === "cod" && (
                  <div className="mt-4 flex items-start gap-4 p-4 rounded-lg">
                    <svg
                      className="w-12 h-12 shrink-0 text-primary"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 30l-8-8 2.83-2.83L20 28.34l11.17-11.17L34 20 20 34z" />
                    </svg>
                    <p className="text-[14px] text-gray-600 leading-6">
                      The Cash on Delivery option enables you to pay in cash when
                      our delivery courier arrives at your residence. Just make
                      sure your address is correct so that your order will not be
                      cancelled.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || cart.length === 0}
                className="w-full bg-primary text-white px-8 py-4 rounded font-bold text-[13px] tracking-wider hover:bg-opacity-90 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "CONTINUE & PAY"}
              </button>
            </form>

            {/* Right Side - Summary */}
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
