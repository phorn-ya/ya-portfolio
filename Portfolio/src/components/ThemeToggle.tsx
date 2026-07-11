import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2.5 rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60 shadow-lg shadow-black/5 hover:shadow-rose-500/20 transition-shadow duration-300 overflow-hidden"
      id="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          boxShadow: isDark
            ? '0 0 12px 2px rgba(251, 191, 36, 0.3), 0 0 24px 4px rgba(251, 191, 36, 0.1)'
            : '0 0 12px 2px rgba(59, 130, 246, 0.25), 0 0 24px 4px rgba(59, 130, 246, 0.08)',
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-full pointer-events-none"
      />

      {/* Icon container with rotation */}
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {/* Sun icon */}
        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.3,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={18} />
        </motion.div>

        {/* Moon icon */}
        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          <Moon size={18} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
