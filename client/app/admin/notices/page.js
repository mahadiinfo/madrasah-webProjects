'use client';

import React, { useState, useEffect } from 'react';
import NoticeForm from '@/app/components/adminPage/NoticeForm';
import NoticeList from '@/app/components/adminPage/NoticeList';
import { HiBellAlert } from 'react-icons/hi2';
import AdminSidebar from '@/app/components/adminPage/AdminSidebar';


const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const [selectedCategory, setSelectedCategory] = useState('সব'); // 'सबै' -> 'সব'

  const categories = [
    'সব', // 'सबै' -> 'সব'
    'শিক্ষা সংক্রান্ত', // 'शिक्षा सम्बन्धी' -> 'শিক্ষা সংক্রান্ত'
    'অনুষ্ঠান', // 'कार्यक्रम' -> 'অনুষ্ঠান'
    'প্রশাসনিক', // 'প্রশাসনিক' -> 'প্রশাসনিক'
    'একাডেমিক', // 'एकेडेमिक' -> 'একাডেমিক'
    'ক্রীড়া', // 'क्रीड़ा' -> 'ক্রীড়া'
  ];

  // Fetch notices
  useEffect(() => {
    fetchNotices();
  }, [selectedCategory]);

  const fetchNotices = async () => {
    setIsLoading(true);
    try {
      const query =
        selectedCategory !== 'সব' ? `?category=${selectedCategory}` : ''; // 'सबै' -> 'সব'
      const response = await fetch(`/api/notices${query}`);
      const data = await response.json();

      if (data.success) {
        setNotices(data.data);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Add new notice to list
        setNotices([data.data, ...notices]);
        setActiveTab('list');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error creating notice:', error);
      alert('Failed to create notice');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (noticeId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/notices/${noticeId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        // Remove notice from list
        setNotices(notices.filter((notice) => notice._id !== noticeId));
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert('Failed to delete notice');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 py-4 px-3 sm:px-4 md:px-6 md:py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <HiBellAlert className="text-[#b24dff] text-2xl md:text-4xl" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              নোটিশ ব্যবস্থাপনা 
            </h1>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            নতুন নোটিশ পোস্ট করুন এবং পুরোনো নোটিশগুলি পরিচালনা করুন।
            </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 mb-6 border-b border-gray-300 overflow-x-auto">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-3 md:px-6 py-2 md:py-3 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === 'create'
                ? 'border-[#b24dff] text-[#b24dff]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            নতুন নোটিশ
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-3 md:px-6 py-2 md:py-3 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === 'list'
                ? 'border-[#b24dff] text-[#b24dff]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            সব নোটিশ ({notices.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'create' ? (
          <NoticeForm onSubmit={handleSubmit} isLoading={isLoading} />
        ) : (
          <div className="space-y-4 md:space-y-6">
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg font-semibold text-sm md:text-base transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#b24dff] text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-[#b24dff]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Notices List */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-[#b24dff] border-t-transparent rounded-full animate-spin" />
                <p className="mt-4 text-gray-600">নোটিশ লোড হচ্ছে...</p>{' '}
               
              </div>
            ) : (
              <NoticeList
                notices={notices}
                onDelete={handleDelete}
                isAdmin={true}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default NoticeManagement;