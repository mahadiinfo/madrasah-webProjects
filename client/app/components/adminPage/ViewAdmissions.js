'use client';

import React, { useState } from 'react';
import { FaEye, FaCheck, FaTimes, FaChevronDown } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ViewAdmissions = () => {
  const [admissions, setAdmissions] = useState([
    { id: 1, name: 'আবদুল্লাহ', class: 'পঞ্চম', date: '११-१०-२५', status: 'Pending' },
    { id: 2, name: 'ফাতিমা', class: 'ষষ্ঠ', date: '१०-११-२५', status: 'Approved' },
    { id: 3, name: 'করিম', class: 'সপ্তম', date: '०९-११-२५', status: 'Pending' },
    { id: 4, name: 'জেশিকা', class: 'পঞ্চম', date: '०८-११-२५', status: 'Rejected' },
    { id: 5, name: 'হোসেন', class: 'অষ্টম', date: '०७-११-२५', status: 'Pending' },
  ]);

  const [expandedId, setExpandedId] = useState(null);

  const handleApprove = (id) => {
    setAdmissions(admissions.map(app =>
      app.id === id ? { ...app, status: 'Approved' } : app
    ));
    toast.success('ভর্তি অনুমোদিত হয়েছে');
  };

  const handleReject = (id) => {
    setAdmissions(admissions.map(app =>
      app.id === id ? { ...app, status: 'Rejected' } : app
    ));
    toast.error('ভর্তি প্রত্যাখ্যান করা হয়েছে');
  };

  const handleViewDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
    toast.success('বিস্তারিত তথ্য লোড হচ্ছে');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'Approved':
        return 'অনুমোদিত';
      case 'Rejected':
        return 'প্রত্যাখ্যাত';
      case 'Pending':
        return 'অপেক্ষমান';
      default:
        return status;
    }
  };

  return (
    <div className="p-4 md:p-8 font-hind-siliguri bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">ভর্তি আবেদন</h1>
        <p className="text-sm md:text-base text-gray-600">মোট আবেদন: {admissions.length}</p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-[#b24dff] to-[#9933ff] text-white">
                <th className="px-4 py-3 text-left font-bold">নাম</th>
                <th className="px-4 py-3 text-left font-bold">শ্রেণি</th>
                <th className="px-4 py-3 text-left font-bold">জমার তারিখ</th>
                <th className="px-4 py-3 text-center font-bold">স্ট্যাটাস</th>
                <th className="px-4 py-3 text-center font-bold">কাজ</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((admission) => (
                <tr key={admission.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-gray-900">{admission.name}</td>
                  <td className="px-4 py-3 text-gray-700">{admission.class}</td>
                  <td className="px-4 py-3 text-gray-700">{admission.date}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(admission.status)}`}>
                      {getStatusText(admission.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex gap-2 justify-center flex-wrap">
                      <button
                        onClick={() => handleViewDetails(admission.id)}
                        className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                        title="বিস্তারিত দেখুন"
                      >
                        <FaEye size={14} />
                        দেখুন
                      </button>
                      {admission.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(admission.id)}
                            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                            title="অনুমোদন করুন"
                          >
                            <FaCheck size={14} />
                            অনুমোদন
                          </button>
                          <button
                            onClick={() => handleReject(admission.id)}
                            className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                            title="প্রত্যাখ্যান করুন"
                          >
                            <FaTimes size={14} />
                            প্রত্যাখ্যান
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tablet View (grid) */}
      <div className="hidden md:grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {admissions.map((admission) => (
          <div
            key={admission.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-[#b24dff] overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{admission.name}</h3>
                  <p className="text-sm text-gray-600">শ্রেণি: {admission.class}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${getStatusColor(admission.status)}`}>
                  {getStatusText(admission.status)}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4">তারিখ: {admission.date}</p>

              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleViewDetails(admission.id)}
                  className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-1 font-semibold text-sm"
                >
                  <FaEye size={14} />
                  দেখুন
                </button>
                {admission.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(admission.id)}
                      className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-1 font-semibold text-sm"
                    >
                      <FaCheck size={14} />
                    </button>
                    <button
                      onClick={() => handleReject(admission.id)}
                      className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center justify-center gap-1 font-semibold text-sm"
                    >
                      <FaTimes size={14} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {admissions.map((admission) => (
          <div
            key={admission.id}
            className="bg-white rounded-lg shadow-md border-l-4 border-[#b24dff] overflow-hidden"
          >
            {/* Card Header */}
            <div
              className="p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedId(expandedId === admission.id ? null : admission.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900">{admission.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">শ্রেণি: {admission.class}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(admission.status)}`}>
                    {getStatusText(admission.status)}
                  </span>
                  <FaChevronDown
                    size={14}
                    className={`mt-1 text-gray-600 transition-transform ${expandedId === admission.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">তারিখ: {admission.date}</p>
            </div>

            {/* Expanded Content */}
            {expandedId === admission.id && (
              <div className="bg-gray-50 p-4 space-y-3 border-t">
                {/* Details Grid */}
                <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600">পূর্ণ নাম</p>
                    <p className="text-sm text-gray-900 font-semibold">{admission.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">শ্রেণি</p>
                    <p className="text-sm text-gray-900 font-semibold">{admission.class}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">আবেদনের তারিখ</p>
                    <p className="text-sm text-gray-900 font-semibold">{admission.date}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600">স্ট্যাটাস</p>
                    <p className={`text-sm font-semibold ${getStatusColor(admission.status).split(' ')[1]}`}>
                      {getStatusText(admission.status)}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleViewDetails(admission.id);
                      setExpandedId(null);
                    }}
                    className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
                  >
                    <FaEye size={16} />
                    বিস্তারিত দেখুন
                  </button>

                  {admission.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => {
                          handleApprove(admission.id);
                          setExpandedId(null);
                        }}
                        className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
                      >
                        <FaCheck size={16} />
                        অনুমোদন করুন
                      </button>
                      <button
                        onClick={() => {
                          handleReject(admission.id);
                          setExpandedId(null);
                        }}
                        className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
                      >
                        <FaTimes size={16} />
                        প্রত্যাখ্যান করুন
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {admissions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500 text-lg">কোনো আবেদন পাওয়া যায়নি</p>
        </div>
      )}
    </div>
  );
};

export default ViewAdmissions;
