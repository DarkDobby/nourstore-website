import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it safe to buy game accounts from NourStore?",
    answer: "Absolutely. Every account is thoroughly vetted, checked for bans, and secured by our team before listing. We provide full access and assist you in securing it completely under your own email and details."
  },
  {
    question: "How fast is delivery?",
    answer: "For most products like accounts, currency, and gift cards, delivery is nearly instantaneous or within a few minutes during our working hours. Boosting services start as soon as we schedule a booster, usually within 1-2 hours."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a wide variety of payment methods including Crypto (USDT, BTC, ETH), PayPal, Credit/Debit cards (via marketplaces), and regional payment methods depending on the platform you choose to buy through."
  },
  {
    question: "What games do you cover?",
    answer: "We cover all major titles including Valorant, League of Legends, Genshin Impact, Fortnite, World of Warcraft, Apex Legends, Overwatch 2, and many more. If a game is popular, we likely support it."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds if we fail to deliver the product as described or if an issue arises that is our fault. We stand by our service and ensure every customer gets exactly what they paid for."
  },
  {
    question: "Are purchased accounts permanent?",
    answer: "Yes, once you buy an account, it is 100% yours. We only sell clean accounts without binding issues. Once you change the credentials, the account is permanently secured for you."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-white/5 bg-card rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-bold text-lg text-white hover:no-underline py-6 [&[data-state=open]]:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
