import { Button } from "@/components/ui/button";

const upcomingFeatures = [
  "Advanced Analytics Dashboard",
  "Multi-Language Support",
  "Team Collaboration Tools",
];

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Upcoming Features</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent/10"
              disabled
            >
              {feature} <span className="ml-2 text-xs">Coming Soon</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
