import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "AlexR",
    platform: "FunPay",
    content: "Bought a stacked Valorant account. Delivered in less than 5 minutes. Full access, zero issues. Definitely buying again.",
    rating: 5
  },
  {
    name: "ShadowGamer",
    platform: "EpicNPC",
    content: "Used them for WoW gold and leveling boost. Communication was top tier on Discord and the service was completed super fast.",
    rating: 5
  },
  {
    name: "Kaelith",
    platform: "G2G",
    content: "Legit seller. Bought V-Bucks and they added it to my account securely. Highly trusted, don't hesitate to deal with NourStore.",
    rating: 5
  },
  {
    name: "RoninX",
    platform: "ZeusX",
    content: "Got a Genshin Impact whale account. Process was smooth, seller helped me secure it completely. 10/10 experience.",
    rating: 5
  },
  {
    name: "DriftKing",
    platform: "FunPay",
    content: "Fastest delivery I've ever had for a gift card. Code worked perfectly. Thank you guys!",
    rating: 5
  },
  {
    name: "Sarah_Playz",
    platform: "EpicNPC",
    content: "Incredible boosting service. My booster was professional and got me to my desired rank 2 days early. Very safe.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative bg-card overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              What Gamers <span className="text-primary">Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Over 115 reviews on FunPay alone with a perfect 5/5 rating. Verified trusted seller on EpicNPC.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-background px-6 py-4 rounded-2xl border border-white/5 shrink-0"
          >
            <div className="text-4xl font-display font-bold text-white">5.0</div>
            <div>
              <div className="flex gap-1 text-primary mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <div className="text-sm font-medium text-muted-foreground">Based on 20,000+ orders</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-white/5 flex flex-col h-full"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground text-lg leading-relaxed mb-8 flex-grow">
                "{review.content}"
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm font-medium px-3 py-1 rounded-full bg-white/5 text-muted-foreground">
                  Via {review.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
