import { Heart, DollarSign, Briefcase, Building, Hotel } from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare & Medical Services",
    description: "Nurses, physicians, medical technicians, and healthcare administrators",
  },
  {
    icon: DollarSign,
    name: "Accounting & Finance",
    description: "Accountants, financial analysts, auditors, and banking professionals",
  },
  {
    icon: Briefcase,
    name: "Administrative & Office Support",
    description: "Executive assistants, office managers, and administrative coordinators",
  },
  {
    icon: Building,
    name: "Corporate & Operations",
    description: "Project managers, operations specialists, and corporate executives",
  },
  {
    icon: Hotel,
    name: "Hospitality & Service Roles",
    description: "Hotel management, culinary staff, and customer service professionals",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/10 text-navy text-sm font-medium mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Specialized Recruitment Across Key Sectors
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our expertise spans multiple industries, ensuring we understand the unique requirements and challenges of each sector.
            </p>

            <div className="space-y-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card hover:shadow-card transition-all duration-300 border border-transparent hover:border-gold/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5 rounded-3xl" />
            <div className="relative p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <div className="text-4xl font-bold text-gold mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="bg-navy rounded-xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-1">48h</div>
                    <div className="text-sm text-primary-foreground/70">Average Response Time</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <div className="text-4xl font-bold text-navy mb-1">85%</div>
                    <div className="text-sm text-muted-foreground">Retention Rate</div>
                  </div>
                  <div className="bg-gold rounded-xl p-6 shadow-gold text-center">
                    <div className="text-4xl font-bold text-navy-dark mb-1">15+</div>
                    <div className="text-sm text-navy-dark/80">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
