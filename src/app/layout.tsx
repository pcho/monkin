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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} scroll-smooth font-sans`}>
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
