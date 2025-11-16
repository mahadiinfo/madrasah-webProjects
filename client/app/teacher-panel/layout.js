import React from 'react';
import TeacherPageNavbar from '@/app/components/teacherPage/TeacherPageNavbar';

export const metadata = {
  title: 'শিক্ষক প্যানেল | মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা',
  description: 'শিক্ষকদের জন্য ড্যাশবোর্ড এবং ব্যবস্থাপনা প্যানেল'
};

export default function TeacherPanelLayout({ children }) {
  return (
    <>
      <TeacherPageNavbar />
      {children}
    </>
  );
}
