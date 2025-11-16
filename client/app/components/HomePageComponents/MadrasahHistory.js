'use client';

import React from 'react';
import Image from 'next/image';
import bgImage from '@/public/assets/bgImage.jpg';

const MadrasahHistory = () => {
  const milestones = [
    { year: '১৯৫০', title: 'প্রতিষ্ঠা', description: 'মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা প্রতিষ্ঠিত হয়' },
    { year: '১৯৭৫', title: 'সম্প্রসারণ', description: 'স্কুল সেকশন এবং প্রি-প্রাইমারি সংযোজন' },
    { year: '২০০০', title: 'আধুনিকীকরণ', description: 'কম্পিউটার ল্যাব এবং লাইব্রেরি স্থাপন' },
    { year: '২০২০', title: 'ডিজিটাল যুগ', description: 'অনলাইন ক্লাস এবং ডিজিটাল পরীক্ষা ব্যবস্থা' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#b24dff]">
          আমাদের গৌরবময় ইতিহাস
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={bgImage}
              alt="মাদ্রাসা ভবন"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              ১৯৫০ সালে এলাকার গণ্যমান্য ব্যক্তিবর্গের উদ্যোগে মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা প্রতিষ্ঠিত হয়। একটি ছোট টিনের ঘর থেকে শুরু করে আজ এটি এই অঞ্চলের অন্যতম সেরা বিদ্যাপীঠ হিসেবে পরিচিত। গত সাত দশকে আমরা হাজারো শিক্ষার্থীকে আলোকিত জ্ঞানের পথ দেখিয়েছি।
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border-l-4 border-[#b24dff] bg-linear-to-r from-[#b24dff]/10 to-transparent hover:from-[#b24dff]/20 transition-colors duration-300"
                >
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#b24dff] text-white font-bold">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#b24dff]">{milestone.title}</h4>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadrasahHistory;
