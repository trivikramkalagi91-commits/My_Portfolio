import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Trivikram Kalagi — Software Engineer & AI Builder",
  description:
    "Portfolio of Trivikram Kalagi — software engineer, AI automation builder, open-source contributor (GSSOC), and hackathon winner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-black text-ink antialiased overflow-x-clip selection:bg-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
