"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                        Let's work together.
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                        Have an interesting project or just want to say hi?
                        I'm always open to new discussions. Send me an email!
                    </p>

                    {/* Tombol Email Besar */}
                    <div>
                        <a
                            href="mailto:rahadyanws@gmail.com"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:scale-105 dark:bg-white dark:text-slate-900"
                        >
                            <Mail className="h-5 w-5" />
                            <span>Say Hello</span>
                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>

                {/* Footer Sederhana */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-24 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500"
                >
                    <p>&copy; {new Date().getFullYear()} Rahadyan Widhi Saktyaji. All rights reserved.</p>
                    <p className="mt-2">Built with Next.js, Tailwind & Framer Motion.</p>
                </motion.div>

            </div>
        </section>
    );
}