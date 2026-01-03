"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">

                {/* Judul Section */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
                >
                    About Me & Skills
                </motion.h2>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

                    {/* KOTAK 1: Intro (Besar) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-slate-100 p-8 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                    >
                        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                            Senior Software Engineer
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Software Engineer with 8+ years of experience developing Web Applications, SaaS, and Enterprise systems for both internal and international clients.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Proficient in scalable monolithic and microservices architectures, with a proven record in the Finance and Healthcare sectors. Skilled in <strong>Java Spring Boot, Nest.js, Node.js, and Laravel</strong>.
                        </p>
                    </motion.div>

                    {/* KOTAK 2: Tech Stack (Frontend) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="col-span-1 rounded-3xl bg-blue-500 p-6 text-white"
                    >
                        <Layout className="mb-4 h-8 w-8" />
                        <h4 className="text-xl font-bold mb-2">Frontend</h4>
                        <ul className="text-blue-100 space-y-1">
                            <li>• Vue.js, React, Next.js</li>
                            <li>• Tailwind CSS, Bootstrap</li>
                            <li>• Sencha Ext JS</li>
                        </ul>
                    </motion.div>

                    {/* KOTAK 3: Tech Stack (Backend) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="col-span-1 rounded-3xl bg-slate-900 p-6 text-white border border-slate-700"
                    >
                        <Database className="mb-4 h-8 w-8 text-purple-400" />
                        <h4 className="text-xl font-bold mb-2">Backend & Data</h4>
                        <ul className="text-slate-400 space-y-1">
                            <li>• Spring Boot, Nest.js, Laravel</li>
                            <li>• Node.js, PostgreSQL, Oracle</li>
                            <li>• Apache Hadoop, Redis, Kafka</li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}