import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

/* ================= کامپوننت زیرمنوی ترنزیشنی ================= */
function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full flex-row-reverse cursor-pointer items-center justify-between rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600"
      >
        <span>{title}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* ترنزیشن ارتفاع با grid trick */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-1 mr-2 flex flex-col border-r-2 border-gray-100 pr-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // کدام زیرمنو باز است؟ (null | "services" | "about")
  const [openSection, setOpenSection] = useState(null);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleSection = (key) =>
    setOpenSection((prev) => (prev === key ? null : key));

  return (
    <>
      <header className="relative z-50 w-full bg-white border-b border-gray-100">
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

            {/* دکمه همبرگری (موبایل) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              aria-label="باز کردن منو"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= بخش پایینی (نوار منو با فرورفتگی) ================= */}
        <div className="relative w-full bg-[#f3f4f6] md:flex hidden">
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
            <nav className="flex items-center gap-6 sm:gap-10 text-[11px] sm:text-sm text-gray-700">
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

      {/* ================= منوی کناری موبایل (Drawer) ================= */}

      {/* پس‌زمینه تاریک */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* خود منو */}
      <nav
        className={`fixed top-0 right-0 z-[70] text-right font-Dana flex h-full w-72 flex-col gap-1 overflow-y-auto bg-white p-4 text-sm shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* هدر منو */}
        <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
            aria-label="بستن منو"
          >
            <FiX className="h-5 w-5" />
          </button>
          <span className="font-bold text-gray-800">منو</span>
        </div>

        <Link to="/" onClick={closeMenu} className="rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600">
          صفحه اصلی
        </Link>
        <Link to="/portfolio" onClick={closeMenu} className="rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600">
          نمونه کارها
        </Link>
        <Link to="/articles" onClick={closeMenu} className="rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600">
          مقالات
        </Link>

        {/* زیرمنوی خدمات (ترنزیشنی) */}
        <Accordion
          title="خدمات"
          isOpen={openSection === "services"}
          onToggle={() => toggleSection("services")}
        >
          <Link to="/services/web" onClick={closeMenu} className="py-1.5 text-gray-600 transition hover:text-blue-600">
            طراحی سایت
          </Link>
          <Link to="/services/seo" onClick={closeMenu} className="py-1.5 text-gray-600 transition hover:text-blue-600">
            سئو
          </Link>
          <Link to="/services/ui-ux" onClick={closeMenu} className="py-1.5 text-gray-600 transition hover:text-blue-600">
            طراحی UI/UX
          </Link>
        </Accordion>

        {/* زیرمنوی درباره ما (ترنزیشنی) */}
        <Accordion
          title="درباره ما"
          isOpen={openSection === "about"}
          onToggle={() => toggleSection("about")}
        >
          <Link to="/about/team" onClick={closeMenu} className="py-1.5 text-gray-600 transition hover:text-blue-600">
            اعضای تیم
          </Link>
          <Link to="/about/history" onClick={closeMenu} className="py-1.5 text-gray-600 transition hover:text-blue-600">
            تاریخچه
          </Link>
        </Accordion>

        {/* لینک تماس با ما */}
        <Link to="/contact-us" onClick={closeMenu} className="rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600">
          تماس با ما
        </Link>

        {/* دکمه ثبت درخواست داخل منو */}
        <Link
          to="/contact-us"
          onClick={closeMenu}
          className="mt-3 block rounded-md bg-yellow-400 px-5 py-2.5 text-center text-xs font-bold text-gray-900 transition hover:bg-yellow-300"
        >
          ثبت درخواست
        </Link>
      </nav>

      {/* محتوای صفحات */}
      <Outlet />
    </>
  );
}