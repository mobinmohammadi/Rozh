import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

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
  { Icon: CodeIcon, title: "طراحی با کد نویسی", description: "+۸ سال تجربه در عمق بازار" },
  { Icon: ChartIcon, title: "خدمات سئو", description: "کیفیت بالا در تمامی خدمات" },
  { Icon: PencilIcon, title: "تولید محتوا", description: "استفاده از ابزارهای مدرن" },
  { Icon: WordpressIcon, title: "طراحی سایت با وردپرس", description: "سریع، امن و مقیاس‌پذیر" },
];

function CodeIcon({ className = "size-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
function ChartIcon({ className = "size-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  );
}
function PencilIcon({ className = "size-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
}
function WordpressIcon({ className = "size-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.949 8.949 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function HeroIllustration() {
  const [imgError, setImgError] = useState(false);
  const wrapRef = useRef(null);

  const onMouseMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", `${x * 16}px`);
    el.style.setProperty("--my", `${y * 16}px`);
  };
  const onMouseLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="hero-parallax relative mx-auto flex w-full max-w-[480px] items-center justify-center p-4 sm:p-6"
    >
      <div className="hero-glow relative w-full rounded-3xl border-2 bg-white/60 p-3 backdrop-blur-sm sm:p-5">
        {!imgError ? (
          <img
            src="/images/hero-dashboard.png"
            alt="داشبورد دیجیتال روژ وب"
            className="relative z-10 h-auto w-full rounded-2xl object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-blue-50 text-sm text-blue-700">
            <img src="/images/admin1.jpg" alt="پیش‌نمایش داشبورد" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
      </div>

      <span className="hero-float absolute left-0 top-0 z-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 bg-white shadow-lg">
        <svg className="h-full w-full p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" aria-hidden="true">
          <circle cx="90" cy="90" r="90" className="fill-black" />
          <linearGradient id="next-a" x1="93.23" x2="128.73" y1="52.776" y2="8.776" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <path d="M149.5 157.5 69.1 54H54v72h12.1V69.4l73.9 95.5c3.3-2.3 6.5-4.7 9.5-7.4" fill="url(#next-a)" />
          <linearGradient id="next-b" x1="121.14" x2="120.94" y1="128.02" y2="75.147" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <path fill="url(#next-b)" d="M115 54h12v72h-12z" />
        </svg>
      </span>

      <span className="hero-float-alt absolute right-0 top-10 z-20 flex h-12 w-14 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg">
        <svg className="h-full w-full p-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 384" aria-hidden="true">
          <defs>
            <clipPath id="php-a" clipPathUnits="userSpaceOnUse">
              <path d="M11.52 162C11.52 81.677 135.307 16.561 288 16.561S564.481 81.677 564.481 162 440.693 307.439 288 307.439 11.52 242.322 11.52 162" />
            </clipPath>
            <clipPath id="php-b" clipPathUnits="userSpaceOnUse"><path d="M0 324h576V0H0z" /></clipPath>
            <clipPath id="php-c" clipPathUnits="userSpaceOnUse"><path d="M0 324h576V0H0z" /></clipPath>
          </defs>
          <g clipPath="url(#php-a)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
            <path d="M11.52 162C11.52 81.677 135.307 16.561 288 16.561S564.481 81.677 564.481 162 440.693 307.439 288 307.439 11.52 242.322 11.52 162" fill="#e8e8e8" />
          </g>
          <g clipPath="url(#php-b)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
            <path d="M0 0c146.729 0 265.68 60.281 265.68 134.641S146.729 269.282 0 269.282-265.68 209-265.68 134.641C-265.68 60.281-146.729 0 0 0" fill="#777bb3" transform="translate(288 27.36)" />
          </g>
          <g clipPath="url(#php-c)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
            <path d="M0 0c12.065 0 21.072 2.225 26.771 6.611 5.638 4.341 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348C32.783 53.086 25.417 55 14.297 55H-4.984L-15.673 0zm-63.063-67.75a2.998 2.998 0 0 0-2.944 3.572l28.328 145.751A3 3 0 0 0-34.734 84H26.32c19.188 0 33.47-5.21 42.447-15.487 9.025-10.331 11.812-24.772 8.283-42.921-1.436-7.394-3.906-14.261-7.341-20.409-3.439-6.155-7.984-11.85-13.511-16.93-6.616-6.192-14.104-10.682-22.236-13.324C25.959-27.678 15.681-29 3.414-29h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428z" fill="#fff" transform="translate(161.734 145.307)" />
            <path d="M0 0h16.808c13.421 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545C22.29-46.986 13.898-49 2.511-49H-9.523zm28.831 35h-61.055a6 6 0 0 1-5.889-4.855l-28.328-145.751a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855L-16.324-84H5.925c12.582 0 23.174 1.372 31.479 4.077 8.541 2.775 16.399 7.48 23.354 13.984 5.752 5.292 10.49 11.232 14.08 17.657 3.591 6.427 6.171 13.594 7.668 21.302 3.715 19.104.697 34.402-8.969 45.466C63.965 29.444 48.923 35 28.831 35m-45.633-90H2.511q19.203 0 28.601 7.234c6.266 4.824 10.492 12.875 12.688 24.157Q46.951-7.36 40.929-.68 34.9 6 16.808 6H-4.946zm45.633 84c18.367 0 31.766-4.82 40.188-14.461 8.421-9.641 10.957-23.098 7.597-40.375q-2.075-10.676-7.015-19.519-4.944-8.848-12.922-16.184-9.509-8.9-21.133-12.679C27.796-76.743 17.925-78 5.925-78h-27.196l-7.531-38.75h-31.75L-32.224 29z" fill="#fff" transform="translate(159.224 197.307)" />
            <path d="M0 0c-.896 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48L9.586 68.061c1.192 6.133.898 10.535-.827 12.395C7.703 81.593 4.531 83.5-4.848 83.5H-27.55L-43.305 2.428A3 3 0 0 0-46.25 0h-31.5a2.998 2.998 0 0 0-2.945 3.572l28.328 145.751a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572L-21.813 113H2.609c18.605 0 31.221-3.28 38.569-10.028 7.49-6.884 9.827-17.891 6.947-32.719L34.945 2.428A3 3 0 0 0 32 0z" fill="#fff" transform="translate(311.583 116.307)" />
            <path d="M0 0h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.751a5.998 5.998 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855L-7.155-74.25h20.229c9.363 0 11.328-2 11.407-2.086.568-.611 1.315-3.441.082-9.781l-12.531-64.489a5.998 5.998 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855L68.991-85.07c3.093 15.921.447 27.864-7.861 35.5-7.928 7.281-21.208 10.82-40.599 10.82H-.253L5.89-7.145A6 6 0 0 1 0 0m0-6-7.531-38.75h28.062c17.657 0 29.836-3.082 36.539-9.238 6.703-6.16 8.711-16.141 6.032-29.938l-13.18-67.824h-32l12.531 64.488q2.14 11.005-1.574 15.008-3.716 4.003-15.805 4.004h-25.176l-16.226-83.5h-31.5L-31.5-6z" fill="#fff" transform="translate(293.661 271.057)" />
            <path d="M0 0c12.065 0 21.072 2.225 26.771 6.611 5.638 4.34 9.532 11.861 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348C32.783 53.086 25.417 55 14.297 55H-4.984L-15.673 0zm-63.062-67.75a3 3 0 0 0-2.945 3.572l28.328 145.751A3 3 0 0 0-34.733 84H26.32c19.189 0 33.47-5.21 42.448-15.487 9.025-10.33 11.811-24.771 8.283-42.921-1.438-7.394-3.907-14.261-7.342-20.409-3.439-6.155-7.984-11.85-13.511-16.93-6.616-6.192-14.104-10.682-22.236-13.324C25.959-27.678 15.681-29 3.414-29h-24.723l-7.057-36.322a3 3 0 0 0-2.946-2.428z" fill="#fff" transform="translate(409.55 145.307)" />
            <path d="M0 0h16.808c13.421 0 18.083-2.945 19.667-4.7 2.629-2.914 3.125-9.058 1.435-17.766-1.898-9.751-5.417-16.664-10.458-20.546C22.29-46.986 13.898-49 2.511-49H-9.522zm28.831 35h-61.054a6 6 0 0 1-5.889-4.855L-66.44-115.606a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855L-16.324-84H5.925c12.582 0 23.174 1.372 31.479 4.077 8.541 2.775 16.401 7.481 23.356 13.986 5.752 5.291 10.488 11.23 14.078 17.655 3.591 6.427 6.171 13.594 7.668 21.302 3.715 19.105.697 34.403-8.969 45.467C63.965 29.444 48.924 35 28.831 35m-45.632-90H2.511q19.202 0 28.601 7.234c6.267 4.824 10.492 12.875 12.688 24.157Q46.953-7.36 40.929-.68 34.9 6 16.808 6H-4.946zm45.632 84c18.367 0 31.766-4.82 40.188-14.461s10.957-23.098 7.597-40.375q-2.075-10.676-7.015-19.519-4.944-8.848-12.922-16.184-9.509-8.9-21.133-12.679C27.796-76.743 17.925-78 5.925-78h-27.196l-7.53-38.75h-31.75L-32.223 29z" fill="#fff" transform="translate(407.04 197.307)" />
          </g>
        </svg>
      </span>

      <span className="hero-float-fast absolute bottom-0 left-6 z-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg">
        <svg className="h-full w-full p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
          <linearGradient id="py-a" x1="47.667" x2="544.303" y1="363.376" y2="-63.912" gradientTransform="matrix(.5625 0 0 -.568 -36.442 220.966)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5a9fd4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <path d="M253 0c-20.9.1-40.8 1.9-58.4 5-51.7 9.1-61.1 28.2-61.1 63.5V115h122.1v15.5H87.7c-35.5 0-66.6 21.3-76.3 61.9C.2 239-.3 268 11.4 316.6c8.7 36.2 29.4 61.9 64.9 61.9h42v-55.8c0-40.3 34.9-75.9 76.3-75.9h122c34 0 61.1-28 61.1-62.1V68.5c0-33.1-27.9-58-61.1-63.5-21-3.5-42.7-5.1-63.6-5m-66.1 37.4c12.6 0 22.9 10.5 22.9 23.3s-10.3 23.2-22.9 23.2C174.3 84 164 73.6 164 60.8c0-12.9 10.3-23.4 22.9-23.4" fill="url(#py-a)" />
          <linearGradient id="py-b" x1="736.305" x2="558.957" y1="-322.524" y2="-71.607" gradientTransform="matrix(.5625 0 0 -.568 -36.442 220.966)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffd43b" />
            <stop offset="1" stopColor="#ffe873" />
          </linearGradient>
          <path d="M392.9 130.6v54.2c0 42.1-35.7 77.4-76.3 77.4h-122c-33.4 0-61.1 28.6-61.1 62.1v116.3c0 33.1 28.8 52.6 61.1 62.1 38.7 11.4 75.7 13.4 122 0 30.8-8.9 61.1-26.8 61.1-62.1V394h-122v-15.5h183.1c35.5 0 48.7-24.8 61.1-61.9 12.8-38.3 12.2-75.1 0-124.1-8.8-35.3-25.5-61.9-61.1-61.9zm-68.6 294.5c12.7 0 22.9 10.4 22.9 23.2 0 12.9-10.3 23.3-22.9 23.3s-22.9-10.5-22.9-23.3 10.3-23.2 22.9-23.2" fill="url(#py-b)" />
        </svg>
      </span>
    </div>
  );
}

function ServiceSlider() {
  return (
    <div className="mt-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={14}
        slidesPerView={1.6}
        freeMode
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 2.2 },
          768: { slidesPerView: 2.6 },
          1024: { slidesPerView: 2 },
        }}
        className="!overflow-visible"
      >
        {services.map(({ Icon, title, description }) => (
          <SwiperSlide key={title}>
            <div className="group flex w-[200px] h-[80px] items-center gap-3 rounded-2xl border border-gray-100 bg-white/80 p-3 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-gray-800">{title}</h3>
                <p className="mt-1 truncate text-[11px] text-gray-500">{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function BrandsSection() {
  return (
    <section id="brands" className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={3}
          spaceBetween={24}
          loop
          freeMode
          speed={4200}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            480: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <SwiperSlide key={`${brand.name}-${i}`}>
              <div className="flex h-[100px] items-center justify-center rounded-xl border border-transparent transition hover:border-gray-200 hover:bg-white">
                <span className="whitespace-nowrap text-sm font-black tracking-tight" style={{ color: brand.color }}>
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
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      hero.style.setProperty("--gx", `${x * 100}%`);
      hero.style.setProperty("--gy", `${y * 100}%`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <main dir="rtl" className="min-h-screen bg-white text-gray-800">
        <section ref={heroRef} id="home" className="hero-bg relative scroll-mt-24 overflow-hidden">
          <div className="hero-spotlight pointer-events-none absolute inset-0 -z-10" />
          <div className="hero-orbs pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <span className="orb orb-1" />
            <span className="orb orb-2" />
            <span className="orb orb-3" />
          </div>

          <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-8 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 md:grid md:grid-cols-2 md:gap-10 md:py-20 lg:px-12 lg:py-24">
            <div className="order-1 w-full text-right">
              <div className="mb-5 flex items-center gap-2" aria-hidden="true">
                <span className="h-0.5 w-8 bg-gray-300" />
                <span className="h-0.5 w-3 bg-gray-200" />
              </div>

              <h1 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg sm:text-2xl lg:text-4xl">
                <span className="text-gray-600">در</span>
                <span className="relative font-bold text-yellow-500">
                  روژ وب
                  <span className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/70 to-yellow-400/0" />
                </span>
                <span className="font-bold text-gray-900">تمرکز روی سود شماست</span>
              </h1>

              <p className="mt-4 max-w-lg text-xs leading-7 text-gray-500 sm:text-sm sm:leading-8">
                ما باور داریم تلاشی که به «سود» ختم نشود، بی‌نتیجه است. در رونق، تمام استراتژی‌های ما فقط با یک هدف طراحی می‌شوند: رشد مالی قطعی برای کسب و کار شما
              </p>

              <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="group inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-l from-blue-600 to-blue-500 px-4 py-3 text-[10px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] transition hover:from-blue-700 hover:to-blue-600 sm:w-auto sm:text-xs"
                >
                  <span>مشاوره می‌خوام</span>
                  <svg className="h-5 w-5 transition group-hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </Link>
              </div>

              <ServiceSlider />
            </div>

            <div className="order-2 mx-auto w-full max-w-[480px] md:order-1">
              <HeroIllustration />
            </div>
          </div>
        </section>

        <BrandsSection />
      </main>
      <Outlet />
    </>
  );
}