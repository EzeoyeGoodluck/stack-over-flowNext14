import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const Metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking ans snswering programing questions. Get help, share knwoledge , and collaborate with developer from around the world. Explore tpics in the web develooment, mobile app development, algorithms, data structures and more..",
  icons: {
    icon: "/assets/images/site-logo-svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient",
          hover: "primary-text-gradient-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
