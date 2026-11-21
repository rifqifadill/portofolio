import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamad Rifqi Fadil Itsnain — Computer Engineering Portfolio",
  description: "Personal Engineering Portfolio of Muhamad Rifqi Fadil Itsnain, Computer Engineering undergraduate at Universitas Indonesia.",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b0c10] text-[#cbd5e1] font-sans antialiased selection:bg-[#c59a58]/30 selection:text-[#fdfbf7]">
        {children}
      </body>
    </html>
  );
}
