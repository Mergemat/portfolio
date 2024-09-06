import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation",
  description: "Foundation - Веб-дизайн на языке вашего бизнеса",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: "web, design, ui, ux, frontend, nextjs, tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} dark snap-y scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
