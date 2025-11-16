"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

const MobileMenu = ({ menubarOpen, setmenubarOpen }) => {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { href: "/#home", label: "হোম পেজ" },
    { href: "/#about", label: "আমাদের সম্পর্কে" },
    { href: "/#features", label: "বৈশিষ্ট্যসমূহ" },
    { href: "/admission", label: "অনলাইন ভর্তি" },
    { href: "/results", label: "পরীক্ষার ফলাফল" },
    { href: "/attendance-report", label: "হাজিরা রিপোর্ট" },
    { href: "/teacher-panel/dashboard", label: "Teacher Login" },
    { href: "/admin/dashboard", label: "Admin Login" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setmenubarOpen(false);
  };

  return (
    <>
      {/* Slide-in Sidebar Menu from Right */}
      <div
        className={`fixed top-0 right-0 font-hind-siliguri h-screen w-80 bg-linear-to-b from-[#6200c4] to-[#4a0088] shadow-2xl shadow-purple-900/50 z-50 transform transition-transform duration-500 ease-in-out ${
          menubarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h2 className="text-white font-bold text-lg">মেনু</h2>
          <button
            onClick={() => setmenubarOpen(false)}
            className="text-white hover:text-yellow-300 transition-colors duration-300 hover:scale-110"
            aria-label="Close menu"
          >
            <IoIosCloseCircle size={32} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-6 gap-3 overflow-y-auto max-h-[calc(100vh-100px)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 border-2 ${
                activeLink === link.href
                  ? "bg-yellow-400 text-purple-900 border-yellow-400"
                  : "text-white border-white/30 hover:border-white hover:bg-white/10 active:scale-95"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-yellow-400 via-purple-400 to-yellow-400" />
      </div>
    </>
  );
};

export default MobileMenu;