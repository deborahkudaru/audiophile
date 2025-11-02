import { query } from "../_generated/server";

export const getProducts = query(async ({ db }) => {
  return await db.query("products").collect();
});

export const getProductBySlug = query({
  args: { slug: (s: unknown) => String(s) },
  handler: async ({ db }, { slug }) => {
    return await db.query("products").withIndex("by_slug", (q) =>
      q.eq("slug", slug)
    ).first();
  },
});
