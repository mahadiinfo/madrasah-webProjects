'use client';

import React from 'react';
import { FaBook, FaUsers, FaAward, FaChalkboardUser, FaHeartPulse, FaLaptop } from 'react-icons/fa6';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: 'মানসম্পন্ন শিক্ষা',
      description: 'আন্তর্জাতিক মানের পাঠ্যক্রম এবং অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত শিক্ষা'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'ছোট ক্লাস সাইজ',
      description: 'প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ প্রদানের জন্য সীমিত শিক্ষার্থী সংখ্যা'
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'প্রমাণিত ফলাফল',
      description: 'গত দশকে বোর্ড পরীক্ষায় শতভাগ সফলতা এবং জিপিএ-৫ প্রাপ্তকারী শিক্ষার্থী'
    },
    {
      icon: <FaChalkboardUser className="w-8 h-8" />,
      title: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
      description: 'আন্তর্জাতিক প্রশিক্ষণপ্রাপ্ত এবং যোগ্য শিক্ষকদের দল'
    },
    {
      icon: <FaHeartPulse className="w-8 h-8" />,
      title: 'সামগ্রিক উন্নয়ন',
      description: 'শারীরিক, মানসিক এবং আধ্যাত্মিক বিকাশের সর্বোত্তম পরিবেশ'
    },
    {
      icon: <FaLaptop className="w-8 h-8" />,
      title: 'আধুনিক সুবিধা',
      description: 'অত্যাধুনিক ল্যাব, লাইব্রেরি, ইন্টারনেট এবং ক্লাসরুম প্রযুক্তি'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b24dff]">
            কেন আমাদের মাদ্রাসা সেরা?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমরা শুধুমাত্র শিক্ষা প্রদান করি না, আমরা ভবিষ্যৎ নেতা তৈরি করি। আমাদের বিশেষত্ব এবং শ্রেষ্ঠত্ব নিচে উপস্থাপিত হয়েছে।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-linear-to-br from-[#b24dff]/10 to-transparent border border-[#b24dff]/20 hover:border-[#b24dff]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-[#b24dff] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
