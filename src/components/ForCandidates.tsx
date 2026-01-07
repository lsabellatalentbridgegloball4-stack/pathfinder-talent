import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Reviewing and positioning their profiles",
  "Matching them with suitable opportunities",
  "Guiding them through recruitment stages",
];

const ForCandidates = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              For Candidates
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Your Career Journey Starts Here
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We support professionals in finding opportunities that align with their skills, experience, and career aspirations.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-gold/10 border border-gold/20 mb-8">
              <p className="text-sm text-foreground font-medium">
                💡 PrimePath Talent Group does not charge candidates for initial profile review.
              </p>
            </div>

            <Button variant="gold" size="lg">
              Submit Your Profile
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Ready to Advance?
                </h3>
                <p className="text-muted-foreground">
                  Join thousands of professionals who found their path with us.
                </p>
              </div>

              <div className="space-y-4">
                {["Healthcare", "Finance", "Corporate", "Hospitality"].map((industry, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <span className="text-foreground font-medium">{industry}</span>
                    <span className="text-sm text-gold font-medium">Open Positions</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCandidates;
