'use client';

import React from 'react';
import Link from 'next/link';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'হোম', href: '/' },
    { label: 'সম্পর্কে', href: '/about' },
    { label: 'ভর্তি', href: '/admission' },
    { label: 'যোগাযোগ', href: '/contact' },
  ];

  const resources = [
    { label: 'ফলাফল', href: '/results' },
    { label: 'ক্লাস রুটিন', href: '/routine' },
    { label: 'শিক্ষক তালিকা', href: '/teachers' },
    { label: 'ফটো গ্যালারি', href: '/gallery' },
  ];


  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold">মাদ্রাসা সম্পর্কে</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা দ্বীনি ও আধুনিক শিক্ষার মাধ্যমে একটি শক্তিশালী ভবিষ্যৎ প্রজন্ম তৈরি করছে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#b24dff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold">সংস্থানসমূহ</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#b24dff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">আমাদের অনুসরণ করুন</h3>
            
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-gray-400 md:text-left">
            <p>
              © {currentYear} মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>
              ডিজাইন ও ডেভেলপমেন্ট: নবম শ্রেনি ছাত্র মাহাদি হাসান
            </p>
          </div>

          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#" className="transition-colors hover:text-[#b24dff]">
              গোপনীয়তা নীতি
            </Link>
            <Link href="#" className="transition-colors hover:text-[#b24dff]">
              শর্তাবলী
            </Link>
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-linear-to-r from-[#b24dff] via-[#b24dff]/50 to-transparent" />
    </footer>
  );
};

export default Footer;
