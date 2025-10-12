const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-accent rounded-lg"></div>
            <div className="w-16 h-16 bg-primary rounded-lg"></div>
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Goal is to Build a World Where Technology Serves Humanity
          </h2>

          <p className="text-lg text-foreground leading-relaxed">
            Our platform harnesses the power of AI to streamline processes and optimize outcomes.
            We believe in making Dynamics 365 development accessible, efficient, and enjoyable for
            everyone—from solo consultants to enterprise teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
