"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

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

  const shipping = 50;
  const tax = Math.round(subtotal * 0.2); // example VAT 20%
  const grandTotal = subtotal + shipping + tax;

  const validate = (): boolean => {
    const e: typeof errors = {};
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

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;

    if (cart.length === 0) {
      setErrors({ ...errors, name: "Cart is empty" });
      return;
    }

    setLoading(true);
    try {
      const orderId = await createOrder({
        customer: { name: form.name, email: form.email, phone: form.phone },
        shipping: {
          address: form.address,
          city: form.city,
          country: form.country,
          zip: form.zip,
        },
        items: cart.map((i) => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity,
          image: i.image || "",
        })),
        totals: { subtotal, shipping, tax, grandTotal },
      });

      // fire confirmation email server-side
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, orderId }),
      });

      clearCart();
      router.push(`/order-confirmation?orderId=${orderId}`);
    } catch (err) {
      console.error(err);
      setErrors({ ...errors, name: "Checkout failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:py-16 md:py-10 py-5">
      <div className="max-w-6xl mx-auto md:px-10 px-5">
        <button
          className="text-gray-600 lg:mb-20 mb-10 hover:text-primary"
          onClick={() => history.back()}
        >
          Go back
        </button>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <form
            className="lg:col-span-2 bg-white rounded-lg p-8"
            onSubmit={handleSubmit}
            noValidate
          >
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
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    placeholder="Alexei I"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                  {errors.name && (
                    <p id="error-name" className="text-red-600 text-sm mt-1">
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
                    placeholder="alexei@gmail.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-primary"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                  />
                  {errors.email && (
                    <p id="error-email" className="text-red-600 text-sm mt-1">
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
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
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
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
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
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
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
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
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
                      checked={form.payment === "e-money"}
                      onChange={() => setForm({ ...form, payment: "e-money" })}
                    />
                    <span className="text-[14px] font-bold">e-Money</span>
                  </label>
                  <label className="flex items-center border border-primary-light rounded-lg px-4 py-3 cursor-pointer hover:border-primary">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-3"
                      checked={form.payment === "cod"}
                      onChange={() => setForm({ ...form, payment: "cod" })}
                    />
                    <span className="text-[14px] font-bold">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-6 py-4 rounded font-bold"
              >
                {loading ? "Processing..." : "Continue & Pay"}
              </button>
            </div>
          </form>

          {/* Right Side - Summary */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 w-full">
              <h3 className="text-[18px] font-bold mb-6">SUMMARY</h3>

              <div className="space-y-6 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden">
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
                      <p className="text-gray-600 text-[14px]">
                        $ {item.price}
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
                  <span className="text-gray-600 text-[15px]">TOTAL</span>
                  <span className="font-bold text-[18px]">$ {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-[15px]">SHIPPING</span>
                  <span className="font-bold text-[18px]">$ {shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-[15px]">
                    VAT (INCLUDED)
                  </span>
                  <span className="font-bold text-[18px]">$ {tax}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 pt-4">
                <span className="text-gray-600 text-[15px]">GRAND TOTAL</span>
                <span className="font-bold text-[18px] text-primary">
                  $ {grandTotal}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
