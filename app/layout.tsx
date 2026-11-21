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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#060913] text-[#cbd5e1] font-sans antialiased selection:bg-blue-600/30 selection:text-blue-100">
        {children}
      </body>
    </html>
  );
}
