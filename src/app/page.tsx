import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import { Testimonial } from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonial/>
      <UpcomingWebinars/>
      <section id="instructors"><Instructor /></section>        {/* by giving section and id to a component we can directly access that part of the page */}
      <Footer/>
    </main>
  );
}
