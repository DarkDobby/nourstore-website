import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Tag, Target, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Time is money. Get your accounts, items, or currency delivered instantly or within minutes of purchase.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Transactions',
    description: 'Your security is our priority. Clean accounts, safe methods, and secure payment gateways always.',
  },
  {
    icon: Tag,
    title: 'Cheap Prices',
    description: 'Premium service shouldn\'t break the bank. We offer the most competitive rates in the market.',
  },
  {
    icon: Target,
    title: 'Proven Results',
    description: '20,000+ successful orders. Our track record speaks for itself. We don\'t promise, we deliver.',
  },
  {
    icon: CheckCircle2,
    title: 'Tested Products',
    description: 'Every account and item is verified by our team before hitting the store. Zero ban risk.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="trust" className="py-24 relative bg-card border-y border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <br />
              <span className="text-primary">NourStore?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We aren't a random reseller. We are a professional team with over a decade of experience navigating the gaming market. When you buy from us, you buy peace of mind.
            </p>
            <div className="inline-flex items-center gap-4 bg-background px-6 py-4 rounded-2xl border border-white/5 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-white font-bold font-display text-xl">100% Secure</div>
                <div className="text-sm text-muted-foreground">Verified by 20k+ buyers</div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/30 transition-colors ${
                  i === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
                }`}
              >
                <reason.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
