'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';

const AttendanceSearch = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    class: '',
    studentId: '',
    month: '',
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

  const months = [
    'নভেম্বর ২০২৫',
    'অক্টোবর ২০২৫',
    'সেপ্টেম্বর ২০২৫',
    'আগস্ট ২০২৫',
    'জুলাই ২০२५',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleSearch = () => {
    if (!searchData.class || !searchData.studentId || !searchData.month) {
      toast.error('অনুগ্রহ করে সকল তথ্য পূরণ করুন');
      return;
    }

    onSearch(searchData);
    toast.success('রিপোর্ট খুঁজছি...');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-[#b24dff] mb-6">হাজিরা রিপোর্ট অনুসন্ধান করুন</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
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
            স্টুডেন্ট আইডি <span className="text-red-500">*</span>
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
            মাস <span className="text-red-500">*</span>
          </label>
          <select
            name="month"
            value={searchData.month}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
          >
            <option value="">নির্বাচন করুন</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
      >
        <FaSearch />
        রিপোর্ট দেখুন
      </button>
    </div>
  );
};

export default AttendanceSearch;
