import { useState } from "react";

// دیتای نمونه کارها
const portfolioData = [
  {
    id: 1,
    title: "طراحی سایت فروشگاهی",
    category: "فروشگاهی",
    client: "دیجی‌کالا",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "طراحی سایت شرکتی",
    category: "شرکتی",
    client: "اسنپ",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "طراحی وب اپلیکیشن",
    category: "وب اپلیکیشن",
    client: "ترب",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "طراحی سایت شخصی",
    category: "شخصی",
    client: "مهندس محمدی",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "طراحی فروشگاه لوازم خانگی",
    category: "فروشگاهی",
    client: "فروشگاه لوازم خانگی رضایی",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "طراحی سایت کلینیک زیبایی",
    category: "شرکتی",
    client: "کلینیک زیبایی احمدی",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["همه", "فروشگاهی", "شرکتی", "وب اپلیکیشن", "شخصی"];

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
        {/* الگوی SVG */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* حباب‌های تزئینی */}
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

        {/* موج پایین هدر */}
        <svg
          className="absolute bottom-0 left-0 w-full text-slate-50"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
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
            <div
              key={item.id}
              style={{ animationDelay: `${index * 70}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-200 animate-[fadeInUp_0.6s_ease-out_both]"
            >
              {/* تصویر */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* گرادیانت روی تصویر */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* برچسب دسته */}
                <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-md backdrop-blur-sm">
                  {item.category}
                </span>

                {/* دکمه مشاهده */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="translate-y-6 rounded-xl bg-white/95 px-5 py-2.5 text-xs font-bold text-blue-600 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    مشاهده پروژه ←
                  </span>
                </div>
              </div>

              {/* اطلاعات */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
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
              </div>

              {/* نوار پایین */}
              <div className="h-1 w-full scale-x-0 bg-gradient-to-l from-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
            </div>
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