import { motion } from "motion/react";
import {
  LayoutGrid,
  MessageSquare,
  ArrowDown,
  Code2,
  Globe,
  Rocket,
  Sparkles,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../image/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 px-6 relative transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/30 via-transparent to-transparent dark:from-rose-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700/50"
          >
            <span className="text-xl">👋</span>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-slate-900 dark:text-white">Hi, I'm</span>{" "}
            <span className="text-rose-500">Ya</span>{" "}
            <span className="text-rose-500">Phorn</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 font-medium">
              A Passionate{" "}
              <span className="text-rose-500 font-semibold">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  cursor={false}
                />
              </span>
            </h2>

            <p className="mt-5 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Crafting interactive &amp; meaningful experiences for the modern
              web. I turn complex problems into simple, beautiful designs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 flex items-center gap-2 transition-all"
            >
              <LayoutGrid size={18} />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full font-semibold flex items-center gap-2 transition-all"
            >
              <MessageSquare size={18} />
              Get In Touch
            </motion.a>
          </div>
          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-700/60">
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">3+</p>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">2+</p>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Technologies</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">Open</p>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">To Work</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center h-[460px]"
        >
          {/* Soft glow behind the photo */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-rose-400/20 blur-3xl" />

          {/* Circle Background ring */}
          <div className="absolute w-[520px] h-[520px] rounded-full border border-rose-300/30 dark:border-rose-500/20 animate-pulse-ring" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-rose-300/40 dark:border-rose-500/25" />

          {/* Image — smaller, centered, sits BELOW the orbiting icons */}
          <div className="relative z-10">
            <div className="border-[6px] border-rose-500 rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-500/10">
              <img
                src={profileImage}
                alt="Ya Phorn — Web Developer"
                loading="eager"
                className="w-[280px] h-[340px] object-cover"
              />
            </div>
          </div>

          {/* Fixed-position icons around the avatar — they hover/float in place, no orbiting */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Code2 (green) — upper-left */}
            <div className="absolute left-[6%] top-[10%]">
              <div className="animate-float-icon bg-green-100/95 dark:bg-green-900/60 backdrop-blur-md p-3.5 rounded-2xl shadow-lg ring-1 ring-black/5">
                <Code2 className="text-green-600 dark:text-green-400" size={24} />
              </div>
            </div>

            {/* Globe (blue) — upper-right */}
            <div className="absolute right-[8%] top-[16%]">
              <div
                className="animate-float-icon bg-blue-100/95 dark:bg-blue-900/60 backdrop-blur-md p-3.5 rounded-2xl shadow-lg ring-1 ring-black/5"
                style={{ animationDelay: "1s" }}
              >
                <Globe className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
            </div>

            {/* Rocket (yellow) — lower-left */}
            <div className="absolute left-[10%] bottom-[14%]">
              <div
                className="animate-float-icon bg-yellow-100/95 dark:bg-yellow-900/60 backdrop-blur-md p-3.5 rounded-2xl shadow-lg ring-1 ring-black/5"
                style={{ animationDelay: "0.5s" }}
              >
                <Rocket className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
            </div>

            {/* Sparkles (rose) — lower-right */}
            <div className="absolute right-[6%] bottom-[8%]">
              <div
                className="animate-float-icon bg-rose-100/95 dark:bg-rose-900/60 backdrop-blur-md p-3.5 rounded-2xl shadow-lg ring-1 ring-black/5"
                style={{ animationDelay: "1.5s" }}
              >
                <Sparkles className="text-rose-500 dark:text-rose-400" size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-rose-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}