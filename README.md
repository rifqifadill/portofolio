# Personal Engineering Portfolio — Muhamad Rifqi Fadil Itsnain

Website portofolio modern berbasis **Next.js 16**, **React 19**, **TypeScript**, dan **Tailwind CSS**. Didesain dengan estetika monokromatis minimalis (Vercel/Linear style) yang elegan, tenang, dan nyaman di mata.

---

## Cara Menjalankan Portofolio di Laptop

1. Buka terminal (PowerShell / Command Prompt) di folder ini:
   ```bash
   cd "C:\Users\rifqi\my-project"
   ```

2. Jalankan server lokal:
   ```bash
   npm run dev
   ```

3. Buka di browser:
   👉 **http://localhost:3000**

---

## 🛠️ Cara Mengedit Konten & Menyesuaikan Data

Semua konten utama (profil, media sosial, proyek, dan keahlian) tersusun rapi dalam satu file utama:
📄 **`app/page.tsx`**

### 1. Menambahkan / Mengganti Foto Anda
* Siapkan foto portrait Anda dalam format JPG.
* Beri nama berkas **`profile.jpg`**.
* Masukkan ke dalam folder: **`public/profile.jpg`**.
* Foto akan otomatis tampil di bingkai foto pada halaman utama!

### 2. Mengubah Tautan Media Sosial
Di bagian paling atas file **`app/page.tsx`**, terdapat blok konfigurasi:
```typescript
const SOCIAL_LINKS = {
  github: "https://github.com/rifqiitsnain",
  linkedin: "https://linkedin.com/in/rifqiitsnain",
  instagram: "https://instagram.com/rifqiitsnain",
  email: "mailto:rifqiitsnain7@gmail.com",
  phone: "+62 812-1033-2765",
  cvDownload: "file:///C:/Users/rifqi/Downloads/CV_Muhamad_Rifqi_Fadil_Itsnain/CV_Muhamad Rifqi Fadil Itsnain_Terbaru.pdf"
};
```
Anda tinggal mengganti URL sesuai akun media sosial Anda.

### 3. Mengubah atau Menambah Proyek
Array data proyek terletak di variabel `projectsData` di dalam **`app/page.tsx`**. Setiap proyek memiliki dukungan dwibahasa (Indonesia & Inggris) serta dokumentasi finpro lengkap (*architecture*, *keyChallenges*, *deliverables*, *metrics*).

---

## 📁 Struktur Folder
```text
my-project/
├── app/
│   ├── layout.tsx      # Font Google & Metadata SEO
│   ├── page.tsx        # Seluruh konten, dwibahasa ID/EN, & Modal Finpro
│   └── globals.css     # Tailwind CSS base styles
├── public/
│   └── profile.jpg     # Taruh foto Anda di sini (opsional)
├── package.json        # Dependencies Next.js 16 & React 19
├── tailwind.config.js  # Konfigurasi Tailwind CSS
└── README.md           # Panduan ini
```
