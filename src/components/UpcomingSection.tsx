import { Button } from "@/components/ui/button";

const upcomingFeatures = [
  "Auto-Generated Plugin & JS Snippets",
  "One-Click CRM Export",
  "Built-in CRM Schema Visualizer",
  "Scalable & Extensible Architecture",
];

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 sm:mb-12 px-4">Upcoming Features</h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
          {upcomingFeatures.map((feature, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent/10 text-sm sm:text-base"
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
