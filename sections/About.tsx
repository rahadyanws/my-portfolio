"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, Terminal, Server, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl mb-4">
              {t.about.title}
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LARGE CARD: Bio */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Terminal size={120} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Code size={24} />
                  </span>
                  {t.about.role}
                </h3>
                 <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  <p>
                    {t.about.description1}
                  </p>
                  <p>
                    {t.about.description2}
                  </p>
                  <p>
                    {t.about.description3}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {["Problem Solver", "Team Lead", "Clean Code Enthusiast", "Mentor"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>

            {/* CARD: Frontend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="col-span-1 rounded-3xl border border-blue-200 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-800 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                  <Layout size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t.about.frontend}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700">
                        {tech}
                    </span>
                ))}
              </div>
            </motion.div>

            {/* CARD: Backend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="col-span-1 rounded-3xl border border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/10 dark:border-indigo-800 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/30">
                  <Server size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t.about.backend}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Node.js", "Nest.js", "Java Spring", "PostgreSQL", "Redis", "Docker"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700">
                        {tech}
                    </span>
                ))}
              </div>
            </motion.div>

            {/* CARD: Tools & Methods (New) */}
             <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="col-span-1 md:col-span-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >
               <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{t.about.tools}</h4>
                  </div>
               </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-2 flex-1">
                 {["Git", "CI/CD", "AWS", "Agile", "Jira", "Figma", "Unit Testing"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tech}
                    </span>
                ))}
               </div>
            </motion.div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}