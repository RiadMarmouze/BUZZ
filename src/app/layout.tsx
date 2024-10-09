import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";

export const metadata: Metadata = {
  title: "Buzz: The Future of Online Services in Algeria",
  description:
    "Buzz is a service-based app in Algeria that connects users with top-tier digital service providers.",
  keywords: "Buzz, Algeria, online services, digital services, remote services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.buzz-apex.com",
    siteName: "Buzz",
    title: "Buzz: The Future of Online Services in Algeria",
    description:
      "The first remote digital services provider in Algeria, offering services like printing, designing, video shooting and editing.",
    images: [
      {
        url: "/assets/Images/Common/og.jpg",
      },
    ],
  },
  twitter: {
    site: "https://www.buzz-apex.com",
    card: "summary_large_image",
    title: "Buzz: The Future of Online Services in Algeria",
    description:
      "Book services from home with Buzz, Algeria's top remote digital services provider.",
    images: "/assets/Images/Common/og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
