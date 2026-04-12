"use client";
/**
 * PageLayout — wraps every inner page with Navbar + Footer.
 * The home page (app/page.tsx) also uses this so Navbar/Footer
 * are always driven from siteContent.
 */
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { siteContent } from "@/lib/content";

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <Navbar content={siteContent.navbar} />
      <main style={{ paddingTop: 64 }}>{children}</main>
      <Footer content={siteContent.footer} />
    </ThemeProvider>
  );
};

export default PageLayout;
