'use client';

import React from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const AdmissionInstructions = () => {
  const instructions = [
    'ফর্মটি পূরণ করার আগে একটি পাসপোর্ট সাইজের ছবি এবং জন্ম নিবন্ধনের স্ক্যান কপি প্রস্তুত রাখুন।',
    'সকল তথ্য অবশ্যই বাংলা এবং ইংরেজিতে সঠিকভাবে পূরণ করুন।',
    'লাল তারকা (*) চিহ্নিত ঘরগুলো অবশ্যই পূরণ করতে হবে।',
    'মোবাইল নম্বর সঠিক হতে হবে কারণ এতে নোটিফিকেশন পাঠানো হবে।',
    'অভিভাবকের যোগাযোগ বিবরণ সঠিক এবং আপডেট থাকা অত্যন্ত গুরুত্বপূর্ণ।',
  ];

  return (
    <section className="py-12 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="text-yellow-600 text-2xl mt-1 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-4">
                গুরুত্বপূর্ণ নির্দেশনা
              </h3>
              <ul className="space-y-3">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-sm md:text-base">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInstructions;
