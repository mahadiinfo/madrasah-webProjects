'use client';

import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ManageStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);

  const mockStudents = [
    { roll: 101, name: 'মুহাম্মদ আব্দুল্লাহ', class: 'পঞ্চম', parentMobile: '01812345678' },
    { roll: 102, name: 'ফাতিমা বেগম', class: 'পঞ্চম', parentMobile: '01923456789' },
    { roll: 103, name: 'করিম আহমেদ', class: 'ষষ্ঠ', parentMobile: '01734567890' },
    { roll: 104, name: 'জেশিকা সরকার', class: 'পঞ্চম', parentMobile: '01845678901' },
    { roll: 105, name: 'হোসেন আলী', class: 'সপ্তম', parentMobile: '01956789012' },
  ];

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roll.toString().includes(searchTerm)
  );

  const handleEdit = (student) => {
    setEditingStudent(student);
    toast.success('শিক্ষার্থীর তথ্য সম্পাদনা মোড চালু হয়েছে');
  };

  const handleDelete = (roll) => {
    toast.success('শিক্ষার্থী সফলভাবে মুছে ফেলা হয়েছে');
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">শিক্ষার্থী ব্যবস্থাপনা</h1>

      {/* Search */}
      <div className="mb-6 md:mb-8">
        <input
          type="text"
          placeholder="শিক্ষার্থীর নাম বা আইডি দিয়ে খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-[#b24dff] text-white">
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">রোল</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left">নাম</th>
                <th className="hidden sm:table-cell px-2 md:px-4 py-2 md:py-3 text-left">শ্রেণি</th>
                <th className="hidden md:table-cell px-2 md:px-4 py-2 md:py-3 text-left">অভিভাবকের মোবাইল</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-center">কাজ</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.roll} className="border-b hover:bg-gray-50">
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{student.roll}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 font-semibold text-xs md:text-sm">{student.name}</td>
                  <td className="hidden sm:table-cell px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{student.class}</td>
                  <td className="hidden md:table-cell px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{student.parentMobile}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                    <div className="flex gap-1 md:gap-2 justify-center flex-wrap">
                      <button
                        onClick={() => handleEdit(student)}
                        className="px-2 md:px-3 py-1 md:py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1 text-xs md:text-sm"
                      >
                        <FaEdit size={12} className="hidden sm:inline" />
                        <span className="hidden sm:inline">সম্পাদনা</span>
                        <span className="sm:hidden">সম্পা</span>
                      </button>
                      <button
                        onClick={() => handleDelete(student.roll)}
                        className="px-2 md:px-3 py-1 md:py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-1 text-xs md:text-sm"
                      >
                        <FaTrash size={12} className="hidden sm:inline" />
                        <span className="hidden sm:inline">মুছুন</span>
                        <span className="sm:hidden">মু</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">শিক্ষার্থী তথ্য সম্পাদনা</h3>
            <div className="space-y-3 md:space-y-4 mb-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">নাম</label>
                <input
                  type="text"
                  defaultValue={editingStudent.name}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">শ্রেণি</label>
                <input
                  type="text"
                  defaultValue={editingStudent.class}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">অভিভাবকের মোবাইল</label>
                <input
                  type="tel"
                  defaultValue={editingStudent.parentMobile}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#b24dff]"
                />
              </div>
            </div>
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={() => {
                  setEditingStudent(null);
                  toast.success('পরিবর্তন সংরক্ষিত হয়েছে');
                }}
                className="flex-1 bg-[#b24dff] text-white font-bold py-2 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                সংরক্ষণ করুন
              </button>
              <button
                onClick={() => setEditingStudent(null)}
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

export default ManageStudents;
