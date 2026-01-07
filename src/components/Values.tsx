import { Shield, MessageSquare, Target, Lock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent and ethical recruitment practices in every interaction.",
  },
  {
    icon: MessageSquare,
    title: "Professionalism",
    description: "Clear communication and accountability throughout the process.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Proper candidate-to-role matching for successful placements.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Secure handling of all candidate and employer information.",
  },
];

const Values = () => {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our core values guide every decision we make and every relationship we build.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
