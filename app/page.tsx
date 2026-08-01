import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tech from "@/components/sections/Tech";
import AISection from "@/components/sections/AISection";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import Careers from "@/components/sections/Careers";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Tech />
        <AISection />
        <Products />
        <Gallery />
        <Team />
        <Blog />
        <Careers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
