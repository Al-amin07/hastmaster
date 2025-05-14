import AboutSection from "@/components/home/AboutSection";
import Header from "@/components/home/header/Header";
import Testimonial from "@/components/home/Testimonial";
import Manufacture from "@/components/home/Menufacture"
import ProductSection from "@/components/home/ProductSection";
import MenufacturingProcess from "@/components/home/MenufacturingProcess";

export default function Home() {
  return (
    <div className="space-y-20  mx-auto">
      <Header />
      <AboutSection />
      <ProductSection />
      <Manufacture />
      {/* <WhyChooseUs /> */}
      <MenufacturingProcess />
      {/* <SolutionProcess /> */}
      {/* <Gallery /> */}
      {/* <TestimonialsPage /> */}
      <Testimonial />

    </div>
  );
}
