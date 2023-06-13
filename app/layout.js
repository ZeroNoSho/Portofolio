"use client";
import "../style/globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Foot";
import Head from "next/head";

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
