'use client';

import React from 'react';
import { HiMapPin, HiPhone, HiEnvelope } from 'react-icons/hi2';

const ContactMap = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#b24dff]/5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#b24dff]/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#b24dff]" />
            <span className="text-sm font-semibold text-[#b24dff]">যোগাযোগ</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            আমাদের সাথে যোগাযোগ করুন
          </h2>

          <p className="text-gray-600">
            আমরা সবসময় আপনার সেবায় প্রস্তুত
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#b24dff] hover:shadow-lg md:p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#b24dff]/10 p-3 group-hover:bg-[#b24dff] group-hover:text-white transition-all">
                <HiMapPin className="text-[#b24dff] group-hover:text-white transition-colors" size={28} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-black md:text-xl">
                আমাদের ঠিকানা
              </h3>

              <p className="text-sm leading-relaxed text-gray-700">
                মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা
                <br />
                গ্রাম: মির্জাগঞ্জ
                <br />
                ডাকঘর: মির্জাগঞ্জ
                <br />
                উপজেলা: মির্জাগঞ্জ
                <br />
                জেলা: পটুয়াখালী
                <br />
                বাংলাদেশ
              </p>
            </div>

            {/* Phone Card */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#b24dff] hover:shadow-lg md:p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#b24dff]/10 p-3 group-hover:bg-[#b24dff] group-hover:text-white transition-all">
                <HiPhone className="text-[#b24dff] group-hover:text-white transition-colors" size={28} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-black md:text-xl">
                মোবাইল নম্বর
              </h3>

              <div className="space-y-2">
                <a
                  href="tel:+8801234567890"
                  className="inline-block text-sm font-semibold text-[#b24dff] transition-colors hover:text-black"
                >
                  +880 1234-567890
                </a>
                <p className="text-xs text-gray-600">(সোমবার - শুক্রবার, ৯:০০ - ৫:০০)</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#b24dff] hover:shadow-lg md:p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#b24dff]/10 p-3 group-hover:bg-[#b24dff] group-hover:text-white transition-all">
                <HiEnvelope className="text-[#b24dff] group-hover:text-white transition-colors" size={28} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-black md:text-xl">
                ইমেইল
              </h3>

              <a
                href="mailto:info@mirzaganjmadrasah.edu.bd"
                className="inline-block text-sm font-semibold text-[#b24dff] transition-colors hover:text-black"
              >
                info@mirzaganjmadrasah.edu.bd
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1206.2513698600178!2d90.23131167850744!3d22.358396008458524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aab9f89af17c5f%3A0x42c8e321474f69eb!2z4Ka44Ka_4Kao4Ka_4Kef4Ka-4KawIOCmruCmvuCmpuCnjeCmsOCmvuCmuOCmvg!5e1!3m2!1sen!2sbd!4v1763049295855!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Contact Form CTA */}
        <div className="mt-12 rounded-xl bg-linear-to-r from-[#b24dff] to-[#b24dff]/80 p-6 text-center text-white md:p-8">
          <h3 className="mb-3 text-lg font-bold md:text-xl">
            সরাসরি বার্তা পাঠান
          </h3>
          <p className="mb-4 text-sm md:text-base">
            আপনার যেকোনো প্রশ্ন বা পরামর্শ আমাদের কাছে পাঠান, আমরা দ্রুত উত্তর দেব।
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#b24dff] md:text-base">
            যোগাযোগ ফর্ম খুলুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
