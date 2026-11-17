
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { AdvantagesSlider } from "../Components/Home/AdvantagesSlider ";

const brands = [
  { name: "KANGYUE", color: "#1457a6" },
  { name: "Jeep", color: "#263b16" },
  { name: "KIA", color: "#171717" },
  { name: "JETTA", color: "#315cff" },
  { name: "SAIPA", color: "#555555" },
  { name: "BAIC", color: "#d52d3a" },
  { name: "JAC", color: "#e60012" },
  { name: "RENAULT", color: "#9b8420" },
];

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "طراحی سایت اختصاصی",
    description: "طراحی وب‌سایت حرفه‌ای متناسب با هویت برند و نیاز کسب‌وکار شما",
  },
  {
    number: "02",
    icon: "↗",
    title: "سئو و بهینه‌سازی",
    description: "افزایش دیده‌شدن در گوگل و جذب مخاطبان هدفمند",
  },
  {
    number: "03",
    icon: "✎",
    title: "تولید محتوای حرفه‌ای",
    description: "تولید محتوای ارزشمند برای جذب اعتماد و تبدیل مخاطب به مشتری",
  },
  {
    number: "04",
    icon: "W",
    title: "طراحی سایت وردپرسی",
    description: "وب‌سایتی سریع، کاربردی و قابل توسعه با وردپرس",
  },
];

