'use client';

import React from 'react';

const ResultDisplay = ({ searchData }) => {
  if (!searchData) return null;

  // Mock data - In real application, this would come from API
  const resultData = {
    studentName: 'মুহাম্মদ আব্দুল্লাহ',
    roll: '101',
    class: searchData.class,
    subjects: [
      { name: 'কুরআন মাজীদ', fullMarks: 100, obtainedMarks: 85, grade: 'A+' },
      { name: 'হাদিস শরীফ', fullMarks: 100, obtainedMarks: 78, grade: 'A' },
      { name: 'বাংলা', fullMarks: 100, obtainedMarks: 70, grade: 'A-' },
      { name: 'ইংরেজি', fullMarks: 100, obtainedMarks: 72, grade: 'A-' },
      { name: 'গণিত', fullMarks: 100, obtainedMarks: 90, grade: 'A+' },
    ],
  };

  const totalMarks = resultData.subjects.reduce((acc, subject) => acc + subject.obtainedMarks, 0);
  const fullMarks = resultData.subjects.reduce((acc, subject) => acc + subject.fullMarks, 0);
  const gpa = (totalMarks / fullMarks * 5).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8 pb-6 border-b-2 border-[#b24dff]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">শিক্ষার্থী তথ্য</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600">নাম</p>
            <p className="font-bold text-gray-800">{resultData.studentName}</p>
          </div>
          <div>
            <p className="text-gray-600">রোল</p>
            <p className="font-bold text-gray-800">{resultData.roll}</p>
          </div>
          <div>
            <p className="text-gray-600">শ্রেণি</p>
            <p className="font-bold text-gray-800">{resultData.class}</p>
          </div>
          <div>
            <p className="text-gray-600">পরীক্ষা</p>
            <p className="font-bold text-gray-800">{searchData.examName}</p>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-[#b24dff] text-white">
              <th className="px-4 py-3 text-left">বিষয়</th>
              <th className="px-4 py-3 text-center">পূর্ণ নম্বর</th>
              <th className="px-4 py-3 text-center">প্রাপ্ত নম্বর</th>
              <th className="px-4 py-3 text-center">গ্রেড</th>
            </tr>
          </thead>
          <tbody>
            {resultData.subjects.map((subject, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{subject.name}</td>
                <td className="px-4 py-3 text-center">{subject.fullMarks}</td>
                <td className="px-4 py-3 text-center font-bold">{subject.obtainedMarks}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold">
                    {subject.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6 bg-linear-to-r from-[#b24dff]/10 to-transparent p-6 rounded-lg">
        <div className="text-center">
          <p className="text-gray-600 text-sm">মোট নম্বর</p>
          <p className="text-3xl font-bold text-[#b24dff]">
            {totalMarks}/{fullMarks}
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">জি.পি.এ.</p>
          <p className="text-3xl font-bold text-[#b24dff]">{gpa}/৫</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">ফলাফল</p>
          <p className="text-2xl font-bold text-green-600">কৃতকার্য ✓</p>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
