import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.png";
import team6 from "@/assets/team-6.png";

const team = [
  {
    name: "Madison Oliver",
    role: "Managing Partner",
    image: team1,
    bio: "With over 15 years in global talent acquisition, Madison leads our strategic partnerships and executive recruitment across multiple industries.",
  },
  {
    name: "Valentina Henry",
    role: "Senior Executive Recruiter",
    image: team2,
    bio: "Valentina bridges the gap between top employers and exceptional talent, specializing in workforce planning and client relationship management.",
  },
  {
    name: "Stella Grayson",
    role: "Global Talent Consultant",
    image: team3,
    bio: "Stella specializes in leadership recruitment across healthcare, finance, and administration sectors with a consultative, value-driven approach.",
  },
  {
    name: "Delilah Christopher",
    role: "Director of Client Services",
    image: team4,
    bio: "Delilah oversees the candidate journey from initial consultation to placement, ensuring professionals are well-positioned for global opportunities.",
  },
  {
    name: "Josephine Robert",
    role: "Candidate Support Associate",
    image: team5,
    bio: "Josephine drives recruitment excellence across all project verticals. She manages candidate pipelines and relationship development.",
  },
  {
    name: "Catherine Jason",
    role: "Employer Relations Officer",
    image: team6,
    bio: "Catherine ensures operational efficiency across all recruitment initiatives and maintains seamless, transparent employer communications.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
