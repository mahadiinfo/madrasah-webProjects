'use client';

import React from 'react';
import { FaClipboardList, FaComments, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const AdminDashboard = () => {
  const activities = [
    { id: 1, message: 'শিক্ষক ক ৯ম শ্রেণির হাজিরা নিয়েছেন', time: 'সকাল ৯:৩০' },
    { id: 2, message: 'শিক্ষক খ লগইন করেছেন', time: 'সকাল ৯:২৮' },
    { id: 3, message: 'নতুন ভর্তি আবেদন জমা হয়েছে', time: 'গতকাল ৪:১৫ PM' },
    { id: 4, message: 'ফলাফল আপডেট করা হয়েছে', time: 'গতকাল ১০:০০ AM' },
  ];

  const widgets = [
    {
      icon: <FaClipboardList className="text-4xl text-white" />,
      label: 'নতুন ভর্তির আবেদন',
      value: '৫টি',
      bgColor: 'from-orange-500 to-orange-600',
      href: '/admin/admissions'
    },
    {
      icon: <FaComments className="text-4xl text-white" />,
      label: 'নতুন মতামত',
      value: '২টি',
      bgColor: 'from-purple-500 to-purple-600',
      href: '/admin/messages'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-white" />,
      label: 'শিক্ষক (সক্রিয়)',
      value: '১২',
      bgColor: 'from-green-500 to-green-600',
      href: '/admin/manage-teachers'
    }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Welcome */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Admin প্যানেলে স্বাগতম
        </h1>
        <p className="text-sm sm:text-base text-gray-600">মাদ্রাসার সম্পূর্ণ ব্যবস্থাপনা এবং নিয়ন্ত্রণ</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {widgets.map((widget, index) => (
          <Link
            key={index}
            href={widget.href}
            className={`bg-linear-to-br ${widget.bgColor} text-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105`}
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="text-2xl md:text-4xl">{widget.icon}</div>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">{widget.label}</h3>
            <p className="text-2xl md:text-3xl font-bold mb-2">{widget.value}</p>
            <p className="text-xs md:text-sm opacity-90">আরও দেখুন →</p>
          </Link>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">সাম্প্রতিক কার্যক্রম</h2>

        <div className="space-y-3 md:space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-l-4 border-[#b24dff] bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-xl md:text-2xl mt-1 flex-shrink-0">📌</div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-800 font-semibold text-sm md:text-base break-words">{activity.message}</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
