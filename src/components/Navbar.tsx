"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import "@/styles/navbar.css";
import type { NavbarContent } from "@/types/content";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  content: NavbarContent;
}

const Navbar = ({ content }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <img src="/images/hopLogo.png" alt="Church Logo" />
          <span>House of Prayer Ministry</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {content.links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                style={{
                  color: pathname === link.href ? "#E8722A" : undefined,
                  fontWeight: pathname === link.href ? 700 : undefined,
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link href={content.ctaHref} className="btn-donate">
            {content.ctaLabel}
          </Link>
          <button
            onClick={toggle}
            className="theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {content.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={content.ctaHref}
            className="btn-donate"
            onClick={() => setMenuOpen(false)}
          >
            {content.ctaLabel}
          </Link>
          <button onClick={toggle} className="theme-toggle" style={{ alignSelf: "center" }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
