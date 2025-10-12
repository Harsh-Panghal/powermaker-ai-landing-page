import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-4">
          Purchase a Subscription
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Choose the plan that best fits your needs
        </p>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-accent shadow-xl">
            <CardHeader className="text-center">
              <div className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                BETA ACCESS
              </div>
              <CardTitle className="text-3xl">For All Users During Beta</CardTitle>
              <CardDescription className="text-lg mt-2">
                Full access to all features while we're in beta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">Free</p>
                <p className="text-muted-foreground mt-2">No credit card required</p>
              </div>

              <div className="space-y-3">
                {[
                  "AI Entity Builder",
                  "Plugin Trace Analyzer",
                  "Live CRM Integration",
                  "Unlimited Conversations",
                  "Priority Support",
                  "Early Access to New Features",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Get Started Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
