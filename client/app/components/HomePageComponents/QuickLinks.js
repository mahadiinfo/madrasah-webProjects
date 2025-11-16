'use client';

import React from 'react';
import Link from 'next/link';
import {
  HiClipboardDocumentList,
  HiAcademicCap,
  HiClock,
  HiUserGroup,
  HiArrowDownTray,
  HiPhoto,
} from 'react-icons/hi2';

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      icon: HiClipboardDocumentList,
      title: 'ভর্তি তথ্য',
      href: '/admission',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: HiAcademicCap,
      title: 'ফলাফল',
      href: '/results',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      icon: HiClock,
      title: 'ক্লাস রুটিন',
      href: '/routine',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      icon: HiUserGroup,
      title: 'শিক্ষক তালিকা',
      href: '/teachers',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 5,
      icon: HiArrowDownTray,
      title: 'ডাউনলোড কর্নার',
      href: '/downloads',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 6,
      icon: HiPhoto,
      title: 'ফটো গ্যালারি',
      href: '/gallery',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#b24dff]/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#b24dff]" />
            <span className="text-sm font-semibold text-[#b24dff]">দ্রুত লিঙ্ক</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            গুরুত্বপূর্ণ লিঙ্ক
          </h2>

          <p className="text-gray-600">
            যেসব তথ্য আপনার দরকার সেগুলো এক ক্লিকে পান
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="group relative overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Card Container */}
                <div className="relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:border-[#b24dff] group-hover:shadow-xl md:p-8">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${link.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`mb-4 inline-flex rounded-lg bg-linear-to-br ${link.color} p-4 text-white transition-all duration-300 group-hover:scale-110`}>
                      <Icon size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black transition-colors group-hover:text-[#b24dff] md:text-xl">
                      {link.title}
                    </h3>

                    {/* Arrow Indicator */}
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#b24dff] opacity-0 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                      আরও দেখুন
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>

                  {/* Bottom border accent */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${link.color} transition-all duration-300 group-hover:w-full`} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 rounded-xl border-2 border-dashed border-[#b24dff]/30 bg-[#b24dff]/5 p-6 text-center md:p-8">
          <h3 className="mb-3 text-lg font-bold text-black md:text-xl">
            আরও কিছু খুঁজছেন?
          </h3>
          <p className="mb-4 text-gray-600">
            আমাদের সম্পূর্ণ তথ্য কেন্দ্রে ঘুরে দেখুন এবং আপনার প্রয়োজনীয় সব তথ্য খুঁজে পান।
          </p>
          <Link
            href="/sitemap"
            className="inline-flex items-center gap-2 rounded-lg bg-[#b24dff] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-105 md:text-base"
          >
            সম্পূর্ণ তালিকা দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
