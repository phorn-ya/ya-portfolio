import { motion } from 'motion/react';
import { Database, Globe2, Settings, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';
import type { LucideIcon } from 'lucide-react';

const CATEGORY_STYLES = [
  {
    icon: Globe2,
    accent: '#2298F2',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    cardBorder: 'border-blue-200/50 dark:border-blue-900/30',
    gradient: 'from-blue-50/80 to-transparent dark:from-blue-950/20',
  },
  {
    icon: Terminal,
    accent: '#20BF6B',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    cardBorder: 'border-emerald-200/50 dark:border-emerald-900/30',
    gradient: 'from-emerald-50/80 to-transparent dark:from-emerald-950/20',
  },
  {
    icon: Database,
    accent: '#A855F7',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    cardBorder: 'border-purple-200/50 dark:border-purple-900/30',
    gradient: 'from-purple-50/80 to-transparent dark:from-purple-950/20',
  },
  {
    icon: Settings,
    accent: '#FF5A36',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    cardBorder: 'border-orange-200/50 dark:border-orange-900/30',
    gradient: 'from-orange-50/80 to-transparent dark:from-orange-950/20',
  },
];

const SKILL_ICONS: Record<string, LucideIcon> = {
  HTML5: Globe2,
  CSS3: Globe2,
  JavaScript: Terminal,
  'Vue.js': Terminal,
  'React.js': Terminal,
  'Tailwind CSS': Globe2,
  PHP: Terminal,
  Laravel: Terminal,
  'Node.js': Terminal,
  TypeScript: Terminal,
  Java: Terminal,
  'Spring Boot': Terminal,
  Python: Terminal,
  MySQL: Database,
  PostgreSQL: Database,
  LaragonSQL: Database,
  Git: Settings,
  VSCode: Settings,
  Postman: Settings,
  Jira: Settings,
  'Power BI': Settings,
  'AWS Cloud': Settings,
  WordPress: Settings,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-3 tracking-tight">
            My <span className="text-rose-500">Skills</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-rose-500" />
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl border bg-white dark:bg-slate-800/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:shadow-none ${CATEGORY_STYLES[idx].cardBorder}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${CATEGORY_STYLES[idx].gradient} pointer-events-none`} />

              <div className="relative z-10">
                {/* Category icon */}
                <div className={`mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${CATEGORY_STYLES[idx].iconBg} ${CATEGORY_STYLES[idx].iconColor}`}>
                  {(() => {
                    const CategoryIcon = CATEGORY_STYLES[idx].icon;
                    return <CategoryIcon size={24} />;
                  })()}
                </div>

                <h3 className="mb-8 text-center text-base font-black text-slate-950 dark:text-white">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill) => {
                    const SkillIcon = SKILL_ICONS[skill.name] || Settings;
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`flex h-6 w-6 items-center justify-center rounded-md ${CATEGORY_STYLES[idx].iconBg}`}>
                              <SkillIcon size={13} className={CATEGORY_STYLES[idx].iconColor} />
                            </div>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                          </div>
                          <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${skill.color}, ${CATEGORY_STYLES[idx].accent})` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
