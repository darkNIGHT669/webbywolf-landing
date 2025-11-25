import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Banner1 from "@/components/sections/Banner1";
import LogoCloud from "@/components/sections/LogoCloud";
import Banner2 from "@/components/sections/Banner2";
import RequestQuote from "@/components/sections/RequestQuote";
import BlogCards from "@/components/sections/BlogCards";
import AppDownload from "@/components/sections/AppDownload";
import BentoGrid from "@/components/sections/BentoGrid";
import Section7 from "@/components/sections/Section7";
import Testimonials from "@/components/sections/Testimonials";
import TabsSection from "@/components/sections/TabsSection";
import AccordionSteps from "@/components/sections/AccordionSteps";
import StoryCarousel from "@/components/sections/StoryCarousel";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Banner1 />
      <LogoCloud />
      <Banner2 />
      <RequestQuote />
      <BlogCards />
      <AppDownload />
      <BentoGrid />
      <Section7 />
      <Testimonials />
      <TabsSection />
      <AccordionSteps />
      <StoryCarousel />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}