"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import TeacherMobileMenuBar from "@/app/components/mobaileMenuBar/TeacherMobileMenuBar";
import { MdLogout } from "react-icons/md";

const TeacherPageNavbar = () => {
  const [menubarOpen, setmenubarOpen] = useState(false);
  const { teacherLogout } = "";

  const handleLogout = () => {
    teacherLogout();
    window.location.href = '/';
  };

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


  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`${
          menubarOpen ? "fixed inset-0 bg-black/40 z-40" : "hidden"
        } transition-opacity duration-300`}
        onClick={() => setmenubarOpen(false)}
      />

      <nav className="sticky lg:hidden top-0 left-0 right-0 z-40 bg-linear-to-r w-full from-[#7204c6] to-[#492e64] shadow-xl shadow-blue-300/30">
        <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center w-[90vw] text-white font-semibold text-[16px] md:text-lg lg:text-xl whitespace-nowrap">
            <span className="text-xl ml-10">শিক্ষক প্যানেল</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setmenubarOpen(true)}
              className="lg:hidden text-white hover:text-yellow-300 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <TeacherMobileMenuBar menubarOpen={menubarOpen} setmenubarOpen={setmenubarOpen}/>
    </>
  );
};

export default TeacherPageNavbar;
