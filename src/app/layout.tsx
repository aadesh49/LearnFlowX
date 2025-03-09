import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";               //@ means global directory

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Flow X",
  description: "Learning with the flow of uniqueness",
};

export default function RootLayout({
  children,                                 /* input paramter */
}: Readonly<{                               /*type for TS*/
  children: React.ReactNode;                /*type of parameter should be of ReactNode*/
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
