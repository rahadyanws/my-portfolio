"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Definisikan meta data project (tags/links) terpisah dari konten teks
// Konten teks (judul, deskripsi) diambil dari translation
const projectsMeta = [
    {
        tags: ["Java Spring Boot", "NestJs", "Oracle", "Redis", "Docker"],
        links: { demo: "#", repo: "#" },
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        tags: ["Laravel", "PostgreSQL", "Vue.js", "Queue", "Swagger"],
        links: { demo: "#", repo: "#" },
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        tags: ["Laravel", "PostgreSQL", "Java", "Queue"],
        links: { demo: "#", repo: "#" },
        gradient: "from-orange-500 to-red-500",
    },
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-32 px-6 relative">
             {/* Background Blur */}
            <div className="absolute top-1/2 left-0 w-full h-96 bg-slate-200/20 dark:bg-slate-900/40 -skew-y-3 -z-10 blur-3xl" />

            <div className="container mx-auto max-w-6xl">

                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-5xl tracking-tight mb-6">
                        {t.projects.title}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        {t.projects.subtitle}
                    </p>
                </motion.div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {t.projects.items.map((projectTx, index) => {
                         const meta = projectsMeta[index];
                         return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }} 
                                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 shadow-lg hover:shadow-xl transition-all duration-300"
                            >

                                {/* Gambar Project (Placeholder Gradient) */}
                                <div className={`h-56 w-full bg-gradient-to-br ${meta.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                                    {/* Optional: Icon Overlay */}
                                    <div className="text-white/20 font-bold text-6xl select-none">
                                        {`0${index + 1}`}
                                    </div>
                                </div>

                                {/* Konten Card */}
                                <div className="flex flex-col flex-1 p-8">
                                    <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                                        {projectTx.title}
                                    </h3>
                                    <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                        {projectTx.description}
                                    </p>

                                    {/* Tags Teknologi */}
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {meta.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100/80 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Tombol Link */}
                                    <div className="flex gap-6 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <Link
                                            href={meta.links.demo}
                                            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" /> {t.projects.demo}
                                        </Link>
                                        <Link
                                            href={meta.links.repo}
                                            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                                        >
                                            <Github className="h-4 w-4" /> {t.projects.code}
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                         );
                    })}
                </div>

            </div>
        </section>
    );
}