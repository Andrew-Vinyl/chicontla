import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Growing Community | College Scholarship Fund",
  description: "Making life better for those who grow coffee. What if a cup of coffee could send someone to college?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
