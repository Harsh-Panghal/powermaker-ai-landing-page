import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PowerMaker AI has transformed how we approach Dynamics 365 development. What used to take hours now takes minutes.",
    author: "Sarah Johnson",
    role: "Senior Dynamics Consultant",
  },
  {
    quote:
      "The plugin trace analyzer alone has saved our team countless debugging hours. An absolute game-changer.",
    author: "Michael Chen",
    role: "Technical Lead",
  },
  {
    quote:
      "As a solo consultant, PowerMaker AI gives me the capabilities of an entire development team. Incredible tool.",
    author: "David Martinez",
    role: "Independent Consultant",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-4">
          What People Say About Us
        </h2>
        <p className="text-center text-muted-foreground mb-16">Our customers love PowerMaker AI</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-foreground mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
