import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamad Rifqi Fadil Itsnain — Computer Engineering & Software Systems",
  description: "Personal engineering portfolio of Muhamad Rifqi Fadil Itsnain, Computer Engineering undergraduate at Universitas Indonesia. Specializing in Software Engineering, Data Pipelines, and Systems Architecture.",
  keywords: [
    "Muhamad Rifqi Fadil Itsnain",
    "Teknik Komputer UI",
    "Universitas Indonesia",
    "Software Engineer",
    "Computer Engineering",
    "Data Engineering",
    "Systems Architecture",
    "HealthAuth",
    "KATUP Simulation"
  ],
  authors: [{ name: "Muhamad Rifqi Fadil Itsnain" }],
  openGraph: {
    title: "Muhamad Rifqi Fadil Itsnain — Computer Engineering Portfolio",
    description: "Engineering scalable software systems, data pipelines, and network architecture. Universitas Indonesia.",
    url: "https://portofolio-beta-two-39.vercel.app",
    siteName: "Muhamad Rifqi Fadil Itsnain Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090a0c] text-[#e4e4e7] font-sans antialiased selection:bg-sky-500/20 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
