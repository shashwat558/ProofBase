import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { Footer } from "@/components/Footer";

const roboto = Host_Grotesk({
  subsets: ["latin"],
  weight: "400"
})
export const metadata: Metadata = {
  title: "ProofBase",
  description: "Your proof of work on chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-black overflow-x-hidden`}
      >
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
