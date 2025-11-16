"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import {
    FaHome,
    FaClipboardList,
    FaUsers,
    FaFileAlt,
    FaSignOutAlt
} from 'react-icons/fa';
import { usePathname } from 'next/navigation';


const TeacherMobileMenuBar = ({ menubarOpen, setmenubarOpen }) => {
    const pathname = usePathname();

    const menuItems = [
        { icon: FaHome, label: 'ড্যাশবোর্ড', href: '/teacher-panel/dashboard' },
        { icon: FaClipboardList, label: 'উপস্থিতি', href: '/teacher-panel/attendance' },
        { icon: FaFileAlt, label: 'ফলাফল', href: '/teacher-panel/results' },
        { icon: FaUsers, label: 'ছাত্র', href: '/teacher-panel/students' },
    ];

    return (
        <>
            {/* Slide-in Sidebar Menu from Right */}
            <div
                className={`fixed top-0 right-0 font-hind-siliguri h-screen w-80 bg-linear-to-b from-[#1e40af] to-[#1e3a8a] shadow-2xl shadow-blue-900/50 z-50 transform transition-transform duration-500 ease-in-out ${menubarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div
                    className={`h-full bg-[#3b82f6] text-white transition-all duration-300 w-full shadow-lg overflow-y-auto`}>
                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setmenubarOpen(false)}
                            className="text-white hover:text-yellow-300 transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <IoIosCloseCircle size={32} />
                        </button>
                    </div>

                    <div className="p-4 space-y-2">

                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setmenubarOpen(false)}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-white text-[#3b82f6]' : 'hover:bg-white/20'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="text-sm font-semibold">{item.label}</span>
                                </Link>
                            );
                        })}

                        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors mt-8">
                            <FaSignOutAlt size={20} />
                            <span className="text-sm font-semibold">লগ আউট</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TeacherMobileMenuBar;
