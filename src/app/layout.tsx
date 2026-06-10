import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trivikram kalagi -- Software Engineer",
  description: "Portfolio of Trivikram Kalagi, Software Engineer | Open Source Contributor | AI Explorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} dark`}>
      <body className="font-sans bg-[#0C0C0C] text-[#D7E2EA] antialiased min-h-screen relative overflow-x-clip select-none">
        {children}
      </body>
    </html>
  );
}


