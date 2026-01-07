const Marquee = () => {
  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="text-primary-foreground font-medium mx-8 text-sm md:text-base">
            Get in touch with Us Today! ✦ Your Global Recruitment Partner ✦ Connecting Talent Worldwide ✦ 
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
