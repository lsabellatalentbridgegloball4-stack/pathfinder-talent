import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "PrimePath Talent Group made my job search seamless. Within weeks, I landed a position that matched my skills perfectly. Their team is professional, supportive, and truly cares about candidates.",
    name: "Amina K.",
    role: "Marketing Coordinator",
  },
  {
    quote: "Exceptional experience from start to finish. The recruiters guided me through every step of the hiring process with clarity and professionalism.",
    name: "Alex P.",
    role: "Software Developer",
  },
  {
    quote: "As an international job seeker, I was impressed by how smoothly everything went. The team helped me prepare for interviews and connected me with a great company abroad.",
    name: "Leila M.",
    role: "Project Manager",
  },
  {
    quote: "Our partnership with PrimePath helped us fill key roles faster than ever. Their understanding of our business needs was impressive.",
    name: "Priya S.",
    role: "HR Director",
  },
  {
    quote: "PrimePath delivered qualified, pre-screened candidates who perfectly fit our company culture. We'll definitely continue working with them.",
    name: "Carlos J.",
    role: "Operations Manager",
  },
  {
    quote: "Professional, reliable, and truly global. They helped me secure a remote role that matches my goals and skill set.",
    name: "Omar S.",
    role: "Data Analyst",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            🏆 What Our Clients and Candidates Say
          </h2>
          <p className="text-muted-foreground">
            We're proud to have earned the trust of professionals and businesses around the world.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card rounded-xl p-6 shadow-card border border-border"
                  style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
