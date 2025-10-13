import { MdBusiness, MdLanguage, MdCall, MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="relative z-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-base text-gray-600">
            © ۱۴۰۴ تمامی حقوق برای شرکت آریان گستر طوس محفوظ است
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block w-10 h-10 bg-gray-200 rounded-full mx-2 leading-10 hover:bg-blue-600 transition group"
              aria-label="وب‌سایت"
            >
              <MdLanguage className="text-gray-600 text-xl inline-block group-hover:text-white transition" />
            </a>
            <a
              href="#"
              className="inline-block w-10 h-10 bg-gray-200 rounded-full mx-2 leading-10 hover:bg-blue-600 transition group"
              aria-label="تماس"
            >
              <MdCall className="text-gray-600 text-xl inline-block group-hover:text-white transition" />
            </a>
            <a
              href="#"
              className="inline-block w-10 h-10 bg-gray-200 rounded-full mx-2 leading-10 hover:bg-blue-600 transition group"
              aria-label="ایمیل"
            >
              <MdEmail className="text-gray-600 text-xl inline-block group-hover:text-white transition" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
