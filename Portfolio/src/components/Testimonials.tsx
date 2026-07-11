import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  const prev = () =>
    setActive(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="py-28 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            My <span className="text-rose-500"> Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-[2rem] border border-slate-200 dark:border-slate-700 p-10 md:p-14 min-h-[380px] flex flex-col justify-between shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote */}
                <Quote
                  size={48}
                  className="text-rose-500/30 dark:text-rose-500/20 mb-6"
                  strokeWidth={1.5}
                />

                {/* Content */}
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  &ldquo;{TESTIMONIALS[active].content}&rdquo;
                </p>

                {/* Footer */}
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={TESTIMONIALS[active].avatar}
                      alt={TESTIMONIALS[active].name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-rose-500/20"
                    />

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {TESTIMONIALS[active].name}
                      </h4>

                      <p className="text-sm font-medium text-rose-500">
                        {TESTIMONIALS[active].role}
                      </p>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="flex gap-2 self-start sm:self-auto">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 h-2.5 bg-rose-500"
                    : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}