'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { adminLogin } ="";
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // আপনার backend এর সাথে সংযোগ করুন
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        adminLogin(data.token, {
          id: data.adminId,
          email: data.email,
          name: data.name,
        });
        toast.success('Admin Login সফল হয়েছে');
        router.push('/admin/dashboard');
      } else {
        toast.error(data.message || 'Login ব্যর্থ হয়েছে');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login এ সমস্যা হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b24dff] focus:border-transparent"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b24dff] focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-linear-to-r from-[#b24dff] to-[#9933ff] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'লগ ইন হচ্ছে...' : 'লগ ইন করুন'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Demo: admin@example.com / password123
        </p>
      </div>
    </div>
  );
}
