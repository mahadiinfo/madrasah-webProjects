"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import {
    FaHome,
    FaChalkboardTeacher,
    FaClipboardList,
    FaComments,
    FaSignOutAlt
} from 'react-icons/fa';
import { HiBellAlert, } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';


const AdminmobaileMenuBar = ({ menubarOpen, setmenubarOpen }) => {
    const [activeLink, setActiveLink] = useState("/");
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();



    const menuItems = [
        { icon: FaHome, label: 'ড্যাশবোর্ড', href: '/admin/dashboard' },
        { icon: FaChalkboardTeacher, label: 'শিক্ষক ব্যবস্থাপনা', href: '/admin/manage-teachers' },
        { icon: FaClipboardList, label: 'ভর্তি আবেদন', href: '/admin/admissions' },
        { icon: HiBellAlert, label: 'নোটিশ', href: '/admin/notices' },
        { icon: FaComments, label: 'বার্তা', href: '/admin/messages' },
    ];

    return (
        <>
            {/* Slide-in Sidebar Menu from Right */}
            <div
                className={`fixed top-16 right-0 font-hind-siliguri h-screen w-60 bg-linear-to-b from-[#b24dff] to-[#6900b9] shadow-2xl shadow-purple-900/50 z-40 transform transition-transform duration-500  ease-in-out ${menubarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div
                    className={`h-[calc(100vh-64px)]   text-white transition-all duration-300 w-full shadow-lg`}>
                    <div className="flex justify-between items-center p-6 border-b border-white/20">
                        <h2 className="text-white font-bold text-lg">Admin Menu</h2>
                        <button
                            onClick={() => setmenubarOpen(false)}
                            className="text-white hover:text-yellow-300 transition-colors duration-300 hover:scale-110"
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
                                    onClick={()=> setmenubarOpen(false)}

                                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-white text-[#b24dff]' : 'hover:bg-white/20'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="text-sm font-semibold">{item.label}</span>
                                </Link>
                            );
                        })}

                        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors mt-8">
                            <FaSignOutAlt size={20} />
                            {isOpen && <span className="text-sm font-semibold">লগ আউট</span>}
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminmobaileMenuBar;