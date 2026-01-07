import { ClipboardList, Search, FileCheck, Users, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Resume Review",
    description: "Candidate information and resume review",
  },
  {
    icon: Search,
    title: "Skills Screening",
    description: "Skills, experience, and role alignment assessment",
  },
  {
    icon: FileCheck,
    title: "Verification",
    description: "Document and background verification as applicable",
  },
  {
    icon: Users,
    title: "Shortlisting",
    description: "Candidate shortlisting with consent",
  },
  {
    icon: CalendarCheck,
    title: "Interview Coordination",
    description: "Submission to employer and interview setup",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            A Transparent Recruitment Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Our structured approach ensures quality matches and a seamless experience for candidates and employers alike.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-gold text-navy-dark text-sm font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card rounded-xl p-6 pt-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group-hover:border-gold/30 h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                    <step.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
