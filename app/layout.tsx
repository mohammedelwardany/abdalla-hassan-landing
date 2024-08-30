import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const noto = Noto_Kufi_Arabic({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "منصة الأستاذ عبد الله حسن | للرياضيات للمرحلة الثانوية",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={noto.className}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
