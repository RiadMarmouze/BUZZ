import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Buzz",
  description: "First remote services provider in Algeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header with TopNavbar */}
        <main className="min-h-screen">
          {/* Add padding to avoid overlap with navbar */}
          {children}
        </main>
        <Footer /> {/* Footer at the bottom */}
      </body>
    </html>
  );
}
