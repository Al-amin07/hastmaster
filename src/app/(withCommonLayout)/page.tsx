import AboutSection from "@/components/home/AboutSection";
import TestimonialsPage from "@/components/home/HappyCustomer";
import Header from "@/components/home/header/Header";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="space-y-20">
      <Header />
      <AboutSection />

      <TestimonialsPage />
      <Testimonial />

    </div>
  );
}
