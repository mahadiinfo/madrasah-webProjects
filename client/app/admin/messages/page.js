'use client';

import React from 'react';
import AdminSidebar from '@/app/components/adminPage/AdminSidebar';
import ViewMessages from '@/app/components/adminPage/ViewMessages';

export default function MessagesPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 md:ml-64  bg-gray-50">
        <ViewMessages />
      </div>
    </div>
  );
}
