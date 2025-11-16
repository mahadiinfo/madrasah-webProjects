'use client';

import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEnvelope, FaKey } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ManageTeachers = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'শিক্ষক ক', email: 'teacher-a@mail.com', subject: 'কুরআন মাজীদ' },
    { id: 2, name: 'শিক্ষক খ', email: 'teacher-b@mail.com', subject: 'হাদিস শরীফ' },
    { id: 3, name: 'শিক্ষক গ', email: 'teacher-c@mail.com', subject: 'বাংলা' },
  ]);

  const handleAddTeacher = () => {
    setShowAddForm(true);
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
    toast.success('শিক্ষক সফলভাবে মুছে ফেলা হয়েছে');
  };

  const handleSendMessage = (id) => {
    toast.success('বার্তা পাঠানোর জন্য প্রস্তুত');
  };

  const handleResetPassword = (id) => {
    toast.success('পাসওয়ার্ড রিসেট লিঙ্ক পাঠানো হয়েছে');
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">শিক্ষক ব্যবস্থাপনা</h1>
        <button
          onClick={handleAddTeacher}
          className="w-full sm:w-auto bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-2 px-3 md:px-4 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <FaPlus size={16} />
          <span>নতুন শিক্ষক</span>
        </button>
      </div>

      {/* Teachers Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-[#b24dff] text-white">
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">নাম</th>
                <th className="hidden sm:table-cell px-2 md:px-4 py-2 md:py-3 text-left">ইমেইল</th>
                <th className="hidden md:table-cell px-2 md:px-4 py-2 md:py-3 text-left">বিষয়</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-center">কাজ</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 md:px-4 py-2 md:py-3 font-semibold text-xs md:text-sm">{teacher.name}</td>
                  <td className="hidden sm:table-cell px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{teacher.email}</td>
                  <td className="hidden md:table-cell px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{teacher.subject}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                    <div className="flex gap-1 md:gap-2 justify-center flex-wrap">
                      <button
                        onClick={() => handleSendMessage(teacher.id)}
                        className="px-1 md:px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1 text-xs"
                        title="বার্তা পাঠান"
                      >
                        <FaEnvelope size={10} className="hidden sm:inline" />
                        <span className="hidden sm:inline">বার্তা</span>
                        <span className="sm:hidden">B</span>
                      </button>
                      <button
                        onClick={() => handleResetPassword(teacher.id)}
                        className="px-1 md:px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex items-center gap-1 text-xs"
                        title="পাসওয়ার্ড রিসেট"
                      >
                        <FaKey size={10} className="hidden sm:inline" />
                        <span className="hidden sm:inline">রিসেট</span>
                        <span className="sm:hidden">R</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="px-1 md:px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-1 text-xs"
                        title="মুছুন"
                      >
                        <FaTrash size={10} className="hidden sm:inline" />
                        <span className="hidden sm:inline">ডিলেট</span>
                        <span className="sm:hidden">D</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Teacher Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">নতুন শিক্ষক একাউন্ট তৈরি করুন</h3>
            <div className="space-y-3 md:space-y-4 mb-6">
              <input
                type="text"
                placeholder="শিক্ষকের নাম"
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
              />
              <input
                type="email"
                placeholder="ইমেইল"
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
              />
              <input
                type="text"
                placeholder="বিষয়"
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
              />
            </div>
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  toast.success('শিক্ষক একাউন্ট সফলভাবে তৈরি হয়েছে');
                }}
                className="flex-1 bg-[#b24dff] text-white font-bold py-2 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                তৈরি করুন
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 rounded-lg text-sm md:text-base hover:bg-gray-400 transition-colors"
              >
                বাতিল
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTeachers;
