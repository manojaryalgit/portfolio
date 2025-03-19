'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NeonCursorTrail from "@/components/NeonCursorTrail";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NeonCursorTrail />
        {children}
      </body>
    </html>
  );
} 