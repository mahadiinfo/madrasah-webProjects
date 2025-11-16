'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <div className="relative w-full py-12 md:py-16 bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href="/" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
            <FaHome size={16} />
            <span>হোম</span>
          </Link>
          {breadcrumbs && breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className="text-yellow-300">/</span>
              <Link
                href={crumb.href}
                className="hover:text-yellow-300 transition-colors"
              >
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="text-9xl">🕌</div>
      </div>
    </div>
  );
};

export default PageHeader;
