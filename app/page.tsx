import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact"; // <--- Import Contact

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact /> {/* <--- Pasang di paling bawah */}
    </main>
  );
}