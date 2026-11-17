
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const ArrowUpLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 19.5 4.5 4.5m0 0h11.25M4.5 4.5v11.25"
    />
  </svg>
);


const portfolioItems = [
  {
    title: "سایت آسان مالیات",
    category: "طراحی سایت مالی و حسابداری",
    description:
      "طراحی یک وب‌سایت حرفه‌ای برای ارائه خدمات مالیاتی، مشاوره و پرداخت آسان مالیات.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    link: "/portfolio/1",
  },
  {
    title: "فروشگاه آنلاین مدینو",
    category: "طراحی فروشگاه اینترنتی",
    description:
      "یک فروشگاه اینترنتی مدرن با تجربه خرید آسان، طراحی جذاب و نمایش حرفه‌ای محصولات.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    link: "/portfolio/2",
  },
  {
    title: "شرکت آریا سازه",
    category: "طراحی سایت شرکتی",
    description:
      "وب‌سایتی مدرن برای معرفی خدمات، نمایش پروژه‌ها و ایجاد ارتباط مؤثر با مشتریان.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
    link: "/portfolio/3",
  },
];


function PortfolioSection() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 font-Dana sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              رزومه و تجربه‌های ما
            </div>

            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
              نمونه‌کارهای <span className="text-blue-600">روژ وب</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-8 text-gray-500 sm:text-base">
              هر پروژه برای ما فرصتی است تا ایده‌ها را به تجربه‌ای متفاوت
              و حرفه‌ای در دنیای دیجیتال تبدیل کنیم.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
            <span className="text-3xl font-black text-blue-600">
              {portfolioItems.length.toString().padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-bold text-gray-800">
                پروژه نمایش داده شده
              </p>
              <p className="mt-1 text-[10px] text-gray-400">
                بخشی از تجربه‌های ما
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Image */}
              <div className="relative h-[230px] overflow-hidden bg-slate-100 p-3">
                <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-blue-700 shadow-sm backdrop-blur">
                    {item.category}
                  </span>

                  <div className="absolute bottom-4 left-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpLeftIcon />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 pt-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-600">
                    پروژه شماره {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-12 bg-blue-100 transition-all duration-500 group-hover:w-20 group-hover:bg-blue-500" />
                </div>

                <h3 className="text-base font-black text-gray-900 transition-colors group-hover:text-blue-700">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-xs leading-7 text-gray-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-bold text-gray-700 transition-colors group-hover:text-blue-600">
                    مشاهده جزئیات پروژه
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpLeftIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-blue-100 bg-gradient-to-l from-blue-50 to-white p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-lg font-black text-gray-900">
              پروژه بعدی شما می‌تواند اینجا باشد!
            </h3>
            <p className="mt-2 text-xs leading-7 text-gray-500 sm:text-sm">
              برای شروع یک همکاری حرفه‌ای، با ما در ارتباط باشید.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            سفارش طراحی سایت
            <ArrowUpLeftIcon />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PortfolioSection;
