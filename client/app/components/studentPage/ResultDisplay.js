'use client';

import React from 'react';

const ResultDisplay = ({ searchData }) => {
  if (!searchData) return null;

  // Mock data - In real application, this would come from API
  const resultData = {
    studentName: 'মুহাম্মদ আব্দুল্লাহ',
    roll: searchData.studentId,
    class: searchData.class,
    subjects: [
      { name: 'কুরআন মাজীদ ও তাজবীদ', fullMarks: 100, obtainedMarks: 85, grade: 'A+' },
      { name: 'হাদিস শরীফ', fullMarks: 100, obtainedMarks: 78, grade: 'A' },
      { name: 'আল ফিকহ ও আকাইদ', fullMarks: 100, obtainedMarks: 82, grade: 'A+' },
      { name: 'ইসলামের ইতিহাস', fullMarks: 100, obtainedMarks: 75, grade: 'A' },
      { name: 'বাংলা প্রথম পত্র', fullMarks: 100, obtainedMarks: 70, grade: 'A-' },
      { name: 'বাংলা দ্বিতীয় পত্র', fullMarks: 100, obtainedMarks: 68, grade: 'A-' },
      { name: 'ইংরেজি প্রথম পত্র', fullMarks: 100, obtainedMarks: 72, grade: 'A-' },
      { name: 'ইংরেজি দ্বিতীয় পত্র', fullMarks: 100, obtainedMarks: 65, grade: 'B' },
      { name: 'গণিত', fullMarks: 100, obtainedMarks: 90, grade: 'A+' },
      { name: 'তথ্য ও যোগাযোগ প্রযুক্তি', fullMarks: 50, obtainedMarks: 46, grade: 'A+' },
      { name: 'পৌরনীতি ও নাগরিকতা', fullMarks: 100, obtainedMarks: 80, grade: 'A+' },
      { name: 'মন্থিক ও তর্কশাস্ত্র (ঐচ্ছিক)', fullMarks: 100, obtainedMarks: 74, grade: 'A' },
      { name: 'শারীরিক শিক্ষা ও স্বাস্থ্য', fullMarks: 50, obtainedMarks: 45, grade: 'A+' }
    ],
  };

  const totalMarks = resultData.subjects.reduce((acc, subject) => acc + subject.obtainedMarks, 0);
  const fullMarks = resultData.subjects.reduce((acc, subject) => acc + subject.fullMarks, 0);
  const gpa = (totalMarks / fullMarks * 5).toFixed(2);

  const handleDownload = () => {
    // The browser's print dialog can save this isolated, A4-formatted sheet as PDF.
    window.print();
  };

  return (
    <div className="result-display-wrap mt-8">
      <div className="result-actions mb-4 flex justify-end">
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-md bg-[#07543f] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#064332] focus:outline-none focus:ring-2 focus:ring-[#bd9650] focus:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
          </svg>
          ফলাফল ডাউনলোড করুন
        </button>
      </div>

      <article id="result-sheet" className="result-sheet relative overflow-hidden rounded-xl border border-[#d5c49a] bg-[#fffefa] p-4 shadow-xl sm:p-7 md:p-9">
        <div aria-hidden="true" className="pointer-events-none absolute inset-[7px] rounded-lg border border-[#e7dcc0]" />
        <div aria-hidden="true" className="result-pattern pointer-events-none absolute inset-0 opacity-[0.12]" />

        <div className="relative">
          <header className="mb-7 border-b-2 border-[#c3a15c] pb-6 text-center sm:mb-8">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#c3a15c] bg-[#f8f3e6] text-[#8a6b2f]">
              <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.2">
                <path d="M16 3.5 19.1 8l5-.1-.1 5 4.5 3.1-4.5 3.1.1 5-5-.1-3.1 4.5-3.1-4.5-5 .1.1-5L3.5 16l4.5-3.1-.1-5 5 .1L16 3.5Z" />
                <circle cx="16" cy="16" r="4.5" />
                <path d="M16 11.5v9M11.5 16h9M12.8 12.8l6.4 6.4m0-6.4-6.4 6.4" />
              </svg>
            </div>
            <p className="mb-1 text-xs font-semibold tracking-[0.22em] text-[#8a6b2f] sm:text-sm">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <a
              href="https://mirzaganj-yaria-alim-madrasah.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold leading-tight text-[#064b39] hover:text-[#8a6b2f] sm:text-2xl md:text-3xl"
            >
              মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা
            </a>
            <p className="mt-2 text-sm font-medium text-[#52665e] sm:text-base">একাডেমিক পরীক্ষার ফলাফল</p>
            <div className="mx-auto mt-4 flex max-w-xs items-center gap-3 text-[#b3975b]" aria-hidden="true">
              <span className="h-px flex-1 bg-[#d7c595]" />
              <span className="text-xs">✦ ❖ ✦</span>
              <span className="h-px flex-1 bg-[#d7c595]" />
            </div>
          </header>

          <section className="mb-7" aria-labelledby="student-info-title">
            <div className="mb-4 flex items-center gap-3">
              <h2 id="student-info-title" className="shrink-0 text-base font-bold text-[#07543f] sm:text-lg">শিক্ষার্থী তথ্য</h2>
              <span className="h-px flex-1 bg-[#e4dcc8]" />
              <span className="text-xs text-[#a98b4e]" aria-hidden="true">❖</span>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-lg border border-[#e8e0cf] bg-white/80 p-4 text-sm sm:grid-cols-4 sm:gap-4 sm:p-5">
              <div><p className="mb-1 text-xs text-[#718078]">নাম</p><p className="font-bold text-[#243a32]">{resultData.studentName}</p></div>
              <div><p className="mb-1 text-xs text-[#718078]">রোল</p><p className="font-bold text-[#243a32]">{resultData.roll}</p></div>
              <div><p className="mb-1 text-xs text-[#718078]">শ্রেণি</p><p className="font-bold text-[#243a32]">{resultData.class}</p></div>
              <div><p className="mb-1 text-xs text-[#718078]">পরীক্ষা</p><p className="font-bold text-[#243a32]">{searchData.examName}</p></div>
            </div>
          </section>

          <section className="mb-7" aria-labelledby="subject-results-title">
            <div className="mb-3 flex items-center gap-3">
              <h2 id="subject-results-title" className="shrink-0 text-base font-bold text-[#07543f] sm:text-lg">বিষয়ভিত্তিক ফলাফল</h2>
              <span className="h-px flex-1 bg-[#e4dcc8]" />
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#d9d2bf] bg-white">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[#07543f] text-white">
                    <th className="px-4 py-3 text-left font-semibold">বিষয়</th>
                    <th className="px-3 py-3 text-center font-semibold">পূর্ণ নম্বর</th>
                    <th className="px-3 py-3 text-center font-semibold">প্রাপ্ত নম্বর</th>
                    <th className="px-3 py-3 text-center font-semibold">গ্রেড</th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.subjects.map((subject, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'border-b border-[#ece7da] bg-[#fbfaf6]' : 'border-b border-[#ece7da] bg-white'}>
                      <td className="px-4 py-2.5 font-medium text-[#293b34]">{subject.name}</td>
                      <td className="px-3 py-2.5 text-center text-[#485a52]">{subject.fullMarks}</td>
                      <td className="px-3 py-2.5 text-center font-bold text-[#174f3d]">{subject.obtainedMarks}</td>
                      <td className="px-3 py-2.5 text-center"><span className="inline-block min-w-10 rounded-full border border-[#d4dfd3] bg-[#edf4ed] px-2 py-0.5 font-bold text-[#236047]">{subject.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-3 rounded-lg border border-[#d9c89e] bg-[#f8f4e9] p-4 sm:grid-cols-3 sm:gap-5 sm:p-5" aria-label="ফলাফলের সারাংশ">
            <div className="text-center sm:border-r sm:border-[#dfd3b5]">
              <p className="text-xs text-[#65766d]">মোট নম্বর</p>
              <p className="mt-1 text-2xl font-bold text-[#07543f]">{totalMarks}/{fullMarks}</p>
            </div>
            <div className="text-center sm:border-r sm:border-[#dfd3b5]">
              <p className="text-xs text-[#65766d]">জি.পি.এ.</p>
              <p className="mt-1 text-2xl font-bold text-[#07543f]">{gpa}/৫</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-[#65766d]">ফলাফল</p>
              <p className="mt-1 text-xl font-bold text-[#236047]">কৃতকার্য ✓</p>
            </div>
          </section>

          <footer className="mt-7 flex items-end justify-between gap-5 px-1 text-xs text-[#68766e]">
            <span>আল্লাহ তোমাদের জ্ঞান বৃদ্ধি করুন</span>
            <span className="min-w-28 border-t border-[#b9ad91] pt-1 text-center">কর্তৃপক্ষের স্বাক্ষর</span>
          </footer>
        </div>
      </article>

      <style jsx global>{`
        .result-pattern {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 18px, #c9b77e 19px, transparent 20px), repeating-linear-gradient(-45deg, transparent, transparent 18px, #c9b77e 19px, transparent 20px);
          background-size: 30px 30px;
          mask-image: linear-gradient(to bottom, #000 0, transparent 34%, transparent 66%, #000 100%);
        }

        @page {
          size: A4 portrait;
          margin: 10mm;
        }

        @media print {
          html, body {
            background: #fff !important;
            min-height: 0 !important;
          }

          body * {
            visibility: hidden !important;
          }

          #result-sheet, #result-sheet * {
            visibility: visible !important;
          }

          #result-sheet {
            position: absolute !important;
            inset: 0 auto auto 0 !important;
            box-sizing: border-box !important;
            width: 190mm !important;
            height: 277mm !important;
            max-width: 190mm !important;
            margin: 0 !important;
            padding: 5mm !important;
            overflow: hidden !important;
            border: 1px solid #d5c49a !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .result-display-wrap { margin: 0 !important; }
          .result-actions, #result-sheet > div:first-child { display: none !important; }
          #result-sheet > div:nth-child(2) { display: none !important; }
          #result-sheet > div:last-child { position: relative !important; }
          #result-sheet header { margin-bottom: 4mm !important; padding-bottom: 3mm !important; }
          #result-sheet header > div:first-child { width: 9mm !important; height: 9mm !important; margin-bottom: 2mm !important; }
          #result-sheet h2 { font-size: 11pt !important; }
          #result-sheet section { margin-bottom: 4mm !important; }
          #result-sheet table { min-width: 0 !important; font-size: 8.5pt !important; }
          #result-sheet th, #result-sheet td { padding: 1.25mm 2mm !important; }
          #result-sheet section[aria-label="ফলাফলের সারাংশ"] { padding: 3mm !important; gap: 2mm !important; }
          #result-sheet section[aria-label="ফলাফলের সারাংশ"] p.mt-1 { margin-top: 1mm !important; font-size: 17pt !important; }
          #result-sheet tr { break-inside: avoid !important; page-break-inside: avoid !important; }
          #result-sheet section, #result-sheet footer { break-inside: avoid !important; page-break-inside: avoid !important; }
          #result-sheet .overflow-x-auto { overflow: visible !important; }
          #result-sheet a { color: #064b39 !important; text-decoration: none !important; }
          #result-sheet footer { margin-top: 5mm !important; }
        }
      `}</style>
    </div>
  );
};

export default ResultDisplay;