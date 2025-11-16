'use client';

import React, { useState } from 'react';
import {
  FaHome,
  FaChalkboardTeacher,
  FaClipboardList,
  FaComments,
  FaSignOutAlt
} from 'react-icons/fa';
import {
  HiBellAlert,
} from 'react-icons/hi2';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
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
    <div
      className={`fixed top-16 hidden lg:block left-0 h-[calc(100vh-64px)] bg-[#b24dff]  text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}  shadow-lg`}>
      <nav className="p-4 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}

              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-white text-[#b24dff]' : 'hover:bg-white/20'
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

export default AdminSidebar;
