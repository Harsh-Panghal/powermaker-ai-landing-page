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
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-3 sm:mb-4 px-4">
          What People Say About Us
        </h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base px-4">Our customers love PowerMaker AI</p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 animate-scroll-left px-4 sm:px-0">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] max-w-[280px] sm:max-w-[350px] md:max-w-[450px] hover:shadow-xl transition-all hover:scale-105 flex-shrink-0"
            >
              <CardContent className="pt-5 sm:pt-6 h-full p-4 sm:p-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-primary text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
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
