'use client';

import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const AdmissionHeader = () => {
  return (
    <div className="relative w-full py-12 md:py-16 bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          অনলাইন ভর্তি আবেদন ফরম
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা - শিক্ষাবর্ষ ২০২৫-২০২৬
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="text-9xl">📋</div>
      </div>
    </div>
  );
};

export default AdmissionHeader;
