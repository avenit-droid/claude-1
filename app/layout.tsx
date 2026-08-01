import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ThemeInit from "@/components/ThemeInit";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxora.future"),
  title: {
    default: "LUXORA — Будущее существует здесь",
    template: "%s — LUXORA",
  },
  description:
    "LUXORA — лаборатория живой материи и интеллекта. Адаптивные сплавы, реагирующие поверхности и системы, которые думают вместе с вами.",
  keywords: ["LUXORA", "метаматериалы", "жидкий металл", "адаптивные сплавы", "AETHER", "future materials"],
  openGraph: {
    title: "LUXORA — Будущее существует здесь",
    description: "Материя, которая учится. Лаборатория живой материи и интеллекта.",
    url: "https://luxora.future",
    siteName: "LUXORA",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXORA — Будущее существует здесь",
    description: "Материя, которая учится.",
  },
  robots: { index: true, follow: true },
  alternates: {
    languages: { ru: "/", en: "/en" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
    { media: "(prefers-color-scheme: light)", color: "#F6F4EF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <ThemeInit />
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="grain-overlay" aria-hidden />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
