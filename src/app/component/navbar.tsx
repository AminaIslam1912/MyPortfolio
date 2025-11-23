"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((o) => !o);

  return (
    <div className="bg-card border-b border-border z-50 sticky top-0 backdrop-blur-sm bg-opacity-90">
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-foreground mb-4 md:mb-0"
          >
            <Image
              src="/assets/picture/portfolio_logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
            <span className="ml-3 text-xl font-semibold">Amina Islam</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center gap-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#skill"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#project"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile controls */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <span className="block w-6 h-[2px] bg-foreground mb-1" />
              <span className="block w-6 h-[2px] bg-foreground mb-1" />
              <span className="block w-6 h-[2px] bg-foreground" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FaMoon className="text-lg text-foreground" />
              ) : (
                <FaSun className="text-lg text-foreground" />
              )}
            </button>

            <a
              href="/assets/cv/My_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <button className="inline-flex items-center bg-primary text-primary-foreground border-0 py-2 px-4 focus:outline-none hover:opacity-90 rounded-lg text-base font-medium transition-all">
                Download CV
                <FaDownload className="ml-2" />
              </button>
            </a>
          </div>
          {/* Mobile Menu Panel */}
          {open && (
            <div className="md:hidden w-full mt-4 animate-fade-in">
              <nav className="flex flex-col gap-4 pb-4 border-t border-border pt-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#skill", label: "Skills" },
                  { href: "#project", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="/assets/cv/My_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground border-0 py-2 px-4 focus:outline-none hover:opacity-90 rounded-lg text-base font-medium transition-all">
                    Download CV
                    <FaDownload className="ml-2" />
                  </button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
