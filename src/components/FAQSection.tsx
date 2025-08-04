import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "What do I need to get started?",
      answer: "Getting started is simple! You just need a clear vision of what you want to achieve. We'll handle the rest, from initial consultation to final delivery."
    },
    {
      question: "What kind of customization is available?",
      answer: "We offer extensive customization options including design, functionality, branding, and content. Everything can be tailored to match your specific requirements and brand identity."
    },
    {
      question: "How easy is it to edit for beginners?",
      answer: "Our solutions are designed with user-friendliness in mind. We provide comprehensive training and documentation to ensure you can easily manage and update your project."
    },
    {
      question: "Let me know more about moneyback guarantee?",
      answer: "We stand behind our work with a comprehensive money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not! Our team handles all the technical aspects. You focus on your business while we take care of the development and implementation."
    },
    {
      question: "What will I get after purchasing the template?",
      answer: "You'll receive the complete project files, documentation, training materials, and ongoing support. Plus, you'll have access to future updates and improvements."
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • FAQ
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Frequently<br />
            <span className="text-muted-foreground">Asked Questions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? Our FAQ section has you covered with<br />
            quick answers to the most common inquiries.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/40 rounded-xl px-6 bg-secondary/5 hover:bg-secondary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 text-left">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;