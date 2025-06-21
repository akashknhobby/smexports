import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SM Exports",
  description: "Bulk Exports. Global Reach. Trusted Trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <body>{children}</body>
    </html>
  );
}
