"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Moon, Sun, Languages } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext"; // <--- Import Hook Hook

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage(); // <--- Gunakan Hook
    const [mounted, setMounted] = useState(false);

    // Mencegah error hydration mismatch
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t.nav.home, href: "#", icon: Home },
        { name: t.nav.about, href: "#about", icon: User },
        { name: t.nav.projects, href: "#projects", icon: Briefcase },
        { name: t.nav.contact, href: "#contact", icon: Mail },
    ];

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <nav
                className={cn(
                    "flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 border",
                    scrolled
                        ? "bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-md shadow-lg"
                        : "bg-transparent border-transparent"
                )}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        <item.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{item.name}</span>
                    </Link>
                ))}

                {/* Separator Kecil */}
                <div className="mx-1 h-6 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

                {/* TOMBOL BAHASA */}
                <button
                    onClick={() => setLanguage(language === "en" ? "id" : "en")}
                    className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 text-xs font-bold"
                    aria-label="Toggle Language"
                >
                    {language.toUpperCase()}
                </button>

                 {/* TOMBOL TOGGLE THEME */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                    aria-label="Toggle Theme"
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
            </nav>
        </motion.div>
    );
}