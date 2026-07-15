import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'ZeusX',
    url: 'https://zeusx.com/seller/nourstore-115146',
    color: 'from-[#00E5FF]/20 to-transparent hover:border-[#00E5FF]/50',
    logo: 'ZX'
  },
  {
    name: 'G2G',
    url: 'https://www.g2g.com/r/NourStoreProfile',
    color: 'from-[#FF3B30]/20 to-transparent hover:border-[#FF3B30]/50',
    logo: 'G2G'
  },
  {
    name: 'EpicNPC',
    url: 'https://www.epicnpc.com/members/nourstore.1585102/',
    color: 'from-[#34C759]/20 to-transparent hover:border-[#34C759]/50',
    logo: 'EPIC'
  },
  {
    name: 'PlayerAuctions',
    url: 'https://www.playerauctions.com/store/nourstore/',
    color: 'from-[#FF9500]/20 to-transparent hover:border-[#FF9500]/50',
    logo: 'PA'
  },
  {
    name: 'FunPay',
    url: 'https://funpay.com/en/users/6567457/',
    color: 'from-[#A855F7]/20 to-transparent hover:border-[#A855F7]/50',
    logo: 'FP'
  },
  {
    name: 'U7BUY',
    url: 'https://www.u7buy.com/seller/NourStore',
    color: 'from-[#22D3EE]/20 to-transparent hover:border-[#22D3EE]/50',
    logo: 'U7'
  }
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Trusted on Major <span className="text-primary">Platforms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-xl"
          >
            Don't just take our word for it. Check our verified profiles and reputation across the biggest gaming marketplaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group relative flex flex-col items-center p-8 rounded-3xl bg-card border border-white/5 transition-all duration-300 hover:-translate-y-2 ${platform.color}`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${platform.color}`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-display font-black text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {platform.logo}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{platform.name}</h3>
              
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors relative z-10">
                <span>View Profile</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
