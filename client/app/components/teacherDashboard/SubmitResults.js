'use client';

import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const SubmitResults = () => {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [results, setResults] = useState([]);

  const exams = ['বার্ষিক', 'অর্ধ-বার্ষিক', 'ত্রৈমাসিক'];
  const classes = ['চতুর্থ', 'পঞ্চম', 'ষষ্ঠ', 'সপ্তম', 'অষ্টম', 'নবম', 'দশম'];
  const subjects = ['কুরআন মাজীদ', 'হাদিস শরীফ', 'বাংলা', 'ইংরেজি', 'গণিত'];

  const mockStudents = [
    { roll: 101, name: 'মুহাম্মদ আব্দুল্লাহ' },
    { roll: 102, name: 'ফাতিমা বেগম' },
    { roll: 103, name: 'করিম আহমেদ' },
  ];

  const handleLoadStudents = () => {
    if (!selectedExam || !selectedClass || !selectedSubject) {
      toast.error('সকল তথ্য পূরণ করুন');
      return;
    }

    const newResults = mockStudents.map(student => ({
      ...student,
      marks: ''
    }));
    setResults(newResults);
    toast.success('শিক্ষার্থী তালিকা লোড হয়েছে');
  };

  const handleMarksChange = (roll, marks) => {
    setResults(results.map(result =>
      result.roll === roll ? { ...result, marks } : result
    ));
  };

  const handleSubmitResults = () => {
    if (results.length === 0) {
      toast.error('প্রথমে শিক্ষার্থী তালিকা লোড করুন');
      return;
    }

    if (results.some(r => !r.marks)) {
      toast.error('সকল শিক্ষার্থীর নম্বর পূরণ করুন');
      return;
    }

    toast.success('ফলাফল সফলভাবে জমা দেওয়া হয়েছে');
    setResults([]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">ফলাফল জমা দিন</h1>

      {/* Selection Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              পরীক্ষা <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
            >
              <option value="">নির্বাচন করুন</option>
              {exams.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              শ্রেণি <span className="text-red-500">*</span>
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

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              বিষয় <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
            >
              <option value="">নির্বাচন করুন</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleLoadStudents}
          className="w-full bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          শিক্ষার্থী তালিকা লোড করুন
        </button>
      </div>

      {/* Results Table */}
      {results.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedSubject} - {selectedClass}
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-[#b24dff] text-white">
                  <th className="px-4 py-3 text-left">রোল</th>
                  <th className="px-4 py-3 text-left">নাম</th>
                  <th className="px-4 py-3 text-center">প্রাপ্ত নম্বর</th>
                </tr>
              </thead>
              <tbody>
                {results.map(result => (
                  <tr key={result.roll} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{result.roll}</td>
                    <td className="px-4 py-3 font-semibold">{result.name}</td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        max="100"
                        value={result.marks}
                        onChange={(e) => handleMarksChange(result.roll, e.target.value)}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:border-[#b24dff]"
                        placeholder="০-১০০"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handleSubmitResults}
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaSave />
            ফলাফল জমা দিন
          </button>
        </div>
      )}
    </div>
  );
};

export default SubmitResults;
