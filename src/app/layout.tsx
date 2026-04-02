import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import MatrixBackground from "@/components/layout/MatrixBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExecutionModal from "@/components/launcher/ExecutionModal";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nicolas Terroir — Portfolio",
  description:
    "Portfolio de Nicolas Terroir, étudiant en bachelier informatique. Projets en C#, C++, PHP, HTML/CSS et SQL.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${orbitron.variable} ${shareTechMono.variable}`}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
        }}
      >
        <MatrixBackground />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <ExecutionModal />
      </body>
    </html>
  );
}
