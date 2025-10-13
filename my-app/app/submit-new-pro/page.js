"use client";

import Link from "next/link";
import SubmissionForm from "../../components/submit-form/SubmissionForm";

export default function ProjectSubmissionPage() {
  return (
    <div dir="rtl" lang="fa" className="min-h-screen bg-gray-100 font-display text-gray-800">
      {/* Page container */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-blue-900 drop-shadow-sm">آریان گستر توس</h1>
              <p className="text-md text-blue-700 italic">ثبت پروژه جدید</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-blue-800 font-semibold">
            <Link className="hover:text-blue-900 transition" href="/">صفحه اصلی</Link>
          </nav>
        </header>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left panel */}
            <aside className="hidden lg:block bg-gradient-to-b from-blue-50 to-gray-100 p-10 border-r border-gray-300 rounded-tl-3xl rounded-bl-3xl shadow-inner">
              <h2 className="text-3xl font-bold mb-3 text-blue-900 drop-shadow-sm">فرم جامع درخواست پروژه</h2>
              <p className="text-md text-blue-800 leading-relaxed">فرم را با جزئیات تکمیل کنید تا بهترین پیشنهاد فنی و مالی را برای پروژه‌ی شما آماده کنیم. اطلاعات اختیاری را هم در صورت امکان ارسال کنید.</p>

              <ul className="mt-8 space-y-4 text-md text-blue-800 font-semibold">
                <li className="flex items-center gap-4">
                  <span className="inline-block w-4 h-4 rounded-full bg-yellow-500 shadow-md"></span>ارزیابی سریع و رایگان
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-block w-4 h-4 rounded-full bg-yellow-500 shadow-md"></span>پیشنهاد هزینه و زمان‌بندی
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-block w-4 h-4 rounded-full bg-yellow-500 shadow-md"></span>پشتیبانی دریافت فایل و نقشه
                </li>
              </ul>

              <div className="mt-10">
                <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-2xl font-bold shadow-lg transition-transform transform hover:-translate-y-1">راهنما <span className="material-symbols-outlined">help</span></a>
              </div>
            </aside>

            {/* Right: Form */}
            <main className="lg:col-span-2 p-10 bg-white rounded-tr-3xl rounded-br-3xl shadow-lg">
              <SubmissionForm />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
