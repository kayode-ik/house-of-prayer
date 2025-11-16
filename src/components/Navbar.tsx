"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "@/styles/navbar.css";

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Give Online", href: "/give" },
    { name: "Past Messages", href: "/past-messages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // <nav className={`navbar }>
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <img src="/images/hopLogo.png" alt="Church Logo" />
          <span>House of Prayer</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <Link href="/donate" className="btn-donate">
            Donate
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="btn-donate"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
