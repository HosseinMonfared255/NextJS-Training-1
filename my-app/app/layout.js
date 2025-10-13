// app/layout.js
import './globals.css';
import Link from 'next/link';


export const metadata = {
  title: 'آریان گستر طوس',
  description: 'معرفی شرکت و پروژه‌های ساختمانی',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="relative overflow-hidden">
          {/* Background Shapes */}
          <div className="pointer-events-none absolute w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[80px] -top-[100px] -right-[100px]" />
          <div className="pointer-events-none absolute w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[80px] bottom-[100px] -left-[50px]" />
          {/* Main */}
          <main className="relative z-10">
            {children}
          </main>         
        </div>
      </body>
    </html>
  );
}
