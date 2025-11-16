'use client';

import React from 'react';
import Image from 'next/image';
import bgimage from '@/public/assets/bgImage.jpg';

const PrincipalMessage = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#b24dff]/5 to-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#b24dff]/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#b24dff]" />
            <span className="text-sm font-semibold text-[#b24dff]">অধ্যক্ষের বাণী</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            নেতৃত্বের কণ্ঠস্বর
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {/* Left: Principal Image */}
          <div className="flex flex-col items-center justify-start lg:col-span-1">
            <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-xl border-4 border-[#b24dff] shadow-lg">
              <Image
                src={bgimage}
                alt="অধ্যক্ষ"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-black">মাওলানা মুহাম্মদ হাবিবুর রহমান</h3>
              <p className="mt-2 text-sm text-[#b24dff] font-semibold">অধ্যক্ষ</p>
              <p className="text-xs text-gray-600 mt-1">
                মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা
              </p>
            </div>
          </div>

          {/* Right: Message */}
          <div className="flex flex-col justify-center lg:col-span-2">
            <div className="space-y-4 rounded-xl border border-[#b24dff]/20 bg-white p-6 md:p-8">
              <div className="text-4xl text-[#b24dff] opacity-50">❝</div>

              <p className="text-justify leading-relaxed text-gray-700">
                আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। আমরা অত্যন্ত আনন্দিত যে আপনি আমাদের প্রতিষ্ঠানের ওয়েবসাইট পরিদর্শন করেছেন। মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা দীর্ঘ ৭০ বছরের ঐতিহ্য এবং সাফল্যের সাথে শিক্ষা প্রদান করে আসছে।
              </p>

              <p className="text-justify leading-relaxed text-gray-700">
                আমাদের মূল লক্ষ্য এমন একটি প্রজন্ম তৈরি করা যারা দ্বীনি জ্ঞান এবং দুনিয়াবি শিক্ষা উভয় ক্ষেত্রেই পারদর্শী হবে। আমরা বিশ্বাস করি যে একজন শিক্ষিত মানুষই সমাজের সত্যিকারের উন্নয়নের সুচক হতে পারে।
              </p>

              <p className="text-justify leading-relaxed text-gray-700">
                আমাদের অভিজ্ঞ শিক্ষক দল, আধুনিক শিক্ষা পদ্ধতি এবং সুস্থ পরিবেশ নিশ্চিত করে যে প্রতিটি শিক্ষার্থী তার সর্বোচ্চ সম্ভাবনায় পৌঁছাতে পারে। আমরা ক্রমাগত আমাদের সেবার মান উন্নত করছি এবং শিক্ষায় নতুন মাত্রা যোগ করছি।
              </p>

              <p className="text-justify leading-relaxed text-gray-700">
                আপনাদের সন্তানদের ভবিষ্যৎ উজ্জ্বল করার জন্য আমরা প্রতিশ্রুতিবদ্ধ। আল্লাহ আমাদের এই মহান উদ্দেশ্য সফল করুন এবং আমাদের কাজকে সঠিক পথে পরিচালিত করুন। আমীন।
              </p>

              <div className="border-t border-[#b24dff]/20 pt-4">
                <p className="font-semibold text-[#b24dff]">ওয়া সালামু আলাইকুম ওয়া রাহমাতুল্লাহ ওয়া বারাকাতুহু</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#b24dff] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-105 md:text-base">
                যোগাযোগ করুন
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border-2 border-[#b24dff] px-6 py-3 text-sm font-semibold text-[#b24dff] transition-all hover:bg-[#b24dff] hover:text-white md:text-base">
                অফিস পরিদর্শন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
