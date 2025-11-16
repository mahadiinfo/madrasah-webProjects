'use client';

import React from 'react';
import AdminSidebar from '@/app/components/adminPage/AdminSidebar';
import ViewAdmissions from '@/app/components/adminPage/ViewAdmissions';

export default function AdmissionsPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1  md:ml-64  bg-gray-50">
        <ViewAdmissions />
      </div>
    </div>
  );
}
