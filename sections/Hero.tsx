"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8 } 
        },
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50/50 px-6 py-24 dark:bg-slate-950/50">

            {/* Background Decor */}
            <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] opacity-70" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[120px] opacity-70" />
            <div className="absolute top-[40%] left-[60%] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px] opacity-50" />

            <div className="container relative mx-auto max-w-5xl text-center z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-center gap-8"
                >
                    {/* Badge Status */}
                    <motion.div 
                        variants={fadeUpVariants} 
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur-md shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                    >
                        <span className="mr-2 flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {t.hero.badge}
                    </motion.div>

                    {/* Judul Utama */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl dark:text-slate-50 leading-tight"
                    >
                        {t.hero.greeting} <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent">Rahadyan</span>
                        <br />
                        <span className="text-4xl sm:text-6xl text-slate-700 dark:text-slate-300">{t.hero.role}</span>
                    </motion.h1>

                    {/* Deskripsi */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                         {t.hero.description}
                    </motion.p>

                    {/* Tombol Aksi */}
                    <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 justify-center mt-4">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t.hero.viewProjects}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                             href="#contact"
                             className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t.hero.contactMe}
                        </Link>
                        
                        {/* Tombol Download CV */}
                        <a
                            href="/rahadyan-cv.pdf"
                            download="Rahadyan-CV.pdf"
                            className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t.hero.downloadCv}
                        </a>
                    </motion.div>

                    {/* Ikon Sosial Media */}
                    <motion.div variants={fadeUpVariants} className="mt-8 flex gap-8 text-slate-400">
                        {/* <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-110"><Github className="h-6 w-6" /></a> */}
                        <a href="https://linkedin.com/in/rahadyanws" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors hover:scale-110"><Linkedin className="h-7 w-7" /></a>
                        <a href="mailto:rahadyanws@gmail.com" className="hover:text-red-500 transition-colors hover:scale-110"><Mail className="h-7 w-7" /></a>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}