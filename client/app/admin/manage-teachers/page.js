'use client';

import React from 'react';
import AdminSidebar from '@/app/components/adminPage/AdminSidebar';
import ManageTeachers from '@/app/components/adminPage/ManageTeachers';

export default function ManageTeachersPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 md:ml-64  bg-gray-50">
        <ManageTeachers />
      </div>
    </div>
  );
}
