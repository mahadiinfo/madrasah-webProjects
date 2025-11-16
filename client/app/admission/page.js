'use client';

import React from 'react';
import AdmissionHeader from '@/app/components/admission/AdmissionHeader';
import AdmissionInstructions from '@/app/components/admission/AdmissionInstructions';
import AdmissionForm from '@/app/components/admission/AdmissionForm';
import Footer from '@/app/components/Footer';

const AdmissionPage = () => {
  return (
    <main className="w-full bg-white">
      <AdmissionHeader />
      <AdmissionInstructions />
      <AdmissionForm />
      <Footer />
    </main>
  );
};

export default AdmissionPage;
