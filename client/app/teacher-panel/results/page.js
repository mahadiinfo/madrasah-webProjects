'use client';

import React from 'react';
import TeacherSidebar from '@/app/components/teacherDashboard/TeacherSidebar';
import SubmitResults from '@/app/components/teacherDashboard/SubmitResults';

export default function ResultsPage() {
  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1 lg:ml-64 bg-gray-50 p-4 md:p-8">
        <SubmitResults />
      </div>
    </div>
  );
}
