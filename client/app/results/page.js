'use client';

import React, { useState } from 'react';
import PageHeader from '@/app/components/teacherDashboard/PageHeader';
import ResultSearch from '@/app/components/studentPage/ResultSearch';
import ResultDisplay from '@/app/components/studentPage/ResultDisplay';
import Footer from '@/app/components/Footer';

const ResultsPage = () => {
  const [searchData, setSearchData] = useState(null);

  const breadcrumbs = [
    { label: 'ফলাফল', href: '/results' }
  ];

  return (
    <main className="w-full font-hind-siliguri bg-white">
      <PageHeader title="পরীক্ষার ফলাফল" breadcrumbs={breadcrumbs} />

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <ResultSearch onSearch={setSearchData} />
          {searchData && <ResultDisplay searchData={searchData} />}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResultsPage;
