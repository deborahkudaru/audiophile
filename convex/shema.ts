import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    description: v.string(),
    price: v.number(),
    isNew: v.boolean(),
    features: v.string(),
    inTheBox: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
    // Main product image - can use either storage ID or external URL
    image: v.string(), // Keep your existing field for backward compatibility
    // Optional: Convex storage IDs if you want to use Convex file storage
    mainImageStorageId: v.optional(v.id("_storage")),
    // Gallery images for product detail page
    galleryImages: v.array(v.string()), // URLs or paths
    galleryImageStorageIds: v.optional(v.array(v.id("_storage"))),
  }).index("by_slug", ["slug"]),
  
  orders: defineTable({
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
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
    status: v.string(),
    createdAt: v.string(),
  }).index("by_status", ["status"])
    .index("by_email", ["customer.email"]),
});