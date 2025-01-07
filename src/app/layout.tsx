import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from 'next/link';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Travis Neufeld",
    description: "Personal website of Travis Neufeld",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="border-b-2 border-[#857F74] mb-8">
                    <header className="flex justify-between items-center p-8">
                        <Link href="/about"><h1 className="text-4xl font-bold">Travis Neufeld</h1></Link>
                        <nav>
                            <ul className="flex gap-4">
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link href="/resume">Resume</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                {children}
            </body>
        </html>
    );
}
