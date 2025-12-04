import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

// Fix for "TypeError: localStorage.getItem is not a function" in SSR
if (
  typeof global !== "undefined" &&
  (global as any).localStorage &&
  typeof (global as any).localStorage.getItem !== "function"
) {
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
}

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "VSDA Agent Chat",
  description: "VSDA Agent Chat UX by VSDA Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
