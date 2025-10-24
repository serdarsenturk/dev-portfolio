import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type React from "react";
import type { Locale } from "@/lib/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serdar Senturk - Developer",
  description:
    "Personal portfolio of Serdar Senturk, a creative developer crafting beautiful digital experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  return (
    <html
      lang={(await params).lang}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
