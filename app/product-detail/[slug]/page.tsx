// "use client";

// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import { notFound, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import AlsoLike from "@/components/AlsoLike";
// import About from "@/components/About";
// import ProductCategory from "@/components/ProductCategory";

// interface ProductPageProps {
//   params: { slug: string };
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const router = useRouter();
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const product = useQuery(api.products.getProductBySlug, {
//     slug: params.slug,
//   });

//   const handleGoBack = () => {
//     router.back();
//   };

//   const incrementQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleAddToCart = () => {
//     if (!product) return;

//     // Get existing cart from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Check if product already exists in cart
//     const existingItemIndex = cart.findIndex(
//       (item: any) => item.id === product._id
//     );

//     if (existingItemIndex > -1) {
//       // Update quantity if product exists
//       cart[existingItemIndex].quantity += quantity;
//     } else {
//       // Add new product to cart
//       cart.push({
//         id: product._id,
//         name: product.name,
//         price: product.price,
//         quantity: quantity,
//         image: product.image,
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Optional: Show success message or trigger cart update
//     alert(`Added ${quantity} x ${product.name} to cart`);
//   };

//   // Loading state
//   if (product === undefined) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   // Not found state
//   if (product === null) {
//     notFound();
//   }

//   return (
//     <div>
//       <div className="lg:px-20 md:px-10 px-5 pt-10 lg:pt-20">
//         <button
//           onClick={handleGoBack}
//           className="text-[15px] text-gray-600 hover:text-primary font-medium"
//         >
//           Go back
//         </button>
//       </div>

//       {/* Product Section */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-8 lg:py-12 items-center">
//         <div className="bg-gray-light rounded-lg lg:p-16 p-8 flex items-center justify-center">
//           <div
//             className="w-full max-w-[349px] h-[300px] lg:h-[386px] flex items-center justify-center"
//             style={{
//               filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.35))",
//             }}
//           >
//             {product.image ? (
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={349}
//                 height={386}
//                 className="object-contain md:h-[243px] md:w-[220px] h-[201px] w-[181px]"
//                 priority
//               />
//             ) : (
//               <div className="bg-gray-300 w-full h-full rounded-lg flex items-center justify-center">
//                 <span className="text-gray-500">No image</span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 lg:gap-6 text-left lg:text-left">
//           {product.isNew && (
//             <p className="text-primary text-sm tracking-[10px] uppercase">
//               NEW PRODUCT
//             </p>
//           )}
//           <h2 className="font-bold text-3xl lg:text-[40px] leading-tight lg:leading-11 max-w-full lg:max-w-[445.5px] uppercase">
//             {product.name}
//           </h2>
//           <p className="text-[15px] leading-[25px] text-gray-600">
//             {product.description}
//           </p>
//           <p className="font-bold text-lg tracking-wider">
//             $ {product.price.toLocaleString()}
//           </p>
//           <div className="flex gap-4 items-center lg:justify-start w-full">
//             <div className="bg-gray-light flex items-center justify-between gap-4 px-4 flex-1 max-w-[120px]">
//               <button
//                 onClick={decrementQuantity}
//                 className="text-gray-600 hover:text-primary font-bold py-3 text-sm"
//               >
//                 -
//               </button>
//               <p className="font-bold text-sm">{quantity}</p>
//               <button
//                 onClick={incrementQuantity}
//                 className="text-gray-600 hover:text-primary font-bold py-3 text-sm"
//               >
//                 +
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-primary text-white px-6 lg:px-8 py-3 font-bold text-[13px] tracking-wide hover:bg-opacity-90 transition flex-1"
//             >
//               ADD TO CART
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features & In The Box Section */}
//       <section className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-16 lg:px-20 md:px-10 px-5 py-12 lg:py-20">
//         <div className="col-span-2">
//           <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
//             FEATURES
//           </h2>
//           <div className="text-[15px] leading-[25px] text-gray-600 whitespace-pre-line">
//             {product.features}
//           </div>
//         </div>
//         <div className="lg:flex lg:flex-col grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-0">
//           <h2 className="font-bold text-2xl lg:text-[32px] mb-6 lg:mb-8">
//             IN THE BOX
//           </h2>
//           <ul className="space-y-3">
//             {product.inTheBox.map((item, index) => (
//               <li key={index} className="text-[15px] text-gray-600">
//                 <span className="text-primary font-bold mr-6">
//                   {item.quantity}x
//                 </span>
//                 {item.item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       {product.galleryImages && product.galleryImages.length > 0 && (
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 lg:px-20 md:px-10 px-5 pb-12 lg:pb-20">
//           {product.galleryImages.length >= 2 && (
//             <div className="space-y-4 lg:space-y-8">
//               <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
//                 <Image
//                   src={product.galleryImages[0]}
//                   alt={`${product.name} gallery 1`}
//                   width={445}
//                   height={280}
//                   className="object-cover w-full h-full scale-110"
//                 />
//               </div>
//               {product.galleryImages.length >= 2 && (
//                 <div className="rounded-lg h-[174px] lg:h-72 overflow-hidden grayscale">
//                   <Image
//                     src={product.galleryImages[1]}
//                     alt={`${product.name} gallery 2`}
//                     width={445}
//                     height={280}
//                     className="object-cover w-full h-full scale-110"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//           {product.galleryImages.length >= 3 && (
//             <div className="rounded-lg h-[369px] lg:h-[608px] overflow-hidden grayscale">
//               <Image
//                 src={product.galleryImages[2]}
//                 alt={`${product.name} gallery 3`}
//                 width={635}
//                 height={592}
//                 className="object-cover w-full h-full scale-110"
//               />
//             </div>
//           )}
//         </section>
//       )}

//       <AlsoLike />
//       <ProductCategory />
//       <About />
//     </div>
//   );
// }
