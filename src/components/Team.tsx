import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Managing Partner",
    image: team1,
    bio: "With over 15 years in global talent acquisition, Sarah leads our strategic partnerships and executive recruitment across multiple industries.",
  },
  {
    name: "Jessica Williams",
    role: "Senior Talent Acquisition Specialist",
    image: team2,
    bio: "Jessica bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
  },
  {
    name: "Amanda Chen",
    role: "Global Recruitment Coordinator",
    image: team3,
    bio: "Amanda specializes in leadership recruitment across healthcare, finance, and administration sectors with a consultative, value-driven approach.",
  },
  {
    name: "Rachel Thompson",
    role: "Director of Client Services",
    image: team4,
    bio: "Rachel oversees the candidate journey from initial consultation to placement, ensuring professionals are well-positioned for global opportunities.",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Meet the Team Behind PrimePath Talent Group
          </h2>
          <p className="text-muted-foreground text-lg">
            Our strength lies in our people. Our recruitment specialists, career strategists, and industry consultants work together to connect exceptional talent with world-class organizations globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
