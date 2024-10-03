import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";

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
    <html lang="en" className="h-full">
      <body className="mx-auto flex h-full w-full max-w-[1920px] flex-col">
        <header className="header w-full">
          <Header />
        </header>
        <main className="w-full">{children}</main>
        <footer className="footer w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
