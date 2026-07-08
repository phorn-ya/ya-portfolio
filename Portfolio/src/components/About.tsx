import { motion } from 'motion/react';
import { Heart, Search, Target, Users } from 'lucide-react';
import aboutImage from '../image/about.jpg';

const BADGES = [
  { text: 'Creative Problem Solver', icon: Target },
  { text: 'Team Player', icon: Users },
  { text: 'Quick Learner', icon: Search },
  { text: 'Detail Oriented', icon: Heart },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white lg:text-6xl">
            About <span className="text-rose-500">Me</span>
          </h2>
          <div className="h-1 w-24 rounded-full bg-rose-500" />
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-[31rem]"
          >
            <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl shadow-slate-300/60 dark:border-slate-800 dark:bg-slate-800 dark:shadow-black/30">
              <img
                src={aboutImage}
                alt="Ya Phorn — Web Developer"
                loading="lazy"
                className="h-[30rem] w-full object-cover object-center sm:h-[34rem]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex h-full flex-col justify-center"
          >
            <div className="mb-10 space-y-8 text-xl leading-9 text-slate-700 dark:text-slate-300">
              <p>
                I'm a passionate <span className="font-bold text-rose-500">frontend web developer</span> with a strong curiosity for technology and innovation. My journey began with a fascination for how websites function, pushing me to explore deeply into the world of web development.
              </p>
              <p>
                Currently studying at <span className="font-bold text-rose-500">Passerelles Numériques Cambodia</span>, I thrive on building meaningful digital experiences. I'm committed to transforming ideas into beautiful, functional realities.
              </p>
              <p>
                I value clean code, elegant design, and the impact of tech. When I'm not coding, you'll find me learning new frameworks, watching tech documentaries, or gaming with friends.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 rounded-full bg-rose-100 px-5 py-3 font-bold text-rose-800 shadow-md shadow-rose-100/70 dark:bg-rose-500/15 dark:text-rose-200 dark:shadow-none"
                >
                  <badge.icon size={16} />
                  <span className="text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
