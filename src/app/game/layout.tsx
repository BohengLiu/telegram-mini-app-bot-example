/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Game",
  description: "Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
