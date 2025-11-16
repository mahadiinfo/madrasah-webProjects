'use client';

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaCalendarTimes } from 'react-icons/fa';

const AttendanceDisplay = ({ searchData }) => {
  if (!searchData) return null;

  // Mock data
  const attendanceData = {
    studentName: 'মুহাম্মদ আব্দুল্লাহ',
    roll: '101',
    class: searchData.class,
    month: searchData.month,
    weeks: [
      {
        weekNumber: 1,
        dateRange: '২–৮ নভেম্বর',
        days: [
          { day: 'রবিবার', status: 'present' },
          { day: 'সোমবার', status: 'present' },
          { day: 'মঙ্গলবার', status: 'absent' },
          { day: 'বুধবার', status: 'present' },
          { day: 'বৃহস্পতিবার', status: 'present' },
          { day: 'শুক্রবার', status: 'holiday' },
          { day: 'শনিবার', status: 'present' },
        ]
      },
      {
        weekNumber: 2,
        dateRange: '৯–১৫ নভেম্বর',
        days: [
          { day: 'রবিবার', status: 'present' },
          { day: 'সোমবার', status: 'present' },
          { day: 'মঙ্গলবার', status: 'present' },
          { day: 'বুধবার', status: 'absent' },
          { day: 'বৃহস্পতিবার', status: 'present' },
          { day: 'শুক্রবার', status: 'holiday' },
          { day: 'শনিবার', status: 'present' },
        ]
      },
      {
        weekNumber: 3,
        dateRange: '১৬–২২ নভেম্বর',
        days: [
          { day: 'রবিবার', status: 'present' },
          { day: 'সোমবার', status: 'present' },
          { day: 'মঙ্গলবার', status: 'present' },
          { day: 'বুধবার', status: 'present' },
          { day: 'বৃহস্পতিবার', status: 'absent' },
          { day: 'শুক্রবার', status: 'holiday' },
          { day: 'শনিবার', status: 'present' },
        ]
      },
      {
        weekNumber: 4,
        dateRange: '২৩–২৯ নভেম্বর',
        days: [
          { day: 'রবিবার', status: 'present' },
          { day: 'সোমবার', status: 'present' },
          { day: 'মঙ্গলবার', status: 'present' },
          { day: 'বুধবার', status: 'present' },
          { day: 'বৃহস্পতিবার', status: 'present' },
          { day: 'শুক্রবার', status: 'holiday' },
          { day: 'শনিবার', status: 'present' },
        ]
      },
    ]
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <FaCheckCircle className="text-green-500" />;
      case 'absent':
        return <FaTimesCircle className="text-red-500" />;
      case 'holiday':
        return <FaCalendarTimes className="text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'holiday':
        return 'bg-gray-100 text-gray-800';
      default:
        return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'present':
        return 'উপস্থিত';
      case 'absent':
        return 'অনুপস্থিত';
      case 'holiday':
        return 'ছুটি';
      default:
        return '';
    }
  };

  // Calculate totals
  let totalPresent = 0;
  let totalAbsent = 0;
  let totalHoliday = 0;

  attendanceData.weeks.forEach(week => {
    week.days.forEach(day => {
      if (day.status === 'present') totalPresent++;
      else if (day.status === 'absent') totalAbsent++;
      else if (day.status === 'holiday') totalHoliday++;
    });
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8 pb-6 border-b-2 border-[#b24dff]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">শিক্ষার্থী তথ্য</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600">নাম</p>
            <p className="font-bold text-gray-800">{attendanceData.studentName}</p>
          </div>
          <div>
            <p className="text-gray-600">রোল</p>
            <p className="font-bold text-gray-800">{attendanceData.roll}</p>
          </div>
          <div>
            <p className="text-gray-600">শ্রেণি</p>
            <p className="font-bold text-gray-800">{attendanceData.class}</p>
          </div>
          <div>
            <p className="text-gray-600">মাস</p>
            <p className="font-bold text-gray-800">{attendanceData.month}</p>
          </div>
        </div>
      </div>

      {/* Weekly Attendance */}
      <div className="space-y-6 mb-8">
        {attendanceData.weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="border rounded-lg p-6 bg-gray-50">
            <h4 className="font-bold text-lg text-[#b24dff] mb-4">
              সপ্তাহ {week.weekNumber} ({week.dateRange})
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {week.days.map((dayData, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`p-3 rounded-lg text-center ${getStatusColor(dayData.status)} transition-all hover:shadow-lg`}
                >
                  <div className="flex justify-center mb-2">
                    {getStatusIcon(dayData.status)}
                  </div>
                  <p className="text-xs font-semibold">{dayData.day}</p>
                  <p className="text-xs">{getStatusText(dayData.status)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6 bg-linear-to-r from-[#b24dff]/10 to-transparent p-6 rounded-lg border-l-4 border-[#b24dff]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <p className="text-gray-600 font-semibold">মোট উপস্থিতি</p>
          </div>
          <p className="text-3xl font-bold text-green-600">{totalPresent} দিন</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaTimesCircle className="text-red-500 text-xl" />
            <p className="text-gray-600 font-semibold">মোট অনুপস্থিতি</p>
          </div>
          <p className="text-3xl font-bold text-red-600">{totalAbsent} দিন</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaCalendarTimes className="text-gray-500 text-xl" />
            <p className="text-gray-600 font-semibold">মোট ছুটি</p>
          </div>
          <p className="text-3xl font-bold text-gray-600">{totalHoliday} দিন</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDisplay;
