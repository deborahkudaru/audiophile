import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductAds from "@/components/ProductAds";
import ProductCategory from "@/components/ProductCategory";

export default function Home(){
  return(
    <div>
      <Navbar />
      <Hero />
      <ProductCategory />
      <ProductAds />
    </div>
  )
}