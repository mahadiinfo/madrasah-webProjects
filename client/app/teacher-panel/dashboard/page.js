'use client';

import React from 'react';
import TeacherSidebar from '@/app/components/teacherDashboard/TeacherSidebar';
import TeacherDashboard from '@/app/components/teacherDashboard/TeacherDashboard';

export default function DashboardPage() {
  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1 lg:ml-64  bg-gray-50 p-4 md:p-8">
        <TeacherDashboard />
      </div>
    </div>
  );
}
