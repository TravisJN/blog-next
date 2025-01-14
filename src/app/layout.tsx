import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from 'next/link';
import NavLink from '@/components/navLink';

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

const linkNames = [
    'About',
    'Portfolio',
    'Resume',
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#022B3A]`}
            >
                <div className="mb-8">
                    <header className="flex-col justify-center items-center p-8">
                        <Link href="/about">
                            <h1 className="text-4xl font-bold text-center">Travis Neufeld</h1>
                        </Link>
                        <nav className="flex justify-center mt-4">
                            <ul className="flex gap-4">
                                {linkNames.map((name) => (<NavLink key={name} name={name} linkPath={`/${name.toLowerCase()}`} />))}
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="flex justify-center max-w-screen-xl mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
