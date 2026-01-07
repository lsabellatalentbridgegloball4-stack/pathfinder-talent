import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import jobSeekersImg from "@/assets/job-seekers.jpg";
import employersImg from "@/assets/employers.jpg";

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-16">
          What We Do
        </h2>

        {/* For Job Seekers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img 
              src={jobSeekersImg} 
              alt="Job seekers collaboration" 
              className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              For Job Seekers
            </h3>
            <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-muted-foreground">
              "Step into global opportunities, where ambition meets possibility."
            </blockquote>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At PrimePath Talent Group, we connect passionate professionals with leading companies across healthcare, finance, administration, and corporate sectors globally.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Get noticed by top international and regional recruiters",
                "Optimize your resume for global hiring standards",
                "Access exclusive job openings that aren't publicly advertised",
                "Receive personalized support from our career specialists",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-muted-foreground mb-6">
              "Your dream career isn't far — let's take the next step together."
            </p>
            <Button variant="hero" size="lg">
              Submit Your Profile
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* For Employers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              For Employers
            </h3>
            <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-muted-foreground">
              "Partner with us to hire, build, and retain world-class talent."
            </blockquote>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We understand that great companies are built by great people. That's why we partner with organizations of all sizes to deliver top-tier recruitment and workforce solutions.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Permanent and contract staffing solutions",
                "Executive and senior-level search",
                "Employer branding support",
                "Recruitment process outsourcing (RPO)",
                "Workforce planning and consulting",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-muted-foreground mb-6">
              "Let's help you find your next great hire."
            </p>
            <Button variant="hero" size="lg">
              Find Talent
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div>
            <img 
              src={employersImg} 
              alt="Employer partnerships" 
              className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
