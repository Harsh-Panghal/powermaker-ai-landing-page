import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-collaboration.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12">Our Vision</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              PowerMaker AI is more than a tool—it's your AI pair programmer for Dynamics 365.
              Whether you're a solo consultant or an enterprise team, PowerMaker AI helps you move
              faster, debug smarter, and ship confidently.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              PowerMaker AI is built with the vision of simplifying Dynamics 365 customizations
              using AI. The MVP is already live and evolving rapidly based on developer and
              consultant feedback.
            </p>

            <Button variant="accent" size="lg" className="mt-4">
              Contact Us
            </Button>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={teamImage}
              alt="PowerMaker AI team collaborating on Dynamics 365 projects"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
