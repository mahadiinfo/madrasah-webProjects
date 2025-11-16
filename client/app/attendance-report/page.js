'use client';

import React, { useState } from 'react';
import PageHeader from '@/app/components/teacherDashboard/PageHeader';
import AttendanceSearch from '@/app/components/studentPage/AttendanceSearch';
import AttendanceDisplay from '@/app/components/studentPage/AttendanceDisplay';
import Footer from '@/app/components/Footer';

const AttendancePage = () => {
  const [searchData, setSearchData] = useState(null);

  const breadcrumbs = [
    { label: 'হাজিরা রিপোর্ট', href: '/attendance-report' }
  ];

  return (
    <main className="w-full bg-white">
      <PageHeader title="হাজিরা রিপোর্ট" breadcrumbs={breadcrumbs} />

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AttendanceSearch onSearch={setSearchData} />
          {searchData && <AttendanceDisplay searchData={searchData} />}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AttendancePage;
