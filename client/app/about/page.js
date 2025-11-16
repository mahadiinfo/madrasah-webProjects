'use client';

import React from 'react';
import PageHeader from '@/app/components/teacherDashboard/PageHeader';
import MadrasahHistory from '@/app/components/HomePageComponents/MadrasahHistory';
import MissionVision from '@/app/components/HomePageComponents/MissionVision';
import WhyChooseUs from '@/app/components/HomePageComponents/WhyChooseUs';
import Footer from '@/app/components/Footer';

const AboutPage = () => {
  const breadcrumbs = [
    { label: 'আমাদের সম্পর্কে', href: '/about' }
  ];

  return (
    <main className="w-full bg-white">
      <PageHeader title="আমাদের সম্পর্কে" breadcrumbs={breadcrumbs} />
      <MadrasahHistory />
      <MissionVision />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default AboutPage;
