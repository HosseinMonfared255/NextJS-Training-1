import Link from "next/link";
import { MdBusiness, MdLanguage, MdCall, MdEmail } from 'react-icons/md';



export default function Header() {
  return (
    <>
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Peer checkbox to toggle mobile menu */}
          <input id="nav-toggle" type="checkbox" className="peer hidden" />

          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-[48px] h-[48px] bg-blue-600 rounded-xl flex items-center justify-center ml-3">
                <MdBusiness className="text-white text-3xl" />
              </div>
              <span className="text-2xl font-bold text-blue-700">
                آریان گستر طوس
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-white/70 transition"
              >
                صفحه اصلی
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-white/70 transition"
              >
                پروژه‌ها
              </Link>
              <Link
                href="/submit"
                className="px-4 py-2 rounded-lg text-gray-50 bg-blue-600 hover:bg-blue-700 transition"
              >
                ثبت پروژه
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-white/70 transition"
              >
                ورود/ثبت‌نام
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-white/70 transition"
              >
                تماس با ما
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <label
              htmlFor="nav-toggle"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/70 text-gray-700 hover:bg-white transition cursor-pointer"
            >
              {/* Simple hamburger icon */}
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mt-1.5"></span>
            </label>
          </div>

          {/* Mobile menu (peer-controlled) */}
          <nav className="peer-checked:flex hidden md:hidden flex-col gap-2 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg mb-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              پروژه‌ها
            </Link>
            <Link
              href="/submit"
              className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              ثبت پروژه
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              ورود/ثبت‌نام
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              تماس با ما
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
