import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const grotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Trivikram Kalagi — Software Engineer & AI Automation Builder",
  description:
    "Portfolio of Trivikram Kalagi — Software Engineer, open-source contributor (GSSOC), hackathon winner, and AI automation explorer building intelligent products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body className="bg-ink text-bone antialiased overflow-x-clip selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
