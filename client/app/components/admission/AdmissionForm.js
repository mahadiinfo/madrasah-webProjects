'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    // Student Info
    studentNameBangla: '',
    studentNameEnglish: '',
    dateOfBirth: '',
    gender: '',
    religion: '',
    studentPhoto: null,

    // Parent Info
    fatherName: '',
    fatherOccupation: '',
    fatherMobile: '',
    motherName: '',
    motherOccupation: '',
    motherMobile: '',

    // Address
    currentAddressVillage: '',
    currentAddressPostOffice: '',
    currentAddressUpazila: '',
    currentAddressDistrict: '',
    permanentAddress: '',

    // Academic
    class: '',
    previousInstitute: '',
  });

  const classes = [
    'চতুর্থ',
    'পঞ্চম',
    'ষষ্ঠ',
    'সপ্তম',
    'অষ্টম',
    'নবম',
    'দশম',
    'দাখিল প্রথম বর্ষ',
    'দাখিল দ্বিতীয় বর্ষ',
    'আলিম প্রথম বর্ষ',
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.studentNameBangla ||
      !formData.studentNameEnglish ||
      !formData.dateOfBirth ||
      !formData.gender ||
      !formData.fatherName ||
      !formData.fatherMobile ||
      !formData.motherName ||
      !formData.motherMobile ||
      !formData.class
    ) {
      toast.error('অনুগ্রহ করে সকল বাধ্যতামূলক তথ্য পূরণ করুন');
      return;
    }

    // Phone validation
    const phoneRegex = /^01[0-9]{9}$/;
    if (!phoneRegex.test(formData.fatherMobile)) {
      toast.error('পিতার মোবাইল নম্বর সঠিক নয়');
      return;
    }
    if (!phoneRegex.test(formData.motherMobile)) {
      toast.error('মাতার মোবাইল নম্বর সঠিক নয়');
      return;
    }

    // Success
    toast.success('আবেদন সফলভাবে জমা দেওয়া হয়েছে! শীঘ্রই আমরা যোগাযোগ করব।');
    setFormData({
      studentNameBangla: '',
      studentNameEnglish: '',
      dateOfBirth: '',
      gender: '',
      religion: '',
      studentPhoto: null,
      fatherName: '',
      fatherOccupation: '',
      fatherMobile: '',
      motherName: '',
      motherOccupation: '',
      motherMobile: '',
      currentAddressVillage: '',
      currentAddressPostOffice: '',
      currentAddressUpazila: '',
      currentAddressDistrict: '',
      permanentAddress: '',
      class: '',
      previousInstitute: '',
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Section 1: Student Info */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#b24dff] mb-6 pb-3 border-b-2 border-[#b24dff]">
              ১. শিক্ষার্থীর তথ্য
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  শিক্ষার্থীর নাম (বাংলা) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentNameBangla"
                  value={formData.studentNameBangla}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="আপনার নাম বাংলায় লিখুন"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  শিক্ষার্থীর নাম (ইংরেজি) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentNameEnglish"
                  value={formData.studentNameEnglish}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="Your name in English"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  জন্ম তারিখ <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  লিঙ্গ <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="male">ছাত্র</option>
                  <option value="female">ছাত্রী</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ধর্ম
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="ইসলাম"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পাসপোর্ট সাইজ ছবি আপলোড করুন
                </label>
                <input
                  type="file"
                  name="studentPhoto"
                  onChange={handleChange}
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Parent Info */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#b24dff] mb-6 pb-3 border-b-2 border-[#b24dff]">
              ২. অভিভাবকের তথ্য
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পিতার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="পিতার নাম"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পিতার পেশা
                </label>
                <input
                  type="text"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="পেশা"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পিতার মোবাইল <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  মাতার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="মাতার নাম"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  মাতার পেশা
                </label>
                <input
                  type="text"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="পেশা"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  মাতার মোবাইল <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Address */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#b24dff] mb-6 pb-3 border-b-2 border-[#b24dff]">
              ৩. ঠিকানা
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  বর্তমান ঠিকানা - গ্রাম
                </label>
                <input
                  type="text"
                  name="currentAddressVillage"
                  value={formData.currentAddressVillage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="গ্রামের নাম"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ডাকঘর
                  </label>
                  <input
                    type="text"
                    name="currentAddressPostOffice"
                    value={formData.currentAddressPostOffice}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                    placeholder="ডাকঘর"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    উপজেলা
                  </label>
                  <input
                    type="text"
                    name="currentAddressUpazila"
                    value={formData.currentAddressUpazila}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                    placeholder="উপজেলা"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    জেলা
                  </label>
                  <input
                    type="text"
                    name="currentAddressDistrict"
                    value={formData.currentAddressDistrict}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                    placeholder="জেলা"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  স্থায়ী ঠিকানা
                </label>
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  rows="3"
                  placeholder="স্থায়ী ঠিকানা"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Academic Info */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#b24dff] mb-6 pb-3 border-b-2 border-[#b24dff]">
              ৪. একাডেমিক তথ্য
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  শ্রেণি <span className="text-red-500">*</span>
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                >
                  <option value="">নির্বাচন করুন</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পূর্ববর্তী প্রতিষ্ঠান
                </label>
                <input
                  type="text"
                  name="previousInstitute"
                  value={formData.previousInstitute}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b24dff]"
                  placeholder="স্কুল/মাদ্রাসার নাম"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#b24dff] to-[#8b2dcc] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            আবেদন জমা দিন
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
