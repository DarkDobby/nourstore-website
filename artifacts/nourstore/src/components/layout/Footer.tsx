import { SiDiscord, SiTelegram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/attached_assets/generated_images/logo.png" 
                alt="NourStore" 
                className="w-8 h-8 object-contain rounded-sm grayscale opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Nour<span className="text-primary">Store</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              The gold standard for premium gaming services. 20,000+ orders fulfilled with a decade of proven experience. Safe, fast, and professional.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/noursoregames" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-[#0088cc] hover:text-white transition-all">
                <SiTelegram size={20} />
              </a>
              <a href="https://discord.gg/YmXGeWbBYy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-[#5865F2] hover:text-white transition-all">
                <SiDiscord size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#trust" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Marketplaces</h4>
            <ul className="space-y-4">
              <li><a href="https://zeusx.com/seller/nourstore-115146" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">ZeusX</a></li>
              <li><a href="https://www.g2g.com/r/NourStoreProfile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">G2G</a></li>
              <li><a href="https://www.epicnpc.com/members/nourstore.1585102/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">EpicNPC</a></li>
              <li><a href="https://www.playerauctions.com/store/nourstore/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">PlayerAuctions</a></li>
              <li><a href="https://funpay.com/en/users/6567457/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">FunPay</a></li>
              <li><a href="https://www.u7buy.com/seller/NourStore" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">U7BUY</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>&copy; {currentYear} NourStore. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
