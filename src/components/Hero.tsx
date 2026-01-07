import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 animate-fade-up">
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Global Recruitment Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Connecting Talent to the{" "}
              <span className="text-gradient-gold">Right Path Forward</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We source, screen, and position qualified professionals for roles across healthcare, finance, administration, and corporate operations worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Find Talent
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                I'm a Candidate
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gold/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Users, value: "5,000+", label: "Placements" },
                { icon: Globe, value: "30+", label: "Countries" },
                { icon: Shield, value: "100%", label: "Verified" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="w-5 h-5 text-gold mx-auto lg:mx-0 mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-md">
              {/* Decorative Cards */}
              <div className="absolute -top-8 -left-8 w-64 h-40 bg-card rounded-xl shadow-card-hover p-6 animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Healthcare</div>
                    <div className="text-xs text-muted-foreground">240+ Positions</div>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gold rounded-full" />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-56 h-36 bg-card rounded-xl shadow-card-hover p-5 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Finance</div>
                    <div className="text-xs text-muted-foreground">185+ Positions</div>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-navy rounded-full" />
                </div>
              </div>

              {/* Main Visual */}
              <div className="w-72 h-72 mx-auto rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-xl bg-card shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-gold" />
                    </div>
                    <div className="font-serif text-lg font-semibold text-foreground">Global Reach</div>
                    <div className="text-sm text-muted-foreground">Trusted Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
