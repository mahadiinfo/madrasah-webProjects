import { Geist, Geist_Mono, Poppins, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import  { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PoppinsSans = Poppins({
  weight: "800",
  style: "normal",
  display: "auto",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ['500'],
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

export const metadata = {
  title: "মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা",
  description: "মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসা ওয়েবসাইটে আপনাকে স্বাগতম। এখানে আপনি আমাদের মাদ্রাসার সম্পর্কে তথ্য, শিক্ষাক্রম, এবং অন্যান্য গুরুত্বপূর্ণ আপডেট পাবেন।",
};


export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body
        className={`${geistSans.variable} ${PoppinsSans.variable} ${hindSiliguri.variable} antialiased`}
      >

        <main className="relative bg-[#f5f5f5] w-full min-h-screen font-hind-siliguri">
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </main>

      </body>
    </html>
  );
}
