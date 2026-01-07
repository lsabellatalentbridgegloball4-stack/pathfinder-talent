import { Users, Search, Lightbulb, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Recruitment",
    description: "End-to-end talent acquisition services connecting top candidates with leading organizations.",
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Specialized headhunting for senior leadership and C-suite positions across industries.",
  },
  {
    icon: Lightbulb,
    title: "Career Coaching",
    description: "Personalized coaching to elevate your career trajectory and professional development.",
  },
  {
    icon: BarChart3,
    title: "Workforce Consulting",
    description: "Strategic workforce planning and organizational development solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive recruitment and workforce solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
