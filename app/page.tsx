import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductAds from "@/components/ProductAds";
import ProductCategory from "@/components/ProductCategory";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <div>
      <Navbar />
      <Hero />
      <ProductCategory />
      <ProductAds />
      <Footer />
    </div>
  )
}