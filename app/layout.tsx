import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Vitor Lopes - Full Stack Developer",
  description:
    "Full Stack Developer passionate about building innovative digital solutions. Specialized in React, Next.js, TypeScript, and Node.js.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/logo192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