function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[530px]">
      {/* پس‌زمینه تزئینی */}
      <div className="absolute inset-8 rounded-full bg-blue-400/20 blur-[80px]" />

      <div className="absolute -right-3 top-12 h-20 w-20 rounded-3xl border border-blue-200/70 bg-white/50 blur-[1px]" />
      <div className="absolute -bottom-5 left-0 h-28 w-28 rounded-full border border-yellow-300/50" />

      {/* تصویر اصلی */}
      <div className="relative z-10 rounded-[32px] border border-white/80 bg-white/70 p-3 shadow-[0_30px_90px_-30px_rgba(30,64,175,0.3)] backdrop-blur-xl sm:p-5">
        <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50 to-slate-100">
          <img
            src="/images/hero-dashboard.png"
            alt="داشبورد دیجیتال روژ وب"
            className="aspect-square h-full w-full object-contain"
            onError={(e) => {
              e.currentTarget.src = "/images/admin2.jfif";
            }}
          />
        </div>
      </div>

      {/* کارت شناور */}
      <div className="absolute -right-2 top-8 z-20 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:-right-8 sm:top-14">
        <div className="flex items-center gap-3">
          <div className="flex md:h-10 md:w-10 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">
            ↗
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-gray-500">هدف ما</p>
            <p className="text-[10px] md:text-sm font-black text-gray-800">
              رشد کسب‌وکار شما
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-2 z-20 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:-left-8">
        <div className="flex items-center gap-3">
          <div className="flex md:h-10 md:w-10 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
            ✦
          </div>
          <div>
            <p className="text-xs text-gray-500 text-[10px] md:text-xs ">رویکرد روژ وب</p>
            <p className=" text-[10px] md:text-sm font-black text-gray-800">
              طراحی هوشمندانه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCards() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
      {services.map((service) => (
        <div
          key={service.number}
          className="group rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              {service.icon}
            </span>
            <span className="text-xs font-bold text-gray-300">
              {service.number}
            </span>
          </div>

          <h3 className="text-sm font-black text-gray-800 sm:text-base">
            {service.title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function BrandsSection() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden border-y border-gray-100 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold tracking-widest text-blue-600">
            OUR CLIENTS
          </span>
          <h2 className="mt-2 text-lg font-black text-gray-900 sm:text-2xl">
            برندهایی که به ما اعتماد کرده‌اند
          </h2>
          <p className="mt-2 text-xs text-gray-500 sm:text-sm">
            همراهی با کسب‌وکارهای مختلف برای ساختن تجربه‌ای بهتر در فضای دیجیتال
          </p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={3}
          spaceBetween={16}
          loop
          freeMode
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <SwiperSlide key={`${brand.name}-${index}`}>
              <div className="flex h-20 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/70 px-3 transition duration-300 hover:border-blue-100 hover:bg-white hover:shadow-lg">
                <span
                  className="whitespace-nowrap text-sm font-black tracking-tight"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default function MainLayout() {
  return (
    <>
      <main
        dir="rtl"
        className="min-h-screen overflow-hidden bg-white text-gray-800"
      >
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#f8faff]"
        >
          {/* پس‌زمینه */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-yellow-100/50 blur-[100px]" />

          <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 md:grid-cols-2 md:gap-10 lg:px-12 lg:pt-24">
            {/* متن */}
            <div className="relative z-10 order-2 md:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-xs font-bold text-blue-700">
                  همراه شما در مسیر رشد دیجیتال
                </span>
              </div>

              <h1 className="text-3xl font-black leading-[1.8] text-center tracking-tight text-gray-950 sm:text-4xl lg:text-[46px] lg:leading-[1.7]">
                در روژ وب،
                <br />
                <span className="relative inline-block text-blue-600">
                  رشد کسب‌وکار
                  <span className="absolute -bottom-1 right-0 h-2 w-full rounded-full bg-yellow-300/60" />
                </span>
                <br />
                فقط یک هدف نیست؛
                <br />
                <span className="text-gray-800">اولویت ماست.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-gray-500 sm:text-base sm:leading-9">
                ما در روژ وب با ترکیب طراحی حرفه‌ای، سئو و راهکارهای دیجیتال،
                به کسب‌وکار شما کمک می‌کنیم در فضای آنلاین بهتر دیده شود،
                مشتریان بیشتری جذب کند و مسیر رشد را هوشمندانه طی کند.
              </p>

              {/* دکمه‌ها */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30"
                >
                  مشاوره رایگان می‌خوام
                  <ArrowIcon className="h-5 w-5 transition group-hover:-translate-x-1" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 text-sm font-bold text-gray-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  مشاهده خدمات
                  <span className="text-lg">↓</span>
                </a>
              </div>

              {/* ویژگی‌ها */}
              <AdvantagesSlider/>
            </div>

            {/* تصویر */}
            <div className="relative order-1 mx-auto w-full max-w-[490px] md:order-2">
              <HeroIllustration />
            </div>
          </div>

          {/* موج انتهایی */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white [clip-path:ellipse(55%_100%_at_50%_100%)]" />
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <span className="text-xs font-black tracking-widest text-blue-600">
                  WHAT WE DO
                </span>

                <h2 className="mt-3 text-2xl font-black leading-relaxed text-gray-900 sm:text-3xl">
                  خدماتی برای
                  <span className="text-blue-600"> رشد واقعی </span>
                  کسب‌وکار شما
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-8 text-gray-500 md:mr-auto">
                از طراحی وب‌سایت تا بهینه‌سازی برای موتورهای جست‌وجو؛
                خدمات روژ وب با هدف ساختن یک حضور دیجیتال قدرتمند
                و اثربخش در کنار شماست.
              </p>
            </div>

            <ServiceCards />
          </div>
        </section>

        {/* BRANDS */}
        <BrandsSection />

        {/* CTA */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
          <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 px-6 py-12 text-center shadow-2xl shadow-blue-900/15 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[40px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-blue-200">
                LET'S GROW TOGETHER
              </span>

              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-relaxed text-white sm:text-3xl">
                آماده‌اید کسب‌وکارتان را یک قدم جلوتر ببرید؟
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-blue-100">
                برای شروع مسیر رشد دیجیتال، کافی است با ما در ارتباط باشید.
                ما برای شنیدن ایده شما آماده‌ایم.
              </p>

              <Link
                to="/contact-us"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 text-sm font-black text-blue-700 transition hover:-translate-y-1 hover:bg-yellow-300 hover:text-gray-900"
              >
                شروع همکاری با روژ وب
                <ArrowIcon className="h-5 w-5 transition group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Outlet />
    </>
  );
}
