"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

// Data Dummy Proyek (Nanti bisa Anda ganti dengan data asli)
const projects = [
    {
        title: "Core Banking & Payment Gateway",
        description: "Designed and implemented microservices-based RESTful APIs for core authentication, reporting and KYC systems. Integrated RSA SecurID and implemented LLM-powered IDP workflows.",
        tags: ["Java Spring Boot", "NestJs", "Oracle", "Redis", "Docker"],
        links: { demo: "#", repo: "#" },
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        title: "Logistics System (SMB)",
        description: "Engineered full-stack solutions for core internal modules. Built Laravel-PostgreSQL backend and responsive Vue.js frontend for HRIS features.",
        tags: ["Laravel", "PostgreSQL", "Vue.js", "Queue", "Swagger"],
        links: { demo: "#", repo: "#" },
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Expense Management System",
        description: "Improved application stability by upgrading Java libraries and validating functional impacts. Optimized queue processing and deprecated dependencies.",
        tags: ["Laravel", "PostgreSQL", "Java", "Queue"],
        links: { demo: "#", repo: "#" },
        gradient: "from-orange-500 to-red-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
            <div className="container mx-auto max-w-5xl">

                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Beberapa hasil karya terbaik yang pernah saya kerjakan.
                    </p>
                </motion.div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }} // Efek muncul bergantian
                            whileHover={{ y: -10 }} // Efek kartu naik saat di-hover
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            {/* Gambar Project (Placeholder Gradient) */}
                            <div className={`h-48 w-full bg-gradient-to-r ${project.gradient} group-hover:scale-105 transition-transform duration-500`} />

                            {/* Konten Card */}
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags Teknologi */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Tombol Link */}
                                <div className="flex gap-4">
                                    <Link
                                        href={project.links.demo}
                                        className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                    >
                                        <ExternalLink className="h-4 w-4" /> Demo
                                    </Link>
                                    <Link
                                        href={project.links.repo}
                                        className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
                                    >
                                        <Github className="h-4 w-4" /> Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}