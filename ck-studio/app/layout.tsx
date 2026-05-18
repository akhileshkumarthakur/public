import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CK Studio",
  description: "Production Planning Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
