'use client';

import React from 'react';
import TeacherSidebar from '@/app/components/teacherDashboard/TeacherSidebar';

export default function TeacherLayout({ children }) {
  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1 ml-20 md:ml-64 mt-16 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
