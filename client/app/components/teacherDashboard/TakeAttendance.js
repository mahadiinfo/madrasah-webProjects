'use client';

import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const TakeAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState([]);

  const classes = ['চতুর্থ', 'পঞ্চম', 'ষষ্ঠ', 'সপ্তম', 'অষ্টম', 'নবম', 'দশম'];
  const sections = ['ক', 'খ', 'গ'];

  const mockStudents = [
    { roll: 101, name: 'মুহাম্মদ আব্দুল্লাহ' },
    { roll: 102, name: 'ফাতিমা বেগম' },
    { roll: 103, name: 'করিম আহমেদ' },
    { roll: 104, name: 'জেশিকা সরকার' },
    { roll: 105, name: 'হোসেন আলী' },
  ];

  const handleOpenClass = () => {
    if (!selectedClass) {
      toast.error('শ্রেণি এবং শাখা নির্বাচন করুন');
      return;
    }

    const newAttendance = mockStudents.map(student => ({
      ...student,
      status: 'present' // default
    }));
    setAttendance(newAttendance);
    toast.success('খাতা খোলা হয়েছে');
  };

  const handleStatusChange = (roll, status) => {
    setAttendance(attendance.map(student =>
      student.roll === roll ? { ...student, status } : student
    ));
  };

  const handleSubmit = () => {
    if (attendance.length === 0) {
      toast.error('প্রথমে খাতা খুলুন');
      return;
    }

    toast.success('আজকের হাজিরা সফলভাবে জমা দেওয়া হয়েছে');
    setAttendance([]);
  };

  return (
    <div className=" w-full">
      <h1 className="text-3xl mt-5 font-bold text-gray-800 mb-8">হাজিরা নিন</h1>

      {/* Class Selection */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              শ্রেণি নির্বাচন করুন <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
            >
              <option value="">নির্বাচন করুন</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleOpenClass}
          className="w-full bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          খাতা খুলুন
        </button>
      </div>

      {/* Attendance Table */}
      {attendance.length > 0 && (
        <div className="bg-white rounded-2xl shadow-2xl w-full mb-10 max-md:p-2 p-6">
          <h2 className="text-2xl font-bold pt-5 text-gray-800 mb-6">
            {selectedClass} শ্রেণি
          </h2>

          <div className="overflow-x-scroll w-full mb-6 ">
            <table className="w-full">
              <thead className=''>
                <tr className="bg-[#b24dff]  text-white">
                  <th className="px-4 py-3 text-left">রোল</th>
                  <th className="px-4 py-3 text-left">নাম</th>
                  <th className="px-4 py-3 text-center">উপস্থিতি</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map(student => (
                  <tr key={student.roll} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{student.roll}</td>
                    <td className="px-4 py-3">{student.name}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleStatusChange(student.roll, 'present')}
                          className={`px-3 py-1 rounded ${student.status === 'present'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200'
                            }`}
                        >
                          ✓
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.roll, 'absent')}
                          className={`px-3 py-1 rounded ${student.status === 'absent'
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200'
                            }`}
                        >
                          X
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.roll, 'leave')}
                          className={`px-3 py-1 rounded ${student.status === 'leave'
                              ? 'bg-yellow-500 text-white'
                              : 'bg-gray-200'
                            }`}
                        >
                          ছুটি
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaSave />
            আজকের হাজিরা জমা দিন
          </button>
        </div>
      )}
    </div>
  );
};

export default TakeAttendance;
