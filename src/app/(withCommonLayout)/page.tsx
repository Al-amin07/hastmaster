import AboutSection from "@/components/home/AboutSection";
import TestimonialsPage from "@/components/home/HappyCustomer";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="space-y-20">
      <AboutSection />

      <TestimonialsPage />
      <Testimonial />

    </div>
  );
}
