import { Search, FileText, Users, Handshake } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Talent Sourcing & Screening",
    description: "We identify skilled professionals and conduct initial screenings to assess experience, competencies, and role suitability.",
  },
  {
    icon: FileText,
    title: "Resume Review & Positioning",
    description: "We support candidates in aligning their resumes with international hiring standards and employer expectations.",
  },
  {
    icon: Users,
    title: "Shortlisting & Profile Presentation",
    description: "Only shortlisted, consent-approved candidate profiles are presented to hiring managers.",
  },
  {
    icon: Handshake,
    title: "Employer Talent Support",
    description: "We assist employers by delivering job-ready candidates and coordinating interviews and follow-ups.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Comprehensive Recruitment Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From sourcing to placement, we provide end-to-end talent acquisition services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
