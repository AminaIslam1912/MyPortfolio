import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  return (
    
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image
            src="/assets/picture/portfolio_logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full mr-3"

          />
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl ">Amina Islam</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href='/' className="mr-5 hover:text-indigo-900 hover:underline font-bold">Home</Link>
            <Link href="#" className="mr-5 hover:text-indigo-900 hover:underline font-bold">About</Link>
            <Link href="#" className="mr-5 hover:text-indigo-900 hover:underline font-bold">Skills</Link>
            <Link href="#" className="mr-5 hover:text-indigo-900 hover:underline font-bold" >Projects</Link>
            <Link href="#" className="mr-5 hover:text-indigo-900 hover:underline font-bold">Contact</Link>
          </nav>
          <a href="/assets/cv/My_CV.docx" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base font-bold  text-white mt-4 md:mt-0 hover:text-black ">
            
            Download CV
            <FaDownload className="ml-2"/>
          </button>
         </a>

        </div>
      </header>
      
  );
};

export default Navbar;
