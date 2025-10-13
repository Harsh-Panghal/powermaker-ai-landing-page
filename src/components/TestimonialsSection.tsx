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
  {
    quote:
      "PowerMaker AI streamlined our entire workflow. The AI-powered insights are incredibly accurate and helpful.",
    author: "Emily Rodriguez",
    role: "Solutions Architect",
  },
  {
    quote:
      "The best investment we've made for our Dynamics 365 practice. ROI was immediate and substantial.",
    author: "James Thompson",
    role: "Practice Manager",
  },
];

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-primary text-center mb-4">
          What People Say About Us
        </h2>
        <p className="text-center text-muted-foreground">Our customers love PowerMaker AI</p>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[450px] max-w-[450px] hover:shadow-xl transition-all hover:scale-105 flex-shrink-0"
            >
              <CardContent className="pt-6 h-full">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
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
