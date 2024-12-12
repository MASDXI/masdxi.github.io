import type { Metadata } from "next";
import "./globals.css";
import info from "../assets/information.json";

export const metadata: Metadata = {
  title: info.name,
  description: info.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
