'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HiTrash,
  HiPencilSquare,
  HiCalendarDays,
  HiEye,
  HiBellAlert,
} from 'react-icons/hi2';

const NoticeList = ({ notices = [], onDelete, isAdmin = false }) => {
  const [expandedNotice, setExpandedNotice] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const getCategoryColor = (category) => {
    const colors = {
      'শিক্ষা সম্পর্কিত': 'bg-blue-100 text-blue-700',
      'কার্যক্রম': 'bg-green-100 text-green-700',
      'প্রশাসনিক': 'bg-orange-100 text-orange-700',
      'একাডেমিক': 'bg-purple-100 text-purple-700',
      'ক্রীড়া': 'bg-red-100 text-red-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const calculateDaysLeft = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('bn-BD', options);
  };

  if (notices.length === 0) {
    return (
      <div className="w-full bg-white rounded-xl shadow-md p-8 text-center">
        <HiBellAlert className="mx-auto text-gray-300 mb-4" size={48} />
        <p className="text-gray-500 font-medium">কোনো নোটিশ পোস্ট করা হয়নি।</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notices.map((notice) => {
        const daysLeft = calculateDaysLeft(notice.expiryDate);
        const isExpiringSoon = daysLeft <= 3 && daysLeft > 0;
        const isExpired = daysLeft <= 0;

        return (
          <div
            key={notice._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border-l-4 border-[#b24dff]"
          >
            <div className="p-5 md:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        notice.category
                      )}`}
                    >
                      {notice.category}
                    </span>
                    {isExpiringSoon && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                        শীঘ্রই শেষ হবে
                      </span>
                    )}
                    {isExpired && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        মেয়াদোত্তীর্ণ
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#b24dff] transition-colors cursor-pointer">
                    {notice.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {notice.shortDescription}
                  </p>
                </div>

                {/* Action Buttons */}
                {isAdmin && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setExpandedNotice(
                          expandedNotice === notice._id ? null : notice._id
                        )
                      }
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                      title="সম্পূর্ণ দেখুন"
                    >
                      <HiPencilSquare className="text-blue-600" size={20} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(notice._id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      title="মুছে ফেলুন"
                    >
                      <HiTrash className="text-red-600" size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 border-t pt-3">
                <div className="flex items-center gap-1">
                  <HiCalendarDays size={16} />
                  <span>{formatDate(notice.createdAt)}</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="font-semibold">মেয়াদ:</span>
                  <span className={isExpired ? 'text-red-600 font-semibold' : ''}>
                    {daysLeft > 0 ? `${daysLeft} দিন বাকি` : 'মেয়াদোত্তীর্ণ'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <HiEye size={16} />
                  <span>{notice.views || 0} বার দেখা হয়েছে</span>
                </div>

                {notice.postedBy && (
                  <div className="text-xs text-gray-500">
                    প্রকাশক: {notice.postedBy.name}
                  </div>
                )}
              </div>

              {/* Delete Confirmation */}
              {deleteConfirm === notice._id && (
                <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-lg">
                  <p className="text-red-700 font-medium mb-3">
                    আপনি কি সত্যিই এই নোটিশটি মুছে ফেলতে চান?
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onDelete(notice._id);
                        setDeleteConfirm(null);
                      }}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      মুছে ফেলুন
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                    >
                      বাতিল
                    </button>
                  </div>
                </div>
              )}

              {/* Expanded Description */}
              {expandedNotice === notice._id && (
                <div className="mt-4 pt-4 border-t">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      বিস্তারিত:
                    </h4>
                    <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoticeList;
