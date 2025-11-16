import React from 'react';
import AdminPageNavbar from '@/app/components/adminPage/AdminPageNavbar';

export const metadata = {
  title: 'প্রশাসক প্যানেল | মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা',
  description: 'মাদ্রাসার সম্পূর্ণ ব্যবস্থাপনা এবং নিয়ন্ত্রণ'
};

export default function AdminPanelLayout({ children }) {

  return (
    <>
      <AdminPageNavbar />
    {children}
    </>
  )
  }
