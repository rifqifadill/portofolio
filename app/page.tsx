"use client";

import React, { useState, useEffect } from "react";

// =============================================================================
// KONFIGURASI INFORMASI KONTAK & TAUTAN RESMI
// =============================================================================
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/muhamad-rifqi-fadil-itsnain-984512320",
  instagram: "https://instagram.com/rifqiitsnain_",
  email: "mailto:rifqiitsnain7@gmail.com",
  phone: "+62 812-1033-2765",
  cvRequest: "mailto:rifqiitsnain7@gmail.com?subject=Permintaan%20Curriculum%20Vitae%20-%20Muhamad%20Rifqi%20Fadil%20Itsnain"
};

type Language = "id" | "en";
type Category = "all" | "ai_data" | "software_systems";

interface ProjectDoc {
  architecture: string;
  keyChallenges: string[];
  deliverables: string[];
  contribution: string;
  metrics?: string;
}

interface Project {
  id: string;
  title: { id: string; en: string };
  category: Category;
  badge: { id: string; en: string };
  tagline: { id: string; en: string };
  description: { id: string; en: string };
  tech: string[];
  documentation: {
    id: ProjectDoc;
    en: ProjectDoc;
  };
}

// =============================================================================
// 6 PROYEK TERVERIFIKASI (PRIMARY-SOURCE EVIDENCE)
// =============================================================================
const projectsData: Project[] = [
  {
    id: "healthauth",
    title: {
      id: "HealthAuth – Sistem Cerdas Pembiayaan Kesehatan & Asisten Triase Medis",
      en: "HealthAuth – Smart Healthcare Financing & Clinical Triage Support System"
    },
    category: "ai_data",
    badge: { id: "Finalis Hackathon TechnoScape 2025", en: "Finalist TechnoScape Hackathon 2025" },
    tagline: {
      id: "Integrasi RAG Medis, Model Prediksi Risiko, dan Dashboard Analitik Faskes",
      en: "Medical RAG Pipeline, Risk Prediction Models & Healthcare Analytics Dashboards"
    },
    description: {
      id: "Platform kecerdasan buatan terpadu yang dikembangkan untuk Hackathon Nasional TechnoScape 2025 (Tim Fantastic Four). Menggabungkan Retrieval-Augmented Generation (RAG) untuk asisten nakes dengan pipeline machine learning untuk deteksi dini risiko kelelahan nakes dan estimasi lonjakan penyakit di faskes.",
      en: "An integrated AI health platform developed for the TechnoScape National Hackathon 2025 (Team Fantastic Four). Combines Retrieval-Augmented Generation (RAG) for emergency clinical triage with machine learning pipelines predicting healthcare worker burnout and regional disease surges."
    },
    tech: ["Next.js 16", "Python FastAPI", "FAISS RAG", "Scikit-Learn", "Supabase", "Tailwind CSS"],
    documentation: {
      id: {
        architecture: "Arsitektur Multi-Tier: Frontend Next.js 16 App Router menyediakan dasbor terpisah (dashboard-nakes untuk asisten chat dan shift log, dashboard-pemerintah untuk pemantauan lonjakan penyakit). Backend FastAPI mengeksekusi FAISS in-memory index dari SOP medis resmi, sementara pipeline Scikit-Learn memproses data shift untuk inferensi burnout.",
        keyChallenges: [
          "Mencegah halusinasi medis darurat dengan membatasi konteks (prompt grounding) hanya pada dokumen panduan resmi IGD.",
          "Menghubungkan pipeline Random Forest klasifikasi burnout ke database Supabase secara real-time.",
          "Membangun dasbor dual-role yang responsif memisahkan telemetri klinis nakes dan agregat pengambil kebijakan faskes."
        ],
        deliverables: [
          "Microservice FastAPI RAG dengan latensi query semantik sub-800ms.",
          "Model Random Forest klasifikasi burnout dan pipeline prediksi lonjakan penyakit.",
          "Dasbor Next.js multi-role dengan integrasi autentikasi Supabase."
        ],
        contribution: "Kontributor arsitektur sistem, integrasi RAG knowledge base panduan medis darurat, dan pengembangan dasbor antarmuka pengguna.",
        metrics: "Finalis Nasional Hackathon TechnoScape 2025"
      },
      en: {
        architecture: "Multi-Tier Architecture: Next.js 16 App Router frontend providing segregated dashboards (dashboard-nakes for clinical assistant chat and daily shift logs, dashboard-pemerintah for regional disease trend monitoring). FastAPI backend executes in-memory FAISS vector indexing of official ER SOPs, paired with Scikit-Learn pipelines for burnout inference.",
        keyChallenges: [
          "Eliminating medical hallucinations in emergency triage via strict prompt grounding on verified SOP PDFs.",
          "Integrating Scikit-Learn Random Forest burnout classification models with Supabase relational telemetry.",
          "Engineering dual-role dashboards separating clinical staff interactions from administrative policy analytics."
        ],
        deliverables: [
          "FastAPI RAG microservice achieving sub-800ms semantic search retrieval latency.",
          "Trained Random Forest burnout prediction and disease surge forecasting pipelines.",
          "Next.js multi-role web platform with Supabase role-based security."
        ],
        contribution: "Co-architected system structure, integrated clinical RAG document retrieval pipelines, and contributed to frontend dashboard interfaces.",
        metrics: "National Finalist TechnoScape Hackathon 2025"
      }
    }
  },
  {
    id: "katup",
    title: {
      id: "KATUP – Simulasi Multi-Agen Kendali Titik Urai Kemacetan Perkotaan",
      en: "KATUP – Multi-Agent Urban Traffic Bottleneck & Queue Dissipation Simulator"
    },
    category: "software_systems",
    badge: { id: "Proyek Rekayasa Perangkat Lunak UI (2026)", en: "UI Systems Engineering Project (2026)" },
    tagline: {
      id: "Pemodelan Mikroskopik & Pengendali Sinyal Adaptif Berbasis Python TraCI",
      en: "Microscopic Simulation & Adaptive Signal Control Instrumented via Python TraCI"
    },
    description: {
      id: "Simulasi mikroskopik komprehensif menggunakan Eclipse SUMO dan Python TraCI untuk memitigasi kemacetan akibat penyempitan lajur galian infrastruktur perkotaan. Mengimplementasikan prinsip katup hidrolik fluida melalui koordinasi Agen Pengamat, Agen Katup, dan Agen Rute.",
      en: "A comprehensive microscopic traffic simulator in Eclipse SUMO instrumented via Python TraCI. Mitigates upstream bottleneck spillback caused by urban infrastructure excavations by applying a fluid hydraulic valve principle across autonomous sensing, gating, and rerouting agents."
    },
    tech: ["Eclipse SUMO", "Python (TraCI)", "Multi-Agent Systems", "Netconvert", "Traffic Engineering"],
    documentation: {
      id: {
        architecture: "Komunikasi Dua Arah TCP/IP: Engine C++ Eclipse SUMO dihubungkan secara real-time ke skrip Python katup_controller.py melalui soket TraCI. AgenPengamat memantau loop induksi per detik, AgenKatup memodulasi fase lampu hijau simpang hulu (metering), dan AgenRute membelokkan arus kendaraan ke koridor bypass alternatif.",
        keyChallenges: [
          "Mencegah fenomena spillback (antrean meluber mengunci simpang hulu) saat penyempitan jalan menyisakan 1 lajur.",
          "Sinkronisasi siklus lampu lalu lintas adaptif tanpa melanggar batas keselamatan minimum interval kuning/merah.",
          "Membangun generator jaringan jalan prosedural (build_network.py) yang mengompilasi berkas XML SUMO secara otomatis."
        ],
        deliverables: [
          "Pengendali multi-agen Python TraCI otonom (katup_controller.py).",
          "Generator jaringan jalan perkotaan multi-simpang lengkap dengan poligon Kali Ciliwung dan area galian.",
          "Laporan teknis komprehensif 38 halaman (Bab 1–4) dan draf nota kesepahaman (MoU) Dishub DKI Jakarta."
        ],
        contribution: "Pengembang topologi jaringan jalan Tahap 1, arsitek visual koridor perkotaan Tahap 5 (build_network.py), penyusun laporan Bab 4 progres TraCI, dan draf MoU.",
        metrics: "Penurunan delay transit kendaraan hingga 28% dibandingkan siklus lampu statis"
      },
      en: {
        architecture: "Bidirectional TCP/IP Protocol: Eclipse SUMO C++ engine operates in lockstep synchronization with Python katup_controller.py via TraCI socket commands. AgenPengamat samples induction loops per second, AgenKatup throttles upstream green intervals, and AgenRute reassigns routes to bypass arterials.",
        keyChallenges: [
          "Mitigating backward-propagating shockwaves and upstream junction lockup during abrupt 3-to-1 lane drops.",
          "Ensuring adaptive signal phase transitions satisfy minimum safety clearance intervals.",
          "Developing a procedural network compiler (build_network.py) synthesizing SUMO node, edge, and connection XML definitions."
        ],
        deliverables: [
          "Autonomous Python TraCI multi-agent daemon (katup_controller.py).",
          "Procedural multi-intersection urban network compiler including waterway and construction obstacle polygons.",
          "Comprehensive 38-page technical engineering report (Chapters 1–4) and Dishub DKI Jakarta MoU draft."
        ],
        contribution: "Developed Stage 1 core 4-way intersection topology, Stage 5 realistic urban corridor visual compiler, and authored Chapter 4 TraCI progress deliverables.",
        metrics: "Up to 28% vehicle transit delay reduction vs fixed-time signal cycles"
      }
    }
  },
    {
    id: "survival-game",
    title: {
      id: "Is There Anyone? – Game Eksplorasi 2D Survival Horror",
      en: "Is There Anyone? – 2D Top-Down Survival Horror Exploration Game"
    },
    category: "software_systems",
    badge: { id: "Proyek Akhir PBO FTUI (Kelompok 4)", en: "OOP Final Project FTUI (Group 4)" },
    tagline: {
      id: "Arsitektur Game Client LibGDX, Spring Boot REST API, dan 8 Pola Desain OOP",
      en: "LibGDX Game Client, Spring Boot REST API & 8 Implemented OOP Design Patterns"
    },
    description: {
      id: "Game survival horor 2D top-down berlatar 'Desa Tumpang' yang dibangun menggunakan framework Java LibGDX dan backend Spring Boot. Mengimplementasikan 8 pola desain OOP terverifikasi, mekanika stamina dinamis, stealth sembunyi, dan sinkronisasi multi-slot save game ke database cloud.",
      en: "A 2D top-down survival horror exploration game set in 'Desa Tumpang' engineered in Java LibGDX paired with a Spring Boot REST API backend. Implements 8 verified OOP design patterns, dynamic stamina and stealth mechanics, and persistent cloud save slot synchronization."
    },
    tech: ["Java 17", "LibGDX (LWJGL3)", "Spring Boot", "PostgreSQL (Neon)", "Gradle"],
    documentation: {
      id: {
        architecture: "Arsitektur Client-Server: Frontend game engine LibGDX (LWJGL3) mengelola rendering tilemap Tiled (.tmx), deteksi tabrakan fisik, dan siklus hidup layar permainan. Backend Spring Boot (port 9090) mengelola autentikasi akun dan sinkronisasi status slot save game ke database PostgreSQL Neon.",
        keyChallenges: [
          "Menerapkan 8 pola desain OOP (Command, State, Strategy, Singleton, Facade, Adapter, DTO, Template Method) secara harmonis.",
          "Mengintegrasikan komunikasi jaringan HTTP/REST asinkronus antara loop game LibGDX dan server Spring Boot tanpa lag.",
          "Manajemen status game state yang konsisten antara sesi lokal dan database cloud."
        ],
        deliverables: [
          "Game desktop Java runnable (.jar) dan repositori kode sumber lengkap.",
          "Server REST API Spring Boot dengan manajemen slot simpanan permainan.",
          "Laporan presentasi teknis komprehensif 19 slide merinci arsitektur dan pola desain."
        ],
        contribution: "Pengembang layar permainan inti (PlayScreen), MainMenuScreen, transisi status layar, dan integrasi penanganan input pemain.",
        metrics: "8 Pola Desain OOP Terverifikasi & Sinkronisasi Save Slot Cloud"
      },
      en: {
        architecture: "Client-Server Architecture: LibGDX (LWJGL3) client manages Tiled map (.tmx) layer rendering, collision physics, and game screen transitions. Spring Boot REST server (port 9090) handles player authentication and synchronizes multi-slot game states to a cloud PostgreSQL database.",
        keyChallenges: [
          "Implementing 8 discrete OOP design patterns (Command, State, Strategy, Singleton, Facade, Adapter, DTO, Template Method) within a decoupled architecture.",
          "Handling asynchronous HTTP REST communication between the LibGDX frame rendering loop and the Spring Boot backend.",
          "Ensuring persistent game state integrity across local player actions and cloud database records."
        ],
        deliverables: [
          "Runnable desktop Java application (.jar) and full source codebase.",
          "Spring Boot REST API backend supporting persistent player save slots.",
          "Comprehensive 19-slide technical presentation report detailing architecture and pattern implementations."
        ],
        contribution: "Developed core gameplay screens (PlayScreen), MainMenuScreen, screen state management, and user input mapping.",
        metrics: "8 Verified OOP Design Patterns & Cloud Save Slot Synchronization"
      }
    }
  },
  {
    id: "lapak-ui",
    title: {
      id: "Lapak UI – Marketplace & Komunitas Terpadu Mahasiswa UI",
      en: "Lapak UI – Campus Marketplace & Student Community Platform"
    },
    category: "software_systems",
    badge: { id: "Proyek Sistem Basis Data FTUI (Kelompok 12)", en: "Database Systems Project FTUI (Group 12)" },
    tagline: {
      id: "Fullstack Next.js Monorepo, Skema Relasional 13 Tabel 3NF, dan Protokol COD Aman",
      en: "Fullstack Next.js Monorepo, 13-Table 3NF Relational Schema & Secure COD Protocol"
    },
    description: {
      id: "Platform web jual-beli barang bekas dan jasa khusus komunitas kampus Universitas Indonesia. Mengintegrasikan katalog marketplace, forum komunitas, chat terikat produk, dan alur transaksi Cash on Delivery (COD) dengan konfirmasi ganda guna mengeliminasi penipuan transaksi mahasiswa.",
      en: "A dedicated campus marketplace and community platform engineered for Universitas Indonesia students. Integrates secondhand goods cataloging, student services, campus discussion feeds, product-bound messaging, and a secure Double-Confirmation Cash on Delivery (COD) workflow."
    },
    tech: ["Next.js 16.2.5", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM 7.8", "Tailwind CSS"],
    documentation: {
      id: {
        architecture: "Fullstack Monorepo Next.js 16: Backend REST API (app/api/) dan UI (app/) disatukan dalam satu proyek. Menggunakan PostgreSQL dengan Prisma ORM 7.8 (13 tabel ternormalisasi 3NF, UUID keys, cascade deletes). Keamanan diperkuat dengan hashing password bcrypt (salt 12) dan sesi JWT pada cookie HTTP-Only via middleware Edge Runtime.",
        keyChallenges: [
          "Merancang sistem konfirmasi ganda (Double Confirmation) COD di mana status transaksi baru selesai jika kedua belah pihak konfirmasi.",
          "Optimasi query relasional multi-tabel (user, product, reservation, transaction, chat) tanpa kendala N+1 query.",
          "Membangun integrasi notifikasi multi-kanal (in-app database, email Resend, dan bot Telegram)."
        ],
        deliverables: [
          "Platform web Next.js 16 App Router dengan 18+ halaman fungsional.",
          "Skema Prisma migration dan database seeder komprehensif 13 tabel relasional.",
          "Dokumen panduan presentasi teknis mendalam merinci arsitektur database, API, dan alur bisnis."
        ],
        contribution: "Pengembang frontend utama untuk katalog marketplace dan detail produk (/marketplace, /marketplace/[id]), manajemen jualan (/sell, /my-products), wishlist (/wishlist), serta alur reservasi dan histori transaksi.",
        metrics: "13 Tabel Relasional 3NF, Protokol Keamanan COD Double-Confirmation"
      },
      en: {
        architecture: "Next.js 16 Fullstack Monorepo: REST API endpoints (app/api/) and UI components (app/) unified within a single repository. Backed by PostgreSQL and Prisma ORM 7.8 (13 normalized 3NF tables, UUID primary keys, cascade deletes). Secured via bcrypt password hashing (salt round 12) and stateless JWT sessions stored in HTTP-Only cookies enforced by Edge middleware.",
        keyChallenges: [
          "Designing a Double-Confirmation COD protocol where transactions only conclude upon mutual buyer and seller verification.",
          "Optimizing multi-table relational queries across products, reservations, reviews, and chats avoiding N+1 overhead.",
          "Architecting multi-channel notification pipelines spanning in-app database events, Resend emails, and Telegram webhooks."
        ],
        deliverables: [
          "Fullstack Next.js 16 App Router platform featuring 18+ responsive pages.",
          "Type-safe Prisma migration schema and database seeders managing 13 relational tables.",
          "In-depth 411-line architectural presentation guide detailing database models, API routes, and transactional state machines."
        ],
        contribution: "Primary frontend engineer for marketplace catalog browsing and product details (/marketplace, /marketplace/[id]), selling management (/sell, /my-products), wishlist bookmarks (/wishlist), and reservation/transaction user flows.",
        metrics: "13 Normalized 3NF Relational Tables, Double-Confirmation COD Protocol"
      }
    }
  },
  {
    id: "big-data",
    title: {
      id: "Hadoop MapReduce – Pipeline Analitik Big Data Terdistribusi",
      en: "Hadoop MapReduce – Distributed Big Data Analytics Pipeline"
    },
    category: "ai_data",
    badge: { id: "Praktikum Pemrosesan Data Terdistribusi FTUI", en: "Distributed Data Processing FTUI" },
    tagline: {
      id: "Algoritma Top-K Bounded Min-Heap & Analisis Log Akses Server Skala Besar pada HDFS",
      en: "Top-K Bounded Min-Heap Pattern & Large-Scale Web Server Log Analytics on HDFS"
    },
    description: {
      id: "Perancangan dan implementasi algoritma pemrosesan data terdistribusi berskala besar berbasis paradigma MapReduce pada kluster Apache Hadoop 3.x dan HDFS. Mengimplementasikan bounded min-heap in-memory untuk memangkas overhead jaringan fase shuffle hingga 99%+ serta pipeline analitik log web server.",
      en: "Design and implementation of distributed big data processing algorithms on Apache Hadoop 3.x and HDFS. Implements an in-memory bounded min-heap TreeMap pattern reducing network shuffle transfer overhead by over 99%, paired with high-throughput web server access log analytical pipelines."
    },
    tech: ["Apache Hadoop 3.3.6", "HDFS", "Java MapReduce", "YARN", "Distributed Computing"],
    documentation: {
      id: {
        architecture: "Pipeline Komputasi Terdistribusi: Dataset mentah dipecah menjadi blok-blok HDFS. Mapper mengeksekusi penyaringan lokal in-memory menggunakan struktur data TreeMap (Red-Black Tree bounded min-heap ukuran 10). Hasil emisi terfilter dikelompokkan pada fase Shuffle & Sort, lalu Reducer mengagregasi peringkat teratas secara deterministik.",
        keyChallenges: [
          "Mengeliminasi beban transfer jaringan (network shuffle) masif dengan menyaring 10 kandidat teratas langsung di memori lokal Mapper sebelum data dipancarkan.",
          "Mengoreksi kesalahan sintaksis konfigurasi Driver Hadoop Job pada berkas instruksi praktikum agar kompilasi JAR berjalan tanpa galat.",
          "Memvalidasi hasil kalkulasi agregasi log akses web server (metode HTTP, kode status respon, bandwidth) terhadap baseline sekuensial."
        ],
        deliverables: [
          "Kode sumber Java Mapper dan Reducer pola Top-K (top_10_Movies_Mapper.java, top_10_Movies_Reducer.java).",
          "Dua laporan praktikum ilmiah komprehensif: Laporan Pemrograman MapReduce (8 halaman) dan Laporan Use Case Lanjutan (7 halaman).",
          "Bukti eksekusi keluaran terdistribusi (part-r-00000) dan grafik evaluasi skalabilitas throughput cluster Hadoop."
        ],
        contribution: "Penulis tunggal kode program Java MapReduce, perancang algoritma bounded min-heap TreeMap, dan penyusun laporan praktikum analitik log.",
        metrics: "Reduksi muatan data transfer jaringan fase shuffle hingga 99%+ via bounded min-heap"
      },
      en: {
        architecture: "Distributed Compute Pipeline: Raw data partitioned into HDFS blocks. The Mapper executes local in-memory filtering using a Red-Black Tree bounded min-heap (TreeMap bounded to size 10). Emitted candidates undergo cluster shuffle and sort, where the Reducer executes deterministic global ranking.",
        keyChallenges: [
          "Eliminating severe network shuffle transfer bottlenecks by filtering local Top-K candidates directly in Mapper memory prior to emission.",
          "Debugging and correcting syntax errors within the Hadoop Job Driver configuration to ensure clean JAR compilation.",
          "Verifying distributed web server log aggregations (HTTP methods, response status codes, bandwidth) against sequential baselines."
        ],
        deliverables: [
          "Complete Java Mapper and Reducer source implementations (top_10_Movies_Mapper.java, top_10_Movies_Reducer.java).",
          "Two comprehensive technical reports: MapReduce Programming Report (8 pages) and Advanced Log Analytics Report (7 pages).",
          "Verified distributed execution outputs (part-r-00000) and throughput scaling performance evaluation benchmarks."
        ],
        contribution: "Sole author and developer of Java MapReduce implementations, bounded min-heap TreeMap algorithm, and distributed log analytical evaluations.",
        metrics: "Over 99% network shuffle transfer reduction achieved via in-memory bounded min-heap"
      }
    }
  }
];

// =============================================================================
// KOMPONEN UTAMA PORTOFOLIO
// =============================================================================
export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("id");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabHealthAuth, setActiveTabHealthAuth] = useState<"flow" | "security" | "stack">("flow");
  const [expandedIndexProject, setExpandedIndexProject] = useState<string | null>("survival-game");
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rifqiitsnain7@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const indexedProjects = filteredProjects.filter(
    (p) => p.id !== "healthauth" && p.id !== "katup"
  );

  // Dynamic Scrollspy Highlight
  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "capabilities", "experience", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#e4e4e7] selection:bg-emerald-500/20 selection:text-emerald-200 relative overflow-hidden font-sans">
      
      {/* Background Architectural Grid & Subtle Vignette */}
      <div className="fixed inset-0 bg-editorial-grid pointer-events-none opacity-25 z-0"></div>
      <div className="fixed inset-0 mask-radial-vignette pointer-events-none bg-gradient-to-b from-transparent via-[#090a0c]/60 to-[#090a0c] z-0"></div>

      {/* =========================================================================
          PERSISTENT EDITORIAL NAVIGATION
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#090a0c]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Identity Monogram */}
          <div className="flex items-center gap-3 min-w-0">
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
            >
              <div className="w-8 h-8 rounded bg-white/[0.05] border border-white/[0.12] flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-emerald-400/60 transition-colors flex-shrink-0">
                RF
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-sm font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors truncate">
                  Muhamad Rifqi
                </span>
                <span className="font-mono text-[10px] text-zinc-400 tracking-wider truncate max-w-[130px] sm:max-w-none">
                  TEKNIK KOMPUTER UI
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links with Scrollspy */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
            <a
              href="#about"
              className={`transition-colors ${
                activeSection === "about"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              01. {lang === "id" ? "Tentang" : "About"}
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                activeSection === "projects"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              02. {lang === "id" ? "Proyek Rekayasa" : "Engineering Works"}
            </a>
            <a
              href="#capabilities"
              className={`transition-colors ${
                activeSection === "capabilities"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              03. {lang === "id" ? "Keahlian Sistem" : "Capabilities"}
            </a>
            <a
              href="#experience"
              className={`transition-colors ${
                activeSection === "experience"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              04. {lang === "id" ? "Rekam Jejak" : "Experience"}
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                activeSection === "contact"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              05. {lang === "id" ? "Kontak" : "Contact"}
            </a>
          </nav>

          {/* Utility Actions: Language Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono">
              <button
                onClick={() => setLang("id")}
                className={`px-2 py-0.5 rounded transition-all ${
                  lang === "id"
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded transition-all ${
                  lang === "en"
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.08] bg-[#0c0e12]/95 backdrop-blur-xl px-4 py-6 space-y-4 font-mono text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "about" ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-emerald-400"
              }`}
            >
              01. {lang === "id" ? "Tentang Saya" : "About"}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "projects" ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-emerald-400"
              }`}
            >
              02. {lang === "id" ? "Proyek Rekayasa" : "Engineering Works"}
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "capabilities" ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-emerald-400"
              }`}
            >
              03. {lang === "id" ? "Keahlian Sistem" : "Capabilities Matrix"}
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "experience" ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-emerald-400"
              }`}
            >
              04. {lang === "id" ? "Rekam Jejak" : "Experience & Education"}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "contact" ? "text-emerald-400 font-semibold" : "text-zinc-300 hover:text-emerald-400"
              }`}
            >
              05. {lang === "id" ? "Kontak" : "Contact"}
            </a>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold tracking-wide">
                {lang === "id" ? "STATUS: TERBUKA UNTUK MAGANG" : "STATUS: OPEN FOR INTERNSHIP"}
              </span>
              <span className="text-zinc-400">IPK: 3.60 / 4.00</span>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT CONTAINER
         ========================================================================= */}
      <main className="pt-24 sm:pt-28 relative z-10">

        {/* =========================================================================
            SECTION 01: HERO MASTHEAD
           ========================================================================= */}
        <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 sm:pt-12 sm:pb-24 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (8 cols): Masthead, Bio & Action Buttons */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              {/* Availability Beacon */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-white/[0.03] border border-white/[0.08] w-fit mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                  {lang === "id"
                    ? "Terbuka untuk Peluang Magang // Depok & Jakarta"
                    : "Available for Software & Data Internships // Depok & Jakarta"}
                </span>
              </div>

              {/* Primary Name Display */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Muhamad Rifqi Fadil
                <span className="text-zinc-400 font-normal"> Itsnain</span>
              </h1>

              {/* Mobile Portrait Frame (Clean, Authenticated) */}
              <div className="lg:hidden my-4 max-w-xs mx-auto w-full bg-[#0e1014] p-2.5 rounded border border-white/[0.09] shadow-xl">
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-zinc-900 border border-white/[0.05]">
                  <img
                    src="/profile.jpg"
                    alt="Muhamad Rifqi Fadil Itsnain - Computer Engineering UI"
                    className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/85 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded bg-[#090a0c]/90 backdrop-blur-sm border border-white/[0.1] font-mono text-[10px] text-zinc-300">
                    <span className="text-emerald-400 block font-semibold">UNIVERSITAS INDONESIA</span>
                    <span className="text-zinc-400 block text-[9px]">DTE FTUI • IPK Kumulatif: 3.60 / 4.00</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph (Justified, Exact Authentic Content) */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-6 sm:mb-8 text-justify">
                {lang === "id"
                  ? "Mahasiswa Teknik Komputer UI yang berfokus pada Rekayasa Perangkat Lunak, Keamanan Jaringan, Sistem Simulasi, dan Aplikasi Berbasis AI/Data. Memiliki pondasi kuat dalam memahami cara kerja perangkat keras dan arsitektur komputer, namun memilih mendedikasikan fokus utama pada perancangan logika sistem dan rekayasa software."
                  : "Computer Engineering undergraduate at Universitas Indonesia focusing on Software Engineering, Network Security, Simulation Systems, and AI/Data-driven Applications. Grounded with a strong foundation in hardware architecture, while dedicating primary focus to system logic design and software engineering."}
              </p>

              {/* Technical Domains Registry */}
              <div className="pt-3 pb-6 mb-6 sm:pt-4 sm:pb-8 sm:mb-8 border-y border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">DOMAIN 01</span>
                  <span className="text-zinc-200 font-medium">Software Engineering</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">DOMAIN 02</span>
                  <span className="text-zinc-200 font-medium">Data Pipelines</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">DOMAIN 03</span>
                  <span className="text-zinc-200 font-medium">Traffic Simulation</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">DOMAIN 04</span>
                  <span className="text-zinc-200 font-medium">Distributed Systems</span>
                </div>
              </div>

              {/* Actions & Channels Bar */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                
                {/* Primary CTA: Jelajahi Proyek */}
                <a
                  href="#projects"
                  className="px-4 sm:px-5 py-2.5 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <span>{lang === "id" ? "Jelajahi Proyek" : "Explore Projects"}</span>
                  <svg className="w-3.5 h-3.5 text-[#090a0c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* Secondary CTA: Inisiasi Kontak */}
                <a
                  href="#contact"
                  className="px-3.5 sm:px-4 py-2.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-zinc-200 hover:text-white font-mono text-xs font-medium transition-colors flex items-center gap-2"
                >
                  <span>{lang === "id" ? "Inisiasi Kontak" : "Get in Touch"}</span>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 sm:px-4 py-2.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-zinc-200 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
                  title="Salin alamat email ke clipboard"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{copiedEmail ? (lang === "id" ? "Email Tersalin!" : "Email Copied!") : "Salin Email"}</span>
                </button>

                {/* Social Quick Links */}
                <div className="flex items-center gap-1.5 sm:ml-auto">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                    className="p-2.5 rounded bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="p-2.5 rounded bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column (4 cols): Desktop Portrait Monograph Frame */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end">
              <div className="w-full max-w-sm bg-[#0e1014] p-3 rounded border border-white/[0.09] shadow-2xl">
                
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-zinc-900 border border-white/[0.05]">
                  <img
                    src="/profile.jpg"
                    alt="Muhamad Rifqi Fadil Itsnain - Computer Engineering UI"
                    className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/80 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-[#090a0c]/90 backdrop-blur-sm border border-white/[0.1] font-mono text-[11px] text-zinc-300">
                    <span className="text-emerald-400 block font-semibold">UNIVERSITAS INDONESIA</span>
                    <span className="text-zinc-400 block text-[10px]">Departemen Teknik Elektro (DTE FTUI)</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span>S1 TEKNIK KOMPUTER</span>
                  <span className="text-emerald-400 font-semibold">IPK: 3.60 / 4.00</span>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 02: ABOUT (AUTHENTIC, CONCISE, ENGINEERING-FOCUSED)
           ========================================================================= */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-2">
                01 // {lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {lang === "id"
                  ? "Pondasi Rekayasa Silikon untuk Perangkat Lunak Modern"
                  : "Hardware-Aware Foundations for Modern Software Systems"}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4 font-sans text-sm text-zinc-300 leading-relaxed mb-8 sm:mb-10">
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Menempuh pendidikan di S1 Teknik Komputer Universitas Indonesia memberi saya keunggulan mendasar: memahami bagaimana prosesor, arsitektur memori, dan instruksi beroperasi secara fisik. Pemahaman tingkat rendah ini menjadi landasan dalam merancang arsitektur perangkat lunak yang berkinerja tinggi, hemat memori, dan terukur secara deterministik."
                    : "Studying Computer Engineering at Universitas Indonesia grants me a core advantage: understanding how processors, memory hierarchies, and hardware instructions physically execute. This low-level foundation guides me in engineering software architectures that are performant, cache-conscious, and predictably scalable."}
                </p>
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Fokus rekayasa aktif saya terpusat pada pengembangan Fullstack Web & Microservices (TypeScript, Next.js 16, Python FastAPI), Sistem Simulasi & Aktuasi (Eclipse SUMO & TraCI), Pipeline Data Terdistribusi (Hadoop HDFS MapReduce), serta Rekayasa Perangkat Lunak Berorientasi Objek (Java LibGDX)."
                    : "My active technical focus centers on Fullstack Web & Microservices (TypeScript, Next.js 16, Python FastAPI), Traffic Microscopic Simulation (Eclipse SUMO & TraCI dynamic signal actuation), Distributed Data Pipelines (Hadoop HDFS MapReduce), and Object-Oriented Software Engineering (Java LibGDX)."}
                </p>
              </div>

              {/* Three Structural Principles */}
              <div className="border-t border-white/[0.08] divide-y divide-white/[0.06] font-mono text-xs">
                
                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-emerald-400 font-semibold tracking-wider">
                    01. MECHANICAL SYMPATHY
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menghindari alokasi dinamis berlebih dan memahami siklus CPU untuk menjaga efisiensi kode sistem C dan Java."
                      : "Designing code structures with respect to CPU caching, memory locality, and resource lifecycle management."}
                  </div>
                </div>

                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-emerald-400 font-semibold tracking-wider">
                    02. DETERMINISTIC CONCURRENCY
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menguji algoritma antrean kendaraan pada pemodelan mikroskopik waktu nyata untuk memastikan hasil simulasi terukur."
                      : "Verifying real-time queue dissipation algorithms through microscopic simulations under strict deterministic parameters."}
                  </div>
                </div>

                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-emerald-400 font-semibold tracking-wider">
                    03. ZERO-TRUST RIGOR
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menerapkan pemisahan hak akses berbasis peran dan prompt grounding pada RAG medis guna mengeliminasi halusinasi sistem."
                      : "Enforcing role-based boundaries and prompt grounding in medical RAG workflows to eliminate hallucinations and guarantee system integrity."}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 03: FEATURED ENGINEERING WORKS (6 VERIFIED PROJECTS ONLY)
           ========================================================================= */}
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          {/* Header & Category Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-2">
                02 // {lang === "id" ? "PROYEK REKAYASA SISTEM" : "ENGINEERING SYSTEMS PORTFOLIO"}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {lang === "id" ? "Proyek Pilihan & Dokumentasi Sistem" : "Featured Engineering Dossiers"}
              </h2>
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono">
              {[
                { id: "all", label: lang === "id" ? "Semua (05)" : "All (05)" },
                { id: "ai_data", label: "AI & Data" },
                { id: "software_systems", label: lang === "id" ? "Sistem Rekayasa" : "Systems" }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id as Category)}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    activeCategory === c.id
                      ? "bg-white text-[#090a0c] font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================================
              FEATURE 01: HEALTHAUTH (BREAKOUT SPREAD)
             ===================================================================== */}
          {(activeCategory === "all" || activeCategory === "ai_data") && (
            <div className="mb-12 sm:mb-14 rounded border border-white/[0.1] bg-[#0c0e12] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Context, Narrative, & Benchmarks */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] text-emerald-300 font-medium">
                        Finalis Hackathon TechnoScape 2025
                      </span>
                      <span className="font-mono text-xs text-zinc-400">• AI & Health Systems</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      {projectsData[0].title[lang]}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 italic mb-4">
                      {projectsData[0].tagline[lang]}
                    </p>

                    <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6 text-justify">
                      {projectsData[0].description[lang]}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono text-xs">
                      <div className="p-3 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-zinc-400 block text-[10px]">CORE ARCHITECTURE</span>
                        <span className="text-zinc-200">FastAPI + FAISS Vector Index</span>
                      </div>
                      <div className="p-3 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-zinc-400 block text-[10px]">VALIDATED METRIC</span>
                        <span className="text-emerald-400">Sub-800ms Semantic Query Latency</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {projectsData[0].tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]">
                    <button
                      onClick={() => setActiveProjectModal(projectsData[0])}
                      className="px-4 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === "id" ? "Buka Dokumentasi Teknis" : "View Technical Dossier"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                  </div>
                </div>

                {/* Right Column: Architectural Pipeline Inspector */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090a0c] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                      <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                        // ARCHITECTURE INSPECTOR
                      </span>
                      <div className="flex items-center gap-1 p-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono">
                        <button
                          onClick={() => setActiveTabHealthAuth("flow")}
                          className={`px-2 py-0.5 rounded text-[10px] ${activeTabHealthAuth === "flow" ? "bg-white/[0.12] text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                          Pipeline
                        </button>
                        <button
                          onClick={() => setActiveTabHealthAuth("security")}
                          className={`px-2 py-0.5 rounded text-[10px] ${activeTabHealthAuth === "security" ? "bg-white/[0.12] text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                          Guardrails
                        </button>
                        <button
                          onClick={() => setActiveTabHealthAuth("stack")}
                          className={`px-2 py-0.5 rounded text-[10px] ${activeTabHealthAuth === "stack" ? "bg-white/[0.12] text-white" : "text-zinc-400 hover:text-white"}`}
                        >
                          Stack
                        </button>
                      </div>
                    </div>

                    {activeTabHealthAuth === "flow" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-emerald-400 text-[10px] block">STAGE 01 // INGESTION</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Certified ER SOPs &amp; Medical PDFs &rarr; HuggingFace Vector Embeddings</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-emerald-400 text-[10px] block">STAGE 02 // VECTORSTORE</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">FAISS In-Memory Index &rarr; Top-K similarity chunking &lt;800ms</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-emerald-400 text-[10px] block">STAGE 03 // CLIENT INTERACTION</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Next.js 16 Client App Router &harr; FastAPI Microservice</p>
                        </div>
                      </div>
                    )}

                    {activeTabHealthAuth === "security" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-emerald-400 text-[10px] block">GUARDRAIL 01 // PROMPT GROUNDING</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Restricted retrieval window mitigating medical hallucinations</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-emerald-400 text-[10px] block">GUARDRAIL 02 // ROLE-BASED ACCESS</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Supabase auth separating clinical chat from admin telemetry</p>
                        </div>
                      </div>
                    )}

                    {activeTabHealthAuth === "stack" && (
                      <div className="space-y-2 font-mono text-xs">
                        <div className="flex justify-between py-1 border-b border-white/[0.05] gap-2">
                          <span className="text-zinc-400">Frontend</span>
                          <span className="text-zinc-200 text-right">Next.js 16, React 19, Tailwind</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/[0.05] gap-2">
                          <span className="text-zinc-400">Microservice</span>
                          <span className="text-zinc-200 text-right">Python FastAPI</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/[0.05] gap-2">
                          <span className="text-zinc-400">Vector Index</span>
                          <span className="text-zinc-200 text-right">FAISS &amp; LangChain</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/[0.05] gap-2">
                          <span className="text-zinc-400">ML Pipeline</span>
                          <span className="text-zinc-200 text-right">Random Forest (Burnout &amp; Surge)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>STATUS: VALIDATED PROTOTYPE</span>
                    <span className="text-emerald-400 font-semibold">TECHNOSCAPE 2025</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =====================================================================
              FEATURE 02: KATUP (BREAKOUT SPREAD)
             ===================================================================== */}
          {(activeCategory === "all" || activeCategory === "software_systems") && (
            <div className="mb-14 sm:mb-16 rounded border border-white/[0.1] bg-[#0c0e12] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Simulation Topology & Telemetry */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090a0c] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
                      // SIMULATION TOPOLOGY & ACTUATION
                    </span>

                    <div className="p-4 rounded bg-[#0c0e12] border border-white/[0.06] font-mono text-xs space-y-3 mb-4">
                      <div>
                        <span className="text-[10px] text-emerald-400 block uppercase">CORRIDOR NETWORK</span>
                        <p className="text-zinc-200 text-xs font-semibold">Urban Multi-Intersection Network</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Virtual induction loops observing lane queue depths in 1-second intervals</p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06]">
                        <span className="text-[10px] text-emerald-400 block uppercase">MEASURED DELAY OUTCOME</span>
                        <p className="text-white text-base font-bold">-28% Transit Delay</p>
                        <p className="text-[11px] text-zinc-400 mt-0.5">Statistically evaluated against fixed-time signal baseline</p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06]">
                        <span className="text-[10px] text-emerald-400 block uppercase">SOCKET CONTROLLER</span>
                        <p className="text-zinc-200 text-[11px]">Python TraCI dynamic green interval actuation daemon</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span>SIMULATOR: ECLIPSE SUMO</span>
                    <span className="text-emerald-400 font-semibold">UI SYSTEMS '26</span>
                  </div>
                </div>

                {/* Right Column: Narrative, Problem Statement & Dossier Trigger */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] text-emerald-300 font-medium">
                        {projectsData[1].badge[lang]}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">• Traffic Simulation &amp; TraCI</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      {projectsData[1].title[lang]}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 italic mb-4">
                      {projectsData[1].tagline[lang]}
                    </p>

                    <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6 text-justify">
                      {projectsData[1].description[lang]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {projectsData[1].tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]">
                    <button
                      onClick={() => setActiveProjectModal(projectsData[1])}
                      className="px-4 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === "id" ? "Buka Dokumentasi Proyek" : "View System Dossier"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =====================================================================
              ENGINEERING PROJECT INDEX (FILTER-AWARE, PROJECTS 03 - 06)
             ===================================================================== */}
          {indexedProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    // {lang === "id" ? "INDEKS SPESIFIKASI PROYEK" : "PROJECT SPECIFICATION INDEX"}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    ({indexedProjects.length} {lang === "id" ? "proyek" : "entries"})
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400 hidden sm:inline-block">
                  {lang === "id" ? "Klik baris untuk ekspansi dokumen teknis" : "Click row to expand technical specifications"}
                </span>
              </div>

              <div className="border border-white/[0.08] divide-y divide-white/[0.06] rounded bg-[#0b0d11]">
                {indexedProjects.map((p, idx) => {
                  const isExpanded = expandedIndexProject === p.id;
                  return (
                    <div key={p.id} className="transition-colors hover:bg-white/[0.015]">
                      
                      {/* Index Row Summary Bar */}
                      <div
                        onClick={() => setExpandedIndexProject(isExpanded ? null : p.id)}
                        className="p-4 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 select-none"
                      >
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                          <span className="font-mono text-xs text-emerald-400/90 font-bold w-6 flex-shrink-0">
                            0{idx + 3}.
                          </span>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h4 className="font-display text-base sm:text-lg font-bold text-white hover:text-emerald-300 transition-colors">
                                {p.title[lang]}
                              </h4>
                              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-zinc-400">
                                {p.badge[lang]}
                              </span>
                            </div>
                            <p className="font-sans text-xs text-zinc-400 italic">
                              {p.tagline[lang]}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-auto font-mono text-xs flex-shrink-0">
                          <span className="text-zinc-400 hidden lg:inline-block">
                            {p.tech.slice(0, 3).join(" • ")}
                          </span>
                          <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                            {isExpanded ? "−" : "+"}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Technical Details Drawer */}
                      {isExpanded && (
                        <div className="px-4 pb-6 pt-2 sm:px-6 border-t border-white/[0.05] bg-[#08090c]">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            
                            <div className="lg:col-span-8 space-y-4">
                              <div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block mb-1">
                                  {lang === "id" ? "RINGKASAN REKAYASA" : "ENGINEERING SUMMARY"}
                                </span>
                                <p className="font-sans text-xs text-zinc-300 leading-relaxed text-justify">
                                  {p.description[lang]}
                                </p>
                              </div>

                              <div className="p-3.5 rounded bg-[#0d0f14] border border-white/[0.06] font-mono text-xs">
                                <span className="text-[10px] text-zinc-400 uppercase block mb-1">
                                  {lang === "id" ? "ARSITEKTUR & DESAIN SISTEM" : "SYSTEM ARCHITECTURE"}
                                </span>
                                <p className="text-zinc-300 text-[11px] leading-relaxed text-justify">
                                  {p.documentation[lang].architecture}
                                </p>
                              </div>

                              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] font-mono text-xs">
                                <span className="text-[10px] text-emerald-400 uppercase block mb-1">
                                  {lang === "id" ? "KONTRIBUSI SPESIFIK RIFQI" : "RIFQI'S SPECIFIC CONTRIBUTION"}
                                </span>
                                <p className="text-zinc-300 text-[11px] leading-relaxed text-justify">
                                  {p.documentation[lang].contribution}
                                </p>
                              </div>
                            </div>

                            <div className="lg:col-span-4 space-y-4 font-mono text-xs">
                              <div>
                                <span className="text-[10px] text-zinc-400 uppercase block mb-1.5">TECH STACK</span>
                                <div className="flex flex-wrap gap-1">
                                  {p.tech.map((t) => (
                                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-[10px] text-zinc-300">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {p.documentation[lang].metrics && (
                                <div className="p-2.5 rounded bg-emerald-500/[0.06] border border-emerald-500/20">
                                  <span className="text-[9px] text-emerald-400 uppercase block font-semibold">TOLOK UKUR / METRIK</span>
                                  <span className="text-zinc-200 text-[11px]">{p.documentation[lang].metrics}</span>
                                </div>
                              )}

                              <div className="pt-2 space-y-2">
                                <button
                                  onClick={() => setActiveProjectModal(p)}
                                  className="w-full py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                                >
                                  <span>{lang === "id" ? "Buka Dokumentasi Lengkap" : "View Full Dossier"}</span>
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>


                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </section>

        {/* =========================================================================
            SECTION 04: ARCHITECTURAL CAPABILITIES MATRIX (SKILLS)
           ========================================================================= */}
        <section id="capabilities" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-2">
                03 // {lang === "id" ? "KAPABILITAS TEKNIS" : "TECHNICAL CAPABILITIES"}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {lang === "id" ? "Matriks Sistem & Toolchain" : "Architectural Toolchain Matrix"}
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-sm text-justify">
              {lang === "id"
                ? "Disusun berdasarkan hierarki komputasi dari pemahaman gerbang silikon hingga arsitektur web modern."
                : "Structured hierarchically from silicon-level hardware logic up to distributed web infrastructure."}
            </p>
          </div>

          {/* Unified Engineering Matrix (Hierarchical Spec Rows) */}
          <div className="border border-white/[0.08] divide-y divide-white/[0.06] rounded bg-[#0b0d11]">
            
            {/* Layer 01: Programming Languages */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 01</span>
                <h3 className="font-display text-sm font-bold text-white">Programming Languages</h3>
                <span className="font-mono text-[11px] text-zinc-400">Core Foundations</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["C (Pointers, Memory Management)", "Java 17 (OOP, Concurrency)", "Python 3.x", "TypeScript 5.x", "JavaScript (ESNext)", "SQL (PostgreSQL)"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Pemahaman mendalam alokasi memori manual (C), pemrograman berorientasi objek murni (Java), scripting data (Python), serta type-safety penuh pada TypeScript."
                    : "Rigorous command of low-level manual memory allocation (C), robust object-oriented architecture (Java), data scripting (Python), and type-safe systems (TypeScript)."}
                </p>
              </div>
            </div>

            {/* Layer 02: Frontend & Backend Development */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 02</span>
                <h3 className="font-display text-sm font-bold text-white">Frontend &amp; Backend</h3>
                <span className="font-mono text-[11px] text-zinc-400">Web &amp; Microservices</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Next.js 16 (App Router)", "React 19", "Python FastAPI", "Node.js (Express 5)", "Spring Boot REST API", "Tailwind CSS"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Arsitektur Fullstack monorepo Next.js 16, microservice FastAPI asinkronus, API serverless Express 5, dan REST backend Spring Boot."
                    : "Fullstack Next.js 16 monorepos, high-throughput asynchronous FastAPI microservices, Express 5 REST APIs, and Spring Boot cloud services."}
                </p>
              </div>
            </div>

            {/* Layer 03: Databases & Data Engineering */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 03</span>
                <h3 className="font-display text-sm font-bold text-white">Databases &amp; Big Data</h3>
                <span className="font-mono text-[11px] text-zinc-400">Storage &amp; Analytics</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["PostgreSQL (Neon Serverless)", "Prisma ORM 7.8", "Apache Hadoop 3.3.6", "HDFS", "MapReduce Paradigm", "Supabase"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Pemodelan skema relasional 3NF, connection pooling serverless, ORM migrasi skema, dan komputasi terdistribusi Hadoop MapReduce."
                    : "Relational 3NF database normalization, serverless connection pooling, Prisma schema migrations, and distributed Hadoop HDFS analytical computation."}
                </p>
              </div>
            </div>

            {/* Layer 04: AI & Intelligent Systems */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 04</span>
                <h3 className="font-display text-sm font-bold text-white">AI &amp; Simulation</h3>
                <span className="font-mono text-[11px] text-zinc-400">Microscopic &amp; RAG</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Eclipse SUMO", "Python TraCI", "FAISS Vector Index", "Scikit-Learn", "Prompt Grounding (RAG)", "Multi-Agent Control"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Aktuasi sinyal dinamis multi-agen pada simulasi lalu lintas perkotaan SUMO, serta RAG teregulasi berbasis FAISS vektor tanpa halusinasi."
                    : "Multi-agent dynamic traffic signal actuation via real-time loop feedback in SUMO, and strict context-grounded FAISS RAG retrieval pipelines."}
                </p>
              </div>
            </div>

            {/* Layer 05: Networking & Cybersecurity */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 05</span>
                <h3 className="font-display text-sm font-bold text-white">Networking &amp; Security</h3>
                <span className="font-mono text-[11px] text-zinc-400">Hardening &amp; Defense</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["TCP/IP Sockets", "Wireshark Packet Analysis", "Network Topologies", "Helmet Security Headers", "Express Rate Limiting", "Session & JWT Security"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Pemrograman socket TCP/IP waktu nyata, analisis protokol jaringan via Wireshark, mitigasi DoS via rate limiting, dan proteksi sesi web aman."
                    : "Real-time TCP/IP socket programming, network protocol packet analysis via Wireshark, DoS mitigation via IP rate limiters, and secure web session management."}
                </p>
              </div>
            </div>

            {/* Layer 06: Development Tools & Infrastructure */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">CATEGORY 06</span>
                <h3 className="font-display text-sm font-bold text-white">Tools &amp; Infrastructure</h3>
                <span className="font-mono text-[11px] text-zinc-400">DevOps &amp; Toolchain</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Git Version Control", "Docker", "Gradle", "Linux / WSL", "Postman", "Vite"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Version control kolaboratif Git, otomasi build Gradle, containerization Docker, lingkungan Linux terminal, dan testing REST API."
                    : "Collaborative Git workflows, Gradle build automation, Docker containerization, Linux terminal environments, and REST API testing."}
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 05: ACADEMIC & ORGANIZATIONAL RECORD (NO NPM DISPLAYED)
           ========================================================================= */}
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-2">
                04 // {lang === "id" ? "REKAM JEJAK" : "ACADEMIC & LEADERSHIP"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === "id" ? "Pendidikan & Organisasi" : "Track Record"}
              </h2>
            </div>

            {/* Continuous Vertical Timeline Stream */}
            <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-10">
              
              {/* Milestone 01: Universitas Indonesia */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-[#090a0c]"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className="text-emerald-400 font-semibold tracking-wider">2024 — SEKARANG</span>
                  <span className="text-zinc-400 text-[11px]">DEPOK, INDONESIA</span>
                </div>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                  S1 Teknik Komputer — Universitas Indonesia
                </h3>
                
                <p className="font-mono text-xs text-zinc-400 mb-3">
                  Fakultas Teknik, Departemen Teknik Elektro (DTE FTUI) • IPK Kumulatif: <strong className="text-emerald-400 font-semibold">3.60 / 4.00</strong>
                </p>
                
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 text-justify">
                  {lang === "id"
                    ? "Mendalami kurikulum inti rekayasa sistem komputer: Pemrograman Berorientasi Objek (Java), Struktur Data & Algoritma, Arsitektur & Organisasi Komputer (MIPS & Desain Memori), Pemrograman Terstruktur (C), Sistem Basis Data (PostgreSQL), Teknologi Big Data Terapan (Hadoop), dan Keamanan Jaringan."
                    : "Pursuing rigorous coursework across Computer Systems Engineering: Object-Oriented Programming (Java), Data Structures & Algorithms, Computer Architecture & Organization (MIPS), Structured Systems Programming (C), Relational Database Systems (PostgreSQL), Big Data Analytics (Hadoop HDFS), and Network Security."}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">GPA: 3.60 / 4.00</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">DTE FTUI Kampus Depok</span>
                </div>
              </div>

              {/* Milestone 02: IME FTUI */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-[#090a0c]"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className="text-zinc-300 tracking-wider">2025</span>
                  <span className="text-zinc-400 text-[11px]">DTE FTUI</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Ikatan Mahasiswa Elektro (IME FTUI)
                </h3>

                <p className="font-sans text-xs font-semibold text-emerald-400 mb-3">
                  {lang === "id" ? "Staff Bidang RETRO (Rohani Islam Elektro)" : "Staff of RETRO Division (Rohani Islam Elektro)"}
                </p>

                <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc list-inside text-justify">
                  {lang === "id" ? (
                    <>
                      <li>Mengelola dan mengoordinasikan program pembinaan karakter serta kegiatan kerohanian Islam di lingkungan Departemen Teknik Elektro UI.</li>
                      <li>Menyelenggarakan kajian berkala, kegiatan silaturahmi mahasiswa, dan bakti sosial kemasyarakatan.</li>
                      <li>Menyusun laporan pertanggungjawaban kegiatan secara transparan dan berkolaborasi aktif lintas bidang di IME FTUI.</li>
                    </>
                  ) : (
                    <>
                      <li>Managed and coordinated student character-building initiatives and community fellowship programs within the Department of Electrical Engineering UI.</li>
                      <li>Organized periodic developmental discussions, community outreach efforts, and student welfare sessions.</li>
                      <li>Prepared transparent post-event activity accountability reports and maintained cross-divisional collaboration.</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Milestone 03: PSB FTUI */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-zinc-600 ring-4 ring-[#090a0c]"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className="text-zinc-300 tracking-wider">FEBRUARI 2025</span>
                  <span className="text-zinc-400 text-[11px]">FTUI</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Pelepasan Sarjana Baru (PSB FTUI)
                </h3>

                <p className="font-sans text-xs font-semibold text-emerald-400 mb-3">
                  {lang === "id" ? "Divisi K3 (Keselamatan & Keamanan)" : "Safety & Security Division (K3)"}
                </p>

                <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc list-inside text-justify">
                  {lang === "id" ? (
                    <>
                      <li>Merumuskan rencana keselamatan darurat dan evakuasi venue acara Pelepasan Sarjana Baru FTUI.</li>
                      <li>Mengkoordinasikan manajemen kerumunan (crowd control) untuk 500+ wisudawan dan tamu undangan.</li>
                      <li>Memastikan seluruh rangkaian acara berlangsung tertib, aman, dan tanpa insiden kecelakaan.</li>
                    </>
                  ) : (
                    <>
                      <li>Formulated venue emergency evacuation procedures and safety logistics for FTUI Graduation Ceremonies.</li>
                      <li>Supervised crowd control protocols for 500+ graduating students and invited family guests.</li>
                      <li>Ensured smooth zero-incident ceremonial operations in coordination with faculty security.</li>
                    </>
                  )}
                </ul>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 06: CONTACT & COMMUNICATION CHANNELS
           ========================================================================= */}
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          
          <div className="rounded border border-white/[0.1] bg-[#0c0e12] p-6 sm:p-14">
            
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-3">
                05 // {lang === "id" ? "INISIASI KOMUNIKASI" : "GET IN TOUCH"}
              </span>
              
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                {lang === "id"
                  ? "Mari Membangun Sistem yang Terukur & Aman"
                  : "Let's Build Resilient, Scalable Software"}
              </h2>

              <p className="font-sans text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed text-justify">
                {lang === "id"
                  ? "Saya selalu terbuka untuk mendiskusikan peluang magang (software engineering, data engineering, network security), kolaborasi riset rekayasa sistem, atau sekadar bertukar wawasan seputar teknologi sistem komputasi."
                  : "I am actively seeking software engineering, data, and security internship opportunities. Whether exploring potential engineering collaboration or discussing systems architectures, my inbox is open."}
              </p>

              {/* Action Buttons: Email Direct + Copy Email */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href={SOCIAL_LINKS.email}
                  className="px-5 sm:px-6 py-3 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-bold tracking-wide transition-colors flex items-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>rifqiitsnain7@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-xs font-mono text-zinc-200 transition-colors"
                >
                  {copiedEmail ? (lang === "id" ? "Tersalin ke Clipboard!" : "Copied!") : (lang === "id" ? "Salin Email" : "Copy Email")}
                </button>
              </div>

              {/* Privacy Notice for Credentials & CV */}
              <div className="p-3.5 rounded bg-white/[0.02] border border-white/[0.07] mb-8 font-mono text-xs text-zinc-400">
                <span className="text-emerald-400 font-semibold block mb-1">
                  // {lang === "id" ? "AKSES RESMI CURRICULUM VITAE" : "OFFICIAL CV & CREDENTIAL ACCESS"}
                </span>
                <span className="leading-relaxed">
                  {lang === "id"
                    ? "Curriculum Vitae (CV) lengkap, portofolio privat, dan transkrip akademik tersedia melalui permintaan langsung via email untuk keperluan rekrutmen magang & profesional."
                    : "Official Curriculum Vitae (CV), private project records, and academic transcripts are provided upon direct email request for internship and professional recruitment inquiries."}
                </span>
              </div>

              {/* Direct Channels List (Exact 'Instagram' clean label) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{SOCIAL_LINKS.phone}</span>
                </a>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =========================================================================
          COLOPHON / FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/[0.08] bg-[#07080a] py-8 text-xs font-mono text-zinc-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Muhamad Rifqi Fadil Itsnain</span>
            <span>•</span>
            <span>Teknik Komputer Universitas Indonesia</span>
          </div>

          <div className="text-zinc-400 text-[11px]">
            Designed with Editorial Precision • Next.js 16 • Tailwind CSS
          </div>

        </div>
      </footer>

      {/* =========================================================================
          INTERACTIVE ARCHITECTURAL DOSSIER MODAL
         ========================================================================= */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#0e1014] border border-white/[0.12] rounded shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex-shrink-0 p-5 sm:p-6 pb-4 border-b border-white/[0.08] flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">
                  // {lang === "id" ? "DOKUMENTASI REKAYASA TEKNIS" : "TECHNICAL ENGINEERING DOSSIER"}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-zinc-300">
                  {activeProjectModal.badge[lang]}
                </span>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                aria-label="Tutup modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              
              {/* Project Title & Stack */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {activeProjectModal.title[lang]}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {activeProjectModal.tech.join(" • ")}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{lang === "id" ? "Dokumentasi Arsitektur & Rekayasa Terverifikasi" : "Verified Engineering Architecture & Dossier"}</span>
                </div>
              </div>

              {/* Architecture Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                  <span>{lang === "id" ? "Arsitektur & Desain Sistem:" : "Technical Architecture & System Design:"}</span>
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed p-4 rounded bg-[#090a0c] border border-white/[0.06] font-mono text-justify">
                  {activeProjectModal.documentation[lang].architecture}
                </p>
              </div>

              {/* Verified Contribution */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                  <span>{lang === "id" ? "Kontribusi Spesifik Rifqi:" : "Rifqi's Verified Contribution:"}</span>
                </h4>
                <p className="text-xs text-zinc-200 leading-relaxed p-4 rounded bg-white/[0.02] border border-white/[0.08] font-sans text-justify">
                  {activeProjectModal.documentation[lang].contribution}
                </p>
              </div>

              {/* Key Challenges */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                  <span>{lang === "id" ? "Tantangan Teknis Kritis & Solusi:" : "Key Technical Challenges Solved:"}</span>
                </h4>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside font-sans text-justify">
                  {activeProjectModal.documentation[lang].keyChallenges.map((c, i) => (
                    <li key={i} className="leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                  <span>{lang === "id" ? "Deliverable & Hasil Rekayasa:" : "Deliverables & Artifacts:"}</span>
                </h4>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside font-sans text-justify">
                  {activeProjectModal.documentation[lang].deliverables.map((d, i) => (
                    <li key={i} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {activeProjectModal.documentation[lang].metrics && (
                <div className="p-3.5 rounded bg-[#090a0c] border border-emerald-500/30 text-xs text-zinc-300 font-mono">
                  <strong className="text-emerald-400">{lang === "id" ? "Tolok Ukur: " : "Benchmark: "}</strong>
                  {activeProjectModal.documentation[lang].metrics}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 p-4 sm:p-5 border-t border-white/[0.08] flex items-center justify-between bg-[#0a0c0f]">
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{lang === "id" ? "Dokumentasi Arsitektur Resmi" : "Official Architecture Dossier"}</span>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono font-semibold text-xs transition-colors"
              >
                {lang === "id" ? "Tutup" : "Close"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
