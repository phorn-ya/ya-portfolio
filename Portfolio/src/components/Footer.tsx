import { Heart, Coffee, ShieldCheck, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-4 dark:text-white">
              Ya <span className="text-rose-500">Phorn</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm mb-6">
              Passionate about creating meaningful digital experiences through clean code, innovative design, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3.5 py-1.5 border rounded-full border-slate-200 dark:border-slate-700">
                <ShieldCheck size={13} className="text-emerald-500" />
                Clean Code
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3.5 py-1.5 border rounded-full border-slate-200 dark:border-slate-700">
                <Coffee size={13} className="text-amber-500" />
                Fueled by Coffee
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">Connect</h4>
            <ul className="space-y-3">
              {CONTACT_INFO.socials.map(social => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors group"
                  >
                    <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-semibold text-slate-400">
            &copy; {new Date().getFullYear()} Ya Phorn. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> and lots of <Coffee size={12} className="text-amber-500" />
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-rose-500 hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
