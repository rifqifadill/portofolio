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
    badge: { id: "Final Project Pemrograman Berorientasi Objek", en: "Final Project Object-Oriented Programming" },
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
    badge: { id: "Final Project Pemrograman Terstruktur (C)", en: "Final Project Structured Programming (C)" },
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rifqiitsnain7@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  // Keyboard escape handler for modal
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
          BACKGROUND ARCHITECTURAL MESH (DISCIPLINED, SUBTLE & EDITORIAL)
         ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Architectural Hairline Grid */}
        <div className="absolute inset-0 bg-editorial-grid mask-radial-vignette opacity-70"></div>

        {/* Ambient Top Subtle Luma Atmosphere */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-white/[0.035] via-transparent to-transparent blur-[140px] pointer-events-none"></div>

        {/* Muted Restrained Signal Accent Tint */}
        <div className="absolute top-[28%] -left-64 w-[500px] h-[500px] bg-emerald-500/[0.025] blur-[160px] pointer-events-none"></div>
        <div className="absolute top-[65%] -right-64 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[160px] pointer-events-none"></div>

        {/* Top Edge Hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"></div>
      </div>

      {/* =========================================================================
          NAVIGATION BAR — MINIMALIST EDITORIAL POLISH
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#090a0c]/85 backdrop-blur-xl border-b border-white/[0.07] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Identity & Status */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-md bg-white/[0.05] border border-white/[0.12] flex items-center justify-center font-mono font-semibold text-xs text-zinc-100 group-hover:border-emerald-500/60 group-hover:text-emerald-300 transition-colors shadow-sm">
                RF
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  Muhamad Rifqi Fadil
                </span>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                  Teknik Komputer UI &apos;24
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-zinc-400">01</span>
              <span>{lang === "id" ? "Tentang" : "About"}</span>
            </a>
            <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-zinc-400">02</span>
              <span>{lang === "id" ? "Proyek" : "Projects"}</span>
            </a>
            <a href="#capabilities" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-zinc-400">03</span>
              <span>{lang === "id" ? "Keahlian" : "Capabilities"}</span>
            </a>
            <a href="#experience" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-zinc-400">04</span>
              <span>{lang === "id" ? "Pengalaman" : "Experience"}</span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-zinc-400">05</span>
              <span>{lang === "id" ? "Kontak" : "Contact"}</span>
            </a>
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-3">
            
            {/* Live Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-signal"></span>
              <span>AVAILABLE FOR INTERNSHIPS</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-md bg-white/[0.04] border border-white/[0.09] text-[11px] font-mono">
              <button
                onClick={() => setLang("id")}
                className={`px-2 py-0.5 rounded transition-all ${
                  lang === "id"
                    ? "bg-white/[0.12] text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Beralih ke Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded transition-all ${
                  lang === "en"
                    ? "bg-white/[0.12] text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Resume Button */}
            <a
              href={SOCIAL_LINKS.cvDownload}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Muhamad_Rifqi_Fadil_Itsnain.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono font-medium text-zinc-200 hover:text-white transition-all shadow-sm"
            >
              <span>CV (PDF)</span>
              <svg className="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden border-t border-white/[0.08] bg-[#090a0c]/95 backdrop-blur-2xl px-6 py-5 space-y-3 font-mono text-xs">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              01 // {lang === "id" ? "Tentang Profil" : "About Profile"}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              02 // {lang === "id" ? "Proyek Unggulan" : "Featured Projects"}
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              03 // {lang === "id" ? "Keahlian Teknis" : "Technical Capabilities"}
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              04 // {lang === "id" ? "Akademik & Organisasi" : "Academics & Leadership"}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-white"
            >
              05 // {lang === "id" ? "Kontak & Diskusi" : "Contact & Inquiries"}
            </a>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                AVAILABLE FOR INTERNSHIPS
              </span>
              <a
                href={SOCIAL_LINKS.cvDownload}
                download="CV_Muhamad_Rifqi_Fadil_Itsnain.pdf"
                className="text-xs text-zinc-200 underline font-sans"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">

        {/* =========================================================================
            SECTION 01: HERO — ASYMMETRIC EDITORIAL STATURE
           ========================================================================= */}
        <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-white/[0.07]">
          
          {/* Telemetry Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-signal"></span>
              <span>UNIVERSITAS INDONESIA // DEPT. TEKNIK ELEKTRO</span>
              <span className="text-zinc-600">/</span>
              <span className="text-emerald-400 font-semibold">GPA 3.60 / 4.00</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-zinc-400 text-[11px]">
              <span>JAKARTA, INDONESIA</span>
              <span className="text-zinc-600">•</span>
              <span>UTC+7 (WIB)</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 font-medium">COMPUTER ENGINEERING &apos;24</span>
            </div>
          </div>

          {/* Asymmetric Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (8 cols): Typography & Core Narrative */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                  <span>COMPUTER ENGINEERING UNDERGRADUATE</span>
                </p>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-[1.04] mb-6">
                  Muhamad Rifqi Fadil<br className="hidden sm:inline" />
                  <span className="text-zinc-400 font-normal"> Itsnain</span>
                </h1>

                <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8 text-justify">
                  {lang === "id"
                    ? "Mahasiswa Teknik Komputer Universitas Indonesia yang berfokus pada Rekayasa Perangkat Lunak, Arsitektur Sistem Data, Simulasi Terkomputasi, dan Keamanan Jaringan. Memahami cara kerja mesin hingga hierarki memori dan logika gerbang silikon, dengan komitmen utama merancang sistem software yang efisien, terukur, dan aman."
                    : "Computer Engineering undergraduate at Universitas Indonesia engineering scalable software systems, data pipelines, and network architecture. Grounded in CPU organization, memory hierarchies, and mechanical sympathy, dedicated to high-performance software craft."}
                </p>

                {/* Core Competency Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "Software Systems",
                    "Data Pipelines",
                    "Simulation & TraCI",
                    "Network Security",
                    "AI Grounding (RAG)",
                    "Low-Level C & Java OOP"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Actions & Direct Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]">
                
                {/* Primary Button */}
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-md bg-white text-[#090a0c] hover:bg-zinc-200 font-medium text-xs font-mono tracking-wide transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5"
                >
                  <span>{lang === "id" ? "Jelajahi Proyek" : "Explore Projects"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                {/* CV Download */}
                <a
                  href={SOCIAL_LINKS.cvDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_Muhamad_Rifqi_Fadil_Itsnain.pdf"
                  className="px-4 py-3 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs font-mono tracking-wide transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>CV (PDF)</span>
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-3 rounded-md bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white font-medium text-xs font-mono transition-all flex items-center gap-1.5"
                  title="Copy email address"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{copiedEmail ? (lang === "id" ? "Email Tersalin!" : "Copied!") : "Email"}</span>
                </button>

                {/* Social Quick Links */}
                <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub: github.com/rifqifadill"
                    className="p-2.5 rounded-md bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
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
                    className="p-2.5 rounded-md bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
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
                    className="p-2.5 rounded-md bg-white/[0.03] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column (4 cols): Architectural Portrait Frame & Telemetry */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-sm surface-card p-4 rounded-lg relative border border-white/[0.1] shadow-2xl">
                
                {/* Engineering Corner Markers */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</div>

                {/* Image Aspect Ratio Frame */}
                <div className="w-full aspect-[4/5] rounded bg-[#090a0c] border border-white/[0.08] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                  
                  {/* Subtle Grid Accent inside frame */}
                  <div className="absolute inset-0 bg-editorial-grid opacity-30"></div>
                  
                  {/* Avatar schematic circle */}
                  <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.15] flex items-center justify-center text-zinc-300 mb-4 shadow-inner group-hover:border-emerald-500/50 group-hover:scale-105 transition-all relative z-10">
                    <span className="font-mono text-xl font-bold text-zinc-200">RF</span>
                  </div>

                  <div className="relative z-10">
                    <div className="font-mono text-xs font-semibold text-zinc-200 mb-0.5">
                      Muhamad Rifqi Fadil
                    </div>
                    <div className="font-mono text-[11px] text-emerald-400 mb-2">
                      NPM 2406355306
                    </div>
                    <div className="text-[11px] text-zinc-400 leading-snug">
                      Teknik Komputer • Universitas Indonesia
                    </div>
                  </div>

                  {/* Photo Replacement Note */}
                  <div className="mt-4 pt-3 border-t border-white/[0.07] w-full text-[10px] font-mono text-zinc-400 relative z-10">
                    <code>public/profile.jpg</code> slot
                  </div>
                </div>

                {/* Structured Telemetry Data List */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.08] text-[11px] font-mono space-y-1.5 text-zinc-300">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">INSTITUTION</span>
                    <span className="text-zinc-200 font-medium">Universitas Indonesia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">PROGRAM</span>
                    <span className="text-zinc-200 font-medium">Teknik Komputer (S1)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">ACADEMIC STANDING</span>
                    <span className="text-emerald-400 font-medium">GPA 3.60 / 4.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">STATUS</span>
                    <span className="text-zinc-200 font-medium">Active Undergraduate</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-white/[0.07]">
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">3.60</div>
              <div className="font-mono text-xs text-zinc-400 mt-1 uppercase">Cumulative GPA (/4.00)</div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-sans">Dept. of Electrical Engineering UI</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">7+</div>
              <div className="font-mono text-xs text-zinc-400 mt-1 uppercase">Engineering Projects</div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-sans">Fullstack, AI RAG, SUMO, C Systems</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">Finalist</div>
              <div className="font-mono text-xs text-zinc-400 mt-1 uppercase">TechnoScape 2025</div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-sans">HealthAuth Clinical AI System</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">2025</div>
              <div className="font-mono text-xs text-zinc-400 mt-1 uppercase">IME FTUI Leadership</div>
              <div className="text-[11px] text-zinc-400 mt-0.5 font-sans">Staff Bidang RETRO DTE FTUI</div>
            </div>
          </div>

        </section>

        {/* =========================================================================
            SECTION 02: ABOUT — PERSONAL BRANDING & PHILOSOPHY
           ========================================================================= */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Header Column */}
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>01 // PERSPECTIVE & PHILOSOPHY</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                {lang === "id"
                  ? "Pondasi Hardware, Presisi Rekayasa Software."
                  : "Hardware Grounded, Software Driven."}
              </h2>
            </div>

            {/* Narrative & Pillars */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                <p>
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

              {/* Three Structural Principles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/[0.07]">
                
                <div className="surface-card p-4 rounded-md">
                  <div className="font-mono text-xs text-emerald-400 mb-1">01. MECHANICAL SYMPATHY</div>
                  <h3 className="font-display text-sm font-semibold text-white mb-2">Hardware-Aware Logic</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menghindari alokasi dinamis berlebih dan memahami siklus CPU untuk menjaga efisiensi kode sistem C dan Java."
                      : "Designing code structures with respect to CPU caching, memory locality, and resource lifecycle management."}
                  </p>
                </div>

                <div className="surface-card p-4 rounded-md">
                  <div className="font-mono text-xs text-emerald-400 mb-1">02. DETERMINISTIC SYSTEMS</div>
                  <h3 className="font-display text-sm font-semibold text-white mb-2">Dynamic Actuation</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menguji algoritma antrean perkotaan multi-simpang secara simulatif sebelum implementasi lapangan nyata."
                      : "Validating multi-junction queue reduction algorithms in microscopic simulation environments under load."}
                  </p>
                </div>

                <div className="surface-card p-4 rounded-md">
                  <div className="font-mono text-xs text-emerald-400 mb-1">03. AUDITED RELIABILITY</div>
                  <h3 className="font-display text-sm font-semibold text-white mb-2">Grounded Architectures</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                    {lang === "id"
                      ? "Mencegah halusinasi AI klinis via RAG berdasar SOP resmi, serta mitigasi injeksi SQL dengan prepared statements."
                      : "Mitigating generative hallucinations with prompt grounding and securing endpoints against injection vectors."}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 03: FEATURED PROJECTS — THE MAIN ATTRACTION
           ========================================================================= */}
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-b border-white/[0.07]">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>02 // SELECTED ENGINEERING WORKS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {lang === "id" ? "Karya Rekayasa Pilihan" : "Featured Engineering Portfolio"}
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-white/[0.03] p-1 rounded-lg border border-white/[0.07]">
              {[
                { id: "all", label: { id: "Semua (7)", en: "All (7)" } },
                { id: "ai_data", label: { id: "AI & Data (3)", en: "AI & Data (3)" } },
                { id: "software_systems", label: { id: "Software & Sistem (3)", en: "Systems (3)" } },
                { id: "security", label: { id: "Keamanan Siber (1)", en: "Security (1)" } },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as Category)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeCategory === tab.id
                      ? "bg-white/[0.12] text-white font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================================
              HERO PROJECT 01: HEALTHAUTH (FULL-WIDTH EDITORIAL SPREAD)
             ===================================================================== */}
          {(activeCategory === "all" || activeCategory === "ai_data") && (
            <div className="surface-card rounded-lg p-6 sm:p-8 mb-8 border border-white/[0.1] relative overflow-hidden group">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Narrative & Metadata (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="font-mono text-xs text-zinc-400">01 / 07</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 font-mono text-[11px] text-emerald-300 font-semibold">
                        {lang === "id" ? "Finalis Hackathon TechnoScape 2025" : "National Finalist TechnoScape 2025"}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">• AI & Clinical Data</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
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

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["Next.js 16", "FastAPI", "FAISS RAG", "LangChain", "Supabase", "Scikit-Learn"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]">
                    <button
                      onClick={() => setActiveProjectModal(projectsData[0])}
                      className="px-4 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === "id" ? "Buka Dokumentasi Proyek" : "View System Dossier"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right: Interactive Architectural Schematic Card (5 cols) */}
                <div className="lg:col-span-5 surface-elevated p-5 rounded-lg border border-white/[0.1]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs font-mono">
                    <span className="text-zinc-400 uppercase">SYSTEM SCHEMATIC</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setActiveTabHealthAuth("flow")}
                        className={`px-2 py-0.5 rounded text-[10px] ${activeTabHealthAuth === "flow" ? "bg-white/[0.12] text-white" : "text-zinc-400 hover:text-white"}`}
                      >
                        Flow
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
                      <div className="p-2.5 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-emerald-400 text-[10px] block">STAGE 01 // INGESTION</span>
                        <p className="text-zinc-300 text-[11px] leading-snug">Certified ER SOPs &amp; Medical PDFs &rarr; HuggingFace Vector Embeddings</p>
                      </div>
                      <div className="p-2.5 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-emerald-400 text-[10px] block">STAGE 02 // VECTORSTORE</span>
                        <p className="text-zinc-300 text-[11px] leading-snug">FAISS In-Memory Index &rarr; Top-K similarity chunking &lt;800ms</p>
                      </div>
                      <div className="p-2.5 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-emerald-400 text-[10px] block">STAGE 03 // CLIENT INTERACTION</span>
                        <p className="text-zinc-300 text-[11px] leading-snug">Next.js 16 Client App Router &harr; FastAPI Microservice</p>
                      </div>
                    </div>
                  )}

                  {activeTabHealthAuth === "security" && (
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="p-2.5 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-emerald-400 text-[10px] block">GUARDRAIL 01 // PROMPT GROUNDING</span>
                        <p className="text-zinc-300 text-[11px] leading-snug">Restricted retrieval window mitigating medical hallucinations</p>
                      </div>
                      <div className="p-2.5 rounded bg-[#090a0c] border border-white/[0.06]">
                        <span className="text-emerald-400 text-[10px] block">GUARDRAIL 02 // ROLE-BASED ACCESS</span>
                        <p className="text-zinc-300 text-[11px] leading-snug">Supabase auth separating clinical chat from admin telemetry</p>
                      </div>
                    </div>
                  )}

                  {activeTabHealthAuth === "stack" && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-400">Frontend</span>
                        <span className="text-zinc-200">Next.js 16, React 19, Tailwind</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-400">Microservice</span>
                        <span className="text-zinc-200">Python FastAPI</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-400">Vector Index</span>
                        <span className="text-zinc-200">FAISS &amp; LangChain</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.05]">
                        <span className="text-zinc-400">ML Pipeline</span>
                        <span className="text-zinc-200">Scikit-Learn Random Forest</span>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* =====================================================================
              HERO PROJECT 02: KATUP TRAFFIC SIMULATION (REVERSE SPREAD)
             ===================================================================== */}
          {(activeCategory === "all" || activeCategory === "software_systems") && (
            <div className="surface-card rounded-lg p-6 sm:p-8 mb-12 border border-white/[0.1] relative overflow-hidden group">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Architecture Telemetry (5 cols) */}
                <div className="lg:col-span-5 order-2 lg:order-1 surface-elevated p-5 rounded-lg border border-white/[0.1]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs font-mono">
                    <span className="text-zinc-400 uppercase">SIMULATION METRICS</span>
                    <span className="text-emerald-400 text-[11px]">ECLIPSE SUMO + TRACI</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded bg-[#090a0c] border border-white/[0.06]">
                      <span className="text-zinc-400 text-[10px] block">CORRIDOR MODEL</span>
                      <p className="text-zinc-200 text-xs font-semibold">6 Urban Intersections Network</p>
                      <p className="text-[11px] text-zinc-400 mt-1">Virtual induction loops observing lane queue depths in real-time.</p>
                    </div>

                    <div className="p-3 rounded bg-[#090a0c] border border-white/[0.06]">
                      <span className="text-emerald-400 text-[10px] block">BENCHMARK PERFORMANCE</span>
                      <p className="text-white text-base font-bold">-28% Transit Delay</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Statistically evaluated against fixed-time signal baseline.</p>
                    </div>

                    <div className="p-3 rounded bg-[#090a0c] border border-white/[0.06]">
                      <span className="text-zinc-400 text-[10px] block">CONTROLLER LOGIC</span>
                      <p className="text-zinc-200 text-[11px]">Python TraCI dynamic green interval actuation daemon</p>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative & Deliverables (7 cols) */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="font-mono text-xs text-zinc-400">02 / 07</span>
                      <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] font-mono text-[11px] text-zinc-300 font-medium">
                        UI Systems Engineering Team Project (2026)
                      </span>
                      <span className="font-mono text-xs text-zinc-400">• Traffic Micro-simulation</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
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
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs transition-colors"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* =====================================================================
              SECONDARY SHOWCASE: PROJECTS 03 - 07 (STRUCTURED EDITORIAL GRID)
             ===================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(2).map((p, idx) => (
              <div
                key={p.id}
                className="surface-card rounded-lg p-6 flex flex-col justify-between border border-white/[0.08] hover:border-white/[0.18] transition-all group"
              >
                <div>
                  {/* Card Meta Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-zinc-400">
                      0{idx + 3} / 07
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-zinc-300">
                      {p.badge[lang]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-emerald-300 transition-colors">
                    {p.title[lang]}
                  </h3>

                  {/* Tagline */}
                  <p className="font-sans text-xs text-zinc-400 italic mb-3">
                    {p.tagline[lang]}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-5 text-justify">
                    {p.description[lang]}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#090a0c] text-zinc-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Documentation Modal Trigger */}
                  <button
                    onClick={() => setActiveProjectModal(p)}
                    className="w-full py-2.5 rounded bg-white/[0.04] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-mono text-xs border border-white/[0.08] hover:border-white/[0.16] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{lang === "id" ? "Buka Dokumentasi Proyek" : "Inspect System Design"}</span>
                    <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================================
            SECTION 04: TECHNICAL CAPABILITIES & DOMAINS
           ========================================================================= */}
        <section id="capabilities" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-b border-white/[0.07]">
          
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>03 // TECHNICAL STACK & ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === "id" ? "Keahlian Teknis & Domain Rekayasa" : "Engineering Capabilities & Tooling"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Domain 01 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">01. LANGUAGES</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Core Systems</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Python</span> <span className="text-zinc-400 font-sans">FastAPI, TraCI, RAG</span></li>
                <li className="flex justify-between"><span>TypeScript / JS</span> <span className="text-zinc-400 font-sans">Next.js 16, Node, React</span></li>
                <li className="flex justify-between"><span>Java</span> <span className="text-zinc-400 font-sans">Pure OOP, State Serialization</span></li>
                <li className="flex justify-between"><span>C & C++</span> <span className="text-zinc-400 font-sans">Manual Memory, Pointers, Unions</span></li>
                <li className="flex justify-between"><span>SQL (PostgreSQL)</span> <span className="text-zinc-400 font-sans">3NF Normalization, Indexing</span></li>
                <li className="flex justify-between"><span>VHDL</span> <span className="text-zinc-400 font-sans">Hardware Logic Comprehension</span></li>
              </ul>
            </div>

            {/* Domain 02 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">02. SYSTEMS & SIMULATION</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Microscopic Models</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Eclipse SUMO</span> <span className="text-zinc-400 font-sans">Urban Corridor Modeling</span></li>
                <li className="flex justify-between"><span>Python TraCI</span> <span className="text-zinc-400 font-sans">Real-Time Dynamic Signal Actuation</span></li>
                <li className="flex justify-between"><span>Computer Architecture</span> <span className="text-zinc-400 font-sans">MIPS, Memory Hierarchies</span></li>
                <li className="flex justify-between"><span>POSIX / Linux Shell</span> <span className="text-zinc-400 font-sans">Bash, Process I/O, Daemons</span></li>
              </ul>
            </div>

            {/* Domain 03 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">03. WEB & BACKEND</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Production Grade</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Next.js 16</span> <span className="text-zinc-400 font-sans">App Router, SSR, Turbopack</span></li>
                <li className="flex justify-between"><span>React 19</span> <span className="text-zinc-400 font-sans">Concurrent UI, State Hooks</span></li>
                <li className="flex justify-between"><span>FastAPI</span> <span className="text-zinc-400 font-sans">Sub-800ms Microservices</span></li>
                <li className="flex justify-between"><span>Express 5</span> <span className="text-zinc-400 font-sans">Modular REST Controllers</span></li>
                <li className="flex justify-between"><span>Prisma ORM</span> <span className="text-zinc-400 font-sans">Type-Safe DB Migrations</span></li>
                <li className="flex justify-between"><span>Tailwind CSS</span> <span className="text-zinc-400 font-sans">Minimalist Responsive Layouts</span></li>
              </ul>
            </div>

            {/* Domain 04 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">04. DATA & AI PIPELINES</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Distributed & Vector</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Apache Hadoop HDFS</span> <span className="text-zinc-400 font-sans">Distributed Data Partitioning</span></li>
                <li className="flex justify-between"><span>MapReduce</span> <span className="text-zinc-400 font-sans">Custom Python Streaming</span></li>
                <li className="flex justify-between"><span>FAISS Vector Index</span> <span className="text-zinc-400 font-sans">Semantic Search Retrieval</span></li>
                <li className="flex justify-between"><span>LangChain & RAG</span> <span className="text-zinc-400 font-sans">Prompt Grounding & Chunking</span></li>
                <li className="flex justify-between"><span>Supabase & Neon</span> <span className="text-zinc-400 font-sans">Cloud Relational Telemetry</span></li>
              </ul>
            </div>

            {/* Domain 05 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">05. NETWORKS & SECURITY</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Hardening & Audits</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Wireshark</span> <span className="text-zinc-400 font-sans">Packet Inspection & Telemetry</span></li>
                <li className="flex justify-between"><span>SQLi Testbed Labs</span> <span className="text-zinc-400 font-sans">Penetration & Flag Validation</span></li>
                <li className="flex justify-between"><span>Helmet & Rate Limiter</span> <span className="text-zinc-400 font-sans">HTTP Hardening & DoS Defense</span></li>
                <li className="flex justify-between"><span>Prepared Statements</span> <span className="text-zinc-400 font-sans">Parameterized Query Pools</span></li>
              </ul>
            </div>

            {/* Domain 06 */}
            <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-emerald-400">06. TOOLING & METHODOLOGY</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Workflow Standards</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-mono">
                <li className="flex justify-between"><span>Git & GitHub</span> <span className="text-zinc-400 font-sans">Branching & Semantic Commits</span></li>
                <li className="flex justify-between"><span>Postman</span> <span className="text-zinc-400 font-sans">API Contract Testing</span></li>
                <li className="flex justify-between"><span>Figma</span> <span className="text-zinc-400 font-sans">System Design & Prototyping</span></li>
                <li className="flex justify-between"><span>Vercel & CI/CD</span> <span className="text-zinc-400 font-sans">Automated Cloud Builds</span></li>
              </ul>
            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 05: EXPERIENCE & ACADEMIC RECORD
           ========================================================================= */}
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-b border-white/[0.07]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>04 // TRACK RECORD & LEADERSHIP</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                {lang === "id" ? "Pendidikan & Pengalaman Organisasi" : "Academics & Campus Engagement"}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              
              {/* Academic Milestone */}
              <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-emerald-400 font-semibold">2024 — PRESENT</span>
                  <span className="font-mono text-[11px] text-zinc-400">UNIVERSITAS INDONESIA</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-0.5">
                  S1 Teknik Komputer (Computer Engineering)
                </h3>
                <p className="font-mono text-xs text-zinc-400 mb-3">
                  Fakultas Teknik, Universitas Indonesia (FTUI) • Cumulative GPA: <strong className="text-emerald-400">3.60 / 4.00</strong>
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3 text-justify">
                  {lang === "id"
                    ? "Mendalami kurikulum inti rekayasa sistem komputer: Pemrograman Berorientasi Objek (Java), Struktur Data & Algoritma, Arsitektur & Organisasi Komputer (MIPS & Desain Memori), Pemrograman Terstruktur (C), Sistem Basis Data (PostgreSQL), Teknologi Big Data Terapan (Hadoop), dan Keamanan Jaringan."
                    : "Pursuing rigorous coursework across Computer Systems Engineering: Object-Oriented Programming (Java), Data Structures & Algorithms, Computer Architecture & Organization (MIPS), Structured Systems Programming (C), Relational Database Systems (PostgreSQL), Big Data Analytics (Hadoop HDFS), and Network Security."}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["NPM: 2406355306", "GPA: 3.60 / 4.00", "FTUI Depok Campus"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#090a0c] border border-white/[0.06] font-mono text-[10px] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Organization 01: IME FTUI */}
              <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-zinc-300 bg-white/[0.05] px-2 py-0.5 rounded">2025</span>
                  <span className="font-mono text-[11px] text-zinc-400">DTE FTUI</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-0.5">
                  Ikatan Mahasiswa Elektro (IME FTUI)
                </h3>
                <p className="font-sans text-xs font-semibold text-emerald-400 mb-3">
                  {lang === "id" ? "Staff Bidang RETRO (Rohani Islam Elektro)" : "Staff of RETRO Division (Rohani Islam Elektro)"}
                </p>
                <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside text-justify">
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

              {/* Organization 02: PSB FTUI */}
              <div className="surface-card p-6 rounded-lg border border-white/[0.08]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-zinc-300 bg-white/[0.05] px-2 py-0.5 rounded">FEBRUARI 2025</span>
                  <span className="font-mono text-[11px] text-zinc-400">FTUI</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-0.5">
                  Pelepasan Sarjana Baru (PSB FTUI)
                </h3>
                <p className="font-sans text-xs font-semibold text-emerald-400 mb-3">
                  {lang === "id" ? "Divisi K3 (Keselamatan & Keamanan)" : "Safety & Security Division (K3)"}
                </p>
                <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside text-justify">
                  {lang === "id" ? (
                    <>
                      <li>Merumuskan rencana keselamatan darurat dan evakuasi venue acara Pelepasan Sarjana Baru FTUI.</li>
                      <li>Mengkoordinasikan manajemen kerumunan (crowd control) untuk 500+ wisudawan dan tamu undangan.</li>
                      <li>Memastikan seluruh rangkaian acara berlangsung tertib, aman, dan tanpa insiden kecelakaan.</li>
                    </>
                  ) : (
                    <>
                      <li>Formulated emergency evacuation procedures and venue safety inspections for FTUI commencement ceremonies.</li>
                      <li>Supervised crowd management protocols across auditorium checkpoints for 500+ graduates and guests.</li>
                      <li>Maintained zero safety incidents throughout the entire proceedings.</li>
                    </>
                  )}
                </ul>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================================
            SECTION 06: CONTACT & MEMORABLE CLOSING
           ========================================================================= */}
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
          
          <div className="surface-card rounded-lg p-8 sm:p-12 border border-white/[0.1] relative overflow-hidden">
            
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>05 // INITIATE DIALOGUE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                {lang === "id"
                  ? "Mari Membangun Sistem Rekayasa yang Berkualitas."
                  : "Let's Engineer High-Impact Systems."}
              </h2>

              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 text-justify">
                {lang === "id"
                  ? "Terbuka untuk peluang magang Software Engineering, Data Engineering, Network Security, dan riset sistem terkomputasi. Saya selalu siap mendiskusikan arsitektur sistem, tantangan kode, dan kolaborasi teknis."
                  : "Open to Software Engineering, Data Engineering, and Systems Research internships. Always glad to discuss systems architecture, low-level mechanics, and high-impact engineering collaboration."}
              </p>

              {/* Direct Channels Grid */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                
                {/* Primary Email CTA */}
                <a
                  href={SOCIAL_LINKS.email}
                  className="px-5 py-3 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-2 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>rifqiitsnain7@gmail.com</span>
                </a>

                {/* Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs transition-colors"
                >
                  {copiedEmail ? (lang === "id" ? "Email Tersalin!" : "Copied!") : (lang === "id" ? "Salin Email" : "Copy Email")}
                </button>

                {/* CV Button */}
                <a
                  href={SOCIAL_LINKS.cvDownload}
                  download="CV_Muhamad_Rifqi_Fadil_Itsnain.pdf"
                  className="px-4 py-3 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </a>

              </div>

              {/* Verified External Links Row */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub // @rifqifadill</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
                <span className="text-zinc-700">•</span>
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
          
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>MUHAMAD RIFQI FADIL ITSNAIN • 2026</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>ENGINEERED ON NEXT.JS 16 // REACT 19</span>
            <a href="#hero" className="hover:text-white transition-colors underline">
              {lang === "id" ? "Kembali ke Atas ↑" : "Back to Top ↑"}
            </a>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          DOCUMENTATION MODAL — SYSTEM SPECIFICATIONS & AUDIT DOSSIER
         ========================================================================= */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="max-w-2xl w-full surface-elevated border border-white/[0.14] rounded-lg p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Badge */}
            <div className="mb-2">
              <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                {activeProjectModal.badge[lang]}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">
              {activeProjectModal.title[lang]}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-6">
              {activeProjectModal.tech.join(" • ")}
            </p>

            {/* Architecture Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400"></span>
                <span>{lang === "id" ? "Arsitektur & Desain Sistem:" : "Technical Architecture & System Design:"}</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed p-4 rounded bg-[#090a0c] border border-white/[0.06] font-mono text-justify">
                {activeProjectModal.documentation[lang].architecture}
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-6">
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
            <div className="mb-6">
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
              <div className="p-3.5 rounded bg-[#090a0c] border border-emerald-500/30 text-xs text-zinc-300 mb-6 font-mono">
                <strong className="text-emerald-400">{lang === "id" ? "Tolok Ukur: " : "Benchmark: "}</strong>
                {activeProjectModal.documentation[lang].metrics}
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-white/[0.08]">
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
