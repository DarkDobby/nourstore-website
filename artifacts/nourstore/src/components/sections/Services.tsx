import { motion } from 'framer-motion';

const services = [
  {
    title: 'Game Accounts',
    description: 'Premium smurfs, stacked mains, and rare accounts. Safely secured and ready for you to take over.',
    image: '/attached_assets/generated_images/service-accounts.jpg',
  },
  {
    title: 'Currency & Top-Ups',
    description: 'V-Bucks, Robux, Gold, and premium currencies delivered fast, securely, and cheaper than standard rates.',
    image: '/attached_assets/generated_images/service-currency.jpg',
  },
  {
    title: 'Professional Boosting',
    description: 'Rank up effortlessly. Our veteran players will boost your account safely with zero risk of bans.',
    image: '/attached_assets/generated_images/service-boosting.jpg',
  },
  {
    title: 'In-Game Items',
    description: 'Rare skins, legendary weapons, and exclusive cosmetics that will make your character stand out.',
    image: '/attached_assets/generated_images/service-items.jpg',
  },
  {
    title: 'Gift Cards',
    description: 'PSN, Xbox, Steam, iTunes, and more. Instant digital delivery directly to your inbox.',
    image: '/attached_assets/generated_images/service-giftcards.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            What We <span className="text-primary">Provide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to dominate. Sourced safely, delivered instantly, and backed by a flawless reputation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-white/5 flex flex-col ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
              
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%231a1a1a"/></svg>';
                }}
              />

              <div className="relative z-20 p-8 flex flex-col h-full min-h-[300px] justify-end">
                <h3 className={`font-display font-bold text-white mb-3 ${i === 0 ? 'text-3xl' : 'text-2xl'}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-primary font-bold text-sm tracking-wide group-hover:gap-3 transition-all duration-300 gap-2 cursor-pointer w-fit">
                  <span>LEARN MORE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
