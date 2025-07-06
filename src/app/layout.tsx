import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRestorationProvider from "@/components/ScrollRestorationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Jishan Ansari - Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React.js, Node.js, and Express.js. Building modern, scalable web applications with a focus on user experience and performance.",
  keywords: "Full Stack Developer, Next.js, React.js, Node.js, Express.js, Web Development, Portfolio",
  authors: [{ name: "Md Jishan Ansari" }],
  creator: "Md Jishan Ansari",
  openGraph: {
    title: "Md Jishan Ansari - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React.js, Node.js, and Express.js",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Jishan Ansari - Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React.js, Node.js, and Express.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <ScrollRestorationProvider>
          <main className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ScrollRestorationProvider>
      </body>
    </html>
  );
}
