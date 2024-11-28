import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aiman Rosli | Software Developer",
  description: "Portfolio 2024",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/ar2.png',
        href: '/images/ar2.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/ar2.png',
        href: '/images/ar2.png',
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
