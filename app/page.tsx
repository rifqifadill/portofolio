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

interface ProjectDocumentFile {
  label: { id: string; en: string };
  url: string;
  meta: { id: string; en: string };
}

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
  image: string;
  imageCaption: { id: string; en: string };
  tech: string[];
  docs: ProjectDocumentFile[];
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
      id: "HealthAuth – Asisten Medis AI & Pemetaan Risiko Kesehatan",
      en: "HealthAuth – Smart Healthcare Financing & Clinical Triage Support System"
    },
    category: "ai_data",
    badge: { id: "Finalis Hackathon TechnoScape 2025", en: "Finalist TechnoScape Hackathon 2025" },
    tagline: {
      id: "Asisten SOP Medis Berbasis RAG, Prediksi Burnout, dan Dashboard Faskes",
      en: "Medical RAG Pipeline, Risk Prediction Models & Healthcare Analytics Dashboards"
    },
    description: {
      id: "Platform AI yang dibuat bersama tim Fantastic Four untuk Hackathon Nasional TechnoScape 2025. Memadukan asisten pencarian SOP darurat berbasis RAG dengan model machine learning untuk memprediksi risiko kelelahan (burnout) tenaga kesehatan dan potensi lonjakan penyakit di faskes.",
      en: "An integrated AI health platform developed for the TechnoScape National Hackathon 2025 (Team Fantastic Four). Combines Retrieval-Augmented Generation (RAG) for emergency clinical triage with machine learning pipelines predicting healthcare worker burnout and regional disease surges."
    },
    image: "/projects/healthauth.png",
    imageCaption: {
      id: "Confusion Matrix Model Prediksi Lonjakan Penyakit (Random Forest)",
      en: "Disease Surge Random Forest Model Confusion Matrix"
    },
    tech: ["Next.js 16", "Python FastAPI", "FAISS RAG", "Scikit-Learn", "Supabase", "Tailwind CSS"],
    docs: [
      {
        label: { id: "Proposal Hackathon (PDF)", en: "Hackathon Proposal (PDF)" },
        url: "/docs/healthauth-proposal.pdf",
        meta: { id: "PDF • 15 Hal", en: "PDF • 15 Pages" }
      }
    ],
    documentation: {
      id: {
        architecture: "Frontend Next.js 16 (App Router) memisahkan dashboard khusus nakes (asisten chat & catatan shift) dan pemerintah/admin (pantauan tren penyakit). Di sisi backend, Python FastAPI menjalankan pencarian vektor FAISS dari dokumen SOP resmi IGD, dipadukan dengan pipeline Scikit-Learn untuk membaca pola kelelahan kerja.",
        keyChallenges: [
          "Menjaga agar AI tidak asal mengarang jawaban medis dengan membatasi konteks hanya ke dokumen SOP resmi IGD.",
          "Menghubungkan model Random Forest prediksi burnout ke database Supabase secara langsung.",
          "Merancang dashboard dua peran yang nyaman dipakai oleh tenaga medis sekaligus pembuat kebijakan."
        ],
        deliverables: [
          "Layanan API FastAPI berbasis RAG dengan waktu pencarian di bawah 800ms.",
          "Model Random Forest untuk prediksi risiko burnout nakes dan potensi lonjakan penyakit.",
          "Dashboard web Next.js multi-role lengkap dengan sistem login Supabase."
        ],
        contribution: "Ikut merancang arsitektur sistem, mengintegrasikan database panduan medis untuk RAG, dan membangun tampilan dashboard pengguna.",
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
      id: "KATUP – Simulasi Multi-Agen untuk Mengurai Kemacetan Kota",
      en: "KATUP – Multi-Agent Urban Traffic Bottleneck & Queue Dissipation Simulator"
    },
    category: "software_systems",
    badge: { id: "Proyek Rekayasa Perangkat Lunak UI (2026)", en: "UI Systems Engineering Project (2026)" },
    tagline: {
      id: "Simulasi Lalu Lintas Mikroskopik & Pengaturan Lampu Adaptif lewat Python TraCI",
      en: "Microscopic Simulation & Adaptive Signal Control Instrumented via Python TraCI"
    },
    description: {
      id: "Simulasi lalu lintas di Eclipse SUMO yang dikendalikan langsung lewat Python TraCI untuk mengurangi macet akibat penyempitan lajur galian jalan. Sistem ini meniru cara kerja katup air dengan memadukan agen pengamat antrean, pengatur lampu di simpang hulu, dan pengarah rute alternatif.",
      en: "A comprehensive microscopic traffic simulator in Eclipse SUMO instrumented via Python TraCI. Mitigates upstream bottleneck spillback caused by urban infrastructure excavations by applying a fluid hydraulic valve principle across autonomous sensing, gating, and rerouting agents."
    },
    image: "/projects/katup.png",
    imageCaption: {
      id: "Tampilan Simulasi Lalu Lintas KATUP (Koridor 2 → 1 Lajur)",
      en: "KATUP Urban Flow Microscopic Simulation Interface"
    },
    tech: ["Eclipse SUMO", "Python (TraCI)", "Multi-Agent Systems", "Netconvert", "Traffic Engineering"],
    docs: [
      {
        label: { id: "Slide Presentasi (PDF)", en: "Presentation Deck (PDF)" },
        url: "/docs/katup-presentation.pdf",
        meta: { id: "PDF • 33 Slide", en: "PDF • 33 Slides" }
      },
      {
        label: { id: "Laporan Teknis Bab 1–5 (PDF)", en: "Engineering Report Ch. 1–5 (PDF)" },
        url: "/docs/katup-engineering-report.pdf",
        meta: { id: "PDF • 47 Hal", en: "PDF • 47 Pages" }
      }
    ],
    documentation: {
      id: {
        architecture: "Engine Eclipse SUMO terhubung secara real-time ke skrip Python katup_controller.py lewat soket TCP/IP TraCI. AgenPengamat membaca kepadatan kendaraan tiap detik, AgenKatup mengatur durasi lampu hijau di simpang sebelumnya agar antrean tidak meluber mengunci persimpangan, dan AgenRute mengarahkan kendaraan ke jalan alternatif.",
        keyChallenges: [
          "Mencegah antrean kendaraan mengunci persimpangan di belakangnya saat jalan menyempit menjadi 1 lajur.",
          "Mengubah durasi lampu lalu lintas secara dinamis tanpa melanggar batas aman waktu jeda kuning dan merah.",
          "Membuat generator jaringan jalan otomatis (build_network.py) untuk menghasilkan konfigurasi XML SUMO dengan cepat."
        ],
        deliverables: [
          "Sistem kendali multi-agen Python TraCI (katup_controller.py).",
          "Generator peta jaringan jalan multi-simpang lengkap dengan visualisasi Kali Ciliwung dan area galian.",
          "Laporan teknis 38 halaman (Bab 1–4) beserta draf rancangan kerja sama (MoU) dengan Dishub DKI Jakarta."
        ],
        contribution: "Membangun topologi jaringan jalan Tahap 1, merancang visual koridor jalan Tahap 5 (build_network.py), serta menulis laporan progres Bab 4 dan draf MoU.",
        metrics: "Mengurangi waktu tunda perjalanan kendaraan hingga 28% dibanding lampu lalu lintas statis"
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
      id: "Is There Anyone? – Game 2D Survival Horror",
      en: "Is There Anyone? – 2D Top-Down Survival Horror Exploration Game"
    },
    category: "software_systems",
    badge: { id: "Proyek Akhir PBO FTUI (Kelompok 4)", en: "OOP Final Project FTUI (Group 4)" },
    tagline: {
      id: "Game Desktop Java LibGDX, Spring Boot API, dan 8 Design Pattern OOP",
      en: "LibGDX Game Client, Spring Boot REST API & 8 Implemented OOP Design Patterns"
    },
    description: {
      id: "Game survival horor 2D top-down berlatar 'Desa Tumpang' yang dibuat dengan Java LibGDX dan backend Spring Boot. Game ini menerapkan 8 design pattern OOP, mekanik stamina dan bersembunyi, serta penyimpanan progres pemain secara online.",
      en: "A 2D top-down survival horror exploration game set in 'Desa Tumpang' engineered in Java LibGDX paired with a Spring Boot REST API backend. Implements 8 verified OOP design patterns, dynamic stamina and stealth mechanics, and persistent cloud save slot synchronization."
    },
    image: "/projects/is-there-anyone.jpg",
    imageCaption: {
      id: "Poster & Visual Game 2D Survival Horror Is There Anyone?",
      en: "Is There Anyone? 2D Top-Down Survival Horror Visual Showcase"
    },
    tech: ["Java 17", "LibGDX (LWJGL3)", "Spring Boot", "PostgreSQL (Neon)", "Gradle"],
    docs: [
      {
        label: { id: "Slide Presentasi & Arsitektur (PDF)", en: "Presentation & Architecture Deck (PDF)" },
        url: "/docs/is-there-anyone-presentation.pdf",
        meta: { id: "PDF • 19 Slide", en: "PDF • 19 Slides" }
      }
    ],
    documentation: {
      id: {
        architecture: "Client game berbasis Java LibGDX (LWJGL3) mengatur tampilan peta dari Tiled (.tmx), tabrakan objek, dan perpindahan layar permainan. Backend Spring Boot (port 9090) mengurus login akun serta sinkronisasi slot save game ke database PostgreSQL Neon.",
        keyChallenges: [
          "Menggabungkan 8 design pattern OOP (Command, State, Strategy, Singleton, Facade, Adapter, DTO, Template Method) supaya kode tetap rapi.",
          "Menjaga request HTTP antara game client LibGDX dan server Spring Boot berjalan mulus tanpa bikin game patah-patah.",
          "Memastikan status permainan lokal tetap sinkron dengan data yang tersimpan di server."
        ],
        deliverables: [
          "Aplikasi game desktop Java (.jar) yang siap dimainkan.",
          "Backend REST API Spring Boot untuk autentikasi akun dan penyimpanan slot save game.",
          "Slide presentasi teknis 19 halaman yang membahas arsitektur dan design pattern game."
        ],
        contribution: "Mengerjakan layar utama permainan (PlayScreen), halaman menu utama (MainMenuScreen), perpindahan antar layar, serta kontrol input pemain.",
        metrics: "8 Design Pattern OOP & Penyimpanan Save Slot Online"
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
      id: "Lapak UI – Marketplace & Forum Mahasiswa UI",
      en: "Lapak UI – Campus Marketplace & Student Community Platform"
    },
    category: "software_systems",
    badge: { id: "Proyek Sistem Basis Data FTUI (Kelompok 12)", en: "Database Systems Project FTUI (Group 12)" },
    tagline: {
      id: "Next.js 16, 13 Entitas PostgreSQL, Redis TTL Timer, & Realtime Chat Supabase",
      en: "Next.js 16, 13 PostgreSQL Entities, Redis TTL Timer & Supabase Realtime Chat"
    },
    description: {
      id: "Platform jual-beli barang bekas, jasa, dan forum diskusi khusus untuk mahasiswa Universitas Indonesia. Dilengkapi katalog filter fakultas, timer reservasi otomatis berbasis Redis (2–72 jam), chat real-time Supabase, notifikasi multi-kanal, serta sistem COD konfirmasi ganda.",
      en: "A dedicated campus marketplace and community platform built for Universitas Indonesia students. Features faculty-scoped catalog filtering, Redis TTL automated reservation timers (2–72h), Supabase realtime chat, multi-channel alerts, and Double-Confirmation COD verification."
    },
    image: "/projects/lapak-ui.png",
    imageCaption: {
      id: "Tampilan Katalog Marketplace & Form Reservasi COD Lapak UI",
      en: "Lapak UI Marketplace Catalog & COD Reservation Screens"
    },
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma ORM v7", "Redis (TTL)", "TailwindCSS v4"],
    docs: [
      {
        label: { id: "Slide Presentasi & Skema DB (PDF)", en: "Presentation & DB Schema (PDF)" },
        url: "/docs/lapak-ui-presentation.pdf",
        meta: { id: "PDF • 12 Slide", en: "PDF • 12 Slides" }
      }
    ],
    documentation: {
      id: {
        architecture: "Monorepo Next.js 16 (App Router) dengan PostgreSQL & Prisma ORM v7 (13 entitas ternormalisasi), Redis untuk timer kedaluwarsa reservasi (TTL 2–72 jam) tanpa polling cron ke database, serta realtime chat berbasis Supabase. Autentikasi diamankan dengan bcrypt (salt 12), cookie httpOnly JWT (jose), SameSite Strict, dan Edge middleware.",
        keyChallenges: [
          "Mengganti cron job PostgreSQL dengan Redis TTL expiry key agar pembatalan reservasi otomatis akurat hingga hitungan detik tanpa membebani database.",
          "Menjaga alur COD konfirmasi ganda serta integrasi notifikasi lintas kanal (In-App, Email, Telegram, dan Google Calendar).",
          "Menyatukan fitur marketplace, wishlist, rating/review, dan social feed komunitas mahasiswa dalam satu antarmuka yang konsisten."
        ],
        deliverables: [
          "Platform marketplace & komunitas fullstack Next.js 16 dengan dashboard admin, penjual, dan pembeli.",
          "13 entitas relasional PostgreSQL di Prisma v7 + integrasi Redis TTL reservation timer.",
          "Slide presentasi arsitektur & basis data Kelompok 12 Praktikum Sistem Basis Data FTUI."
        ],
        contribution: "Tim Frontend (bersama Yusri Sukur) yang mengerjakan halaman jelajah katalog & detail produk (/marketplace, /marketplace/[id]), manajemen jualan (/sell, /my-products), wishlist, serta alur reservasi dan riwayat transaksi.",
        metrics: "13 Entitas PostgreSQL 3NF, Timer Redis TTL (2–72 Jam), & 4 Kanal Notifikasi"
      },
      en: {
        architecture: "Next.js 16 App Router fullstack platform backed by PostgreSQL & Prisma ORM v7 (13 normalized entities), Redis TTL expiry keys (2–72h) for precision reservation cancellation without database polling, and Supabase realtime chat. Secured via bcrypt (salt-12), httpOnly JWT cookies (jose), SameSite Strict, and Edge middleware.",
        keyChallenges: [
          "Replacing imprecise PostgreSQL cron jobs with Redis TTL expiry keys for second-accurate reservation auto-cancellation without polling overhead.",
          "Orchestrating Double-Confirmation COD state transitions with 4-channel notifications (In-App, Email, Telegram, and Google Calendar).",
          "Unifying product/service listings, community social feeds, wishlists, and real-time buyer-seller messaging in one cohesive UX."
        ],
        deliverables: [
          "Fullstack Next.js 16 campus marketplace featuring Seller, Buyer, and Admin dashboards.",
          "13-entity PostgreSQL relational schema in Prisma v7 paired with Redis TTL reservation automation.",
          "Database & system architecture presentation deck for Group 12 Database Systems Lab FTUI."
        ],
        contribution: "Frontend Engineer (alongside Yusri Sukur) building catalog browsing & product details (/marketplace, /marketplace/[id]), seller listings (/sell, /my-products), wishlists, and reservation/transaction user flows.",
        metrics: "13 PostgreSQL 3NF Entities, Redis TTL Timer (2–72h) & 4 Notification Channels"
      }
    }
  },
  {
    id: "dad-pricing",
    title: {
      id: "Prediksi Harga Komputer – Pipeline Machine Learning Regresi (100K Data)",
      en: "Automated Computer Price Prediction – Regression ML Pipeline (100K Dataset)"
    },
    category: "ai_data",
    badge: { id: "Proyek Dasar Analitik Data UI (Kelompok 8)", en: "Data Analytics Project UI (Group 8)" },
    tagline: {
      id: "Metodologi CRISP-DM, Winsorization Outlier, Seleksi Fitur RFE, & Random Forest (R² 87,85%)",
      en: "CRISP-DM Pipeline, IQR Winsorization, Ridge RFE Selection & Random Forest (87.85% R²)"
    },
    description: {
      id: "Sistem prediksi harga komputer otomatis berbasis supervised machine learning memakai 100.000 data spesifikasi hardware (33 atribut, 0% missing values). Mengikuti 6 tahapan CRISP-DM mulai dari audit outlier IQR & Winsorization, feature engineering, seleksi fitur RFE, sampai evaluasi 5 algoritma regresi dengan Random Forest sebagai model terbaik.",
      en: "Automated computer hardware pricing pipeline built with supervised regression on a 100,000-row specification dataset (33 features, 0% missing values). Implements all 6 CRISP-DM phases including IQR Winsorization, encoding, Ridge RFE feature selection, and 5-fold cross-validated benchmarking across five regression models."
    },
    image: "/projects/dad-pricing.png",
    imageCaption: {
      id: "Scatter Plot Aktual vs Prediksi Harga Komputer (Random Forest R² 87,85%)",
      en: "Actual vs Predicted Hardware Price Scatter Plot (Random Forest)"
    },
    tech: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Ridge RFE", "GridSearchCV"],
    docs: [
      {
        label: { id: "Dek Analisis CRISP-DM & ML (PDF)", en: "CRISP-DM & ML Analytics Deck (PDF)" },
        url: "/docs/dad-computer-price-prediction.pdf",
        meta: { id: "PDF • 56 Slide", en: "PDF • 56 Slides" }
      }
    ],
    documentation: {
      id: {
        architecture: "Pipeline CRISP-DM lengkap pada 100.000 baris × 33 kolom (13 kategorikal & 20 numerikal): Outlier pada harga (976 data) dan RAM (60 data) dideteksi lewat IQR lalu ditangani dengan Winsorization tanpa menghapus baris. Setelah Price Binning, One-Hot, dan Ordinal Encoding (51 fitur), seleksi fitur Wrapper Method (Ridge Regression + RFE) memilih 15 fitur paling berpengaruh (df_wrapper.csv) sebelum dilatih pada 5 model dengan 5-Fold Cross Validation.",
        keyChallenges: [
          "Menangani distribusi harga yang miring ke kanan (skewness 0,98, kurtosis 4,89) serta nilai ekstrem tanpa menghilangkan data asli lewat teknik Winsorization.",
          "Menyaring 51 fitur hasil encoding untuk mencegah redundansi dan multikolinearitas menjadi 15 fitur inti paling optimal.",
          "Membandingkan secara objektif 5 algoritma regresi (KNN, Linear Regression, SVR, Decision Tree, Random Forest) via GridSearchCV dan analisis residual plot."
        ],
        deliverables: [
          "Dataset bersih hasil seleksi fitur optimal (df_wrapper.csv: 100.000 observasi × 15 fitur terbaik).",
          "Model Random Forest Regressor ter-tuning dengan performa terbaik: Test R² = 87,85% dan Test MAE = $157.13.",
          "Dek presentasi analitik lengkap 56 halaman mencakup EDA, heatmap korelasi, hexbin density, residual plot, dan diagnosis overfitting."
        ],
        contribution: "Anggota tim Kelompok Keren (bersama Marshal Aufa Diliyana, Yusri Sukur, dan Zahir) yang berkolaborasi menyusun pipeline CRISP-DM mulai dari eksplorasi data, preprocessing, feature selection, hingga evaluasi performa model.",
        metrics: "Random Forest Regressor: Test R² = 87,85% | Test MAE = $157.13 (100.000 data)"
      },
      en: {
        architecture: "End-to-end 6-phase CRISP-DM pipeline on 100,000 rows × 33 columns (13 categorical & 20 numerical): Outliers in price (976 rows) and RAM (60 rows) are clamped via IQR Winsorization to preserve distribution integrity. Price Binning, One-Hot, and Ordinal Encoding yield 51 features, later pruned via Ridge RFE wrapper selection to 15 top predictors (df_wrapper.csv) and evaluated across 5 models with 5-Fold CV.",
        keyChallenges: [
          "Handling right-skewed price distributions (skewness 0.98, kurtosis 4.89) and hardware extremes via Winsorization without dropping records.",
          "Eliminating feature redundancy and multicollinearity from 51 encoded features down to 15 high-signal predictors.",
          "Benchmarking KNN, Linear Regression, SVR, Decision Tree, and Random Forest under GridSearchCV, 5-fold CV, and residual diagnostics."
        ],
        deliverables: [
          "Feature-selected modeling dataset (df_wrapper.csv: 100,000 rows × 15 optimal features).",
          "Tuned Random Forest Regressor achieving Test R² = 87.85% and Test MAE = $157.13.",
          "Comprehensive 56-slide analytical report covering EDA, correlation heatmaps, hexbin density plots, residual plots, and overfitting diagnosis."
        ],
        contribution: "Collaborated within a 4-member team (Kelompok Keren alongside Marshal Aufa Diliyana, Yusri Sukur, and Zahir) across CRISP-DM data exploration, Winsorization preprocessing, RFE feature selection, and regression evaluation.",
        metrics: "Random Forest Regressor: Test R² = 87.85% | Test MAE = $157.13 (100K rows)"
      }
    }
  },
  {
    id: "big-data",
    title: {
      id: "Hadoop MapReduce – Pengolahan Data & Log Server Skala Besar",
      en: "Hadoop MapReduce – Distributed Big Data Analytics Pipeline"
    },
    category: "ai_data",
    badge: { id: "Praktikum Pemrosesan Data Terdistribusi FTUI", en: "Distributed Data Processing FTUI" },
    tagline: {
      id: "Optimasi Top-K dengan Bounded Min-Heap & Analisis Log Web di HDFS",
      en: "Top-K Bounded Min-Heap Pattern & Large-Scale Web Server Log Analytics on HDFS"
    },
    description: {
      id: "Implementasi pengolahan data terdistribusi menggunakan MapReduce di cluster Apache Hadoop 3.x dan HDFS. Memakai teknik bounded min-heap di memori Mapper untuk memangkas transfer data antar-node lebih dari 99% saat menyaring peringkat teratas maupun menganalisis log server.",
      en: "Design and implementation of distributed big data processing algorithms on Apache Hadoop 3.x and HDFS. Implements an in-memory bounded min-heap TreeMap pattern reducing network shuffle transfer overhead by over 99%, paired with high-throughput web server access log analytical pipelines."
    },
    image: "/projects/hadoop-mapreduce.png",
    imageCaption: {
      id: "Grafik Analisis Lalu Lintas Endpoint & Konsumsi Bandwidth Log Web Server",
      en: "Hadoop MapReduce Web Server Endpoint Hits & Bandwidth Analysis"
    },
    tech: ["Apache Hadoop 3.3.6", "HDFS", "Java MapReduce", "YARN", "Distributed Computing"],
    docs: [
      {
        label: { id: "Laporan Praktikum MapReduce (PDF)", en: "MapReduce Lab Reports (PDF)" },
        url: "/docs/hadoop-mapreduce-reports.pdf",
        meta: { id: "PDF • 15 Hal", en: "PDF • 15 Pages" }
      }
    ],
    documentation: {
      id: {
        architecture: "File data berukuran besar dipecah ke dalam blok HDFS. Di tahap Map, program menyimpan 10 data teratas sementara di struktur TreeMap (bounded min-heap) dalam memori lokal, sehingga hanya 10 kandidat terbaik yang dikirim lewat jaringan ke tahap Reduce.",
        keyChallenges: [
          "Mengurangi beban transfer jaringan di fase shuffle dengan menyaring 10 kandidat teratas langsung di memori lokal Mapper.",
          "Memperbaiki beberapa error sintaks pada konfigurasi Driver Hadoop Job dari panduan awal agar bisa dikompilasi ke JAR.",
          "Mencocokkan hasil hitungan log web server (metode HTTP, status respon, dan bandwidth) dengan pemrosesan biasa."
        ],
        deliverables: [
          "Kode program Java Mapper dan Reducer pola Top-K (top_10_Movies_Mapper.java, top_10_Movies_Reducer.java).",
          "Dua laporan praktikum lengkap: Pemrograman MapReduce (8 halaman) dan Analisis Use Case Lanjutan (7 halaman).",
          "Hasil eksekusi output cluster (part-r-00000) beserta grafik perbandingan performa cluster Hadoop."
        ],
        contribution: "Menulis langsung seluruh kode Java MapReduce, mengimplementasikan algoritma bounded min-heap TreeMap, serta menyusun kedua laporan analisis.",
        metrics: "Mengurangi lalu lintas transfer data fase shuffle lebih dari 99%"
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
  const [activeDocPreview, setActiveDocPreview] = useState<{ projectTitle: string; doc: ProjectDocumentFile } | null>(null);
  const [activeImageLightbox, setActiveImageLightbox] = useState<{ src: string; title: string; caption: string } | null>(null);
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
    <div className="min-h-screen bg-[#090a0c] text-[#e4e4e7] selection:bg-sky-500/20 selection:text-sky-200 relative overflow-hidden font-sans">
      
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
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
            >
              <div className="w-8 h-8 rounded bg-white/[0.05] border border-white/[0.12] flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-sky-400/60 transition-colors flex-shrink-0">
                RF
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-sm font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors truncate">
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
                  ? "text-sky-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              01. {lang === "id" ? "Tentang" : "About"}
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                activeSection === "projects"
                  ? "text-sky-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              02. {lang === "id" ? "Proyek" : "Projects"}
            </a>
            <a
              href="#capabilities"
              className={`transition-colors ${
                activeSection === "capabilities"
                  ? "text-sky-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              03. {lang === "id" ? "Keahlian" : "Capabilities"}
            </a>
            <a
              href="#experience"
              className={`transition-colors ${
                activeSection === "experience"
                  ? "text-sky-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              04. {lang === "id" ? "Pengalaman" : "Experience"}
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                activeSection === "contact"
                  ? "text-sky-400 font-semibold"
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
                    ? "bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30"
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
                    ? "bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30"
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
              className="md:hidden p-2 rounded text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
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
                activeSection === "about" ? "text-sky-400 font-semibold" : "text-zinc-300 hover:text-sky-400"
              }`}
            >
              01. {lang === "id" ? "Tentang Saya" : "About"}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "projects" ? "text-sky-400 font-semibold" : "text-zinc-300 hover:text-sky-400"
              }`}
            >
              02. {lang === "id" ? "Proyek" : "Projects"}
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "capabilities" ? "text-sky-400 font-semibold" : "text-zinc-300 hover:text-sky-400"
              }`}
            >
              03. {lang === "id" ? "Keahlian" : "Capabilities Matrix"}
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "experience" ? "text-sky-400 font-semibold" : "text-zinc-300 hover:text-sky-400"
              }`}
            >
              04. {lang === "id" ? "Pengalaman" : "Experience & Education"}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors ${
                activeSection === "contact" ? "text-sky-400 font-semibold" : "text-zinc-300 hover:text-sky-400"
              }`}
            >
              05. {lang === "id" ? "Kontak" : "Contact"}
            </a>
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
              <span className="text-sky-400 font-semibold tracking-wide">
                {lang === "id" ? "Terbuka untuk Magang" : "OPEN FOR INTERNSHIP"}
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
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                  {lang === "id"
                    ? "Terbuka untuk Magang // Depok & Jakarta"
                    : "Available for Software & Data Internships // Depok & Jakarta"}
                </span>
              </div>

              {/* Primary Name Display */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Muhamad Rifqi Fadil
                <span className="text-zinc-400 font-normal"> Itsnain</span>
              </h1>

              {/* Mobile Portrait Frame (Empty Slot Ready for Photo) */}
              <div className="lg:hidden my-4 max-w-xs mx-auto w-full bg-[#0e1014] p-2.5 rounded border border-white/[0.09] shadow-xl">
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-[#0a0c0f] border border-dashed border-white/[0.12] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                    {lang === "id" ? "Slot Foto Profil" : "Profile Photo Slot"}
                  </span>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded bg-[#090a0c]/95 backdrop-blur-sm border border-white/[0.1] font-mono text-[10px] text-zinc-300 text-left">
                    <span className="text-sky-400 block font-semibold">UNIVERSITAS INDONESIA</span>
                    <span className="text-zinc-400 block text-[9px]">DTE FTUI • IPK Kumulatif: 3.60 / 4.00</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph (Justified, Exact Authentic Content) */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-6 sm:mb-8 text-justify">
                {lang === "id"
                  ? "Mahasiswa Teknik Komputer UI yang fokus di bidang Software Engineering, Sistem Simulasi, Pengolahan Data, dan aplikasi berbasis AI. Punya dasar yang kuat soal cara kerja hardware dan arsitektur komputer, tapi sekarang lebih banyak mendalami perancangan logika sistem dan pengembangan software."
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
                  <span>{lang === "id" ? "Hubungi Saya" : "Get in Touch"}</span>
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

            {/* Right Column (4 cols): Desktop Portrait Monograph Frame (Empty Slot Ready for Photo) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end">
              <div className="w-full max-w-sm bg-[#0e1014] p-3 rounded border border-white/[0.09] shadow-2xl">
                
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-[#0a0c0f] border border-dashed border-white/[0.12] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 block">
                    {lang === "id" ? "Slot Foto Profil" : "Profile Photo Slot"}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 block mt-1">
                    4:5 Portrait Frame
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-[#090a0c]/95 backdrop-blur-sm border border-white/[0.1] font-mono text-[11px] text-zinc-300 text-left">
                    <span className="text-sky-400 block font-semibold">UNIVERSITAS INDONESIA</span>
                    <span className="text-zinc-400 block text-[10px]">Departemen Teknik Elektro (DTE FTUI)</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span>S1 TEKNIK KOMPUTER</span>
                  <span className="text-sky-400 font-semibold">IPK: 3.60 / 4.00</span>
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
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400/90 block mb-2">
                01 // {lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {lang === "id"
                  ? "Memahami Hardware untuk Membangun Software yang Andal"
                  : "Hardware-Aware Foundations for Modern Software Systems"}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4 font-sans text-sm text-zinc-300 leading-relaxed mb-8 sm:mb-10">
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Kuliah di S1 Teknik Komputer Universitas Indonesia melatih saya memahami komputer dari level paling dasar—mulai dari cara kerja prosesor, alur memori, sampai eksekusi instruksi. Bekal ini bikin saya terbiasa merancang software yang cepat, hemat memori, dan rapi."
                    : "Studying Computer Engineering at Universitas Indonesia grants me a core advantage: understanding how processors, memory hierarchies, and hardware instructions physically execute. This low-level foundation guides me in engineering software architectures that are performant, cache-conscious, and predictably scalable."}
                </p>
                <p className="text-justify leading-relaxed">
                  {lang === "id"
                    ? "Saat ini saya banyak mengerjakan proyek Web Fullstack & Microservices (TypeScript, Next.js 16, Python FastAPI), Simulasi Lalu Lintas (Eclipse SUMO & TraCI), pengolahan Big Data (Hadoop HDFS MapReduce), serta aplikasi berbasis Java (LibGDX & Spring Boot)."
                    : "My active technical focus centers on Fullstack Web & Microservices (TypeScript, Next.js 16, Python FastAPI), Traffic Microscopic Simulation (Eclipse SUMO & TraCI dynamic signal actuation), Distributed Data Pipelines (Hadoop HDFS MapReduce), and Object-Oriented Software Engineering (Java LibGDX)."}
                </p>
              </div>

              {/* Three Structural Principles */}
              <div className="border-t border-white/[0.08] divide-y divide-white/[0.06] font-mono text-xs">
                
                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-sky-400 font-semibold tracking-wider">
                    01. MECHANICAL SYMPATHY
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menulis kode yang sadar memori dan performa agar aplikasi di C maupun Java tetap ringan tanpa membebani CPU."
                      : "Designing code structures with respect to CPU caching, memory locality, and resource lifecycle management."}
                  </div>
                </div>

                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-sky-400 font-semibold tracking-wider">
                    02. DETERMINISTIC CONCURRENCY
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Menguji logika pengaturan lalu lintas langsung lewat simulasi real-time supaya hasilnya jelas dan terukur."
                      : "Verifying real-time queue dissipation algorithms through microscopic simulations under strict deterministic parameters."}
                  </div>
                </div>

                <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-baseline">
                  <div className="md:col-span-4 text-sky-400 font-semibold tracking-wider">
                    03. ZERO-TRUST RIGOR
                  </div>
                  <div className="md:col-span-8 text-zinc-300 font-sans text-xs leading-relaxed text-justify">
                    {lang === "id"
                      ? "Membatasi akses sesuai peran pengguna dan menjaga agar jawaban AI selalu berpatokan pada dokumen SOP resmi."
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
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400/90 block mb-2">
                02 // {lang === "id" ? "PROYEK PILIHAN" : "FEATURED PROJECTS"}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {lang === "id" ? "Proyek & Sistem yang Pernah Dibuat" : "Featured Engineering Projects"}
              </h2>
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono">
              {[
                { id: "all", label: lang === "id" ? "Semua (06)" : "All (06)" },
                { id: "ai_data", label: "AI & Data" },
                { id: "software_systems", label: lang === "id" ? "Sistem & Aplikasi" : "Systems" }
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
                      <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 font-mono text-[11px] text-sky-300 font-medium">
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
                        <span className="text-sky-400">Sub-800ms Semantic Query Latency</span>
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
                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.07]">
                    <button
                      onClick={() => setActiveProjectModal(projectsData[0])}
                      className="px-4 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === "id" ? "Lihat Detail Proyek" : "View Project Details"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {projectsData[0].docs.map((doc) => (
                      <button
                        key={doc.url}
                        onClick={() => setActiveDocPreview({ projectTitle: projectsData[0].title[lang], doc })}
                        className="px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] text-zinc-200 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{doc.label[lang]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Project Screenshot & Architectural Inspector */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090a0c] flex flex-col justify-between">
                  <div>
                    {/* Real Project Visual Preview */}
                    <div
                      onClick={() => setActiveImageLightbox({
                        src: projectsData[0].image,
                        title: projectsData[0].title[lang],
                        caption: projectsData[0].imageCaption[lang]
                      })}
                      className="group relative aspect-video w-full rounded overflow-hidden border border-white/[0.1] bg-[#0c0e12] mb-5 cursor-pointer"
                    >
                      <img
                        src={projectsData[0].image}
                        alt={projectsData[0].imageCaption[lang]}
                        className="w-full h-full object-contain bg-white p-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-[#090a0c]/85 backdrop-blur-sm border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-300">
                        <span className="truncate">{projectsData[0].imageCaption[lang]}</span>
                        <span className="text-sky-400 flex-shrink-0 ml-2">{lang === "id" ? "Perbesar ↗" : "Zoom ↗"}</span>
                      </div>
                    </div>

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
                          <span className="text-sky-400 text-[10px] block">STAGE 01 // INGESTION</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Certified ER SOPs &amp; Medical PDFs &rarr; HuggingFace Vector Embeddings</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-sky-400 text-[10px] block">STAGE 02 // VECTORSTORE</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">FAISS In-Memory Index &rarr; Top-K similarity chunking &lt;800ms</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-sky-400 text-[10px] block">STAGE 03 // CLIENT INTERACTION</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Next.js 16 Client App Router &harr; FastAPI Microservice</p>
                        </div>
                      </div>
                    )}

                    {activeTabHealthAuth === "security" && (
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-sky-400 text-[10px] block">GUARDRAIL 01 // PROMPT GROUNDING</span>
                          <p className="text-zinc-300 text-[11px] leading-snug">Restricted retrieval window mitigating medical hallucinations</p>
                        </div>
                        <div className="p-2.5 rounded bg-[#0c0e12] border border-white/[0.06]">
                          <span className="text-sky-400 text-[10px] block">GUARDRAIL 02 // ROLE-BASED ACCESS</span>
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
                    <span className="text-sky-400 font-semibold">TECHNOSCAPE 2025</span>
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
                
                {/* Left Column: Simulation Screenshot & Telemetry */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090a0c] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
                  <div>
                    {/* Real Simulation UI Screenshot */}
                    <div
                      onClick={() => setActiveImageLightbox({
                        src: projectsData[1].image,
                        title: projectsData[1].title[lang],
                        caption: projectsData[1].imageCaption[lang]
                      })}
                      className="group relative aspect-video w-full rounded overflow-hidden border border-white/[0.1] bg-[#0c0e12] mb-5 cursor-pointer"
                    >
                      <img
                        src={projectsData[1].image}
                        alt={projectsData[1].imageCaption[lang]}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-[#090a0c]/85 backdrop-blur-sm border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-300">
                        <span className="truncate">{projectsData[1].imageCaption[lang]}</span>
                        <span className="text-sky-400 flex-shrink-0 ml-2">{lang === "id" ? "Perbesar ↗" : "Zoom ↗"}</span>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-3">
                      // SIMULATION TOPOLOGY & ACTUATION
                    </span>

                    <div className="p-4 rounded bg-[#0c0e12] border border-white/[0.06] font-mono text-xs space-y-3 mb-4">
                      <div>
                        <span className="text-[10px] text-sky-400 block uppercase">CORRIDOR NETWORK</span>
                        <p className="text-zinc-200 text-xs font-semibold">Urban Multi-Intersection Network</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Virtual induction loops observing lane queue depths in 1-second intervals</p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06]">
                        <span className="text-[10px] text-sky-400 block uppercase">MEASURED DELAY OUTCOME</span>
                        <p className="text-white text-base font-bold">-28% Transit Delay</p>
                        <p className="text-[11px] text-zinc-400 mt-0.5">Statistically evaluated against fixed-time signal baseline</p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06]">
                        <span className="text-[10px] text-sky-400 block uppercase">SOCKET CONTROLLER</span>
                        <p className="text-zinc-200 text-[11px]">Python TraCI dynamic green interval actuation daemon</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span>SIMULATOR: ECLIPSE SUMO</span>
                    <span className="text-sky-400 font-semibold">UI SYSTEMS '26</span>
                  </div>
                </div>

                {/* Right Column: Narrative, Problem Statement & Dossier Trigger */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 font-mono text-[11px] text-sky-300 font-medium">
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

                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.07]">
                    <button
                      onClick={() => setActiveProjectModal(projectsData[1])}
                      className="px-4 py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === "id" ? "Lihat Detail Proyek" : "View Project Details"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {projectsData[1].docs.map((doc) => (
                      <button
                        key={doc.url}
                        onClick={() => setActiveDocPreview({ projectTitle: projectsData[1].title[lang], doc })}
                        className="px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] text-zinc-200 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{doc.label[lang]}</span>
                      </button>
                    ))}
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
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
                    // {lang === "id" ? "DAFTAR PROYEK LAINNYA" : "MORE PROJECTS"}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    ({indexedProjects.length} {lang === "id" ? "proyek" : "entries"})
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400 hidden sm:inline-block">
                  {lang === "id" ? "Klik baris untuk melihat detail proyek" : "Click row to expand project details"}
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
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <span className="font-mono text-xs text-sky-400/90 font-bold w-6 flex-shrink-0">
                            0{idx + 3}.
                          </span>
                          <div className="w-20 sm:w-28 aspect-video rounded overflow-hidden border border-white/[0.1] bg-[#0c0e12] flex-shrink-0">
                            <img
                              src={p.image}
                              alt={p.title[lang]}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h4 className="font-display text-base sm:text-lg font-bold text-white hover:text-sky-300 transition-colors">
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
                              {/* Real Project Visual Showcase */}
                              <div
                                onClick={() => setActiveImageLightbox({
                                  src: p.image,
                                  title: p.title[lang],
                                  caption: p.imageCaption[lang]
                                })}
                                className="group relative aspect-video w-full rounded overflow-hidden border border-white/[0.1] bg-[#0c0e12] cursor-pointer"
                              >
                                <img
                                  src={p.image}
                                  alt={p.imageCaption[lang]}
                                  className="w-full h-full object-contain bg-[#0c0e12] transition-transform duration-300 group-hover:scale-[1.01]"
                                />
                                <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-[#090a0c]/85 backdrop-blur-sm border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-300">
                                  <span className="truncate">{p.imageCaption[lang]}</span>
                                  <span className="text-sky-400 flex-shrink-0 ml-2">{lang === "id" ? "Klik untuk perbesar ↗" : "Click to zoom ↗"}</span>
                                </div>
                              </div>

                              <div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400 block mb-1">
                                  {lang === "id" ? "TENTANG PROYEK" : "PROJECT OVERVIEW"}
                                </span>
                                <p className="font-sans text-xs text-zinc-300 leading-relaxed text-justify">
                                  {p.description[lang]}
                                </p>
                              </div>

                              <div className="p-3.5 rounded bg-[#0d0f14] border border-white/[0.06] font-mono text-xs">
                                <span className="text-[10px] text-zinc-400 uppercase block mb-1">
                                  {lang === "id" ? "CARA KERJA & ARSITEKTUR" : "SYSTEM ARCHITECTURE"}
                                </span>
                                <p className="text-zinc-300 text-[11px] leading-relaxed text-justify">
                                  {p.documentation[lang].architecture}
                                </p>
                              </div>

                              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] font-mono text-xs">
                                <span className="text-[10px] text-sky-400 uppercase block mb-1">
                                  {lang === "id" ? "PERAN & KONTRIBUSI SAYA" : "MY CONTRIBUTION"}
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
                                <div className="p-2.5 rounded bg-sky-500/[0.06] border border-sky-500/20">
                                  <span className="text-[9px] text-sky-400 uppercase block font-semibold">HASIL & PENCAPAIAN</span>
                                  <span className="text-zinc-200 text-[11px]">{p.documentation[lang].metrics}</span>
                                </div>
                              )}

                              <div className="pt-2 space-y-2">
                                <button
                                  onClick={() => setActiveProjectModal(p)}
                                  className="w-full py-2 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                                >
                                  <span>{lang === "id" ? "Lihat Detail Proyek" : "View Project Details"}</span>
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                {p.docs.map((doc) => (
                                  <button
                                    key={doc.url}
                                    onClick={() => setActiveDocPreview({ projectTitle: p.title[lang], doc })}
                                    className="w-full py-2 px-3 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] font-mono text-xs text-zinc-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                                  >
                                    <svg className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="truncate">{doc.label[lang]}</span>
                                  </button>
                                ))}


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
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400/90 block mb-2">
                03 // {lang === "id" ? "SKILL & TEKNOLOGI" : "TECHNICAL SKILLS"}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {lang === "id" ? "Teknologi yang Biasa Dipakai" : "Technical Toolchain"}
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-sm text-justify">
              {lang === "id"
                ? "Mulai dari bahasa pemrograman dasar sampai framework web modern dan pengolahan big data."
                : "Structured hierarchically from silicon-level hardware logic up to distributed web infrastructure."}
            </p>
          </div>

          {/* Unified Engineering Matrix (Hierarchical Spec Rows) */}
          <div className="border border-white/[0.08] divide-y divide-white/[0.06] rounded bg-[#0b0d11]">
            
            {/* Layer 01: Programming Languages */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 01</span>
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
                    ? "Terbiasa mengelola memori manual di C, konsep OOP di Java, scripting pengolahan data di Python, dan pengembangan web dengan TypeScript."
                    : "Rigorous command of low-level manual memory allocation (C), robust object-oriented architecture (Java), data scripting (Python), and type-safe systems (TypeScript)."}
                </p>
              </div>
            </div>

            {/* Layer 02: Frontend & Backend Development */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 02</span>
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
                    ? "Membangun aplikasi web fullstack dengan Next.js 16 dan React, API layanan cepat dengan FastAPI maupun Express, serta backend Spring Boot."
                    : "Fullstack Next.js 16 monorepos, high-throughput asynchronous FastAPI microservices, Express 5 REST APIs, and Spring Boot cloud services."}
                </p>
              </div>
            </div>

            {/* Layer 03: Databases & Data Engineering */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 03</span>
                <h3 className="font-display text-sm font-bold text-white">Databases &amp; Big Data</h3>
                <span className="font-mono text-[11px] text-zinc-400">Storage &amp; Analytics</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["PostgreSQL (Neon Serverless)", "Prisma ORM v7", "Redis (TTL Cache)", "Apache Hadoop 3.3.6", "HDFS & MapReduce", "Supabase"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Merancang struktur tabel database relasional 3NF di PostgreSQL & Prisma ORM, hingga pemrosesan data terdistribusi di Hadoop MapReduce."
                    : "Relational 3NF database normalization, serverless connection pooling, Prisma schema migrations, and distributed Hadoop HDFS analytical computation."}
                </p>
              </div>
            </div>

            {/* Layer 04: AI & Intelligent Systems */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 04</span>
                <h3 className="font-display text-sm font-bold text-white">AI &amp; Simulation</h3>
                <span className="font-mono text-[11px] text-zinc-400">Microscopic &amp; RAG</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 font-mono text-xs">
                  {["Eclipse SUMO", "Python TraCI", "FAISS Vector Index", "Scikit-Learn & Pandas", "CRISP-DM & RFE", "Prompt Grounding (RAG)"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-zinc-200 text-[11px] sm:text-xs">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-zinc-400 text-justify">
                  {lang === "id"
                    ? "Mengembangkan simulasi pengaturan lalu lintas adaptif berbasis SUMO & TraCI, serta asisten pencarian dokumen RAG berbasis FAISS."
                    : "Multi-agent dynamic traffic signal actuation via real-time loop feedback in SUMO, and strict context-grounded FAISS RAG retrieval pipelines."}
                </p>
              </div>
            </div>

            {/* Layer 05: Networking & Cybersecurity */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 05</span>
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
                    ? "Pemrograman soket TCP/IP real-time, analisis paket jaringan dengan Wireshark, serta penerapan rate limiting dan manajemen sesi web yang aman."
                    : "Real-time TCP/IP socket programming, network protocol packet analysis via Wireshark, DoS mitigation via IP rate limiters, and secure web session management."}
                </p>
              </div>
            </div>

            {/* Layer 06: Development Tools & Infrastructure */}
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] text-sky-400 font-bold block">CATEGORY 06</span>
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
                    ? "Kolaborasi kode dengan Git, manajemen build di Gradle, container Docker, lingkungan Linux/WSL, serta pengujian API dengan Postman."
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
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400/90 block mb-2">
                04 // {lang === "id" ? "PENGALAMAN & PENDIDIKAN" : "EDUCATION & EXPERIENCE"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === "id" ? "Pendidikan & Organisasi" : "Track Record"}
              </h2>
            </div>

            {/* Continuous Vertical Timeline Stream */}
            <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-10">
              
              {/* Milestone 01: Universitas Indonesia */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#090a0c]"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className="text-sky-400 font-semibold tracking-wider">2024 — SEKARANG</span>
                  <span className="text-zinc-400 text-[11px]">DEPOK, INDONESIA</span>
                </div>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                  S1 Teknik Komputer — Universitas Indonesia
                </h3>
                
                <p className="font-mono text-xs text-zinc-400 mb-3">
                  Fakultas Teknik, Departemen Teknik Elektro (DTE FTUI) • IPK Kumulatif: <strong className="text-sky-400 font-semibold">3.60 / 4.00</strong>
                </p>
                
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 text-justify">
                  {lang === "id"
                    ? "Mempelajari dasar-dasar sistem komputer secara menyeluruh, mulai dari Pemrograman Berorientasi Objek (Java), Struktur Data & Algoritma, Arsitektur Komputer (MIPS), Bahasa C, Basis Data (PostgreSQL), Big Data (Hadoop), hingga Keamanan Jaringan."
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

                <p className="font-sans text-xs font-semibold text-sky-400 mb-3">
                  {lang === "id" ? "Bendahara Bidang RETRO (Rohani Islam Elektro)" : "Treasurer of RETRO Division (Rohani Islam Elektro)"}
                </p>

                <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc list-inside text-justify">
                  {lang === "id" ? (
                    <>
                      <li>Mengelola pencatatan keuangan, arus kas, serta pemasukan dan pengeluaran dana untuk program kerja Bidang RETRO IME FTUI.</li>
                      <li>Menyusun rencana anggaran biaya untuk kegiatan kerohanian, kajian rutin, serta program sosial mahasiswa di Departemen Teknik Elektro UI.</li>
                      <li>Membuat laporan keuangan Bidang RETRO secara rapi dan transparan agar setiap penggunaan dana mudah dipertanggungjawabkan.</li>
                    </>
                  ) : (
                    <>
                      <li>Managed division bookkeeping, cash flow, and income/expense tracking across programs in the RETRO Division of IME FTUI.</li>
                      <li>Planned and allocated event budgets for student fellowship discussions, community outreach, and character-building initiatives.</li>
                      <li>Prepared clear and transparent financial accountability reports for the executive board of IME FTUI.</li>
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

                <p className="font-sans text-xs font-semibold text-sky-400 mb-3">
                  {lang === "id" ? "Divisi K3 (Keselamatan & Keamanan)" : "Safety & Security Division (K3)"}
                </p>

                <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc list-inside text-justify">
                  {lang === "id" ? (
                    <>
                      <li>Menyiapkan jalur evakuasi dan prosedur keamanan lokasi acara Pelepasan Sarjana Baru FTUI.</li>
                      <li>Ikut mengatur alur keluar-masuk serta kerumunan lebih dari 500 wisudawan dan tamu undangan agar tetap tertib.</li>
                      <li>Menjaga seluruh rangkaian acara berjalan aman, lancar, dan tanpa kendala.</li>
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
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400/90 block mb-3">
                05 // {lang === "id" ? "KONTAK" : "GET IN TOUCH"}
              </span>
              
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                {lang === "id"
                  ? "Terbuka untuk Diskusi & Peluang Kerja Sama"
                  : "Let's Build Resilient, Scalable Software"}
              </h2>

              <p className="font-sans text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed text-justify">
                {lang === "id"
                  ? "Saat ini saya terbuka untuk peluang magang di bidang Software Engineering maupun Data Engineering, kolaborasi proyek, atau sekadar ngobrol santai seputar teknologi."
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
                <span className="text-sky-400 font-semibold block mb-1">
                  // {lang === "id" ? "PERMINTAAN CV & TRANSKRIP" : "OFFICIAL CV & CREDENTIAL ACCESS"}
                </span>
                <span className="leading-relaxed">
                  {lang === "id"
                    ? "Untuk keperluan rekrutmen atau magang, CV lengkap dan transkrip akademik bisa langsung diminta lewat email di atas."
                    : "Official Curriculum Vitae (CV), private project records, and academic transcripts are provided upon direct email request for internship and professional recruitment inquiries."}
                </span>
              </div>

              {/* Direct Channels List (Exact 'Instagram' clean label) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
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
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block mb-1">
                  // {lang === "id" ? "DETAIL PROYEK" : "PROJECT DETAILS"}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-zinc-300">
                  {activeProjectModal.badge[lang]}
                </span>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
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
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{lang === "id" ? "Ringkasan Arsitektur & Kontribusi Proyek" : "Verified Engineering Architecture & Dossier"}</span>
                </div>

                {/* Attached Documentation Files */}
                {activeProjectModal.docs.length > 0 && (
                  <div className="p-3.5 rounded bg-[#090a0c] border border-white/[0.08] space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400 block">
                      {lang === "id" ? "Dokumen Proyek Tersedia:" : "Available Project Documentation:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProjectModal.docs.map((doc) => (
                        <div key={doc.url} className="flex flex-wrap items-center gap-1.5">
                          <button
                            onClick={() => setActiveDocPreview({ projectTitle: activeProjectModal.title[lang], doc })}
                            className="px-3 py-1.5 rounded bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-200 font-mono text-xs transition-colors flex items-center gap-1.5"
                          >
                            <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{doc.label[lang]}</span>
                            <span className="text-[10px] text-sky-300/80">({doc.meta[lang]})</span>
                          </button>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white font-mono text-[11px] transition-colors flex items-center gap-1"
                            title={lang === "id" ? "Buka di tab baru / Unduh PDF" : "Open in new tab / Download PDF"}
                          >
                            <span>{lang === "id" ? "Unduh" : "Open"}</span>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Screenshot inside Modal */}
              <div
                onClick={() => setActiveImageLightbox({
                  src: activeProjectModal.image,
                  title: activeProjectModal.title[lang],
                  caption: activeProjectModal.imageCaption[lang]
                })}
                className="group relative aspect-video w-full rounded overflow-hidden border border-white/[0.1] bg-[#090a0c] cursor-pointer"
              >
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.imageCaption[lang]}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-[#090a0c]/85 backdrop-blur-sm border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-300">
                  <span className="truncate">{activeProjectModal.imageCaption[lang]}</span>
                  <span className="text-sky-400 flex-shrink-0 ml-2">{lang === "id" ? "Perbesar ↗" : "Zoom ↗"}</span>
                </div>
              </div>

              {/* Architecture Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400"></span>
                  <span>{lang === "id" ? "Cara Kerja & Arsitektur:" : "Technical Architecture & System Design:"}</span>
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed p-4 rounded bg-[#090a0c] border border-white/[0.06] font-mono text-justify">
                  {activeProjectModal.documentation[lang].architecture}
                </p>
              </div>

              {/* Verified Contribution */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400"></span>
                  <span>{lang === "id" ? "Peran & Kontribusi Saya:" : "Rifqi's Verified Contribution:"}</span>
                </h4>
                <p className="text-xs text-zinc-200 leading-relaxed p-4 rounded bg-white/[0.02] border border-white/[0.08] font-sans text-justify">
                  {activeProjectModal.documentation[lang].contribution}
                </p>
              </div>

              {/* Key Challenges */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400"></span>
                  <span>{lang === "id" ? "Tantangan & Solusi:" : "Key Technical Challenges Solved:"}</span>
                </h4>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside font-sans text-justify">
                  {activeProjectModal.documentation[lang].keyChallenges.map((c, i) => (
                    <li key={i} className="leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400"></span>
                  <span>{lang === "id" ? "Hasil yang Dibuat:" : "Deliverables & Artifacts:"}</span>
                </h4>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside font-sans text-justify">
                  {activeProjectModal.documentation[lang].deliverables.map((d, i) => (
                    <li key={i} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {activeProjectModal.documentation[lang].metrics && (
                <div className="p-3.5 rounded bg-[#090a0c] border border-sky-500/30 text-xs text-zinc-300 font-mono">
                  <strong className="text-sky-400">{lang === "id" ? "Pencapaian: " : "Benchmark: "}</strong>
                  {activeProjectModal.documentation[lang].metrics}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 p-4 sm:p-5 border-t border-white/[0.08] flex items-center justify-between bg-[#0a0c0f]">
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                <span>{lang === "id" ? "Terverifikasi dari Dokumen Proyek" : "Official Architecture Dossier"}</span>
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


      {/* =========================================================================
          EMBEDDED PDF DOCUMENTATION VIEWER MODAL
         ========================================================================= */}
      {activeDocPreview && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveDocPreview(null)}
        >
          <div
            className="w-full max-w-5xl h-[90vh] flex flex-col bg-[#0e1014] border border-white/[0.14] rounded shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-3.5 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 bg-[#0a0c0f]">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">
                    // {lang === "id" ? "DOKUMENTASI PROYEK" : "PROJECT DOCUMENTATION"}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] font-mono text-[10px] text-zinc-300">
                    {activeDocPreview.doc.meta[lang]}
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-white truncate max-w-[65vw]">
                  {activeDocPreview.projectTitle} — {activeDocPreview.doc.label[lang]}
                </h3>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={activeDocPreview.doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-white text-[#090a0c] hover:bg-zinc-200 font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>{lang === "id" ? "Buka Tab Baru / Unduh" : "Open / Download PDF"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={() => setActiveDocPreview(null)}
                  className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  aria-label="Tutup dokumen"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Embedded PDF Frame */}
            <div className="flex-1 bg-[#14161c] relative">
              <iframe
                src={`${activeDocPreview.doc.url}#view=FitH`}
                title={activeDocPreview.doc.label[lang]}
                className="w-full h-full border-0"
              />
            </div>

            {/* Mobile Friendly Fallback Notice */}
            <div className="flex-shrink-0 px-4 py-2 border-t border-white/[0.08] bg-[#0a0c0f] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>
                {lang === "id"
                  ? "Jika tampilan PDF tidak muncul di browser HP, klik 'Buka Tab Baru / Unduh' di kanan atas."
                  : "If PDF preview doesn't render on mobile browsers, click 'Open / Download PDF' above."}
              </span>
              <button
                onClick={() => setActiveDocPreview(null)}
                className="text-zinc-300 hover:text-white underline ml-3 flex-shrink-0"
              >
                {lang === "id" ? "Tutup" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          FULL-SIZE PROJECT IMAGE LIGHTBOX MODAL
         ========================================================================= */}
      {activeImageLightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImageLightbox(null)}
        >
          <div
            className="w-full max-w-5xl bg-[#0e1014] border border-white/[0.15] rounded shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-6 py-3 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#0a0c0f]">
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
                  // {lang === "id" ? "PRATINJAU VISUAL PROYEK" : "PROJECT VISUAL PREVIEW"}
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold text-white truncate">
                  {activeImageLightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveImageLightbox(null)}
                className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Tutup gambar"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-3 sm:p-5 bg-[#090a0c] flex items-center justify-center max-h-[75vh]">
              <img
                src={activeImageLightbox.src}
                alt={activeImageLightbox.caption}
                className="max-h-[70vh] w-auto object-contain rounded"
              />
            </div>
            <div className="px-4 sm:px-6 py-2.5 border-t border-white/[0.08] bg-[#0a0c0f] text-xs font-mono text-zinc-400 flex items-center justify-between gap-4">
              <span className="truncate">{activeImageLightbox.caption}</span>
              <button
                onClick={() => setActiveImageLightbox(null)}
                className="text-zinc-200 hover:text-white underline flex-shrink-0"
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