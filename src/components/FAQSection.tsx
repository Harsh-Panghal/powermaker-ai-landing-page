import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is PowerMaker AI?",
    answer:
      "PowerMaker AI is an AI-powered assistant designed specifically for Dynamics 365 developers and consultants. It helps you build entities, debug plugins, and streamline customizations through intelligent workflows.",
  },
  {
    question: "How does the AI Entity Builder work?",
    answer:
      "Simply describe your data model in natural language, and PowerMaker AI will generate fully-configured Dynamics 365 entities with relationships, fields, forms, and views—ready to deploy.",
  },
  {
    question: "Can I analyze plugin trace logs?",
    answer:
      "Yes! Upload your plugin trace logs and our AI will instantly identify errors, explain root causes, and provide actionable recommendations to fix issues.",
  },
  {
    question: "Is PowerMaker AI secure?",
    answer:
      "Absolutely. We implement enterprise-grade security measures and follow industry best practices to ensure your data and CRM environment remain protected.",
  },
  {
    question: "What pricing plans are available?",
    answer:
      "During the beta period, PowerMaker AI is free for all users. We're gathering feedback to shape our future pricing structure.",
  },
  {
    question: "Can I integrate PowerMaker AI with my existing Dynamics 365 environment?",
    answer:
      "Yes, PowerMaker AI integrates seamlessly with your Dynamics 365 environment, allowing you to perform live operations and export configurations directly.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply request a demo or contact us to get started. Our team will help you set up and get the most out of PowerMaker AI.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 sm:mb-16 px-4">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-base sm:text-lg font-medium text-primary hover:text-accent text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
