'use client';

import React, { useState } from 'react';
import { FaTrash, FaReply } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ViewMessages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'মোহাম্মদ করিম',
      email: 'karim@example.com',
      subject: 'ভর্তি সম্পর্কে জানতে চাই',
      message: 'আমার পুত্র পঞ্চম শ্রেণিতে ভর্তি হতে চায়। কি কি ডকুমেন্ট লাগবে?',
      date: '১২-११-२५'
    },
    {
      id: 2,
      name: 'ফাতিমা বেগম',
      email: 'fatima@example.com',
      subject: 'ফিডব্যাক',
      message: 'আপনাদের শিক্ষা পদ্ধতি অসাধারণ। আমার মেয়ে খুবই খুশি।',
      date: '१०-११-२५'
    },
    {
      id: 3,
      name: 'আবদুল হালিম',
      email: 'halim@example.com',
      subject: 'ক্লাস রুটিন জানতে চাই',
      message: 'কি কি সময়ে ক্লাস হয় এবং ছুটির দিন কখন?',
      date: '०९-११-२५'
    }
  ]);

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
    toast.success('বার্তা মুছে ফেলা হয়েছে');
  };

  const handleReply = (id) => {
    toast.success('উত্তর পাঠানোর জন্য প্রস্তুত');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">প্রাপ্ত বার্তা এবং মতামত</h1>

      <div className="space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#b24dff]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{message.subject}</h3>
                <p className="text-sm text-gray-600">
                  {message.name} ({message.email})
                </p>
              </div>
              <span className="text-sm text-gray-500">{message.date}</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {message.message}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => handleReply(message.id)}
                className="px-4 py-2 bg-[#b24dff] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FaReply size={14} />
                উত্তর দিন
              </button>
              <button
                onClick={() => handleDelete(message.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <FaTrash size={14} />
                মুছুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMessages;
