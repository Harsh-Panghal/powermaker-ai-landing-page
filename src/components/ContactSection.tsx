import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the payload for Web3Forms
    const data = {
      access_key: "c3d48ec4-ae2d-40cf-a46c-4200c837dcd0",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent! ✅",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to send message ❌",
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message ❌",
        description: "Network issue. Please try again later.",
      });
      console.error("Web3Forms Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl hidden sm:block"></div>
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-3xl rotate-12 hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-accent/20 rounded-2xl -rotate-6 hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl hidden md:block"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              <span className="text-foreground">Let's </span>
              <span className="text-accent">Connect</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Get in touch with our team. We'd love to hear from you and discuss how PowerMaker AI can transform your workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Why Reach Out?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Product Demo</h4>
                      <p className="text-muted-foreground">See PowerMaker AI in action with a personalized walkthrough</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Custom Solutions</h4>
                      <p className="text-muted-foreground">Discuss tailored features for your specific needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Partnership Opportunities</h4>
                      <p className="text-muted-foreground">Explore collaboration and integration options</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Quick Response</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We typically respond within 24 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="h-12 bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your needs..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-white font-semibold shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
