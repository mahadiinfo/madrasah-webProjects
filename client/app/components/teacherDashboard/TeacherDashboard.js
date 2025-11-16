'use client';

import React from 'react';
import { FaUsers, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

const TeacherDashboard = () => {
  const widgets = [
    {
      icon: <FaUsers className="text-4xl" />,
      label: 'আজকের মোট উপস্থিতি',
      value: '৮৫%',
      subtitle: '(৫৫০/৬৫০ জন)',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      label: 'ফলাফল জমা',
      value: '৩',
      subtitle: 'বিষয়',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      label: 'অপেক্ষমান কাজ',
      value: '৫',
      subtitle: 'নোটিফিকেশন',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const quickActions = [
    { label: 'হাজিরা নিন', href: '/teacher-panel/attendance', icon: '📋' },
    { label: 'ফলাফল জমা দিন', href: '/teacher-panel/results', icon: '📊' },
    { label: 'শিক্ষার্থী দেখুন', href: '/teacher-panel/students', icon: '👥' },
  ];

  return (
    <div className="p-8">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          স্বাগতম, শিক্ষক সাহেব
        </h1>
        <p className="text-gray-600">আজ আপনার কর্মক্ষেত্র দেখুন এবং পরিচালনা করুন</p>
      </div>

      {/* Widgets */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className={`bg-linear-to-br ${widget.color} text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>{widget.icon}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{widget.label}</h3>
            <p className="text-3xl font-bold mb-2">{widget.value}</p>
            <p className="text-sm opacity-90">{widget.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">দ্রুত কাজ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-white border-2 border-[#b24dff] rounded-lg p-4 text-center hover:bg-[#b24dff] hover:text-white transition-colors group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
              <p className="font-semibold">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Admin Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">প্রশাসক নোটিশ</h3>
        <p className="text-yellow-700">
          আগামীকাল মাদ্রাসায় বিশেষ সমাবেশ অনুষ্ঠিত হবে। সকল শিক্ষকদের সকাল ৭:৩০ এ উপস্থিত থাকার অনুরোধ জানানো হচ্ছে।
        </p>
      </div>
    </div>
  );
};

export default TeacherDashboard;
