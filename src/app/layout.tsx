import { AnalyticsWrapper } from "@/components/analytics";
import { inter } from "@/components/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { globalDescription } from "@/data/metadata";
import { Toaster } from "@/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";

import Footer from "@/site/footer";
import Header from "@/site/header";

import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Monkin - Przemysław Chojecki",
    template: "%s | Monkin - Przemysław Chojecki",
  },
  manifest: "https://monkin.co/manifest.json",
  ...globalDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monkin.co",
    images: "https://monkin.co/static/og.png",
    siteName: "Monkin - Przemysław Chojecki",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://monkin.co/static/og.png",
    creator: "@pc__ho",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon?id=icon-16x16", sizes: "16x16", type: "image/png" },
      { url: "/icon?id=icon-32x32", sizes: "32x32", type: "image/png" },
      { url: "/icon?id=icon-96x96", sizes: "96x96", type: "image/png" },
      { url: "/icon?id=icon-192x192", sizes: "192x192", type: "image/png" },
      { url: "/icon?id=icon-512x512", sizes: "512x512", type: "image/png" },
      {
        url: "/icon?id=icon-16x16-dark",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon?id=icon-32x32-dark",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon?id=icon-96x96-dark",
        sizes: "96x96",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon?id=icon-192x192-dark",
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon?id=icon-512x512-dark",
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/icon?id=icon-57x57", sizes: "57x57", type: "image/png" },
      { url: "/icon?id=icon-60x60", sizes: "60x60", type: "image/png" },
      { url: "/icon?id=icon-72x72", sizes: "72x72", type: "image/png" },
      { url: "/icon?id=icon-76x76", sizes: "76x76", type: "image/png" },
      { url: "/icon?id=icon-114x114", sizes: "114x114", type: "image/png" },
      { url: "/icon?id=icon-120x120", sizes: "120x120", type: "image/png" },
      { url: "/icon?id=icon-144x144", sizes: "144x144", type: "image/png" },
      { url: "/icon?id=icon-152x152", sizes: "152x152", type: "image/png" },
      { url: "/icon?id=icon-180x180", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} scroll-smooth font-sans`}>
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0a0a0a" />
      </head>
      <body className="mx-auto bg-white selection:bg-primary selection:text-white dark:bg-neutral-950 dark:selection:bg-white dark:selection:text-neutral-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
      <AnalyticsWrapper />
      <GoogleAnalytics gaId="G-2HFEKKP6LV" />
    </html>
  );
}
