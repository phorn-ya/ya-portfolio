import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { INTERESTS } from '../constants';

export default function Interests() {
  return (
    <section id="interests" className="py-28 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
            My <span className="text-rose-500">Interests</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-rose-500" />
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            Things I enjoy doing when I'm not writing code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-8 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-rose-500/50 dark:hover:border-rose-500/50 transition-all duration-300 shadow-sm hover:shadow-md text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-rose-500/10 dark:bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform mb-6">
                <interest.icon size={28} />
              </div>
              <h3 className="text-lg font-bold dark:text-white mb-3 group-hover:text-rose-500 transition-colors">
                {interest.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
