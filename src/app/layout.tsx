import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://midomato.com"); //ドメイン変えるならこれも変える

export const metadata: Metadata = {
  title: "Midot.の技術倉庫",
  description: "Midomatoがつくってきた知識を保管する場所。",
  
    openGraph: {
    title: "Midot.の技術倉庫",
    description: "Midomatoがつくってきた知識を保管する場所。",
    images: [
      {
        url: new URL("/main/test.jpg", metadataBase),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
