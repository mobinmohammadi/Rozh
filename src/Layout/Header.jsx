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

      <header className="relative z-50 w-full bg-white border-b font-Dana border-gray-100">
        <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link to="/" className="text-xl font-black text-blue-600">
            روژ وب
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/contact-us"
              className="hidden sm:block rounded-md bg-yellow-400 px-5 py-2 text-xs font-bold text-gray-900 transition hover:bg-yellow-300"
            >
              ثبت درخواست
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              aria-label="باز کردن منو"
              aria-expanded={isMenuOpen}
            >
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative hidden w-full bg-[#f3f4f6] md:flex">
          <div className="absolute top-0 left-0 h-[24px] w-full pointer-events-none">
            <svg
              viewBox="0 0 1000 24"
              preserveAspectRatio="none"
              className="w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M0,0 L415,0 C450,0 470,18 500,18 C530,18 550,0 585,0 L1000,0"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto flex h-12 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10 pt-1">
            <nav className="flex items-center gap-6 sm:gap-10 text-[11px] sm:text-sm text-gray-700">
              {NAV_ITEMS.map((item) => (
                <NavItem key={item.to} to={item.to}>
                  {item.label}
                </NavItem>
              ))}
            </nav>

            <nav className="hidden md:flex items-center gap-6 sm:gap-10 text-[11px] sm:text-sm font-medium text-gray-700">
              {DROPDOWNS.map((dd) => (
                <div key={dd.key} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 py-2 transition-colors hover:text-blue-600"
                    aria-haspopup="true"
                  >
                    {dd.label}
                    <FiChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  <div className="invisible absolute right-0 top-full z-50 w-40 translate-y-2 pt-1 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
                      {dd.items.map((sub) => (
                        <NavItem
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2 text-gray-600 hover:bg-blue-50"
                        >
                          {sub.label}
                        </NavItem>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <NavItem to="/contact-us">تماس با ما</NavItem>
            </nav>
          </div>
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