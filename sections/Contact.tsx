"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="relative py-32 px-6 overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl leading-tight">
                        {t.contact.title} <span className="text-primary">{t.contact.titleAccent}</span>
                    </h2>

                    <p 
                        className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400 font-medium"
                        dangerouslySetInnerHTML={{ __html: t.contact.webDescription }}
                    />

                    {/* Tombol Email Besar */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="mailto:rahadyanws@gmail.com"
                            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-slate-900 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-primary/20 transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            <Mail className="h-6 w-6" />
                            <span>{t.contact.button}</span>
                            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Footer Sederhana */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="mt-32 border-t border-slate-200 pt-10 text-sm font-medium text-slate-500 dark:border-slate-800 dark:text-slate-500"
                >
                    <p>&copy; {new Date().getFullYear()} Rahadyan Widhi Saktyaji. {t.contact.rights}</p>
                    <p className="mt-2 text-xs opacity-70">{t.contact.builtWith}</p>
                </motion.div>

            </div>
        </section>
    );
}