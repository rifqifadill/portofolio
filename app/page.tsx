"use client";

import React, { useState } from "react";

// =============================================================================
// KONFIGURASI MEDIA SOSIAL & INFORMASI KONTAK (MUDAH DISUNTING)
// =============================================================================
const SOCIAL_LINKS = {
  github: "https://github.com/rifqifadill",
  linkedin: "https://www.linkedin.com/in/muhamad-rifqi-fadil-itsnain-984512320",
  instagram: "https://instagram.com/rifqiitsnain_",
  email: "mailto:rifqiitsnain7@gmail.com",
  phone: "+62 812-1033-2765",
  cvDownload: "/cv.pdf"
};

type Language = "id" | "en";
type Category = "all" | "ai_data" | "security" | "software_systems";

interface ProjectDoc {
  architecture: string;
  keyChallenges: string[];
  deliverables: string[];
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

const projectsData: Project[] = [
  {
    id: "healthauth",
    title: {
      id: "HealthAuth – AI Clinical Assistant & Burnout Prevention",
      en: "HealthAuth – AI Clinical Assistant & Burnout Prevention"
    },
    category: "ai_data",
    badge: { id: "Finalis Hackathon TechnoScape 2025", en: "Finalist TechnoScape Hackathon 2025" },
    tagline: {
      id: "Sistem RAG Klinis Berbasis Regulasi & Model Prediksi Burnout Nakes",
      en: "Regulatory RAG Clinical System & Healthcare Worker Burnout Predictor"
    },
    description: {
      id: "Platform kecerdasan buatan terpadu yang memadukan Retrieval-Augmented Generation (RAG) untuk asisten nakes dengan pipeline machine learning untuk deteksi dini risiko kelelahan ekstrem.",
      en: "An integrated AI platform combining Retrieval-Augmented Generation (RAG) for clinical staff with a machine learning pipeline for early burnout risk detection."
    },
    tech: ["Next.js 16", "FastAPI", "FAISS RAG", "LangChain", "Supabase", "Scikit-Learn"],
    documentation: {
      id: {
        architecture: "Arsitektur End-to-End: Dokumen Panduan Medis & SOP IGD diekstraksi -> di-chunking & di-vektorisasi menggunakan HuggingFace Embeddings -> disimpan di FAISS Vector Index -> di-query via FastAPI Microservice -> disajikan pada Frontend responsif Next.js 16.",
        keyChallenges: [
          "Mencegah halusinasi AI pada saran medis darurat dengan membatasi konteks (prompt grounding) hanya pada panduan resmi.",
          "Menghubungkan pipeline Scikit-Learn klasifikasi burnout berbasis jam shift kerja ke database Supabase secara real-time.",
          "Membangun dasbor dual-role: antarmuka asisten chat untuk nakes dan dasbor agregat analitik untuk manajemen faskes."
        ],
        deliverables: [
          "Microservice FastAPI RAG dengan latensi query di bawah 800ms.",
          "Model Random Forest klasifikasi burnout dengan akurasi validasi >88%.",
          "Aplikasi web Next.js modern dengan otentikasi role-based Supabase."
        ],
        metrics: "Finalis Nasional Hackathon TechnoScape 2025"
      },
      en: {
        architecture: "End-to-End Architecture: Certified medical guidelines & ER SOP PDFs are chunked & embedded via HuggingFace -> indexed into FAISS Vectorstore -> queried through FastAPI microservice -> consumed by Next.js 16 client application.",
        keyChallenges: [
          "Mitigating AI hallucinations in critical medical triage through rigorous prompt grounding on certified guidelines.",
          "Integrating a Scikit-Learn burnout classification pipeline with Supabase relational telemetry in real-time.",
          "Engineering dual-role dashboards: conversational clinical assistant for nurses and aggregated wellbeing analytics for administrators."
        ],
        deliverables: [
          "FastAPI RAG microservice with sub-800ms semantic search latency.",
          "Trained Random Forest burnout prediction pipeline with >88% validation accuracy.",
          "Fullstack Next.js web application with Supabase role-based security."
        ],
        metrics: "National Finalist TechnoScape Hackathon 2025"
      }
    }
  },
  {
    id: "katup",
    title: {
      id: "KATUP – Simulasi Pengurai Kemacetan & Antrean Perkotaan",
      en: "KATUP – Urban Traffic Congestion & Queue Dissipation Simulation"
    },
    category: "software_systems",
    badge: { id: "Proyek Tim Rekayasa Sistem UI (2026)", en: "Systems Engineering Team Project UI (2026)" },
    tagline: {
      id: "Pemodelan Mikroskopik 6 Simpang Perkotaan dengan Aktuasi Sinyal Cerdas TraCI",
      en: "Microscopic 6-Intersection Simulation with TraCI Adaptive Traffic Light Actuation"
    },
    description: {
      id: "Simulasi mikroskopik komprehensif menggunakan Eclipse SUMO dan Python TraCI untuk menguji algoritma optimasi antrean kendaraan dan aktuasi lampu lalu lintas dinamis pada koridor perkotaan.",
      en: "Comprehensive microscopic simulation using Eclipse SUMO and Python TraCI to evaluate queue dissipation algorithms and dynamic traffic signal actuation across urban corridors."
    },
    tech: ["Eclipse SUMO", "Python (TraCI)", "Traffic Engineering", "Matplotlib", "Microscopic Modeling"],
    documentation: {
      id: {
        architecture: "Model Jaringan Jalan: Memetakan 6 simpang terintegrasi (Simpang Arteri Barat, Simpang Titik Urai Utama, Simpang 3 Komersial) dengan sensor loop induksi virtual. Skrip Python TraCI memantau antrean per detik dan memodifikasi durasi fase hijau secara adaptif.",
        keyChallenges: [
          "Menghindari spillback (antrean meluber ke simpang sebelumnya) pada saat lonjakan volume kendaraan jam sibuk.",
          "Sinkronisasi waktu hijau antar simpang berdekatan (green wave corridor) menggunakan kalkulasi densitas waktu nyata.",
          "Validasi akurasi metrik throughput dan waktu tunda kendaraan secara statistik."
        ],
        deliverables: [
          "File jaringan jalan SUMO (.net.xml) dan skenario rute lalu lintas realistis (.rou.xml).",
          "Controller Python TraCI otonom pengendali sinyal lampu lalu lintas adaptif.",
          "Laporan teknis komprehensif spesifikasi sistem KATUP."
        ],
        metrics: "Penurunan delay transit kendaraan hingga 28% dibandingkan siklus statis"
      },
      en: {
        architecture: "Road Network Architecture: Modeled a 6-intersection urban network (suburban residential artery, central bottleneck intersection, commercial hub connector) instrumented with virtual induction loop sensors. A Python TraCI daemon monitors lane queue depth per second and dynamically extends green intervals.",
        keyChallenges: [
          "Preventing queue spillback into upstream junctions during peak rush hour surges.",
          "Synchronizing adjacent intersections for coordinated green-wave progression using real-time density feedback.",
          "Statistically validating total delay reduction and vehicle throughput metrics."
        ],
        deliverables: [
          "Complete SUMO road network (.net.xml) and vehicle route distribution models (.rou.xml).",
          "Autonomous Python TraCI controller for real-time adaptive signal adjustment.",
          "Comprehensive engineering technical specification report."
        ],
        metrics: "Up to 28% vehicle transit delay reduction vs fixed-time signal cycles"
      }
    }
  },
  {
    id: "security-lab",
    title: {
      id: "Laboratorium Keamanan Siber & Tantangan Flag CTF",
      en: "Cybersecurity Vulnerability Lab & Flag CTF Challenge Platform"
    },
    category: "security",
    badge: { id: "Platform Lab Keamanan Jaringan", en: "Network Security Lab Platform" },
    tagline: {
      id: "Simulasi Celah Eksploitasi SQLi, Flag Validation, dan Mitigasi Hardening",
      en: "SQLi Exploitation Simulation, Flag Validation, and Countermeasure Hardening"
    },
    description: {
      id: "Platform pengujian penetrasi interaktif yang memuat lingkungan rentan SQL Injection terkontrol untuk pembelajaran praktikum, dilengkapi sistem validasi flag CTF otomatis dan modul mitigasi pertahanan.",
      en: "An interactive penetration testing platform featuring a controlled SQL Injection environment for coursework, paired with automated CTF flag validation and defensive hardening modules."
    },
    tech: ["Node.js", "Express 5", "PostgreSQL (Neon)", "React 19", "Vite", "Helmet", "Rate Limit"],
    documentation: {
      id: {
        architecture: "Arsitektur Fullstack: Backend Express 5 memisahkan controller rentan (vulnerable query concatenation) dan controller terproteksi (parameterized query pool). Frontend React 19 menyediakan terminal pengujian dan validasi flag instan.",
        keyChallenges: [
          "Menyusun skenario injeksi SQL bertahap: mulai dari auth bypass ' OR 1=1 -- hingga UNION-based extraction skema tabel.",
          "Mengamankan server praktikum dari Denial of Service melalui implementasi Express Rate Limit dan Helmet headers.",
          "Menghubungkan PostgreSQL connection pooling pada Neon Serverless dengan penanganan reconnect otomatis."
        ],
        deliverables: [
          "REST API Express 5 dengan modul Flag Controller dan User Controller modular.",
          "Antarmuka pengguna interaktif React 19 + Tailwind CSS dengan feedback status real-time.",
          "Dokumentasi panduan mitigasi kode aman (Prepared Statements & Input Sanitization)."
        ],
        metrics: "Digunakan aktif sebagai platform praktikum Keamanan Jaringan"
      },
      en: {
        architecture: "Fullstack Architecture: Express 5 backend segregating vulnerable endpoints (direct query concatenation) from hardened endpoints (parameterized queries). React 19 frontend provides testing consoles and real-time flag submission validation.",
        keyChallenges: [
          "Crafting tiered injection challenges: progressing from simple auth bypass (' OR 1=1 --) to UNION-based table schema enumeration.",
          "Hardening the lab infrastructure against DoS attacks via Express Rate Limiting and strict Helmet HTTP security policies.",
          "Managing resilient PostgreSQL connection pooling on Neon Serverless with automatic reconnects."
        ],
        deliverables: [
          "Express 5 REST API featuring modular Flag and User controller architectures.",
          "Interactive React 19 + Tailwind CSS UI with instant verification feedback.",
          "Secure coding documentation and parameterized remediation references."
        ],
        metrics: "Deployed as active instructional testbed for Network Security students"
      }
    }
  },
  {
    id: "survival-game",
    title: {
      id: "Is There Anyone – Game Survival Horror 2D Desktop",
      en: "Is There Anyone – 2D Survival Horror Desktop Game"
    },
    category: "software_systems",
    badge: { id: "Proyek Pemrograman Berorientasi Objek (Java)", en: "Course Project Object-Oriented Programming (Java)" },
    tagline: {
      id: "Arsitektur Game Modular Berbasis Prinsip OOP & Serialisasi Multi-Slot Save",
      en: "Modular Game Architecture on OOP Principles with Multi-Slot Save Serialization"
    },
    description: {
      id: "Game survival horor 2D top-down yang dirancang dari nol menggunakan bahasa Java, mengimplementasikan pola desain OOP murni, mekanika stamina dinamis, sistem sembunyi, dan penyimpanan data pemain.",
      en: "A top-down 2D survival horror game developed from scratch in Java, implementing strict OOP design patterns, dynamic stamina mechanics, hiding systems, and persistent player state serialization."
    },
    tech: ["Java", "OOP Architecture", "State Serialization", "Game Mechanics", "Desktop GUI"],
    documentation: {
      id: {
        architecture: "Pola Desain Berorientasi Objek: Menggunakan hierarki kelas abstrak Entity untuk Player dan Monster (Inheritance & Polymorphism), manajemen inventori dan stamina terenkapsulasi, serta state machine untuk loop permainan (Title, Playing, Paused, GameOver).",
        keyChallenges: [
          "Merancang kalkulasi collision detection 2D berbasis grid dan line-of-sight deteksi pemain oleh monster.",
          "Sistem serialisasi data objek Java untuk fitur Save & Load progress permainan tanpa kerusakan status memori.",
          "Manajemen memori rendering aset visual pada loop 60 FPS di perangkat laptop standar."
        ],
        deliverables: [
          "Aplikasi desktop Java standalone yang siap dimainkan.",
          "Sistem quest progresif berbasis task (koleksi kunci, aktivasi genset, pintu keluar).",
          "Struktur kode modular yang dapat diperluas dengan entitas monster atau peta baru."
        ],
        metrics: "Arsitektur modular diverifikasi bersih tanpa cyclic dependency"
      },
      en: {
        architecture: "OOP Design Structure: Abstract Entity hierarchy governing Player and AI Enemy classes (Inheritance & Polymorphism), encapsulated inventory and stamina subsystems, and state machine managing game states (Title, In-Game, Paused, Escape).",
        keyChallenges: [
          "Developing responsive 2D grid collision detection and raycasted line-of-sight enemy perception.",
          "Implementing Java binary object serialization for robust multi-slot save/load checkpoint persistence.",
          "Optimizing rendering loop memory footprint to guarantee smooth 60 FPS on standard hardware."
        ],
        deliverables: [
          "Standalone playable desktop Java game application.",
          "Progressive quest milestones (keycard collection, generator reboot, emergency exit).",
          "Extensible codebase engineered for rapid entity and map expansion."
        ],
        metrics: "Verified clean modular architecture with zero cyclic dependencies"
      }
    }
  },
  {
    id: "lapak-ui",
    title: {
      id: "Lapak UI – Marketplace Kampus & Worker Bot Telegram",
      en: "Lapak UI – Campus Marketplace & Telegram Polling Worker"
    },
    category: "ai_data",
    badge: { id: "Proyek Sistem Basis Data & Web", en: "Database Systems & Web Project" },
    tagline: {
      id: "Platform Jual-Beli Komunitas Kampus dengan Skema Relasional 3NF & Notifikasi Bot",
      en: "Campus Community Commerce Platform with 3NF Relational Schema & Telegram Alerts"
    },
    description: {
      id: "Platform web marketplace komunitas kampus Universitas Indonesia terintegrasi dengan background polling service bot Telegram untuk siaran instan listing produk baru ke channel mahasiswa.",
      en: "A campus community marketplace for Universitas Indonesia integrated with a background Telegram bot worker broadcasting instant notifications for new listings."
    },
    tech: ["Next.js 16", "React 19", "Prisma ORM", "PostgreSQL", "Telegram API", "JWT & Bcrypt"],
    documentation: {
      id: {
        architecture: "Arsitektur Data: Desain basis data PostgreSQL dengan normalisasi 3NF dimodelkan via Prisma Schema. Worker Node.js independen mem-polling perubahan data baru dan memancarkan notifikasi via Telegram Bot API.",
        keyChallenges: [
          "Pengamanan otentikasi sesi menggunakan token JWT dan enkripsi password salted bcrypt.",
          "Penanganan query relasional kompleks (kategori produk, histori transaksi, relasi pembeli-penjual) tanpa N+1 query problem.",
          "Konkurensi worker background Telegram polling agar tidak membebani server web Next.js."
        ],
        deliverables: [
          "Aplikasi web responsif Next.js 16 App Router dengan antarmuka modern.",
          "Prisma Client type-safe schema dan migration scripts.",
          "Worker background script (telegram-poll.js) yang andal dan mandiri."
        ],
        metrics: "Pembaruan notifikasi Telegram instan dalam <3 detik pasca posting"
      },
      en: {
        architecture: "Data Architecture: 3NF relational PostgreSQL schema mapped via Prisma ORM. An independent Node.js polling worker observes listing mutations and fires formatted markdown alerts to Telegram broadcast channels.",
        keyChallenges: [
          "Securing session authentication using signed JWTs and salted bcrypt hashing.",
          "Optimizing multi-table relational joins across categories, sellers, and transactions avoiding N+1 query overhead.",
          "Decoupling the Telegram worker thread to avoid blocking Next.js SSR request pipelines."
        ],
        deliverables: [
          "Responsive Next.js 16 App Router web portal.",
          "Type-safe Prisma migration schema and database seeders.",
          "Autonomous polling script (telegram-poll.js) with automatic retry handling."
        ],
        metrics: "Sub-3-second Telegram alert dispatch upon new item listing"
      }
    }
  },
  {
    id: "big-data",
    title: {
      id: "Analitik Data Terdistribusi & Pipeline MapReduce",
      en: "Distributed Big Data Analytics & MapReduce Pipeline"
    },
    category: "ai_data",
    badge: { id: "Teknologi Big Data Terapan", en: "Applied Big Data Technology" },
    tagline: {
      id: "Pemrosesan Skala Besar pada HDFS Menggunakan Algoritma Mapper & Reducer Kustom",
      en: "Large-Scale HDFS Processing with Custom Mapper & Reducer Implementations"
    },
    description: {
      id: "Perancangan dan implementasi algoritma pemrosesan data terdistribusi berskala besar berbasis paradigma MapReduce untuk mengekstraksi wawasan log akses dan agregasi data numerik bervolume tinggi.",
      en: "Design and deployment of distributed big data processing algorithms on the MapReduce paradigm, extracting structured behavioral insights from high-volume unstructured log streams."
    },
    tech: ["Apache Hadoop", "HDFS", "MapReduce", "Python Streaming", "Big Data Analytics"],
    documentation: {
      id: {
        architecture: "Pipeline Terdistribusi: Dataset mentah dipecah ke blok HDFS -> Mapper mengekstrak pasangan key-value secara paralel -> Shuffle & Sort mengelompokkan data berdasarkan key -> Reducer mengagregasi komputasi numerik secara terdistribusi.",
        keyChallenges: [
          "Mengatasi data skewing (ketidakseimbangan distribusi key) yang memperlambat node reducer tertentu.",
          "Optimasi efisiensi memori I/O pada fase intermediate spill ke disk lokal worker node.",
          "Memvalidasi hasil kalkulasi agregat terdistribusi terhadap baseline kalkulasi sekuensial."
        ],
        deliverables: [
          "Skrip Mapper dan Reducer Python untuk use-case analitik lanjutan.",
          "Laporan evaluasi throughput pemrosesan data cluster Hadoop.",
          "Grafik komparasi performa skalabilitas waktu eksekusi vs ukuran data."
        ],
        metrics: "Skalabilitas linier throughput data pada peningkatan node worker"
      },
      en: {
        architecture: "Distributed Compute Pipeline: Raw datasets partitioned into HDFS blocks -> parallel Mappers emit key-value tuples -> cluster shuffle and sort partition data -> distributed Reducers execute aggregations concurrently.",
        keyChallenges: [
          "Mitigating data skew anomalies where disproportionate key frequencies bottleneck individual reducer nodes.",
          "Tuning I/O buffers during intermediate disk-spilling stages across worker instances.",
          "Cross-verifying distributed computation outputs against sequential baseline benchmarks."
        ],
        deliverables: [
          "Python streaming Mapper and Reducer implementations.",
          "Hadoop cluster throughput performance evaluation reports.",
          "Speedup benchmark charts charting execution time against dataset scale."
        ],
        metrics: "Demonstrated linear compute scalability across worker nodes"
      }
    }
  },
  {
    id: "marine-tracker",
    title: {
      id: "Marine Biological Telemetry & Route Tracker",
      en: "Marine Biological Telemetry & Route Tracker"
    },
    category: "software_systems",
    badge: { id: "Proyek Pemrograman Terstruktur (C)", en: "Course Project Structured Programming (C)" },
    tagline: {
      id: "Manajemen Memori Dinamis (malloc/realloc), Struct/Union, & Algoritma Sorting",
      en: "Dynamic Memory Management (malloc/realloc), Struct/Union, & Search Algorithms"
    },
    description: {
      id: "Aplikasi rekayasa perangkat lunak bahasa C berkinerja tinggi untuk pencatatan, pengurutan, dan analisis data observasi telemetri spesies biota laut dengan alokasi memori dinamis efisien.",
      en: "A high-performance C software system for logging, sorting, and analyzing marine biological observation telemetry with custom dynamic memory management."
    },
    tech: ["C Language", "Dynamic Memory", "Custom Unions", "File I/O", "Data Structures"],
    documentation: {
      id: {
        architecture: "Manajemen Memori Tingkat Rendah: Menggunakan array pointer dinamis (MarineRecord*) yang otomatis mengembang (realloc) saat kapasitas penuh. Memanfaatkan C Union (ExtraInfo) untuk menghemat ruang memori berdasarkan jenis spesies.",
        keyChallenges: [
          "Mencegah memory leak dan dangling pointer melalui pelacakan alokasi dan fungsi free() sistematis.",
          "Implementasi algoritma pengurutan cepat untuk katalog ribuan rekaman berdasarkan bobot dan ukuran.",
          "Format penyimpanan file biner dan teks persisten untuk membaca dan menulis riwayat observasi."
        ],
        deliverables: [
          "Source code C terstruktur (marine_tracker.c) tanpa memory leak.",
          "Command-line interface interaktif dengan validasi input yang ketat.",
          "Modul pelaporan statistik rata-rata berat dan sebaran populasi spesies."
        ],
        metrics: "Nol memory leak terverifikasi via memory audit tools"
      },
      en: {
        architecture: "Low-Level Memory Design: Dynamic pointer array (MarineRecord*) expanding dynamically (realloc) as logs scale. Leverages C Unions (ExtraInfo) to compress memory footprint dynamically conditioned on species type.",
        keyChallenges: [
          "Eliminating memory leaks and dangling pointers through systematic allocation tracking and deallocation cleanup.",
          "Developing optimized sorting and filtering routines across extensive telemetry records.",
          "Engineering persistent binary/text serialization routines for state save and reload."
        ],
        deliverables: [
          "Clean, leak-free modular C source code (marine_tracker.c).",
          "Interactive terminal CLI with robust input bounds checking.",
          "Statistical aggregation modules reporting population averages and anomaly flags."
        ],
        metrics: "Zero memory leaks verified under boundary testing"
      }
    }
  }
];

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("id");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabHealthAuth, setActiveTabHealthAuth] = useState<"flow" | "security" | "stack">("flow");
  const [expandedIndexProject, setExpandedIndexProject] = useState<string | null>("security-lab");
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

  // IntersectionObserver to dynamically highlight active nav section
  React.useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "capabilities", "experience", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard escape listener for modal
  React.useEffect(() => {
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
      
      {/* =========================================================================
          ARCHITECTURAL BACKGROUND — SUBTLE HAIRLINE GRID & VIGNETTE
         ========================================================================= */}
      <div className="fixed inset-0 bg-editorial-grid pointer-events-none opacity-25 z-0"></div>
      <div className="fixed inset-0 mask-radial-vignette pointer-events-none bg-gradient-to-b from-transparent via-[#090a0c]/60 to-[#090a0c] z-0"></div>

      {/* =========================================================================
          PERSISTENT EDITORIAL NAVIGATION
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#090a0c]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Identity Monogram & Affiliation */}
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
                  S1 TEKNIK KOMPUTER UI
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links with Active Scrollspy Highlight */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
            <a
              href="#about"
              className={`transition-colors ${
                activeSection === "about"
                  ? "text-emerald-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              01. {lang === "id" ? "Filosofi" : "About"}
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
              03. {lang === "id" ? "Kapabilitas Sistem" : "Capabilities"}
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

          {/* Utility Actions: Language Toggle & CV */}
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

            {/* Direct CV Download Link */}
            <a
              href={SOCIAL_LINKS.cvDownload}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] text-xs font-mono text-zinc-200 hover:text-white transition-colors"
            >
              <span>CV (PDF)</span>
              <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

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
              01. {lang === "id" ? "Filosofi Rekayasa" : "Engineering Philosophy"}
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
              03. {lang === "id" ? "Kapabilitas Sistem" : "Capabilities Matrix"}
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
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href={SOCIAL_LINKS.cvDownload}
                download
                className="text-xs text-emerald-400 font-semibold"
              >
                Unduh CV (PDF)
              </a>
              <span className="text-xs text-zinc-400 font-mono">IPK: 3.60 / 4.00</span>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT CONTAINER
         ========================================================================= */}
      <main className="pt-24 sm:pt-28 relative z-10">

        {/* =========================================================================
            SECTION 01: HERO MASTHEAD (ASYMMETRIC, CONFIDENT, AUTHENTIC)
           ========================================================================= */}
        <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 sm:pt-12 sm:pb-24 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (8 cols): Masthead Headline, Bio, & Action Triggers */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              {/* Availability & Location Beacon */}
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

              {/* Mobile Portrait Card (Visible on mobile/tablet, right after name for immediate visual connection) */}
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
                    <span className="text-zinc-400 block text-[9px]">DTE FTUI • IPK: 3.60 / 4.00</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph (Exact Indonesian wording from verified user image, text-justify) */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-6 sm:mb-8 text-justify">
                {lang === "id"
                  ? "Mahasiswa Teknik Komputer UI yang berfokus pada Rekayasa Perangkat Lunak, Keamanan Jaringan, Sistem Simulasi, dan Aplikasi Berbasis AI/Data. Memiliki pondasi kuat dalam memahami cara kerja perangkat keras dan arsitektur komputer, namun memilih mendedikasikan fokus utama pada perancangan logika sistem dan rekayasa software."
                  : "Computer Engineering undergraduate at Universitas Indonesia focusing on Software Engineering, Network Security, Simulation Systems, and AI/Data-driven Applications. Grounded with a strong foundation in hardware architecture, while dedicating primary focus to system logic design and software engineering."}
              </p>

              {/* Technical Domains Registry (Horizontal Lineage) */}
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
                  <span className="text-zinc-200 font-medium">Microscopic Simulation</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">DOMAIN 04</span>
                  <span className="text-zinc-200 font-medium">Network Hardening</span>
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

                {/* Secondary CTA: Download CV */}
                <a
                  href={SOCIAL_LINKS.cvDownload}
                  download
                  className="px-3.5 sm:px-4 py-2.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-zinc-200 hover:text-white font-mono text-xs font-medium transition-colors flex items-center gap-2"
                >
                  <span>CV (PDF)</span>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>

                {/* Copy Email Button with instant feedback */}
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
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub: github.com/rifqifadill"
                    className="p-2.5 rounded bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
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

            {/* Right Column (4 cols): Architectural Portrait Monograph Frame (Desktop) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end">
              <div className="w-full max-w-sm bg-[#0e1014] p-3 rounded border border-white/[0.09] shadow-2xl">
                
                {/* Clean Aspect-Ratio Portrait Container */}
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-zinc-900 border border-white/[0.05]">
                  <img
                    src="/profile.jpg"
                    alt="Muhamad Rifqi Fadil Itsnain - Computer Engineering UI"
                    className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/80 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Authentic Affiliation Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-[#090a0c]/90 backdrop-blur-sm border border-white/[0.1] font-mono text-[11px] text-zinc-300">
                    <span className="text-emerald-400 block font-semibold">UNIVERSITAS INDONESIA</span>
                    <span className="text-zinc-400 block text-[10px]">Departemen Teknik Elektro (DTE FTUI)</span>
                  </div>
                </div>

                {/* Academic Metadata Monograph */}
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span>NPM: 2406355306</span>
                  <span className="text-emerald-400 font-semibold">IPK: 3.60 / 4.00</span>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 02: ENGINEERING PHILOSOPHY & FOUNDATIONS (ABOUT)
           ========================================================================= */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Section Descriptor */}
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 block mb-2">
                01 // {lang === "id" ? "FILOSOFI REKAYASA" : "ENGINEERING FOUNDATION"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {lang === "id"
                  ? "Pemahaman Silikon untuk Software yang Efisien"
                  : "Silicon-Level Foundations for Resilient Software"}
              </h2>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-8">
              <div className="space-y-4 font-sans text-sm text-zinc-300 leading-relaxed mb-8 sm:mb-10">
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Menempuh pendidikan di S1 Teknik Komputer Universitas Indonesia memberi saya pemahaman komprehensif mengenai bagaimana silikon, arsitektur memori, dan instruksi CPU bekerja secara fisik. Pengetahuan tentang cara kerja komputasi pada tingkat terendah ini menjadi keunggulan mendasar dalam merancang arsitektur perangkat lunak yang berkinerja tinggi, hemat memori, dan terukur secara deterministik."
                    : "Studying Computer Engineering at Universitas Indonesia provides me with rigorous grounding in processor organizations, memory hierarchies, and digital silicon logic. Understanding computational physics from the silicon level upward grants me mechanical sympathy: engineering software architectures that minimize cache thrashing, allocate memory predictably, and scale reliably."}
                </p>
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Fokus rekayasa aktif saya terpusat pada pengembangan Fullstack Web & Microservices (TypeScript, Next.js 16, Python FastAPI), Sistem Simulasi & Aktuasi (Eclipse SUMO & TraCI), Pipeline Data Terdistribusi (Hadoop HDFS MapReduce), serta Pengujian Keamanan Jaringan (SQLi Lab, Header Hardening, Prepared Statements)."
                    : "My active technical focus centers on Fullstack Web & Microservices (TypeScript, Next.js 16, Python FastAPI), Traffic Microscopic Simulation (Eclipse SUMO & TraCI dynamic signal actuation), Distributed Data Pipelines (Hadoop HDFS MapReduce), and Network Security Hardening."}
                </p>
              </div>

              {/* Three Structural Principles (High-Density Spec Format) */}
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
                    02. DETERMINISTIC ACTUATION
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
                      ? "Menerapkan parameterization query, role-based boundary, dan prompt grounding pada RAG medis guna mengeliminasi halusinasi."
                      : "Implementing parameterized SQL queries, role-based boundary checks, and strict prompt grounding to eliminate hallucinations."}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 03: FEATURED ENGINEERING WORKS & SYSTEMS SHOWCASE
           ========================================================================= */}
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-b border-white/[0.07]">
          
          {/* Section Header & Architectural Filters */}
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
                { id: "all", label: lang === "id" ? "Semua (07)" : "All (07)" },
                { id: "ai_data", label: "AI & Data" },
                { id: "software_systems", label: lang === "id" ? "Sistem Software" : "Systems" },
                { id: "security", label: lang === "id" ? "Keamanan" : "Security" }
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
              BREAKOUT FEATURE 01: HEALTHAUTH (AI CLINICAL ASSISTANT & RAG)
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
                      <span className="font-mono text-xs text-zinc-400">• AI & Clinical Data</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      HealthAuth – AI Clinical Assistant & Burnout Prevention
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 italic mb-4">
                      {lang === "id"
                        ? "Sistem RAG Klinis Berbasis Regulasi & Model Prediksi Burnout Nakes"
                        : "Regulatory RAG Clinical System & Healthcare Worker Burnout Predictor"}
                    </p>

                    <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6 text-justify">
                      {lang === "id"
                        ? "Platform kecerdasan buatan terpadu yang memadukan Retrieval-Augmented Generation (RAG) untuk asisten nakes dengan pipeline machine learning untuk deteksi dini risiko kelelahan ekstrem. Menjawab tantangan beban kerja IGD melalui penelusuran SOP medis otomatis sub-800ms serta prediksi shift kerja berisiko."
                        : "An integrated AI platform combining Retrieval-Augmented Generation (RAG) for clinical staff with a machine learning pipeline for early burnout risk detection. Engineered sub-800ms query responses on hospital SOPs with strict prompt-grounding mitigating hallucinations."}
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
                      {["Next.js 16", "FastAPI", "FAISS RAG", "LangChain", "Supabase", "Scikit-Learn"].map((t) => (
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
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Inspector (Interactive Pipeline) */}
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
                          <span className="text-zinc-200 text-right">Random Forest (&gt;88% Acc)</span>
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
              BREAKOUT FEATURE 02: KATUP (MICROSCOPIC TRAFFIC SIMULATION)
             ===================================================================== */}
          {(activeCategory === "all" || activeCategory === "software_systems") && (
            <div className="mb-14 sm:mb-16 rounded border border-white/[0.1] bg-[#0c0e12] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Simulation Architecture Diagram & Data telemetry */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090a0c] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
                      // SIMULATION TOPOLOGY & ACTUATION
                    </span>

                    <div className="p-4 rounded bg-[#0c0e12] border border-white/[0.06] font-mono text-xs space-y-3 mb-4">
                      <div>
                        <span className="text-[10px] text-emerald-400 block uppercase">CORRIDOR NETWORK</span>
                        <p className="text-zinc-200 text-xs font-semibold">6 Urban Intersections Network</p>
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
                        Proyek Tim Rekayasa Sistem UI (2026)
                      </span>
                      <span className="font-mono text-xs text-zinc-400">• Traffic Simulation & TraCI</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      KATUP – Urban Traffic Congestion & Queue Dissipation Simulation
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 italic mb-4">
                      {lang === "id"
                        ? "Pemodelan Mikroskopik 6 Simpang Perkotaan dengan Aktuasi Sinyal Cerdas TraCI"
                        : "Microscopic 6-Intersection Simulation with TraCI Adaptive Traffic Light Actuation"}
                    </p>

                    <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6 text-justify">
                      {lang === "id"
                        ? "Simulasi mikroskopik komprehensif menggunakan Eclipse SUMO dan Python TraCI untuk menguji algoritma optimasi antrean kendaraan dan aktuasi lampu lalu lintas dinamis pada koridor perkotaan. Mencegah antrean meluber (spillback) dan menyinkronkan green wave antar simpang."
                        : "Comprehensive microscopic simulation in Eclipse SUMO instrumented via Python TraCI. Evaluated real-time queue dissipation algorithms and adaptive signal actuation across 6 urban bottleneck junctions, achieving verified delay reductions."}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["Eclipse SUMO", "Python (TraCI)", "Traffic Engineering", "Matplotlib", "Microscopic Modeling"].map((t) => (
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
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =====================================================================
              ENGINEERING PROJECT INDEX (FILTER-AWARE)
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

                              <div className="pt-2">
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
            
            {/* Layer 01: Low-Level Systems */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">LAYER 01</span>
                <h3 className="font-display text-sm font-bold text-white">Low-Level & Hardware</h3>
                <span className="font-mono text-[11px] text-zinc-400">Memory & Processor</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["C (Pointers, malloc/realloc, Structs)", "Java (OOP, Concurrency)", "MIPS Instruction Set", "Computer Organization", "Assembly Logic"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Pemahaman mendalam mengenai alokasi memori manual, pencegahan memory leak, siklus eksekusi instruksi CPU, dan representasi biner data."
                    : "Rigorous understanding of heap vs stack memory allocation, pointer arithmetic, CPU cache hierarchies, and instruction cycle latency."}
                </p>
              </div>
            </div>

            {/* Layer 02: Backend & Distributed Data */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">LAYER 02</span>
                <h3 className="font-display text-sm font-bold text-white">Backend & Distributed Data</h3>
                <span className="font-mono text-[11px] text-zinc-400">Microservices & Big Data</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Python (FastAPI, Flask)", "Node.js (Express 5)", "Apache Hadoop (HDFS, MapReduce)", "PostgreSQL (Neon)", "Prisma ORM", "REST API"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Perancangan backend modular, normalisasi database 3NF, connection pooling resilient, dan pemrosesan terdistribusi pada cluster HDFS."
                    : "Engineering asynchronous microservices, relational 3NF database modeling, resilient connection pooling, and distributed MapReduce analytics."}
                </p>
              </div>
            </div>

            {/* Layer 03: Simulation & Intelligent Systems */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">LAYER 03</span>
                <h3 className="font-display text-sm font-bold text-white">Simulation & Intelligent Systems</h3>
                <span className="font-mono text-[11px] text-zinc-400">Modeling & RAG</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Eclipse SUMO", "Python TraCI", "FAISS Vector Index", "LangChain", "Scikit-Learn", "Prompt Grounding"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Aktuasi sinyal dinamis pada simulasi mikroskopik serta perancangan sistem RAG teregulasi dengan pembatasan konteks ketat."
                    : "Dynamic traffic signal actuation via real-time loop feedback, combined with strict context-grounded medical RAG retrieval pipelines."}
                </p>
              </div>
            </div>

            {/* Layer 04: Security & Networking */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">LAYER 04</span>
                <h3 className="font-display text-sm font-bold text-white">Security & Networking</h3>
                <span className="font-mono text-[11px] text-zinc-400">Hardening & Defense</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["SQL Injection Defense", "Parameterized Queries", "Helmet Security Headers", "Express Rate Limiting", "Wireshark", "Network Protocols (TCP/IP)"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Eksploitasi dan remediasi kerentanan injection, mitigasi serangan Denial-of-Service, serta analisis frame data pada layer jaringan."
                    : "Hands-on injection remediation, HTTP defensive header hardening, DoS mitigation, and packet inspection across network protocols."}
                </p>
              </div>
            </div>

            {/* Layer 05: Modern Frontend Systems */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block">LAYER 05</span>
                <h3 className="font-display text-sm font-bold text-white">Frontend Engineering</h3>
                <span className="font-mono text-[11px] text-zinc-400">Interface & Systems</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["TypeScript", "React 19", "Next.js 16 (App Router)", "Tailwind CSS", "HTML5 Semantic", "Responsive Systems"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Pembangunan antarmuka performan, arsitektur komponen modular, optimasi rendering SSR/CSR, dan tipografi editorial presisi."
                    : "Engineering accessible, high-performance web applications with strict type-safety, clean modular components, and editorial UX polish."}
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 05: ACADEMIC & ORGANIZATIONAL RECORD (CHRONOLOGICAL STREAM)
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
                {/* Node beacon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-[#090a0c]"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className="text-emerald-400 font-semibold tracking-wider">2024 — SEKARANG</span>
                  <span className="text-zinc-400 text-[11px]">DEPOK, INDONESIA</span>
                </div>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                  S1 Teknik Komputer — Universitas Indonesia
                </h3>
                
                <p className="font-mono text-xs text-zinc-400 mb-3">
                  Fakultas Teknik, Departemen Teknik Elektro (DTE FTUI) • IPK: <strong className="text-emerald-400 font-semibold">3.60 / 4.00</strong>
                </p>
                
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 text-justify">
                  {lang === "id"
                    ? "Mendalami kurikulum inti rekayasa sistem komputer: Pemrograman Berorientasi Objek (Java), Struktur Data & Algoritma, Arsitektur & Organisasi Komputer (MIPS & Desain Memori), Pemrograman Terstruktur (C), Sistem Basis Data (PostgreSQL), Teknologi Big Data Terapan (Hadoop), dan Keamanan Jaringan."
                    : "Pursuing rigorous coursework across Computer Systems Engineering: Object-Oriented Programming (Java), Data Structures & Algorithms, Computer Architecture & Organization (MIPS), Structured Systems Programming (C), Relational Database Systems (PostgreSQL), Big Data Analytics (Hadoop HDFS), and Network Security."}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">NPM: 2406355306</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">GPA: 3.60 / 4.00</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">FTUI Kampus Depok</span>
                </div>
              </div>

              {/* Milestone 02: IME FTUI */}
              <div className="relative">
                {/* Node beacon */}
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
                {/* Node beacon */}
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

              {/* Action Buttons: Email Direct + CV */}
              <div className="flex flex-wrap items-center gap-3 mb-8 sm:mb-10">
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

                <a
                  href={SOCIAL_LINKS.cvDownload}
                  download
                  className="px-4 py-3 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-xs font-mono text-zinc-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Unduh CV (PDF)</span>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

              {/* Direct Channels List (Exact 'Instagram' clean label) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub // @rifqifadill</span>
                </a>
                <span className="text-zinc-700 hidden sm:inline">•</span>
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
          COLOPHON / FOOTER — CLEAN REFINED METADATA
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
          INTERACTIVE ARCHITECTURAL DOSSIER MODAL (STICKY HEADER & FOOTER)
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
            {/* Modal Header (Fixed / Non-scrolling) */}
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
              
              {/* Project Title & Stack summary */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {activeProjectModal.title[lang]}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {activeProjectModal.tech.join(" • ")}
                </p>
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

            {/* Modal Footer (Fixed / Non-scrolling) */}
            <div className="flex-shrink-0 p-4 sm:p-5 border-t border-white/[0.08] flex justify-end bg-[#0a0c0f]">
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
