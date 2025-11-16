'use client';

import React, { useState } from 'react';
import { HiExclamationTriangle, HiCheckCircle } from 'react-icons/hi2';

const NoticeForm = ({ onSubmit, isLoading = false, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      description: '',
      expiryDays: 7,
      category: 'শিক্ষা সংক্রান্ত',
    }
  );

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const categories = [
    'শিক্ষা সংক্রান্ত',
    'কর্মসূচি',
    'প্রশাসনিক',
    'একাডেমিক',
    'ক্রীড়া',
  ];

  const expiryOptions = [
    { value: 1, label: '১ দিন' },
    { value: 2, label: '২ দিন' },
    { value: 3, label: '৩ দিন' },
    { value: 7, label: '৭ দিন (সপ্তাহ)' },
    { value: 15, label: '১৫ দিন' },
    { value: 30, label: '৩০ দিন (মাস)' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'শিরোনাম প্রয়োজনীয়';
    } else if (formData.title.length > 200) {
      newErrors.title = 'শিরোনাম ২০০ অক্ষরের বেশি হতে পারে না';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'বর্ণনা প্রয়োজনীয়';
    } else if (formData.description.length < 10) {
      newErrors.description = 'বর্ণনা কমপক্ষে ১০ অক্ষরের হতে হবে';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onSubmit(formData);
      setSuccessMessage('নোটিশ সফলভাবে পোস্ট করা হয়েছে');
      setFormData({
        title: '',
        description: '',
        expiryDays: 7,
        category: 'শিক্ষা সংক্রান্ত',
      });
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Auto Short Description
  const generateShortDesc = (text) => {
    const lines = text.split('\n').filter((line) => line.trim());
    const shortDesc = lines.slice(0, 2).join(' ');
    return shortDesc.length > 150
      ? shortDesc.substring(0, 150) + '...'
      : shortDesc;
  };

  const shortPreview = generateShortDesc(formData.description);

  return (
    <div className="w-full  bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-[#b24dff] to-[#9933ff] px-6 md:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          নতুন নোটিশ পোস্ট করুন
        </h2>
        <p className="text-white/90 mt-2">
          গুরুত্বপূর্ণ তথ্য ও ঘোষণা শেয়ার করুন
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
        {/* Success Message */}
        {successMessage && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-300 rounded-lg p-4">
            <HiCheckCircle className="text-green-600" size={24} />
            <p className="text-green-700 font-medium">{successMessage}</p>
          </div>
        )}

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            শিরোনাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="নোটিশের শিরোনাম লিখুন..."
            maxLength={200}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold text-base transition-colors focus:outline-none ${
              errors.title
                ? 'border-red-500 bg-red-50 focus:border-red-600'
                : 'border-gray-300 bg-gray-50 focus:border-[#b24dff]'
            }`}
          />
          <div className="flex justify-between items-center mt-2">
            {errors.title && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <HiExclamationTriangle size={16} />
                {errors.title}
              </p>
            )}
            <p className="text-gray-500 text-xs ml-auto">
              {formData.title.length}/200
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            বর্ণনা <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="নোটিশের বিস্তারিত বর্ণনা লিখুন..."
            rows={6}
            className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-colors focus:outline-none resize-none ${
              errors.description
                ? 'border-red-500 bg-red-50 focus:border-red-600'
                : 'border-gray-300 bg-gray-50 focus:border-[#b24dff]'
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <HiExclamationTriangle size={16} />
              {errors.description}
            </p>
          )}

          {shortPreview && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 mb-2">
                সংক্ষিপ্ত বর্ণনার প্রিভিউ:
              </p>
              <p className="text-sm text-blue-800">{shortPreview}</p>
            </div>
          )}
        </div>

        {/* Category & Expiry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              বিভাগ
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 font-medium transition-colors focus:outline-none focus:border-[#b24dff]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Expiry Days */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              কতদিন নোটিশটি দেখানো হবে?
            </label>
            <select
              name="expiryDays"
              value={formData.expiryDays}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 font-medium transition-colors focus:outline-none focus:border-[#b24dff]"
            >
              {expiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-[#b24dff] to-[#9933ff] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                পোস্ট হচ্ছে...
              </>
            ) : (
              <>
                <HiCheckCircle size={20} />
                নোটিশ পোস্ট করুন
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoticeForm;
