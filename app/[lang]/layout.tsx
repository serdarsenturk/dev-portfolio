import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Serdar Senturk - Full Stack Developer",
    template: "%s | Serdar Senturk",
  },
  description:
    "Full Stack Developer with 3+ years experience in .NET Core, Java, Spring Boot, Next.js, and React Native. Building robust backend solutions and modern web applications.",
  keywords: [
    "Serdar Senturk",
    "Full Stack Developer",
    ".NET Core",
    "Java",
    "Spring Boot",
    "Next.js",
    "React Native",
    "Backend Developer",
    "Frontend Developer",
    "TypeScript",
    "Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Serdar Senturk" }],
  creator: "Serdar Senturk",
  publisher: "Serdar Senturk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serdarsenturk.dev",
    title: "Serdar Senturk - Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years experience in .NET Core, Java, Spring Boot, Next.js, and React Native.",
    siteName: "Serdar Senturk Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Serdar Senturk - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serdar Senturk - Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years experience in .NET Core, Java, Spring Boot, Next.js, and React Native.",
    images: ["/profile-photo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://serdarsenturk.dev"),
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
