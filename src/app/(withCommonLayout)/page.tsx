import AboutSection from "@/components/home/AboutSection";
import TestimonialsPage from "@/components/home/HappyCustomer";
import Header from "@/components/home/header/Header";
import Testimonial from "@/components/home/Testimonial";
import Manufacture from "@/components/home/Menufacture"
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionProcess from "@/components/home/SolutionProcess";
import ProductSection from "@/components/home/ProductSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <Header />
      <AboutSection />
      <ProductSection />
      <Manufacture />
      <WhyChooseUs />
      <SolutionProcess />
      {/* <Gallery /> */}
      <TestimonialsPage />
      <Testimonial />

    </div>
  );
}
