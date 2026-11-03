import { Outlet, Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <header dir="rtl" className="relative font-sans z-50 w-full bg-white border-b border-gray-100">
        {/* ================= بخش بالایی (نوار سفید) ================= */}
        <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* لوگو */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-black text-blue-600">
              روژ وب
            </Link>
          </div>

          {/* دکمه و منوی موبایل */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact-us"
              className="hidden sm:block rounded-md bg-yellow-400 px-5 py-2 text-xs font-bold text-gray-900 transition hover:bg-yellow-300"
            >
              ثبت درخواست
            </Link>

            {/* ================= منوی همبرگری (موبایل) ================= */}
            <details className="relative md:hidden group">
              <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-gray-200 text-lg text-gray-700 hover:bg-gray-50 transition">
                ☰
              </summary>
              
              {/* بدنه منوی موبایل */}
              <nav className="absolute left-0 top-11 z-50 flex w-56 flex-col gap-2 rounded-xl border border-gray-100 bg-white p-3 text-sm shadow-xl">
                <Link to="/" className="hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">صفحه اصلی</Link>
                <Link to="/portfolio" className="hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">نمونه کارها</Link>
                <Link to="/articles" className="hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">مقالات</Link>
                
                {/* زیرمنوی کشویی خدمات در موبایل */}
                <details className="group/sub">
                  <summary className="flex cursor-pointer list-none items-center justify-between hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">
                    <span>خدمات</span>
                    <FiChevronDown className="w-4 h-4 transition-transform group-open/sub:rotate-180" />
                  </summary>
                  <div className="mt-1 flex flex-col border-r-2 border-gray-100 pr-3 mr-2">
                    <Link to="/services/web" className="hover:text-blue-600 py-1.5 text-gray-600 transition">طراحی سایت</Link>
                    <Link to="/services/seo" className="hover:text-blue-600 py-1.5 text-gray-600 transition">سئو</Link>
                    <Link to="/services/ui-ux" className="hover:text-blue-600 py-1.5 text-gray-600 transition">طراحی UI/UX</Link>
                  </div>
                </details>

                {/* زیرمنوی کشویی درباره ما در موبایل */}
                <details className="group/sub">
                  <summary className="flex cursor-pointer list-none items-center justify-between hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">
                    <span>درباره ما</span>
                    <FiChevronDown className="w-4 h-4 transition-transform group-open/sub:rotate-180" />
                  </summary>
                  <div className="mt-1 flex flex-col border-r-2 border-gray-100 pr-3 mr-2">
                    <Link to="/about/team" className="hover:text-blue-600 py-1.5 text-gray-600 transition">اعضای تیم</Link>
                    <Link to="/about/history" className="hover:text-blue-600 py-1.5 text-gray-600 transition">تاریخچه</Link>
                  </div>
                   <Link to="/contact-us" className="flex cursor-pointer list-none items-center justify-between hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition">
                    <span>تماس با ما</span>
                    <FiChevronDown className="w-4 h-4 transition-transform group-open/sub:rotate-180" />
                  </Link>
                </details>
              </nav>
            </details>
          </div>
        </div>

        {/* ================= بخش پایینی (نوار منو با فرورفتگی) ================= */}
        <div className="relative w-full bg-[#f3f4f6]">
          {/* خط آبی SVG */}
          <div className="absolute top-0 left-0 w-full h-[24px] pointer-events-none">
            <svg viewBox="0 0 1000 24" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,0 L415,0 C450,0 470,18 500,18 C530,18 550,0 585,0 L1000,0"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
              />
            </svg>
          </div>

          {/* محتوای نوار (دسکتاپ) */}
          <div className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10 relative z-10 pt-1">
            
            {/* لینک‌های سمت راست */}
            <nav className="flex items-center gap-6 sm:gap-10 text-[11px] sm:text-sm font-medium text-gray-700">
              <Link to="/" className="hover:text-blue-600 transition-colors">صفحه اصلی</Link>
              <Link to="/portfolio" className="hover:text-blue-600 transition-colors">نمونه کارها</Link>
              <Link to="/articles" className="hover:text-blue-600 transition-colors">مقالات</Link>
            </nav>

            {/* لینک‌های سمت چپ */}
            <nav className="hidden md:flex items-center gap-6 sm:gap-10 text-[11px] sm:text-sm font-medium text-gray-700">
              
              {/* منوی کشویی خدمات (دسکتاپ) */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
                  خدمات
                  <FiChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* دراپ‌داون */}
                <div className="absolute right-0 top-full pt-1 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
                    <Link to="/services/web" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">طراحی سایت</Link>
                    <Link to="/services/seo" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">سئو</Link>
                    <Link to="/services/ui-ux" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">طراحی UI/UX</Link>
                  </div>
                </div>
              </div>

              {/* منوی کشویی درباره ما (دسکتاپ) */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
                  درباره ما
                  <FiChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* دراپ‌داون */}
                <div className="absolute right-0 top-full pt-1 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
                    <Link to="/about/team" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">اعضای تیم</Link>
                    <Link to="/about/history" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">تاریخچه</Link>
                  </div>
                </div>
              </div>

              <Link to="/contact-us" className="hover:text-blue-600 transition-colors">تماس با ما</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* محتوای صفحات */}
      <Outlet />
    </>
  );
}