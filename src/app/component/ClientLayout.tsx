"use client";

import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
