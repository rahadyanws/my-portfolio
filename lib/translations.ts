export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for New Projects",
      greeting: "Hi, I'm",
      role: "Sr. Fullstack Developer.",
      description: "Specializing in building high-performance web applications and scalable enterprise systems. With over 8 years of experience in FinTech and Healthcare sectors.",
      viewProjects: "View My Work",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me & Skills",
      role: "Senior Software Engineer",
      description1: "I am a Software Engineer with over 8 years of experience crafting robust web applications and enterprise systems, specialized in building scalable architectures for the Finance and Healthcare sectors.",
      description2: "My passion lies in solving complex problems through clean, efficient code. Whether it's optimizing database queries or designing intuitive user interfaces, I bring a detail-oriented approach to every project.",
      description3: "Currently focused on Modern Fullstack Development using React ecosystem and Cloud Native technologies.",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected works demonstrating expertise in backend architecture and full-stack development.",
      demo: "Live Demo",
      code: "Source Code",
      items: [
        {
          title: "Core Banking & Payment Gateway",
          description: "Designed and implemented microservices-based RESTful APIs for core authentication, reporting and KYC systems. Integrated RSA SecurID and implemented LLM-powered IDP workflows.",
        },
        {
          title: "Logistics System (SMB)",
          description: "Engineered full-stack solutions for core internal modules. Built Laravel-PostgreSQL backend and responsive Vue.js frontend for HRIS features.",
        },
        {
          title: "Expense Management System",
          description: "Improved application stability by upgrading Java libraries and validating functional impacts. Optimized queue processing and deprecated dependencies.",
        },
      ],
    },
    contact: {
      title: "Let's work",
      titleAccent: "together.",
      description: "Have an interesting project or just want to say hi? I'm always open to new discussions. Send me an email!",
      webDescription: "Have an interesting project or just want to say hi? <br /> I'm always open to new discussions. Send me an email!",
      button: "Say Hello",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind & Framer Motion.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      badge: "Tersedia untuk Proyek Baru",
      greeting: "Halo, Saya",
      role: "Sr. Fullstack Developer.",
      description: "Spesialis dalam membangun aplikasi web performa tinggi dan sistem enterprise yang scalable. Dengan pengalaman lebih dari 8 tahun di sektor FinTech dan Kesehatan.",
      viewProjects: "Lihat Karya Saya",
      contactMe: "Hubungi Saya",
      downloadCv: "Unduh CV",
    },
    about: {
      title: "Tentang Saya & Keahlian",
      role: "Senior Software Engineer",
      description1: "Saya adalah Software Engineer dengan pengalaman lebih dari 8 tahun membuat aplikasi web yang tangguh dan sistem enterprise, berspesialisasi dalam membangun arsitektur scalable untuk sektor Keuangan dan Kesehatan.",
      description2: "Passion saya terletak pada memecahkan masalah kompleks melalui kode yang bersih dan efisien. Baik itu mengoptimalkan query database atau merancang antarmuka pengguna yang intuitif, saya membawa pendekatan berorientasi detail ke setiap proyek.",
      description3: "Saat ini fokus pada Modern Fullstack Development menggunakan ekosistem React dan teknologi Cloud Native.",
      frontend: "Frontend",
      backend: "Backend & Data",
      tools: "Tools & Lainnya",
    },
    projects: {
      title: "Proyek Unggulan",
      subtitle: "Karya pilihan yang menunjukkan keahlian dalam arsitektur backend dan pengembangan full-stack.",
      demo: "Demo Langsung",
      code: "Kode Sumber",
      items: [
        {
          title: "Core Banking & Payment Gateway",
          description: "Merancang dan mengimplementasikan RESTful API berbasis microservices untuk sistem autentikasi inti, pelaporan, dan KYC. Mengintegrasikan RSA SecurID dan menerapkan alur kerja IDP bertenaga LLM.",
        },
        {
          title: "Sistem Logistik (SMB)",
          description: "Merekayasa solusi full-stack untuk modul internal inti. Membangun backend Laravel-PostgreSQL dan frontend Vue.js responsif untuk fitur HRIS.",
        },
        {
          title: "Sistem Manajemen Pengeluaran",
          description: "Meningkatkan stabilitas aplikasi dengan memperbarui library Java dan memvalidasi dampak fungsional. Mengoptimalkan pemrosesan antrian dan menghapus dependensi usang.",
        },
      ],
    },
    contact: {
      title: "Mari bekerja",
      titleAccent: "sama.",
      description: "Punya proyek menarik atau sekadar ingin menyapa? Saya selalu terbuka untuk diskusi baru. Kirimkan saya email!",
      webDescription: "Punya proyek menarik atau sekadar ingin menyapa? <br /> Saya selalu terbuka untuk diskusi baru. Kirimkan saya email!",
      button: "Halo!",
      rights: "Hak cipta dilindungi.",
      builtWith: "Dibuat dengan Next.js, Tailwind & Framer Motion.",
    },
  },
};
