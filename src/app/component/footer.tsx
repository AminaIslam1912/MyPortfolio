import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-card border-t border-border">
      <footer className="body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-foreground">
            <Image
              src="/assets/picture/portfolio_logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full mr-3"
            />
            <span className="ml-3 text-xl font-semibold">Amina Islam</span>
          </a>
          <p className="text-sm text-muted-foreground sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-border sm:py-2 sm:mt-0 mt-4">
            © 2025 Amina Islam. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            <Link
              href={"https://www.facebook.com/amina.islam.jenny"}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaFacebook className="text-2xl" />
            </Link>

            <Link
              href={
                "https://www.instagram.com/amina.islamj?igsh=MTBkYmQ2YnlvMzNjaA=="
              }
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </Link>

            <Link
              href={
                "https://www.linkedin.com/in/amina-islam-3b019a27b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsaaNNHZ3SmmdyhQ1p%2F7fVQ%3D%3D"
              }
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
