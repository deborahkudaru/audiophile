import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const seedAllProducts = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if products already exist
    const existingProducts = await ctx.db.query("products").collect();
    if (existingProducts.length > 0) {
      throw new Error("Products already exist. Clear the database first or use individual create mutations.");
    }

    const products = [
      // HEADPHONES
      {
        name: "XX99 Mark II Headphones",
        slug: "xx99-mark-ii-headphones",
        category: "headphones",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        price: 2999,
        isNew: true,
        features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 5m Audio Cable" },
          { quantity: 1, item: "Travel Bag" },
        ],
        image: "/images/headphone-one.png",
        galleryImages: ["/images/img13.png", "/images/img2.png", "/images/img6.png"],
      },
      {
        name: "XX99 Mark I Headphones",
        slug: "xx99-mark-i-headphones",
        category: "headphones",
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        price: 1750,
        isNew: false,
        features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm Audio Cable" },
        ],
        image: "/images/headphone.png",
        galleryImages: ["/images/img13.png", "/images/img2.png", "/images/img6.png"],
      },
      {
        name: "XX59 Headphones",
        slug: "xx59-headphones",
        category: "headphones",
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        price: 899,
        isNew: false,
        features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        inTheBox: [
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earcups" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm Audio Cable" },
          { quantity: 1, item: "Travel Bag" },
        ],
        image: "/images/headphone-three.png",
        galleryImages: ["/images/img14.png", "/images/img9.png", "/images/img10.png"],
      },

      // EARPHONES
      {
        name: "YX1 Wireless Earphones",
        slug: "yx1-wireless-earphones",
        category: "earphones",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        price: 599,
        isNew: true,
        features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        inTheBox: [
          { quantity: 2, item: "Earphone Unit" },
          { quantity: 6, item: "Multi-size Earplugs" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "USB-C Charging Cable" },
          { quantity: 1, item: "Travel Pouch" },
        ],
        image: "/images/earphone.png",
        galleryImages: ["/images/img1.png", "/images/image-one.png", "/images/img15.png"],
      },

      // SPEAKERS
      {
        name: "ZX9 Speaker",
        slug: "zx9-speaker",
        category: "speakers",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        price: 4500,
        isNew: true,
        features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5 aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        inTheBox: [
          { quantity: 2, item: "Speaker Unit" },
          { quantity: 2, item: "Speaker Cloth Panel" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 10m Audio Cable" },
          { quantity: 1, item: "10m Optical Cable" },
        ],
        image: "/images/speaker.png", 
        galleryImages: ["/images/img5.png", "/images/img7.png", "/images/img12.png"],
      },
      {
        name: "ZX7 Speaker",
        slug: "zx7-speaker",
        category: "speakers",
        description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        price: 3500,
        isNew: false,
        features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high-fidelity sound. Its compact size makes it versatile for various room configurations while still delivering room-filling audio. The handcrafted MDF wooden enclosure has been carefully designed to minimize resonance and distortion.",
        inTheBox: [
          { quantity: 2, item: "Speaker Unit" },
          { quantity: 2, item: "Speaker Cloth Panel" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
        ],
        image: "/images/image-four.png",
        galleryImages: ["/images/img3.png", "/images/img11.png", "/images/image-zero.png"], 
      },
    ];

    const productIds = [];
    for (const product of products) {
      const id = await ctx.db.insert("products", product);
      productIds.push(id);
    }

    return { 
      success: true, 
      message: `Successfully seeded ${productIds.length} products`,
      count: productIds.length 
    };
  },
});

// Helper mutation to clear all products (use with caution!)
export const clearAllProducts = mutation({
  args: {},
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    
    for (const product of products) {
      await ctx.db.delete(product._id);
    }
    
    return { 
      success: true, 
      message: `Deleted ${products.length} products` 
    };
  },
});

// Query to get products by category
export const getProductsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .filter(q => q.eq(q.field("category"), args.category))
      .collect();
  },
});

// Query to get all products
export const getAllProducts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

// Query to get product by slug
export const getProductBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query("products")
      .filter(q => q.eq(q.field("slug"), args.slug))
      .collect();
    
    return products.length > 0 ? products[0] : null;
  },
});