'use client';

import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiBellAlert } from 'react-icons/hi2';
import Link from 'next/link';

const WelcomeNotice = () => {
  const [expandedNotice, setExpandedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      text: 'বার্ষিক পরীক্ষার ফলাফল আগামী রবিবার প্রকাশিত হবে।',
    },
    {
      id: 2,
      text: 'শিক্ষাসফর ২০২৪-এর জন্য নাম নিবন্ধনের শেষ তারিখ।',
    },
    {
      id: 3,
      text: 'মাসিক বেতন পরিশোধ সংক্রান্ত জরুরি বিজ্ঞপ্তি।',
    },
    {
      id: 4,
      text: 'নতুন ক্লাসের সময়সূচী প্রকাশ।',
    },
    {
      id: 5,
      text: 'বার্ষিক ক্রীড়া প্রতিযোগিতার তারিখ ঘোষণা।',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Welcome Message */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#b24dff]/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#b24dff]" />
              <span className="text-sm font-semibold text-[#b24dff]">আমাদের সম্পর্কে</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">
              স্বাগত জানাই
            </h2>

            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              আসসালামু আলাইকুম। মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসার অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম। ১৯৫০ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি দীর্ঘ সময় ধরে সুনামের সাথে দ্বীনি ও আধুনিক শিক্ষার আলো ছড়িয়ে আসছে।
            </p>

            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              আমরা শিক্ষার্থীদের নৈতিক ও একাডেমিক উভয় দিকেই পারদর্শী করে তুলতে বদ্ধপরিকর। আমাদের লক্ষ্য এমন একটি প্রজন্ম তৈরি করা যারা দ্বীনি জ্ঞান এবং আধুনিক শিক্ষার সমন্বয়ে একটি সুন্দর ভবিষ্যৎ গড়তে সক্ষম হবে।
            </p>

            <button className="inline-flex w-fit items-center gap-2 rounded-lg border-2 border-[#b24dff] px-6 py-3 text-sm font-semibold text-[#b24dff] transition-all hover:bg-[#b24dff] hover:text-white md:text-base">
              সম্পূর্ণ পড়ুন
              <HiArrowNarrowRight size={18} />
            </button>
          </div>

          {/* Notice Board */}
          <div className="flex flex-col">
            <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-2">
              <HiBellAlert className="text-red-500" size={18} />
              <span className="text-sm font-semibold text-red-600">সর্বশেষ নোটিশ</span>
            </div>

            <h3 className="mb-6 text-3xl font-bold text-black md:text-4xl">
              গুরুত্বপূর্ণ ঘোষণা
            </h3>

            <div className="flex flex-col gap-3">
              {notices.map((notice) => (
                <button
                  key={notice.id}
                  onClick={() =>
                    setExpandedNotice(expandedNotice === notice.id ? null : notice.id)
                  }
                  className={`text-left transition-all duration-300 ${
                    expandedNotice === notice.id
                      ? 'bg-[#b24dff]/10 border-l-4 border-[#b24dff]'
                      : 'bg-gray-50 border-l-4 border-transparent hover:bg-gray-100'
                  } rounded-r-lg p-4`}
                >
                  <div className="flex items-start gap-3">
                    <HiArrowNarrowRight className="mt-1 shrink-0 text-[#b24dff]" size={18} />
                    <p className="text-sm font-medium text-gray-800 md:text-base">
                      {notice.text}
                    </p>
                  </div>
                  {expandedNotice === notice.id && (
                    <div className="mt-3 ml-6 border-t border-[#b24dff]/20 pt-3 text-xs text-gray-600">
                      <p>এই বিষয়ে আরও তথ্যের জন্য অফিসে যোগাযোগ করুন।</p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#b24dff]/20 bg-[#b24dff]/5 p-4">
              <Link 
                href="/notices"
                className="block text-center text-sm text-gray-700 hover:text-[#b24dff] transition-colors"
              >
                <span className="font-semibold text-[#b24dff]">সকল নোটিশ</span> দেখতে এখানে ক্লিক করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeNotice;
