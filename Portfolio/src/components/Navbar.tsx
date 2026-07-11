import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Interests', href: '#interests' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for background + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = NAV_LINKS.map((link) => document.querySelector(link.href));
      const scrollPos = scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          if (scrollPos >= top) {
            setActiveSection(NAV_LINKS[i].name);
            return;
          }
        }
      }
      setActiveSection('Home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 shadow-sm shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <a
            href="#home"
            className="text-xl font-bold font-sans dark:text-white hover:text-rose-500 transition-colors"
          >
            Ya <span className="text-rose-500">Phorn</span>
          </a>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === link.name
                  ? 'text-rose-500 dark:text-rose-400'
                  : 'text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400'
              }`}
            >
              {link.name}
              {activeSection === link.name && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-rose-500 rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <motion.a
            href="/Phorn-Ya-Resume.pdf"
            download="Phorn-Ya-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center space-x-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-rose-500/20 hover:shadow-xl hover:shadow-rose-500/30"
            id="download-cv"
          >
            <Download size={16} />
            <span>Download CV</span>
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all text-center ${
                  activeSection === link.name
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
