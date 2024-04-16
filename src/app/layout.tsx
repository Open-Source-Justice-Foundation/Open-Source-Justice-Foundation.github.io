import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Justice Foundation",
  description:
    "We build and fund open source tools to empower sovereign communities and individuals to peacefully and voluntarily resolve their own disputes.",
};

const mona = localFont({
  variable: "--font-mona",
  display: "swap",
  src: [
    {
      path: "./MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MonaSans-SemiBold.woff2",
      weight: "500",
      style: "semibold",
    },
  ],
});

const hubot = localFont({
  variable: "--font-hubot",
  display: "swap",
  src: [
    {
      path: "./HubotSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./HubotSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HubotSans-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./HubotSans-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hubot.variable} ${mona.variable}`}>{children}</body>
    </html>
  );
}
