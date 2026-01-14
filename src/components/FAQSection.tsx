import { Link } from "react-router-dom";
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
      "PowerMakerAI is an AI-powered assistant that helps Dynamics CRM users streamline customizations, generate entities, analyze plugin trace logs, and automate routine tasks using natural language.",
  },
  {
    question: "Do I need coding knowledge to use PowerMakerAI?",
    answer:
      "Not necessarily. While some features are helpful for developers, many tasks can be performed using plain English — no deep technical skills required.",
  },
  {
    question: "Is PowerMakerAI compatible with all versions of Dynamics 365?",
    answer:
      "PowerMakerAI is designed to work with modern Dynamics 365 Online environments. Compatibility with on-premise or older versions may be limited.",
  },
  {
    question: "What kind of customizations can PowerMakerAI handle?",
    answer:
      "You can generate entities, update schema fields, fetch plugin trace logs, create sample plugins, and even trigger CRM actions using simple prompts.",
  },
  {
    question: "Is my data safe with PowerMakerAI?",
    answer:
      "Absolutely. We don't store or access your Dynamics CRM data without your permission. All processing is handled securely, and you maintain full control of your environment.",
  },
  {
    question: "Can PowerMakerAI help debug plugin errors?",
    answer:
      "Yes! One of the core features is Plugin Trace Log analysis. You can upload or query logs, and the AI will explain errors in plain language — with suggestions.",
  },
  {
    question:
      "How is PowerMakerAI different from Power Platform tools like Power Automate?",
    answer:
      "PowerMakerAI is designed to enhance developer productivity with AI guidance — not replace Power Platform tools, but complement them by offering quick insights and automation.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. You can sign up and explore the beta version of PowerMakerAI with access to core features.",
  },
  {
    question: "How do I request support or report a bug?",
    answer:
      "You can use the Contact Us section or email us directly at support@powermaker.ai.",
  },
  {
    question: "Will PowerMakerAI get more features in the future?",
    answer:
      "Definitely! We're actively working on integrations, form scripting support, and full PowerApps integration. Stay tuned.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-4 px-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto">
          Find answers to common questions about PowerMaker AI. For more detailed information, visit our{" "}
          <Link to="/docs" className="text-accent hover:underline font-medium">
            documentation
          </Link>.
        </p>

        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4 sm:px-6"
            >
              <AccordionTrigger className="text-base sm:text-lg font-medium text-primary hover:text-accent text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
