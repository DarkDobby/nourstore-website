import { motion } from 'framer-motion';
import { SiDiscord, SiTelegram } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-card border-t border-white/5">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,184,0,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-[3rem] p-8 md:p-16 border border-white/10 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to <span className="text-primary">Level Up?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Contact us directly to place an order, ask questions, or request a custom service. Our support team is online and ready to assist you instantly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://t.me/noursoregames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,136,204,0.5)]"
            >
              <SiTelegram className="w-6 h-6" />
              Message on Telegram
            </a>
            
            <a
              href="https://discord.gg/YmXGeWbBYy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#5865F2]/90 text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(88,101,242,0.5)]"
            >
              <SiDiscord className="w-6 h-6" />
              Join our Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
