import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        {/* Main About */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At PrimePath Talent Group, we believe the right people can transform organizations, and the right opportunities can transform lives.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are a global recruitment and workforce solutions firm helping employers attract, assess, and hire exceptional talent while guiding professionals toward meaningful career advancement.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our partnerships extend across healthcare, finance, administration, and corporate operations sectors worldwide. We leverage trusted networks to help candidates access verified job openings, ensuring every opportunity we present is both credible and current.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower professionals and organizations by connecting talent to opportunity, with integrity, excellence, and global reach.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a globally recognized recruitment partner known for shaping futures, inspiring growth, and driving workforce success across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
