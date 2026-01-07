import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Values from "@/components/Values";
import ForCandidates from "@/components/ForCandidates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <Values />
      <ForCandidates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
