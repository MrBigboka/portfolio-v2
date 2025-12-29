import type { Metadata } from "next";
import { Inter, Lexend, Fira_Code, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SmartScaling - Studio technologique pour projets ambitieux",
  description: "On conçoit et livre des SaaS qui tournent en production. Systèmes robustes, interfaces soignées, déploiement rapide.",
  icons: {
    icon: '/logo/smartscaling-logo.png',
    shortcut: '/logo/smartscaling-logo.png',
    apple: '/logo/smartscaling-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cjp2ntr.css" />
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased", 
          inter.variable, 
          lexend.variable, 
          firaCode.variable,
          playfair.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
