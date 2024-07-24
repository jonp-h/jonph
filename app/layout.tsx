import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonph",
  description: "A truly magnificent personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
