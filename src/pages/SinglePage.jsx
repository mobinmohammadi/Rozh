import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// ===== دیتای نمونه =====
const projectData = {
  id: 1,
  title: "طراحی سایت فروشگاهی دیجی‌کالا",
  category: "فروشگاهی",
  client: "دیجی‌کالا",
  year: "۱۴۰۳",
  duration: "۳ ماه",
  website: "https://digikala.com",
  description:
    "طراحی و پیاده‌سازی کامل فروشگاه اینترنتی با تمرکز بر تجربه کاربری روان، سرعت بالا و طراحی مدرن. این پروژه شامل سیستم سبد خرید پیشرفته، درگاه پرداخت امن و پنل مدیریت اختصاصی است.",
  challenge:
    "چالش اصلی این پروژه، بهینه‌سازی سرعت بارگذاری در شرایطی بود که هزاران محصول و تصویر با کیفیت بالا باید نمایش داده می‌شد. با استفاده از lazy loading، CDN و بهینه‌سازی تصاویر، زمان بارگذاری را تا ۶۰٪ کاهش دادیم.",
  // به جای تصاویر، از پنل‌های رنگی با آیکون استفاده می‌کنیم
  panels: [
    { label: "صفحه اصلی فروشگاه", icon: "store", gradient: "from-blue-500 to-indigo-600" },
    { label: "سبد خرید", icon: "cart", gradient: "from-emerald-500 to-teal-600" },
    { label: "پنل مدیریت", icon: "dashboard", gradient: "from-purple-500 to-fuchsia-600" },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  services: ["طراحی UI/UX", "توسعه فرانت‌اند", "توسعه بک‌اند", "بهینه‌سازی SEO"],
  stats: [
    { label: "کاربران فعال", value: "۲M+" },
    { label: "رضایت مشتری", value: "۹۸٪" },
    { label: "افزایش فروش", value: "۴۵٪" },
  ],
};

const relatedProjects = [
  {
    id: 2,
    title: "طراحی سایت شرکتی اسنپ",
    category: "شرکتی",
    gradient: "from-sky-500 to-blue-600",
    icon: "building",
  },
  {
    id: 3,
    title: "طراحی وب اپلیکیشن ترب",
    category: "وب اپلیکیشن",
    gradient: "from-violet-500 to-purple-600",
    icon: "app",
  },
  {
    id: 5,
    title: "فروشگاه لوازم خانگی رضایی",
    category: "فروشگاهی",
    gradient: "from-amber-500 to-orange-600",
    icon: "cart",
  },
];

// ===== آیکون‌های SVG اینلاین =====
const icons = {
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9v11h18V9" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 9c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
};

export default function PortfolioDetail() {
  const { id } = useParams();
  const [activePanel, setActivePanel] = useState(0);
  const project = projectData;
  const active = project.panels[activePanel];

  return (
    <div dir="rtl" className="w-full bg-slate-50 font-Dana pb-20">
      {/* ===== هدر ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-16 text-white sm:py-24">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-white transition-colors">نمونه کارها</Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>

          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm ring-1 ring-white/20">
            {project.category}
          </span>
          <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-slate-50" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,40 C240,100 480,0 720,30 C960,60 1200,90 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ===== محتوای اصلی ===== */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 -mt-6">
        {/* پیش‌نمایش پروژه (بدون تصویر خارجی) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* پنل اصلی */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
            <div className={`relative flex aspect-video w-full flex-col items-center justify-center gap-4 bg-gradient-to-br ${active.gradient} text-white overflow-hidden`}>
              {/* الگوی نقطه‌ای */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              {/* حباب تزئینی */}
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 p-5 backdrop-blur-sm ring-1 ring-white/30">
                {icons[active.icon]}
              </div>
              <span className="relative z-10 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold backdrop-blur-sm ring-1 ring-white/30">
                {active.label}
              </span>
            </div>
          </div>

          {/* پنل‌های کوچک */}
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {project.panels.map((panel, idx) => (
              <button
                key={idx}
                onClick={() => setActivePanel(idx)}
                className={`group relative flex aspect-video flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br ${panel.gradient} text-white ring-2 transition-all duration-300 ${
                  activePanel === idx
                    ? "ring-blue-600 shadow-lg shadow-blue-600/20 scale-[1.02]"
                    : "ring-transparent opacity-70 hover:opacity-100 hover:ring-white/50"
                }`}
              >
                <div className="h-8 w-8 opacity-90">{icons[panel.icon]}</div>
                <span className="text-[10px] font-bold">{panel.label}</span>
                {activePanel !== idx && (
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* محتوا و سایدبار */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ستون اصلی */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">📝</span>
                درباره پروژه
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.description}</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">💡</span>
                چالش‌ها و راه‌حل‌ها
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.challenge}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg shadow-blue-600/20 transition-transform hover:-translate-y-1">
                  <div className="text-2xl font-black sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">✓</span>
                خدماتی که ارائه دادیم
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* سایدبار */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">اطلاعات پروژه</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">کارفرما</span>
                  <span className="font-bold text-gray-900">{project.client}</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">دسته‌بندی</span>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">{project.category}</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">سال انجام</span>
                  <span className="font-bold text-gray-900">{project.year}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-500">مدت زمان</span>
                  <span className="font-bold text-gray-900">{project.duration}</span>
                </li>
              </ul>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/50 active:scale-95"
              >
                <span>مشاهده سایت</span>
                <span>↗</span>
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">تکنولوژی‌های استفاده‌شده</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-600/20">
              <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <h3 className="text-base font-black">پروژه مشابهی در ذهن دارید؟</h3>
                <p className="mt-2 text-xs leading-6 text-blue-100">با ما تماس بگیرید تا در مورد ایده‌تان صحبت کنیم.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600 transition-transform hover:scale-105 active:scale-95">
                  شروع گفتگو ←
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ===== پروژه‌های مشابه ===== */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900 sm:text-2xl">پروژه‌های مشابه</h2>
            <Link to="/portfolio" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">مشاهده همه ←</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((item, idx) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-200 animate-fadeInUp"
              >
                {/* بلوک رنگی جایگزین تصویر */}
                <div className={`relative flex h-40 w-full items-center justify-center bg-gradient-to-br ${item.gradient} text-white overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 h-14 w-14 opacity-90 transition-transform duration-500 group-hover:scale-110">
                    {icons[item.icon]}
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur-sm ring-1 ring-white/30">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600">{item.title}</h3>
                </div>
                <div className="h-1 w-full scale-x-0 bg-gradient-to-l from-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}