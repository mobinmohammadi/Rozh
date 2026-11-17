import { useEffect, useCallback, useState, useLayoutEffect } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "صفحه اصلی", to: "/" },
  { label: "نمونه کارها", to: "/portfolio" },
  { label: "مقالات", to: "/articles" },
];

const DROPDOWNS = [
  {
    key: "services",
    label: "خدمات",
    items: [
      { label: "طراحی سایت", to: "/services/web" },
      { label: "سئو", to: "/services/seo" },
      { label: "طراحی UI/UX", to: "/services/ui-ux" },
    ],
  },
  {
    key: "about",
    label: "درباره ما",
    items: [
      { label: "اعضای تیم", to: "/about/team" },
      { label: "تاریخچه", to: "/about/history" },
    ],
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    reset();
    const raf = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

function Accordion({ id, title, isOpen, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        className="flex w-full flex-row-reverse cursor-pointer items-center justify-between rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600"
      >
        <span>{title}</span>
        <FiChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
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

function NavItem({ to, children, onClick, className = "" }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `transition-colors hover:text-blue-600 ${
          isActive ? "text-blue-600 font-bold" : ""
        } ${className}`
      }
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    reset();
    const raf = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSection(null);
  }, []);

  const toggleSection = (key) =>
    setOpenSection((prev) => (prev === key ? null : key));

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <ScrollToTop />

   
<header dir="rtl" className="sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/90 font-Dana backdrop-blur-xl">

  {/* نوار تزئینی بالای هدر */}
  <div className="h-1 w-full bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400" />

  <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between px-6 lg:px-10">

    {/* لوگو */}
    <Link
      to="/"
      className="group flex shrink-0 items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <span className="text-2xl font-black">ر</span>
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tight text-gray-900">
          روژ <span className="text-blue-600">وب</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-gray-400">
          طراحی و توسعه دیجیتال
        </span>
      </div>
    </Link>

    {/* منوی دسکتاپ */}
    <nav className="hidden items-center gap-1 rounded-2xl border border-gray-100 bg-gray-50/70 p-1.5 md:flex">

      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `relative rounded-xl px-5 py-3 text-[13px] font-semibold transition-all duration-300 ${
              isActive
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-blue-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}

      {DROPDOWNS.map((dd) => (
        <div key={dd.key} className="group relative">

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-semibold text-gray-600 transition-all duration-300 hover:bg-white hover:text-blue-600"
            aria-haspopup="true"
          >
            {dd.label}

            <FiChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Dropdown */}
          <div className="invisible absolute right-0 top-full z-50 w-56 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">

              <div className="mb-2 border-b border-gray-100 px-3 py-3">
                <span className="text-xs font-bold text-gray-400">
                  {dd.label}
                </span>
              </div>

              {dd.items.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-3 text-[13px] transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 font-bold text-blue-600"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  {sub.label}
                  <span className="text-blue-400">←</span>
                </NavLink>
              ))}

            </div>
          </div>
        </div>
      ))}

      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          `rounded-xl px-5 py-3 text-[13px] font-semibold transition-all duration-300 ${
            isActive
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:bg-white hover:text-blue-600"
          }`
        }
      >
        تماس با ما
      </NavLink>

    </nav>

    {/* دکمه ثبت درخواست */}
    <div className="hidden items-center md:flex">

      <Link
        to="/contact-us"
        className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-l from-blue-700 to-blue-500 px-6 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
      >
        <span className="relative z-10">ثبت درخواست</span>

        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 transition-transform duration-300 group-hover:-translate-x-1">
          <FiChevronDown className="h-4 w-4 rotate-90" />
        </span>

        <span className="absolute inset-0 translate-x-full bg-gradient-to-l from-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
      </Link>

    </div>

    {/* دکمه منوی موبایل */}
    <button
      onClick={() => setIsMenuOpen(true)}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
      aria-label="باز کردن منو"
      aria-expanded={isMenuOpen}
    >
      <FiMenu className="h-5 w-5" aria-hidden="true" />
    </button>

  </div>
</header>


      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <nav
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
        className={`fixed top-0 right-0 z-[70] flex h-full w-72 flex-col gap-1 overflow-y-auto bg-white p-4 text-right text-sm shadow-2xl transition-transform duration-300 ease-out will-change-transform md:hidden font-Dana ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
            aria-label="بستن منو"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="font-bold text-gray-800">منو</span>
        </div>

        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            onClick={closeMenu}
            className="rounded-md px-3 py-2 hover:bg-blue-50"
          >
            {item.label}
          </NavItem>
        ))}

        {DROPDOWNS.map((dd) => (
          <Accordion
            key={dd.key}
            id={dd.key}
            title={dd.label}
            isOpen={openSection === dd.key}
            onToggle={() => toggleSection(dd.key)}
          >
            {dd.items.map((sub) => (
              <NavItem
                key={sub.to}
                to={sub.to}
                onClick={closeMenu}
                className="py-1.5 text-gray-600"
              >
                {sub.label}
              </NavItem>
            ))}
          </Accordion>
        ))}

        <NavItem
          to="/contact-us"
          onClick={closeMenu}
          className="rounded-md px-3 py-2 hover:bg-blue-50"
        >
          تماس با ما
        </NavItem>

        <Link
          to="/contact-us"
          onClick={closeMenu}
          className="mt-3 block rounded-md bg-yellow-400 px-5 py-2.5 text-center text-xs font-bold text-gray-900 transition hover:bg-yellow-300"
        >
          ثبت درخواست
        </Link>
      </nav>

      <Outlet />
    </>
  );
}