'use client';

import React, { useState, useEffect } from 'react';
import { HiAcademicCap, HiUsers, HiUserGroup, HiCheckCircle } from 'react-icons/hi2';

const Statistics = () => {
  const [stats, setStats] = useState([
    { id: 1, number: 1950, text: 'প্রতিষ্ঠিত সাল', icon: HiAcademicCap },
    { id: 2, number: 1200, text: 'মোট ছাত্র-ছাত্রী', icon: HiUsers },
    { id: 3, number: 40, text: 'অভিজ্ঞ শিক্ষক', icon: HiUserGroup },
    { id: 4, number: 98, text: 'বোর্ড পরীক্ষার পাশের হার %', icon: HiCheckCircle },
  ]);

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.number / 30);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });
      }, 50);

      return interval;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [stats]);

  return (
    <section className="w-full bg-linear-to-r from-[#b24dff]/5 to-[#b24dff]/10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            এক নজরে মাদ্রাসা
          </h2>
          <p className="text-gray-600">আমাদের সাফল্যের গল্প সংখ্যায়</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group rounded-xl border border-[#b24dff]/20 bg-white/50 p-6 text-center backdrop-blur transition-all duration-300 hover:border-[#b24dff]/50 hover:bg-white hover:shadow-lg md:p-8"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[#b24dff]/10 p-4 transition-all group-hover:bg-[#b24dff] group-hover:text-white">
                    <Icon className="text-[#b24dff] transition-colors group-hover:text-white" size={32} />
                  </div>
                </div>

                <div className="mb-2">
                  <h3 className="text-3xl font-bold text-[#b24dff] md:text-4xl">
                    {counts[index]}
                    {stat.id === 4 ? '%' : '+'}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 md:text-base">{stat.text}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-xl bg-white p-6 shadow-md md:p-8">
          <p className="text-center text-sm text-gray-700 md:text-base">
            আমরা গর্বিত যে আমাদের শিক্ষার্থীরা প্রতি বছর উচ্চ মানের ফলাফল অর্জন করছে।
            আমাদের অভিজ্ঞ শিক্ষক দল এবং আধুনিক সুবিধা শিক্ষার্থীদের সর্বোচ্চ পর্যায়ের শিক্ষা প্রদান করে থাকে।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
