import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const CATEGORIES: (Project['category'] | 'All')[] = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Design', 'Software'];

export default function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
            My <span className="text-rose-500">Projects</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-rose-500" />
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
            A showcase of my work across different technologies and domains.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-500 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 rounded-full text-[10px] font-black uppercase tracking-wider text-rose-500 shadow-sm">
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-[11px] font-semibold text-slate-500 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-400 dark:text-slate-500 py-20 text-lg font-medium"
          >
            No projects found in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
