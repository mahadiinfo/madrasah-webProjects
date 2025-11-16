"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import MobileMenu from "@/app/components/mobaileMenuBar/MobaileMenu";

const Navbar = () => {
  const [menubarOpen, setmenubarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const { isAdminLoggedIn } = ""

  useEffect(() => {
    if (menubarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menubarOpen]);

  const navLinks = [
    { href: "/#home", label: "হোম পেজ" },
    { href: "/#about", label: "আমাদের সম্পর্কে" },
    { href: "/admission", label: "অনলাইন ভর্তি" },
    { href: "/results", label: "পরীক্ষার ফলাফল" },
    { href: "/attendance-report", label: "হাজিরা রিপোর্ট" },
    { href: "/teacher-panel/dashboard", label: "Teacher Login" },
    { href: "/admin/dashboard", label: "Admin Login" },
  ];

  return (
    <>
      {/* Navbar hide থাকবে যখন admin logged in থাকবে */}
      {!isAdminLoggedIn && (
        <>
          {/* Overlay for mobile menu */}
          <div
            className={`${
              menubarOpen ? "fixed inset-0 bg-black/40 z-40" : "hidden"
            } transition-opacity duration-300`}
            onClick={() => setmenubarOpen(false)}
          />

          <nav className="sticky top-0 left-0 right-0 z-40 bg-linear-to-r w-full from-[#b24dff] to-[#9933ff] shadow-xl shadow-purple-300/30">
            <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
              {/* Logo and Title */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <Image src={logo} alt="the logo" width={60} height={50} />
                </div>
                <span className="sm:inline text-white font-semibold text-[16px] md:text-lg lg:text-xl whitespace-nowrap ">
                  মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা
                </span>
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex text-2xl items-center gap-2 lg:gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`py-2 hover:px-4 rounded-lg font-semibold text-base  transition-all duration-300 ${
                        activeLink === link.href
                          ? "text-yellow-300 px-4 border-b-2 border-yellow-300 bg-white/10"
                          : "text-white hover:bg-white/10 hover:text-yellow-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setmenubarOpen(true)}
                className="lg:hidden text-white hover:text-yellow-300 transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </nav>

          {/* Mobile Sidebar Menu */}
          <MobileMenu menubarOpen={menubarOpen} setmenubarOpen={setmenubarOpen} />
        </>
      )}
    </>
  );
};

export default Navbar;
