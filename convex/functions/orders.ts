import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    customer: v.object({ name: v.string(), email: v.string(), phone: v.string() }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      tax: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async ({ db }, args) => {
    const id = await db.insert("orders", {
      ...args,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    });
    return id;
  },
});

export const getOrderById = query({
  args: { id: (x: unknown) => String(x) },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});
