'use client';

import React, { useState } from 'react';
import { FaHome, FaClipboardList, FaUsers, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(true) ;
  const pathname = usePathname();

  const menuItems = [
    { icon: FaHome, label: 'ড্যাশবোর্ড', href: '/teacher-panel/dashboard' },
    { icon: FaClipboardList, label: 'হাজিরা নিন', href: '/teacher-panel/attendance' },
    { icon: FaUsers, label: 'শিক্ষার্থী ব্যবস্থাপনা', href: '/teacher-panel/students' },
    { icon: FaChartBar, label: 'ফলাফল জমা দিন', href: '/teacher-panel/results' },
  ];

  return (
    <div className={`fixed top-16 max-md:hidden left-0 h-[calc(100vh-64px)] bg-[#b24dff] text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} shadow-lg`}>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-white text-[#b24dff]' : 'hover:bg-white/20'
              }`}
            >
              <Icon size={20} />
              {isOpen && <span className="text-sm font-semibold">{item.label}</span>}
            </Link>
          );
        })}

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors mt-8">
          <FaSignOutAlt size={20} />
          {isOpen && <span className="text-sm font-semibold">লগ আউট</span>}
        </button>
      </nav>
    </div>
  );
};

export default TeacherSidebar;
