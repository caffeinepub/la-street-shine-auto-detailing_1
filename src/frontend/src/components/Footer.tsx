import { Zap } from 'lucide-react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'lastreetshine');

  return (
    <footer className="bg-brand-black border-t border-brand-blue/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-pink flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-black text-base tracking-tight block leading-none">
                LA STREET SHINE
              </span>
              <span className="text-brand-blue text-xs tracking-widest font-semibold uppercase">
                Auto Detailing
              </span>
            </div>
          </div>
          <p className="text-brand-pink-light font-bold italic text-sm mb-5">
            "Perfection in Every Reflection."
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/lastreetshineautodetail"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-brand-pink/20 flex items-center justify-center hover:bg-brand-pink/30 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-4 h-4 text-brand-pink-light" />
            </a>
            <a
              href="https://www.tiktok.com/@lastreetshineautodetail"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center hover:bg-brand-blue/30 transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="w-4 h-4 text-brand-blue-light" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-blue/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-xs">
            © {year} LA Street Shine Auto Detailing. All rights reserved.
          </p>
          <p className="text-brand-gray text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-brand-pink-light fill-brand-pink-light" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue-light hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
