import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Link Nest - Organiza, guarda y acorta tus enlaces',
  description:
    'Link Nest es tu espacio para guardar, organizar y acortar enlaces con facilidad. Clasifica tus links en categorías personalizadas y accede a ellos desde cualquier lugar.',
  keywords: [
    'Link Nest',
    'guardar enlaces',
    'organizar links',
    'acortar URL',
    'gestión de enlaces',
    'bookmark manager',
    'shortener',
    'Next.js',
    'productividad'
  ],
  authors: [{ name: 'Andy' }],
  creator: 'Andy',
  openGraph: {
    title: 'Link Nest - Organiza y acorta tus enlaces',
    description:
      'Guarda, organiza y acorta tus enlaces con Link Nest. Crea categorías personalizadas y accede a tus links desde cualquier lugar.',
    url: 'https://linknesti.vercel.app/',
    siteName: 'Link Nest',
    images: [
      {
        url: 'https://linknest.com/og-image.png', // imagen para compartir
        width: 1200,
        height: 630,
        alt: 'Vista previa de Link Nest'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  metadataBase: new URL('https://linknesti.vercel.app/'),
  themeColor: '#0f172a',
  alternates: {
    canonical: 'https://linknesti.vercel.app/'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
