import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Theme>
      <Navbar></Navbar>
      <Hero></Hero>
      <Camp></Camp>
      <Guide></Guide>
      <Features></Features>
      <GetApp></GetApp>
      <Footer></Footer>
    </Theme>
  );
}
