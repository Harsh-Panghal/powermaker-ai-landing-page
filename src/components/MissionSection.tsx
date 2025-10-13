const MissionSection = () => {
  return (
    <section id="mission" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-3xl rotate-12"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary/20 rounded-2xl -rotate-6"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-accent/20 rounded-3xl rotate-45"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border-2 border-primary/20 rounded-2xl -rotate-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
            <span className="text-foreground">Our Goal is to build a world </span>
            <span className="text-accent">where technology serves humanity</span>
          </h2>

          {/* Subheadline */}
          <p className="text-3xl md:text-4xl font-semibold leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Our platform harnesses the power of AI </span>
            <span className="text-accent">to streamline processes and optimize outcomes.</span>
          </p>

          {/* Additional context */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We believe in making Dynamics 365 development accessible, efficient, and enjoyable for
            everyone—from solo consultants to enterprise teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
