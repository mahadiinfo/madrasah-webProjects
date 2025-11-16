'use client';

import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#b24dff]">
          আমাদের লক্ষ্য ও উদ্দেশ্য
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#b24dff]">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-[#b24dff] text-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#b24dff]">আমাদের লক্ষ্য</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              দ্বীনি শিক্ষার পাশাপাশি আধুনিক ও প্রযুক্তিভিত্তিক শিক্ষা প্রদান করে প্রত্যেক শিক্ষার্থীকে নৈতিক ও একাডেমিকভাবে যোগ্য নাগরিক হিসেবে গড়ে তোলা। আমরা বিশ্বাস করি যে প্রকৃত শিক্ষা হল আত্মার উন্নতি এবং সমাজের কল্যাণের সমন্বয়।
            </p>

            {/* Mission Highlights */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">ইসলামি নৈতিকতার উপর প্রতিষ্ঠিত শিক্ষা</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">আধুনিক বিজ্ঞান ও প্রযুক্তির সমন্বয়</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">সর্বাঙ্গীণ ব্যক্তিত্ব বিকাশ</p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#b24dff]">
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-[#b24dff] text-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#b24dff]">আমাদের দৃষ্টিভঙ্গি</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              এমন এক প্রজন্ম তৈরি করা যারা ইহকালীন ও পরকালীন কল্যাণে সমাজে নেতৃত্ব দিতে সক্ষম। আমরা স্বপ্ন দেখি এমন একটি বিশ্বের যেখানে আমাদের ছাত্ররা জ্ঞানের আলোয় উজ্জ্বল হয়ে দেশ ও জাতির সেবায় নিয়োজিত থাকবে।
            </p>

            {/* Vision Highlights */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">বৈশ্বিক মানের শিক্ষা প্রদান</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">সামাজিক দায়বদ্ধতা সম্পন্ন নাগরিক</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#b24dff] font-bold">✓</span>
                <p className="text-sm text-gray-600">উদ্ভাবনী চিন্তাভাবনার চর্চা</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
