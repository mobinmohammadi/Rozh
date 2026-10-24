import { useState } from "react";
import { Link } from "react-router-dom";

// ===== دیتای نمونه کارها (بدون تصویر خارجی) =====
const portfolioData = [
  {
    id: 1,
    title: "طراحی سایت فروشگاهی",
    category: "فروشگاهی",
    client: "دیجی‌کالا",
    icon: "store",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "طراحی سایت شرکتی",
    category: "شرکتی",
    client: "اسنپ",
    icon: "building",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: 3,
    title: "طراحی وب اپلیکیشن",
    category: "وب اپلیکیشن",
    client: "ترب",
    icon: "app",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 4,
    title: "طراحی سایت شخصی",
    category: "شخصی",
    client: "مهندس محمدی",
    icon: "user",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "طراحی فروشگاه لوازم خانگی",
    category: "فروشگاهی",
    client: "فروشگاه لوازم خانگی رضایی",
    icon: "cart",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 6,
    title: "طراحی سایت کلینیک زیبایی",
    category: "شرکتی",
    client: "کلینیک زیبایی احمدی",
    icon: "heart",
    gradient: "from-pink-500 to-rose-600",
  },
];

const categories = ["همه", "فروشگاهی", "شرکتی", "وب اپلیکیشن", "شخصی"];

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
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  ),
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredData =
    activeCategory === "همه"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const getCount = (cat) =>
    cat === "همه"
      ? portfolioData.length
      : portfolioData.filter((i) => i.category === cat).length;

  return (
    <div dir="rtl" className="w-full bg-slate-50 font-Dana pb-20">
      {/* ===== هدر ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-24 text-center text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm ring-1 ring-white/20">
            ✨ نمونه کارهای ما
          </span>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            نمونه کارهای روژ وب
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            نگاهی به برخی از پروژه‌هایی که با افتخار برای مشتریان‌مان انجام
            داده‌ایم؛ از فروشگاه‌های آنلاین تا اپلیکیشن‌های تحت وب.
          </p>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-slate-50" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,40 C240,100 480,0 720,30 C960,60 1200,90 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ===== محتوای اصلی ===== */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 -mt-6">
        {/* فیلتر دسته‌بندی */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-105"
                    : "bg-white text-gray-600 shadow-sm ring-1 ring-gray-200 hover:ring-blue-300 hover:text-blue-600"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black transition-colors ${
                    active
                      ? "bg-white/25 text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}
                >
                  {getCount(category)}
                </span>
              </button>
            );
          })}
        </div>

        {/* گرید نمونه کارها */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item, index) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}`}
              style={{ animationDelay: `${index * 70}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-200 animate-fadeInUp focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {/* بلوک گرادیانت جایگزین تصویر */}
              <div className={`relative flex h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${item.gradient} text-white`}>
                {/* الگوی نقطه‌ای */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: "22px 22px",
                  }}
                />
                {/* حباب تزئینی */}
                <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

                {/* آیکون */}
                <div className="relative z-10 h-20 w-20 opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {icons[item.icon]}
                </div>

                {/* برچسب دسته */}
                <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-sm ring-1 ring-white/30">
                  {item.category}
                </span>

                {/* دکمه مشاهده (نمایش در hover) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="translate-y-6 rounded-xl bg-white/95 px-5 py-2.5 text-xs font-bold text-blue-600 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-1.5">
                    مشاهده پروژه
                    <span className="rotate-180">{icons.arrow}</span>
                  </span>
                </div>
              </div>

              {/* اطلاعات */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-600">
                      {item.client.charAt(0)}
                    </span>
                    <span>
                      کارفرما:{" "}
                      <span className="font-semibold text-gray-700">
                        {item.client}
                      </span>
                    </span>
                  </div>
                  {/* فلش حرکت در hover */}
                  <span className="text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 rotate-180">
                    {icons.arrow}
                  </span>
                </div>
              </div>

              {/* نوار پایین */}
              <div className="h-1 w-full scale-x-0 bg-gradient-to-l from-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
            </Link>
          ))}
        </div>

        {/* حالت خالی */}
        {filteredData.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
              🔍
            </div>
            <p className="text-sm font-bold text-gray-700">
              پروژه‌ای در این دسته‌بندی یافت نشد.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              می‌توانید دسته‌بندی دیگری را امتحان کنید.
            </p>
            <button
              onClick={() => setActiveCategory("همه")}
              className="mt-5 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/50 active:scale-95"
            >
              نمایش همه پروژه‌ها
            </button>
          </div>
        )}
      </div>
    </div>
  );
}