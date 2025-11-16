'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import { HiBellAlert } from 'react-icons/hi2';

const NoticesPage = () => {
    // সমস্ত হিন্দি অক্ষর এবং শব্দগুলো সঠিকভাবে বাংলায় রূপান্তর করা হয়েছে
    const notices = [
        {
            id: 1,
            title: "বার্ষিক পরীক্ষার ফলাফল ঘোষণা",
            shortText: "বার্ষিক পরীক্ষার ফলাফল আগামী রবিবার প্রকাশিত হবে।",
            date: "২৫ অক্টোবর ২০২৪", // সংখ্যাগুলি বাংলায় পরিবর্তন করা হয়েছে
            category: "শিক্ষা সংক্রান্ত", // বানান ঠিক করা হয়েছে
        },
        {
            id: 2,
            title: "শিক্ষা সফর ২০২৪-এর জন্য নিবন্ধন",
            shortText: "শিক্ষা সফর ২০২৪-এর জন্য নাম নিবন্ধনের শেষ তারিখ।",
            date: "২২ অক্টোবর ২০২৪",
            category: "কর্মসূচি", // বানান ঠিক করা হয়েছে
        },
        {
            id: 3,
            title: "মাসিক বেতন পরিশোধ সম্পর্কে",
            shortText: "মাসিক বেতন পরিশোধ সম্পর্কিত জরুরি বিজ্ঞপ্তি।",
            date: "১৮ অক্টোবর ২০২৪",
            category: "প্রশাসনিক", // বানান ঠিক করা হয়েছে
        },
        {
            id: 4,
            title: "নতুন ক্লাসের সময়সূচি প্রকাশ",
            shortText: "নতুন ক্লাসের সময়সূচি প্রকাশ।",
            date: "১৫ অক্টোবর ২০২৪",
            category: "একাডেমিক", // বানান ঠিক করা হয়েছে
        },
        {
            id: 5,
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            shortText: "বার্ষিক ক্রীড়া প্রতিযোগিতার তারিখ ঘোষণা।",
            date: "১০ অক্টোবর ২০২৪",
            category: "ক্রীড়া", // বানান ঠিক করা হয়েছে
        },
    ];

    const getCategoryColor = (category) => {
        // ক্যাটাগরির নামগুলো সঠিক বাংলা বানানে আপডেট করা হয়েছে
        const colors = {
            'শিক্ষা সংক্রান্ত': 'bg-blue-100 text-blue-700 border-blue-300',
            'কর্মসূচি': 'bg-green-100 text-green-700 border-green-300',
            'প্রশাসনিক': 'bg-orange-100 text-orange-700 border-orange-300',
            'একাডেমিক': 'bg-purple-100 text-purple-700 border-purple-300',
            'ক্রীড়া': 'bg-red-100 text-red-700 border-red-300',
        };
        return colors[category] || 'bg-gray-100 text-gray-700 border-gray-300';
    };

    return (
        <main className="w-full bg-white min-h-screen pt-10">
            {/* Header Section */}
            <div className="w-full bg-linear-to-r from-[#b24dff] to-[#9933ff] py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <HiBellAlert className="text-yellow-300" size={32} />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            সকল নোটিশ 
                        </h1>
                    </div>
                    <p className="text-white/90 text-base md:text-lg">
                        মাদ্রাসার সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তথ্য 
                    </p>
                </div>
            </div>

            {/* Notices List Section */}
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#b24dff] font-semibold mb-8 hover:gap-3 transition-all"
                >
                    <HiArrowSmallLeft size={20} />
                    হোম পেজে ফিরে যান 
                </Link>

                {/* Notices Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {notices.map((notice) => (
                        <Link
                            key={notice.id}
                            href={`/notices/${notice.id}`}
                            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Category Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(notice.category)}`}>
                                {notice.category}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Date */}
                                <p className="text-xs text-gray-500 mb-3">
                                    {notice.date}
                                </p>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#b24dff] transition-colors line-clamp-2">
                                    {notice.title}
                                </h3>

                                {/* Short Text */}
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {notice.shortText}
                                </p>

                                {/* Read More Button */}
                                <div className="flex items-center gap-2 text-[#b24dff] font-semibold text-sm group-hover:gap-3 transition-all">
                                    সম্পূর্ণ পড়ুন {/* 'पूर्ण पढ़ून' থেকে পরিবর্তন করা হয়েছে */}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>

                            {/* Bottom Border Animation */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#b24dff] to-[#9933ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default NoticesPage;