"use client";

import React, { useState } from "react";

// =============================================================================
// KONFIGURASI MEDIA SOSIAL & INFORMASI KONTAK (MUDAH DISUNTING)
// =============================================================================
const SOCIAL_LINKS = {
  github: "https://github.com/rifqifadill",
  linkedin: "https://www.linkedin.com/in/muhamad-rifqi-fadil-itsnain-984512320",
  instagram: "https://instagram.com/rifqifadill",
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rifqiitsnain7@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#cbd5e1] selection:bg-[#c59a58]/30 selection:text-[#fdfbf7] relative overflow-hidden font-sans">
      
      {/* =========================================================================
          NATURAL ARCHITECTURAL AMBIENCE (WARM GOLDEN HOUR DIFFUSED LIGHTING)
         ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Architectural Hairline Grid */}
        <div className="absolute inset-0 bg-architect-grid mask-radial-hero opacity-60"></div>

        {/* Natural Diffuse Golden Hour Spotlight */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#e2b774]/12 via-[#c59a58]/6 to-transparent blur-[160px] rounded-full ambient-spotlight pointer-events-none"></div>

        {/* Warm Atmospheric Depth Glows */}
        <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-[#c59a58]/5 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[60%] -right-48 w-[600px] h-[600px] bg-[#e2b774]/5 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-[#c59a58]/6 blur-[190px] rounded-full pointer-events-none"></div>

        {/* Horizon Hairline Accent Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent"></div>
      </div>

      {/* NAVIGATION BAR - REFINED LUXURY GLASS */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0b0c10]/85 backdrop-blur-xl border-b border-[#d4af37]/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c59a58] to-[#996d2c] border border-[#f3dfba]/40 flex items-center justify-center font-serif font-bold text-xs text-[#0c0d12] shadow-sm group-hover:shadow-[0_0_15px_rgba(200,154,88,0.4)] transition-all">
              RF
            </div>
            <div>
              <span className="font-serif text-base font-bold text-[#fdfbf7] group-hover:text-[#f3dfba] transition-colors">
                Muhamad Rifqi Fadil Itsnain
              </span>
              <span className="hidden sm:inline text-xs text-[#d4af37]/80 font-sans ml-2">
                Teknik Komputer UI
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase text-slate-300">
            <a href="#about" className="hover:text-[#f3dfba] transition-colors font-sans">
              {lang === "id" ? "Tentang" : "About"}
            </a>
            <a href="#projects" className="hover:text-[#f3dfba] transition-colors font-sans">
              {lang === "id" ? "Proyek" : "Projects"}
            </a>
            <a href="#skills" className="hover:text-[#f3dfba] transition-colors font-sans">
              {lang === "id" ? "Keahlian" : "Skills"}
            </a>
            <a href="#leadership" className="hover:text-[#f3dfba] transition-colors font-sans">
              {lang === "id" ? "Organisasi" : "Leadership"}
            </a>
            <a href="#contact" className="hover:text-[#f3dfba] transition-colors font-sans">
              {lang === "id" ? "Kontak" : "Contact"}
            </a>
          </div>

          {/* Social Links & Language Switcher */}
          <div className="flex items-center gap-3">
            
            {/* Header Social Icons */}
            <div className="flex items-center gap-1.5 border-r border-[#d4af37]/20 pr-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#f3dfba] hover:bg-[#161722] transition-colors"
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
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#f3dfba] hover:bg-[#161722] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-[#14151f] border border-[#d4af37]/25 text-xs font-semibold">
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "id"
                    ? "bg-[#c59a58] text-[#0c0d12] font-bold shadow-[0_0_12px_rgba(197,154,88,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "en"
                    ? "bg-[#c59a58] text-[#0c0d12] font-bold shadow-[0_0_12px_rgba(197,154,88,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

          </div>

        </div>
      </nav>

      {/* HERO SECTION WITH ARCHITECTURAL PORTRAIT FRAME */}
      <section id="hero" className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Headline & Bio */}
            <div className="lg:col-span-8">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14151e]/90 backdrop-blur-md border border-[#d4af37]/30 text-xs text-[#e8c88e] mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2b774] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
                </span>
                <span className="font-sans font-medium">
                  {lang === "id"
                    ? "Teknik Komputer • Universitas Indonesia"
                    : "Computer Engineering • Universitas Indonesia"}
                </span>
                <span className="text-[#d4af37]/40">/</span>
                <span className="font-mono text-[#f3dfba] font-bold bg-[#1e202c] px-2 py-0.5 rounded border border-[#d4af37]/25">
                  GPA: 3.60 / 4.00
                </span>
              </div>

              {/* Grand Elegant Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fdfbf7] leading-[1.12] mb-6">
                Muhamad Rifqi Fadil{" "}
                <span className="bg-gradient-to-r from-[#fdfbf7] via-[#f3dfba] to-[#c59a58] bg-clip-text text-transparent italic font-normal">
                  Itsnain
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 text-justify">
                {lang === "id"
                  ? "Mahasiswa Teknik Komputer UI yang berfokus pada Rekayasa Perangkat Lunak, Keamanan Jaringan, Sistem Simulasi, dan Aplikasi Berbasis AI/Data. Memiliki pondasi kuat dalam memahami cara kerja perangkat keras dan arsitektur komputer, namun memilih mendedikasikan fokus utama pada perancangan logika sistem dan rekayasa software."
                  : "Computer Engineering undergraduate at Universitas Indonesia focusing on Software Engineering, Network Security, Simulation Systems, and AI/Data Applications. Possessing a solid foundational understanding of hardware and computer architectures, while dedicating primary focus to software logic and scalable systems."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c59a58] via-[#e2b774] to-[#b8863f] hover:from-[#e2b774] hover:to-[#c59a58] text-[#0c0d12] font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_4px_25px_rgba(200,154,88,0.28)] hover:shadow-[0_6px_35px_rgba(200,154,88,0.45)] hover:-translate-y-0.5"
                >
                  <span>{lang === "id" ? "Eksplorasi Karya Rekayasa" : "Explore Engineering Works"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                <a
                  href={SOCIAL_LINKS.cvDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_Muhamad_Rifqi_Fadil_Itsnain.pdf"
                  className="px-5 py-3.5 rounded-xl bg-[#14151f]/80 hover:bg-[#1d1f2e] text-[#f3dfba] hover:text-white font-medium text-xs border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-md hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-[#e2b774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>{lang === "id" ? "Unduh CV (PDF)" : "Download Curriculum Vitae"}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 rounded-xl bg-[#14151f]/60 hover:bg-[#1d1f2e] text-slate-300 hover:text-white font-medium text-xs border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-all flex items-center gap-1.5 backdrop-blur-md"
                  title="Copy email to clipboard"
                >
                  <svg className="w-3.5 h-3.5 text-[#e2b774]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{copiedEmail ? (lang === "id" ? "Email Tersalin!" : "Copied!") : "Copy Email"}</span>
                </button>
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-8 pt-8 border-t border-[#d4af37]/20 text-xs">
                <div>
                  <div className="font-serif text-3xl font-bold text-[#fdfbf7]">7+</div>
                  <div className="text-slate-400 mt-0.5 font-sans">
                    {lang === "id" ? "Karya Proyek Unggulan" : "Flagship Projects"}
                  </div>
                </div>
                <div className="border-l border-[#d4af37]/20 pl-8">
                  <div className="font-mono text-2xl font-bold text-[#e8c88e]">3.60</div>
                  <div className="text-slate-400 mt-0.5 font-sans">GPA (/4.00)</div>
                </div>
                <div className="border-l border-[#d4af37]/20 pl-8">
                  <div className="font-serif text-2xl font-bold bg-gradient-to-r from-[#f3dfba] to-[#c59a58] bg-clip-text text-transparent">
                    Finalist
                  </div>
                  <div className="text-slate-400 mt-0.5 font-sans">TechnoScape 2025</div>
                </div>
              </div>

            </div>

            {/* Right: ARCHITECTURAL PORTRAIT FRAME */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-64 sm:w-72 rounded-2xl glass-card p-4 flex flex-col items-center text-center shadow-2xl relative border-[#d4af37]/30">
                {/* Refined Corner Brackets */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#e2b774] rounded-tl-sm pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#e2b774] rounded-tr-sm pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#e2b774] rounded-bl-sm pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#e2b774] rounded-br-sm pointer-events-none"></div>

                {/* Photo Slot Container */}
                <div className="w-full aspect-[3/4] rounded-xl border border-dashed border-[#d4af37]/35 bg-[#0f1017]/90 flex flex-col items-center justify-center p-6 text-slate-400 group transition-all hover:border-[#e2b774] hover:bg-[#151622]">
                  <div className="w-16 h-16 rounded-full bg-[#1b1c28] border border-[#d4af37]/30 flex items-center justify-center text-[#e8c88e] mb-3 shadow-[0_0_15px_rgba(200,154,88,0.2)] group-hover:scale-105 group-hover:text-[#f3dfba] transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#fdfbf7] mb-1 font-serif">
                    {lang === "id" ? "Slot Foto Profil" : "Portrait Photograph"}
                  </span>
                  <p className="text-[11px] text-[#e8c88e]/80 leading-tight font-sans">
                    {lang === "id"
                      ? "Simpan foto Anda di public/profile.jpg"
                      : "Place your image at public/profile.jpg"}
                  </p>
                </div>

                {/* Subtitle Details under photo */}
                <div className="mt-3.5 w-full text-left pt-3 border-t border-[#d4af37]/20">
                  <div className="text-xs font-bold text-[#fdfbf7] font-serif">Muhamad Rifqi Fadil Itsnain</div>
                  <div className="text-[11px] font-mono text-[#e8c88e] mt-0.5">NPM: 2406355306</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-sans">Teknik Komputer • Universitas Indonesia</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION DIVIDER 01 // OVERVIEW & ACADEMICS
         ========================================================================= */}
      <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#12131b] border border-[#d4af37]/35 shadow-[0_2px_15px_rgba(0,0,0,0.5)] text-xs font-serif tracking-widest text-[#e8c88e] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>SECTION I — ACADEMIC FOUNDATION & PHILOSOPHY</span>
        </div>
      </div>

      {/* ABOUT ME SECTION - ELEVATED LUXURY GRAPHITE CONTAINER */}
      <section id="about" className="relative z-10 py-20 bg-[#111219]/90 border-y border-[#d4af37]/15 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"></span>
                <span>{lang === "id" ? "Fokus & Filosofi Rekayasa" : "Engineering Focus & Philosophy"}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7] mb-6">
                {lang === "id"
                  ? "Fokus pada Software, Didukung Pemahaman Hardware"
                  : "Software-Driven, Hardware-Grounded"}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans text-justify">
                <p>
                  {lang === "id"
                    ? "Di S1 Teknik Komputer Universitas Indonesia, saya mempelajari struktur internal CPU, arsitektur memori, serta logika gerbang silikon. Pemahaman mendalam tentang cara kerja mesin ini memberi saya keunggulan unik dalam merancang perangkat lunak yang efisien, aman, dan terukur secara komputasi."
                    : "Studying Computer Engineering at Universitas Indonesia has given me deep insights into CPU internal organizations, memory hierarchies, and digital silicon logic. This foundational understanding allows me to engineer software systems that are computationally efficient, secure, and built with mechanical sympathy."}
                </p>
                <p>
                  {lang === "id"
                    ? "Saya memfokuskan minat dan keahlian utama saya pada rekayasa perangkat lunak, sistem keamanan jaringan, simulasi terkomputasi (SUMO), serta pemrosesan data & kecerdasan buatan (AI/RAG)."
                    : "My active technical focus centers on software engineering, network security testbeds, traffic simulation (SUMO), and distributed data / AI (RAG) applications."}
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl glass-card border-[#d4af37]/25">
                <div className="text-xs font-serif font-bold text-[#e8c88e] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  {lang === "id" ? "Rekayasa Perangkat Lunak" : "Software Systems"}
                </div>
                <div className="text-xs text-slate-400 font-sans text-justify">
                  Fullstack TypeScript/Next.js, Python FastAPI, Java OOP, low-level C.
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border-[#d4af37]/25">
                <div className="text-xs font-serif font-bold text-[#f3dfba] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2b774]"></span>
                  {lang === "id" ? "Keamanan & Jaringan" : "Security & Networks"}
                </div>
                <div className="text-xs text-slate-400 font-sans text-justify">
                  SQLi lab testbeds, CTF validation, defensive API hardening, Wireshark audits.
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border-[#d4af37]/25">
                <div className="text-xs font-serif font-bold text-[#d4af37] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a58]"></span>
                  {lang === "id" ? "Simulasi & AI Data" : "Simulation & AI Data"}
                </div>
                <div className="text-xs text-slate-400 font-sans text-justify">
                  Eclipse SUMO TraCI actuation, FAISS RAG, distributed Hadoop MapReduce.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION DIVIDER 02 // SELECTED ENGINEERING PROJECTS
         ========================================================================= */}
      <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#12131b] border border-[#d4af37]/35 shadow-[0_2px_15px_rgba(0,0,0,0.5)] text-xs font-serif tracking-widest text-[#e8c88e] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>SECTION II — CURATED ENGINEERING WORKS</span>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header & Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"></span>
                <span>{lang === "id" ? "Katalog Proyek" : "Projects Portfolio"}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7]">
                {lang === "id" ? "Karya Rekayasa Pilihan" : "Featured Engineering Works"}
              </h2>
            </div>

            {/* Filter buttons - Champagne Gold Active Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: { id: "Semua Proyek", en: "All Projects" } },
                { id: "ai_data", label: { id: "AI & Data", en: "AI & Data" } },
                { id: "security", label: { id: "Keamanan Siber", en: "Cybersecurity" } },
                { id: "software_systems", label: { id: "Software & Sistem", en: "Software & Systems" } },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id as Category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === btn.id
                      ? "bg-gradient-to-r from-[#c59a58] to-[#e2b774] text-[#0c0d12] font-semibold shadow-[0_0_15px_rgba(200,154,88,0.35)]"
                      : "bg-[#14151e]/80 text-slate-300 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/45"
                  }`}
                >
                  {btn.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl glass-card transition-all duration-300 flex flex-col justify-between group shadow-xl border-[#d4af37]/20 hover:border-[#d4af37]/50"
              >
                <div>
                  {/* Badge */}
                  <div className="mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-serif italic font-medium bg-[#1a1b26] text-[#e8c88e] border border-[#d4af37]/30 shadow-sm">
                      {p.badge[lang]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#fdfbf7] mb-1.5 leading-snug group-hover:text-[#f3dfba] transition-colors">
                    {p.title[lang]}
                  </h3>

                  {/* Tagline */}
                  <p className="font-sans text-xs text-[#d4af37]/85 italic mb-3">
                    {p.tagline[lang]}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-300 leading-relaxed mb-5 text-justify">
                    {p.description[lang]}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0f1017] text-[#e8c88e]/90 border border-[#d4af37]/20 hover:border-[#d4af37]/45 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Documentation Modal Trigger */}
                  <button
                    onClick={() => setActiveProjectModal(p)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#181924] to-[#202230] hover:from-[#c59a58] hover:to-[#e2b774] text-[#f3dfba] hover:text-[#0c0d12] font-semibold text-xs border border-[#d4af37]/30 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{lang === "id" ? "Buka Dokumentasi Proyek" : "View Project Documentation"}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION DIVIDER 03 // TECHNICAL STACK
         ========================================================================= */}
      <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#12131b] border border-[#d4af37]/35 shadow-[0_2px_15px_rgba(0,0,0,0.5)] text-xs font-serif tracking-widest text-[#e8c88e] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>SECTION III — TECHNICAL REPERTOIRE & SYSTEMS</span>
        </div>
      </div>

      {/* SKILLS SECTION - ELEVATED LUXURY GRAPHITE CONTAINER */}
      <section id="skills" className="relative z-10 py-20 bg-[#111219]/90 border-y border-[#d4af37]/15 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"></span>
              <span>{lang === "id" ? "Keahlian Teknis" : "Technical Repertoire"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7]">
              {lang === "id" ? "Bahasa, Framework & Peralatan Rekayasa" : "Languages, Frameworks & Tooling"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Col 1 */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4af37]/20">
                <span className="font-serif font-bold text-xs text-[#d4af37]">I.</span>
                <h3 className="font-serif text-sm font-bold tracking-wide text-[#fdfbf7]">
                  {lang === "id" ? "Bahasa Pemrograman" : "Languages"}
                </h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 font-sans">
                <li><strong className="text-white">Python</strong> — TraCI, AI RAG, Data Pipelines</li>
                <li><strong className="text-white">TypeScript / JS</strong> — Next.js, Node.js, Express</li>
                <li><strong className="text-white">Java</strong> — OOP, Desktop Architecture</li>
                <li><strong className="text-white">C & C++</strong> — Systems Programming, Memory</li>
                <li><strong className="text-white">SQL</strong> — PostgreSQL, Schema Optimization</li>
                <li><strong className="text-white">VHDL</strong> — Hardware Logic Comprehension</li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4af37]/20">
                <span className="font-serif font-bold text-xs text-[#d4af37]">II.</span>
                <h3 className="font-serif text-sm font-bold tracking-wide text-[#fdfbf7]">
                  {lang === "id" ? "Web & Backend" : "Web & Backend"}
                </h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 font-sans">
                <li><strong className="text-white">Next.js 16</strong> — App Router, SSR</li>
                <li><strong className="text-white">React 19</strong> — Frontend Interface</li>
                <li><strong className="text-white">Express 5</strong> — REST APIs, Rate Limiting</li>
                <li><strong className="text-white">FastAPI</strong> — High-Performance Python API</li>
                <li><strong className="text-white">Prisma ORM</strong> — Type-safe Relational DB</li>
                <li><strong className="text-white">Tailwind CSS</strong> — Minimalist Layouts</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4af37]/20">
                <span className="font-serif font-bold text-xs text-[#d4af37]">III.</span>
                <h3 className="font-serif text-sm font-bold tracking-wide text-[#fdfbf7]">
                  {lang === "id" ? "Simulasi & Keamanan" : "Simulation & Security"}
                </h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 font-sans">
                <li><strong className="text-white">Eclipse SUMO</strong> — Traffic Micro-simulation</li>
                <li><strong className="text-white">Python TraCI</strong> — Live Simulation Control</li>
                <li><strong className="text-white">Wireshark</strong> — Packet Inspection & Auditing</li>
                <li><strong className="text-white">SQLi Exploitation</strong> — Vulnerability Testing</li>
                <li><strong className="text-white">Helmet & Sanitizer</strong> — API Hardening</li>
                <li><strong className="text-white">Computer Architecture</strong> — MIPS & Memory ISA</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d4af37]/20">
                <span className="font-serif font-bold text-xs text-[#d4af37]">IV.</span>
                <h3 className="font-serif text-sm font-bold tracking-wide text-[#fdfbf7]">
                  {lang === "id" ? "Basis Data & Tools" : "Databases & Tools"}
                </h3>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 font-sans">
                <li><strong className="text-white">PostgreSQL & Neon</strong> — Serverless Database</li>
                <li><strong className="text-white">FAISS Vectorstore</strong> — AI Embeddings Index</li>
                <li><strong className="text-white">Apache Hadoop HDFS</strong> — MapReduce Big Data</li>
                <li><strong className="text-white">Supabase</strong> — Cloud Database & Policies</li>
                <li><strong className="text-white">Git & GitHub</strong> — Version Control</li>
                <li><strong className="text-white">Figma & Postman</strong> — UI Design & API Testing</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION DIVIDER 04 // LEADERSHIP & IMPACT
         ========================================================================= */}
      <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#12131b] border border-[#d4af37]/35 shadow-[0_2px_15px_rgba(0,0,0,0.5)] text-xs font-serif tracking-widest text-[#e8c88e] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>SECTION IV — ORGANIZATIONAL LEADERSHIP & IMPACT</span>
        </div>
      </div>

      {/* LEADERSHIP & ACTIVITIES (IME FTUI - BIDANG RETRO) */}
      <section id="leadership" className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"></span>
              <span>{lang === "id" ? "Pengalaman Organisasi" : "Leadership & Campus Impact"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7]">
              {lang === "id" ? "Kontribusi Organisasi & Kepanitiaan" : "Organizational Leadership & Engagement"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* IME RETRO */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-serif text-[#e8c88e] bg-[#1a1b27] px-3 py-0.5 rounded border border-[#d4af37]/35 font-semibold shadow-sm">
                  2025
                </span>
                <span className="text-[11px] font-sans text-[#d4af37]/80">DTE FTUI</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#fdfbf7] mb-1">
                Ikatan Mahasiswa Elektro (IME FTUI)
              </h3>
              <p className="font-sans text-xs font-semibold text-[#f3dfba] mb-4">
                {lang === "id"
                  ? "Staff Bidang RETRO (Rohani Islam Elektro)"
                  : "RETRO Division Staff (Rohani Islam Elektro)"}
              </p>
              <ul className="font-sans text-xs text-slate-300 space-y-2 list-disc list-inside text-justify">
                {lang === "id" ? (
                  <>
                    <li>Mengelola dan mengoordinasikan program pembinaan karakter serta kegiatan kerohanian Islam di lingkungan Departemen Teknik Elektro UI.</li>
                    <li>Menyelenggarakan kajian berkala, kegiatan silaturahmi mahasiswa, dan bakti sosial kemasyarakatan.</li>
                    <li>Menyusun laporan pertanggungjawaban kegiatan secara transparan dan berkolaborasi aktif lintas bidang di IME FTUI.</li>
                  </>
                ) : (
                  <>
                    <li>Managed and coordinated Islamic fellowship initiatives and student character-building programs within the Department of Electrical Engineering UI.</li>
                    <li>Organized periodic community discussions, social outreach efforts, and student welfare gatherings.</li>
                    <li>Prepared transparent post-event activity accountability reports and maintained strong cross-divisional collaboration.</li>
                  </>
                )}
              </ul>
            </div>

            {/* PSB FTUI */}
            <div className="p-6 rounded-2xl glass-card border-[#d4af37]/20 hover:border-[#d4af37]/45">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-serif text-[#e8c88e] bg-[#1a1b27] px-3 py-0.5 rounded border border-[#d4af37]/35 font-semibold shadow-sm">
                  Februari 2025
                </span>
                <span className="text-[11px] font-sans text-[#d4af37]/80">FTUI</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#fdfbf7] mb-1">
                Pelepasan Sarjana Baru (PSB FTUI)
              </h3>
              <p className="font-sans text-xs font-semibold text-[#f3dfba] mb-4">
                {lang === "id" ? "Divisi K3 (Keselamatan & Keamanan)" : "Safety & Security Division"}
              </p>
              <ul className="font-sans text-xs text-slate-300 space-y-2 list-disc list-inside text-justify">
                {lang === "id" ? (
                  <>
                    <li>Merumuskan rencana keselamatan darurat dan evakuasi venue acara.</li>
                    <li>Mengkoordinasikan manajemen kerumunan (crowd control) untuk 500+ wisudawan dan tamu.</li>
                    <li>Memastikan seluruh rangkaian acara berlangsung tertib dan nihil kecelakaan.</li>
                  </>
                ) : (
                  <>
                    <li>Formulated emergency evacuation procedures and venue safety inspections.</li>
                    <li>Supervised crowd control protocols across auditorium checkpoints for 500+ guests.</li>
                    <li>Maintained an incident-free environment throughout the ceremonies.</li>
                  </>
                )}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION DIVIDER 05 // CONNECT & COLLABORATE
         ========================================================================= */}
      <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#12131b] border border-[#d4af37]/35 shadow-[0_2px_15px_rgba(0,0,0,0.5)] text-xs font-serif tracking-widest text-[#e8c88e] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
          <span>SECTION V — CORRESPONDENCE & DIRECT INQUIRIES</span>
        </div>
      </div>

      {/* CONTACT & SOCIAL SECTION */}
      <section id="contact" className="relative z-10 py-20 bg-[#0e0f16] border-t border-[#d4af37]/20 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7] mb-3">
              {lang === "id" ? "Hubungi Saya & Media Sosial" : "Get in Touch & Direct Inquiries"}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300">
              {lang === "id"
                ? "Terbuka untuk peluang magang, kolaborasi riset rekayasa perangkat lunak, keamanan siber, dan sistem terkomputasi."
                : "Open to engineering internships, software research collaborations, cybersecurity audits, and computational modeling."}
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            
            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#14151e]/90 hover:bg-[#c59a58] text-[#f3dfba] hover:text-[#0c0d12] border border-[#d4af37]/25 hover:border-transparent text-xs font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,154,88,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#14151e]/90 hover:bg-[#c59a58] text-[#f3dfba] hover:text-[#0c0d12] border border-[#d4af37]/25 hover:border-transparent text-xs font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,154,88,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#14151e]/90 hover:bg-[#c59a58] text-[#f3dfba] hover:text-[#0c0d12] border border-[#d4af37]/25 hover:border-transparent text-xs font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,154,88,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>

            {/* Email */}
            <a
              href={SOCIAL_LINKS.email}
              className="px-4 py-2.5 rounded-xl bg-[#14151e]/90 hover:bg-[#c59a58] text-[#f3dfba] hover:text-[#0c0d12] border border-[#d4af37]/25 hover:border-transparent text-xs font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,154,88,0.35)]"
            >
              <svg className="w-4 h-4 text-[#e2b774] group-hover:text-[#0c0d12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="px-4 py-2.5 rounded-xl bg-[#14151e]/90 hover:bg-[#c59a58] text-[#f3dfba] hover:text-[#0c0d12] border border-[#d4af37]/25 hover:border-transparent text-xs font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_20px_rgba(200,154,88,0.35)]"
            >
              <svg className="w-4 h-4 text-[#e2b774] group-hover:text-[#0c0d12]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{SOCIAL_LINKS.phone}</span>
            </a>

          </div>

          <div className="pt-8 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2026 Muhamad Rifqi Fadil Itsnain. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#hero" className="hover:text-[#f3dfba] transition-colors font-serif">
                {lang === "id" ? "Kembali ke Atas ↑" : "Back to Top ↑"}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* DOCUMENTATION MODAL - LUXURY ARCHITECTURAL DESIGN VIEW */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-[#07070b]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-[#12131c] border border-[#d4af37]/35 rounded-2xl p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.85)] overflow-y-auto max-h-[90vh]">
            
            {/* Top Champagne Beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e2b774] to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a1b28] hover:bg-[#25273a] text-[#e8c88e] hover:text-white transition-colors border border-[#d4af37]/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Badge */}
            <div className="mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-serif italic font-medium bg-[#1a1b28] text-[#e8c88e] border border-[#d4af37]/35">
                {activeProjectModal.badge[lang]}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl font-bold text-[#fdfbf7] mb-1.5">
              {activeProjectModal.title[lang]}
            </h3>
            <p className="text-xs font-mono text-[#d4af37]/80 mb-6">
              {activeProjectModal.tech.join(" • ")}
            </p>

            {/* Architecture Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8c88e] mb-2 font-serif flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                <span>{lang === "id" ? "Arsitektur & Spesifikasi Rekayasa:" : "Technical Architecture & System Design:"}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed p-4 rounded-xl bg-[#0b0c12] border border-[#d4af37]/20 font-sans text-justify">
                {activeProjectModal.documentation[lang].architecture}
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8c88e] mb-2 font-serif flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e2b774]"></span>
                <span>{lang === "id" ? "Tantangan Kritis & Solusi Teknis:" : "Key Technical Challenges Solved:"}</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside font-sans text-justify">
                {activeProjectModal.documentation[lang].keyChallenges.map((c, i) => (
                  <li key={i} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8c88e] mb-2 font-serif flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c59a58]"></span>
                <span>{lang === "id" ? "Deliverable & Hasil Proyek:" : "Deliverables & Artifacts:"}</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside font-sans text-justify">
                {activeProjectModal.documentation[lang].deliverables.map((d, i) => (
                  <li key={i} className="leading-relaxed">{d}</li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {activeProjectModal.documentation[lang].metrics && (
              <div className="p-3.5 rounded-xl bg-[#181926] border border-[#d4af37]/30 text-xs text-[#f3dfba] mb-6 font-serif">
                <strong className="text-white">{lang === "id" ? "Tolok Ukur: " : "Benchmark: "}</strong>
                {activeProjectModal.documentation[lang].metrics}
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-[#d4af37]/20">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#c59a58] to-[#e2b774] hover:from-[#e2b774] hover:to-[#c59a58] text-[#0c0d12] font-semibold text-xs transition-colors shadow-md"
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
