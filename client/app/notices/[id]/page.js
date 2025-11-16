'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { HiArrowSmallLeft } from 'react-icons/hi2';
// HiBellAlert এর ব্যবহার না থাকায় তা সরিয়ে দেওয়া হয়েছে

const NoticeDetail = ({ params }) => {
    const { id } = use(params);
   
    const noticeId = parseInt(id);

    const notices = {
        1: {
            id: 1,
            title: "বার্ষিক পরীক্ষার ফলাফল ঘোষণা",
            fullContent: `
আমরা জানাচ্ছি যে, মাধ্যমিক স্তরের বার্ষিক পরীক্ষার ফলাফল আগামী রবিবার, ১৫ নভেম্বর ২০২৪ তারিখে সকাল ১০টায় প্রকাশিত হবে।

ফলাফল প্রকাশের পর শিক্ষার্থীরা আমাদের ওয়েবসাইটের ফলাফল বিভাগ থেকে তাদের রোল নম্বর দিয়ে ফলাফল দেখতে পারবে। 

যারা ফলাফল অনলাইনে দেখতে সমস্যার সম্মুখীন হবে তারা সরাসরি অফিসে এসে তাদের ফলাফল সংগ্রহ করতে পারবে।

গুরুত্বপূর্ণ তথ্য:
- ফলাফল প্রকাশের সময়: রবিবার সকাল ১০টা
- ফলাফল দেখার উপায়: ওয়েবসাইট বা অফিস
- কোনো সমস্যার জন্য যোগাযোগ করুন: ০১৭XX-XXXXXX
      `,
            date: "২৫ অক্টোবর ২০২৪",
            category: "শিক্ষা সংক্রান্ত", // সঠিক বাংলা বানান নিশ্চিত করা হয়েছে
            publishedBy: "একাডেমিক বিভাগ",
        },
        2: {
            id: 2,
            title: "শিক্ষা সফর ২০২৪-এর জন্য নিবন্ধন",
            fullContent: `
মাদ্রাসার আসন্ন শিক্ষা সফর ২০২৪ এর জন্য শিক্ষার্থীদের নাম নিবন্ধনের কাজ চলছে। 

এই সফরে শিক্ষার্থীরা বিভিন্ন ঐতিহাসিক ও শিক্ষামূলক স্থান পরিদর্শন করবে। সফরের বিবরণ নিম্নরূপ:

সফরের তথ্য:
- সফরের দিন: ২০ নভেম্বর - ২২ নভেম্বর ২০২৪
- গন্তব্য: নারায়ণগঞ্জ ও চট্টগ্রাম
- মোট খরচ: ৫০০০ টাকা
- নিবন্ধনের শেষ তারিখ: ৩০ অক্টোবর ২০২৪

আগ্রহী শিক্ষার্থীরা অফিসে যোগাযোগ করে তালিকায় নাম নিবন্ধন করে নেবে। সীমিত আসন থাকায় তাড়াতাড়ি নাম লেখানোর অনুরোধ রইল।
      `,
            date: "২২ অক্টোবর ২০২৪",
            category: "কর্মসূচি", // সঠিক বাংলা বানান নিশ্চিত করা হয়েছে
            publishedBy: "কর্মসূচি বিভাগ",
        },
        3: {
            id: 3,
            title: "মাসিক বেতন পরিশোধ সম্পর্কে",
            fullContent: `
মাদ্রাসার সকল শিক্ষক ও কর্মচারীদের জন্য গুরুত্বপূর্ণ বিজ্ঞপ্তি।

চলমান মাস (নভেম্বর ২০২৪) এর বেতন নিম্নরূপ সময়সূচি অনুসারে প্রদান করা হবে:

বেতন প্রদানের সময়সূচি:
- প্রথম সপ্তাহ (১-৭ নভেম্বর): বরাদ্দকৃত অংশ
- দ্বিতীয় সপ্তাহ (৮-১৫ নভেম্বর): অতিরিক্ত অংশ
- তৃতীয় সপ্তাহ (১৬-২৩ নভেম্বর): চূড়ান্ত প্রদান

প্রত্যেককে নির্ধারিত সময়ে তাদের একাউন্টে বেতন জমা হবে। যদি কোনো সমস্যা থাকে তবে অফিসে যোগাযোগ করুন।
      `,
            date: "১৮ অক্টোবর ২০২৪",
            category: "প্রশাসনিক", // সঠিক বাংলা বানান নিশ্চিত করা হয়েছে
            publishedBy: "প্রশাসন বিভাগ",
        },
        4: {
            id: 4,
            title: "নতুন ক্লাসের সময়সূচি প্রকাশ",
            fullContent: `
চলমান সেশনের জন্য সকল ক্লাসের নতুন সময়সূচি প্রকাশ করা হয়েছে।

নতুন সময়সূচি অনুসারে:
- প্রথম ক্লাস: সকাল ৮টা থেকে ৮:৪৫ পর্যন্ত
- পরবর্তী ক্লাসগুলো: প্রত্যেক ৪৫ মিনিটের ব্যবধানে
- দুপুরের খাবারের ছুটি: ১:০০টা থেকে ১:৩০টা পর্যন্ত
- শেষ ক্লাস: বিকেল ৪:৩০টায় শেষ হবে

সকল শিক্ষার্থী ও শিক্ষককে নতুন সময়সূচি মেনে চলার অনুরোধ রইল। সম্পূর্ণ সময়সূচি অফিসের বুলেটিন বোর্ড এবং ওয়েবসাইটে পাওয়া যাবে।
      `,
            date: "১৫ অক্টোবর ২০২৪",
            category: "একাডেমিক",
            publishedBy: "একাডেমিক বিভাগ",
        },
        5: {
            id: 5,
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            fullContent: `
মাদ্রাসার বার্ষিক ক্রীড়া প্রতিযোগিতা আয়োজনের জন্য ঘোষণা করা হয়েছে।

প্রতিযোগিতার বিবরণ:
- তারিখ: ২৫ নভেম্বর - ২৭ নভেম্বর ২০২৪
- স্থান: মাদ্রাসার খেলার মাঠ
- খেলার ধরণ: ক্রিকেট, ফুটবল, ব্যাডমিন্টন, দৌড় এবং অন্যান্য খেলা

সকল শিক্ষার্থী তাদের পছন্দের খেলায় অংশ নেওয়ার জন্য তাদের নাম অফিসে জমা দিতে পারবে। এই প্রতিযোগিতায় অংশ নেওয়া সম্পূর্ণ বিনামূল্যে এবং বাধ্যতামূলক নয়।

বিজয়ীদের পুরস্কার ও সার্টিফিকেট দেওয়া হবে।
      `,
            date: "১০ অক্টোবর ২০২৪",
            category: "ক্রীড়া", // সঠিক বাংলা বানান নিশ্চিত করা হয়েছে
            publishedBy: "ক্রীড়া বিভাগ", // সঠিক বাংলা বানান নিশ্চিত করা হয়েছে
        },
    };

    const notice = notices[noticeId];

    if (!notice) {
        return (
            <main className="w-full bg-white min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">নোটিশ খুঁজে পাওয়া যাচ্ছে না</h1>
                    <Link
                        href="/notices"
                        className="inline-flex items-center gap-2 text-[#b24dff] font-semibold hover:gap-3 transition-all"
                    >
                        <HiArrowSmallLeft size={20} />
                        সকল নোটিশে ফিরুন
                    </Link>
                </div>
            </main>
        );
    }

    const getCategoryColor = (category) => {
        // ক্যাটাগরির নামগুলো সঠিক বাংলা বানানে আপডেট করা হয়েছে
        const colors = {
            'শিক্ষা সংক্রান্ত': 'bg-blue-100 text-blue-700',
            'কর্মসূচি': 'bg-green-100 text-green-700',
            'প্রশাসনিক': 'bg-orange-100 text-orange-700',
            'একাডেমিক': 'bg-purple-100 text-purple-700',
            'ক্রীড়া': 'bg-red-100 text-red-700',
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    return (
        <main className="w-full bg-white min-h-screen pt-24">
            {/* Header Section */}
            <div className="w-full bg-linear-to-r from-[#b24dff] to-[#9933ff] py-12 md:py-16">
                <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
                    <Link
                        href="/notices"
                        className="inline-flex items-center gap-2 text-white/90 font-semibold mb-6 hover:gap-3 transition-all hover:text-white"
                    >
                        <HiArrowSmallLeft size={20} />
                        সকল নোটিশ
                    </Link>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {notice.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(notice.category)}`}>
                            {notice.category}
                        </span>
                        <span>•</span>
                        <span>{notice.date}</span>
                        <span>•</span>
                        <span>প্রকাশক: {notice.publishedBy}</span> {/* প্রকাশক শব্দটি বাংলা করা হয়েছে */}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">
                        {notice.fullContent.split('\n').map((paragraph, index) => (
                            paragraph.trim() && (
                                <p
                                    key={index}
                                    className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap"
                                >
                                    {paragraph.trim()}
                                </p>
                            )
                        ))}
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <Link
                        href="/notices"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#b24dff] text-white font-semibold rounded-lg hover:bg-[#9933ff] transition-colors"
                    >
                        <HiArrowSmallLeft size={20} />
                        সকল নোটিশ দেখুন
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NoticeDetail;