import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhatWeDo />
      <Team />
      <Services />
      <Testimonials />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
