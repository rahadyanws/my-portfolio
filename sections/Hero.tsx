"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-24 dark:bg-slate-950">

            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-[100px]" />

            <div className="container relative mx-auto max-w-4xl text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge Status */}
                    <motion.div variants={fadeUpVariants} className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
                        <span className="mr-2 flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for Work
                    </motion.div>

                    {/* Judul Utama */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-50"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rahadyan Widhi Saktyaji</span>
                        <br />
                        Sr. Fullstack Developer.
                    </motion.h1>

                    {/* Deskripsi */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="max-w-2xl text-lg text-slate-600 dark:text-slate-400"
                    >
                        Software Engineer with 8+ years of experience developing Web Applications, SaaS, and Enterprise systems. Proficient in scalable monolithic and microservices architectures in Finance and Healthcare sectors.
                    </motion.p>

                    {/* Tombol Aksi */}
                    <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105 dark:bg-white dark:text-slate-900"
                        >
                            View Projects
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    {/* Ikon Sosial Media */}
                    <motion.div variants={fadeUpVariants} className="mt-8 flex gap-6 text-slate-500">
                        {/* <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github className="h-6 w-6" /></a> */}
                        <a href="https://linkedin.com/in/rahadyanws" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin className="h-6 w-6" /></a>
                        <a href="mailto:rahadyanws@gmail.com" className="hover:text-red-500 transition-colors"><Mail className="h-6 w-6" /></a>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}