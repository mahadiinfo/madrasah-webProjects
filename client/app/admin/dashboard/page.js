'use client';

import React from 'react';
import AdminSidebar from '@/app/components/adminPage/AdminSidebar';
import AdminDashboard from '@/app/components/adminPage/AdminDashboard';

export default function DashboardPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 md:ml-64  bg-gray-50">
        <AdminDashboard />
      </div>
    </div>
  );
}
