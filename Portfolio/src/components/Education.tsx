import { motion } from 'motion/react';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { EDUCATIONS } from '../constants';

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-4 text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            My <span className="text-rose-500">Education</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-rose-500" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-rose-500 via-rose-400 to-rose-500/30 md:left-8" />

          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              className="relative pb-14 pl-16 last:pb-0 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-rose-500 dark:border-slate-900 md:left-8" />

              <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="mt-0.5 shrink-0 text-rose-500">
                      {idx === 0 ? <GraduationCap size={28} strokeWidth={2} /> : <BookOpen size={28} strokeWidth={2} />}
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-black text-slate-950 dark:text-white">
                        {edu.institution}
                      </h3>
                      <h4 className="text-base font-bold text-rose-500">
                        {edu.degree}
                      </h4>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-sm text-slate-400 dark:text-slate-500 font-medium">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-rose-100 dark:bg-rose-500/15 px-3.5 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
