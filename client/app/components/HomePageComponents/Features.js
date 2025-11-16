'use client';

import React from 'react';
import { HiAcademicCap, HiSparkles, HiHome, HiGlobeAltIcon } from 'react-icons/hi2';
import { FaMosque } from 'react-icons/fa6';
import { MdComputer } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: HiAcademicCap,
      title: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
      description:
        'আমাদের রয়েছে একদল মেধাবী, প্রশিক্ষিত ও অভিজ্ঞ শিক্ষক, যারা শিক্ষার্থীদের সঠিক পথনির্দেশনা দেন।',
    },
    {
      id: 2,
      icon: FaMosque,
      title: 'দ্বীনি ও আধুনিক সমন্বয়',
      description:
        'আমরা কুরআন-সুন্নাহর শিক্ষার পাশাপাশি বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের উপর সমান গুরুত্বারোপ করি।',
    },
    {
      id: 3,
      icon: HiHome,
      title: 'আবাসিক/অনাবাসিক সুব্যবস্থা',
      description:
        'দূরবর্তী ছাত্রদের জন্য রয়েছে নিরাপদ ও মানসম্মত আবাসিক হোস্টেলের সুব্যবস্থা।',
    },
    {
      id: 4,
      icon: HiSparkles,
      title: 'মনোরম ও নিরাপদ পরিবেশ',
      description:
        'লেখাপড়ার জন্য একটি কোলাহলমুক্ত, সবুজ ও সম্পূর্ণ নিরাপদ পরিবেশ।',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#b24dff]/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#b24dff]" />
            <span className="text-sm font-semibold text-[#b24dff]">কেন আমাদের মাদ্রাসা</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            আমাদের বিশেষত্ব
          </h2>

          <p className="text-gray-600">
            আমরা শিক্ষার্থীদের জন্য সর্বোত্তম শিক্ষা পরিবেশ প্রদান করি
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#b24dff] hover:shadow-xl md:p-8"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-[#b24dff]/0 to-[#b24dff]/0 transition-all duration-300 group-hover:from-[#b24dff]/5 group-hover:to-[#b24dff]/10" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex rounded-lg bg-[#b24dff]/10 p-3 transition-all group-hover:bg-[#b24dff] group-hover:text-white">
                    <Icon
                      className="text-[#b24dff] transition-colors group-hover:text-white"
                      size={28}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold text-black transition-colors group-hover:text-[#b24dff] md:text-xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>

                {/* Border accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b24dff] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
