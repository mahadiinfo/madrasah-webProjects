'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ResultSearch = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    examName: '',
    class: '',
    studentId: '',
    captchaAnswer: '',
  });

  const classes = [
    'চতুর্থ',
    'পঞ্চম',
    'ষষ্ঠ',
    'সপ্তম',
    'অষ্টম',
    'নবম',
    'দশম',
    'দাখিল প্রথম বর্ষ',
    'দাখিল দ্বিতীয় বর্ষ',
    'আলিম প্রথম বর্ষ',
  ];

  const examNames = ['বার্ষিক', 'অর্ধ-বার্ষিক', 'ত্রৈমাসিক'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = () => {
    if (!searchData.examName || !searchData.class || !searchData.studentId || !searchData.captchaAnswer) {
      toast.error('অনুগ্রহ করে সকল তথ্য পূরণ করুন');
      return;
    }

    if (searchData.captchaAnswer !== '8') {
      toast.error('ক্যাপচা উত্তর সঠিক নয়');
      return;
    }

    onSearch(searchData);
    toast.success('ফলাফল খুঁজছি...');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#b24dff] mb-6">ফলাফল অনুসন্ধান করুন</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            পরীক্ষার নাম <span className="text-red-500">*</span>
          </label>
          <select
            name="examName"
            value={searchData.examName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
          >
            <option value="">নির্বাচন করুন</option>
            {examNames.map((exam) => (
              <option key={exam} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            শ্রেণি <span className="text-red-500">*</span>
          </label>
          <select
            name="class"
            value={searchData.class}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
          >
            <option value="">নির্বাচন করুন</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            স্টুডেন্ট আইডি / রোল নম্বর <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentId"
            value={searchData.studentId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
            placeholder="রোল নম্বর"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ক্যাপচা: ৫ + ৩ = ? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="captchaAnswer"
            value={searchData.captchaAnswer}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
            placeholder="উত্তর"
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
      >
        <FaSearch />
        ফলাফল দেখুন
      </button>
    </div>
  );
};

export default ResultSearch;
