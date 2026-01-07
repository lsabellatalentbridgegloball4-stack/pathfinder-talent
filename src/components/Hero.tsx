import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 text-center section-container pt-20">
        <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-fade-up text-shadow">
          PrimePath Talent Group
        </h2>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold mb-8 animate-fade-up max-w-4xl mx-auto text-shadow" style={{ animationDelay: "0.15s" }}>
          Your Global Partner in Talent Acquisition and Workforce Success
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
          Whether you're seeking your next career breakthrough or the perfect hire to drive your organization forward, PrimePath Talent Group connects professionals and employers worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
