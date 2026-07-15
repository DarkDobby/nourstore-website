import { motion } from 'framer-motion';
import { Shield, Star, Trophy, Users } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Trophy, label: 'Orders Sold', value: '20,000+' },
    { icon: Shield, label: 'Years Experience', value: '10+' },
    { icon: Star, label: 'Rating', value: '5/5' },
    { icon: Users, label: 'Platforms', value: '4+' },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("/attached_assets/generated_images/hero-bg.jpg")' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.1)_0%,transparent_50%)] mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          The Gold Standard in Gaming Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl"
        >
          Level Up Without <br />
          <span className="text-gradient">The Grind.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-sans"
        >
          Trusted backstage pass for gamers. Legit accounts, currency, boosting, and gift cards with zero risk. Backed by a decade of professional service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,184,0,0.5)]"
          >
            Explore Services
          </a>
          <a
            href="#platforms"
            className="px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Verify Our Reputation
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <stat.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <span className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
