"use client";
import AlsoLike from "@/components/AlsoLike";
import About from "@/components/About";
import Image from "next/image";
import ProductCategory from "@/components/ProductCategory";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [slug, setSlug] = useState<string | null>(null);

  // Unwrap the params promise
  useEffect(() => {
    async function unwrapParams() {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    }
    unwrapParams();
  }, [params]);

  const product = useQuery(
    api.products.getProductBySlug,
    slug ? { slug } : "skip"
  ) as Product | null | undefined;

  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
        },
        quantity
      );
      toast.success(
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-light rounded flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm text-gray-300">
              Added to cart! ({quantity}x)
            </p>
          </div>
        </div>,
        {
          duration: 3000,
        }
      );

      setQuantity(1);
    } else {
      toast.error("Failed to add product to cart");
    }
  };
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Loading state for params or product
  if (!slug || product === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  // Product not found
  if (product === null) {
    toast.error("Product not found");
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-primary text-white px-6 py-3 rounded font-medium"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        className="lg:px-20 md:px-10 px-5 pt-10 lg:pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handleGoBack}
          className="text-[15px] text-gray-600 hover:text-primary font-medium"
        >
          Go back
        </button>
      </motion.div>

      {/* Product Section */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-8 lg:py-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="bg-gray-light rounded-lg lg:p-16 p-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-full max-w-[349px] h-[300px] lg:h-[386px] flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={349.24}
              height={386}
              className="object-contain md:h-[243px] md:w-[220px] h-[201px] w-[181px]"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 lg:gap-6 text-left lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {product.isNew && (
            <motion.p
              className="text-primary text-sm font-bold tracking-[10px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              NEW PRODUCT
            </motion.p>
          )}
          <h2 className="font-bold text-3xl lg:text-[40px] leading-tight lg:leading-11 max-w-full lg:max-w-[445.5px]">
            {product.name.toUpperCase()}
          </h2>
          <p className="text-[15px] leading-[25px] text-gray-600">
            {product.description}
          </p>
          <p className="font-bold text-lg tracking-wider">
            $ {product.price.toLocaleString()}
          </p>
          <div className="flex gap-4 items-center lg:justify-start w-full">
            <motion.div
              className="bg-gray-light flex items-center justify-between gap-4 px-4 flex-1 max-w-[120px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={decrementQuantity}
                className="text-gray-600 hover:text-primary font-bold py-3 text-sm"
              >
                -
              </button>
              <p className="font-bold text-sm">{quantity}</p>
              <button
                onClick={incrementQuantity}
                className="text-gray-600 hover:text-primary font-bold py-3 text-sm"
              >
                +
              </button>
            </motion.div>
            <motion.button
              onClick={handleAddToCart}
              className="bg-primary text-white px-6 lg:px-8 py-3 font-bold text-[13px] max-w-40 tracking-wide hover:bg-primary-light transition flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ADD TO CART
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Features & In The Box Section */}
      <motion.section
        className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-12 lg:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
            FEATURES
          </h2>
          <div className="text-[15px] leading-[25px] text-gray-600 whitespace-pre-line">
            {product.features}
          </div>
        </motion.div>
        <motion.div
          className="lg:flex lg:flex-col grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
            IN THE BOX
          </h2>
          <ul className="space-y-3">
            {product.inTheBox.map((item, index) => (
              <motion.li
                key={index}
                className="text-[15px] text-gray-600"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="text-primary font-bold mr-6">
                  {item.quantity}x
                </span>
                {item.item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 lg:px-20 md:px-10 px-5 pb-12 lg:pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 lg:space-y-8">
          {product.galleryImages.slice(0, 2).map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={image}
                alt={`${product.name} gallery ${index + 1}`}
                width={445}
                height={280}
                className="object-cover w-full h-full scale-110"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="rounded-lg h-[369px] lg:h-[608px] overflow-hidden grayscale"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{
            filter: "grayscale(0%)",
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {product.galleryImages[2] && (
            <Image
              src={product.galleryImages[2]}
              alt={`${product.name} gallery 3`}
              width={635}
              height={592}
              className="object-cover w-full h-full scale-110"
            />
          )}
        </motion.div>
      </motion.section>

      <AlsoLike />
      <ProductCategory />
      <About />
    </div>
  );
}
