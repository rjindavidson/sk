import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S&K Plating",
  description: "Plating & Anodizing Services in California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
