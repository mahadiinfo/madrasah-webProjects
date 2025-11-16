'use client';

import React from 'react';
import TeacherSidebar from '@/app/components/teacherDashboard/TeacherSidebar';
import TakeAttendance from '@/app/components/teacherDashboard/TakeAttendance';

export default function AttendancePage() {
  return (
    <div className="">
       <TeacherSidebar />
      <div className=" lg:ml-64 bg-gray-50 p-4 md:p-8">
        <TakeAttendance />
      </div>
    </div>
  );
}
