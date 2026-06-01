import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MarvinOS — Engineering, QA & SaaS Control Center",
  description:
    "Marvin Said Lagunas López — Fullstack Developer, QA Automation Engineer, SaaS Builder. Systems that ship.",
  keywords: [
    "fullstack developer",
    "QA automation",
    "SaaS",
    "Next.js",
    "TypeScript",
    "k6",
    "Playwright",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-sys-bg text-sys-text antialiased">
        {children}
      </body>
    </html>
  );
}
