import { Link } from "react-router-dom";

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

function ChartIcon({ className = "size-6" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
    );
}

function BageIcon({ className = "size-6" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    )
}

function ShieldCheck({ className = "size-6" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
    );
}

const services = [
    {
        Svg: BageIcon,
        title: "طراحی با کد نویسی",
        description: "+ 8 سال تجربه عمق بازار",
    },
    {
        Svg: ChartIcon,
        title: "خدمات سئو",
        description: "کیفیت بالا در تمامی خدمات",
    },
    {
        Svg: ShieldCheck,
        title: "تولید محتوا",
        description: "استفاده از ابزارهای مدرن",
    },
    {
        Svg: ShieldCheck,
        title: "طراحی سایت با وردپرس",
        description: "استفاده از ابزارهای مدرن",
    },
];

function Header() {
    return (
        <header className="relative font-Dana z-10 bg-white">
            <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
                {/* لوگو */}
                <a href="/" className="shrink-0 text-sm font-black text-blue-700 sm:text-base">
                    <span className="text-blue-600">سود</span>
                    <span className="text-slate-800">شماتست</span>
                </a>

                {/* منوی دسکتاپ */}
                <nav className="hidden items-center gap-6 text-[11px] text-gray-600 md:flex">
                    <a href="#home" className="transition hover:text-blue-600">صفحه اصلی</a>
                    <a href="#services" className="transition hover:text-blue-600">خدمات</a>
                    <a href="#about" className="transition hover:text-blue-600">درباره ما</a>
                    <a href="#contact" className="transition hover:text-blue-600">تماس با ما</a>
                </nav>

                {/* اقدامات هدر */}
                <div className="flex items-center gap-2">
                    <button aria-label="جستجو" className="hidden h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 sm:flex">
                        ⌕
                    </button>

                    <button className="rounded-md bg-yellow-400 px-3 py-2 text-[10px] font-bold text-gray-900 transition hover:bg-yellow-300 sm:px-5">
                        ثبت درخواست
                    </button>

                    {/* منوی موبایل */}
                    <details className="relative md:hidden">
                        <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md border border-gray-200 text-lg">
                            ☰
                        </summary>
                        <nav className="absolute left-0 top-10 z-50 flex w-44 flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 text-xs shadow-xl">
                            <a href="#home">صفحه اصلی</a>
                            <a href="#services">خدمات</a>
                            <a href="#about">درباره ما</a>
                            <a href="#contact">تماس با ما</a>
                        </nav>
                    </details>
                </div>
            </div>

            {/* نوار آبی ناوبری */}
            <div className="relative bg-blue-600 text-white">
                <div className="mx-auto flex h-10 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    <nav className="flex items-center gap-4 text-[10px] sm:gap-7 sm:text-xs">
                        <a href="#home" className="hover:text-yellow-300">درباره ما</a>
                        <a href="#services" className="hover:text-yellow-300">خدمات</a>
                    </nav>

                    <nav className="flex items-center gap-3 text-[10px] sm:gap-7 sm:text-xs">
                        <a href="#contact" className="hover:text-yellow-300">تماس با ما</a>
                        <a href="#brands" className="hover:text-yellow-300">برندهای همکار</a>
                    </nav>
                </div>

                {/* فرورفتگی تزئینی وسط نوار */}
                <div className="pointer-events-none absolute -bottom-[13px] left-1/2 hidden h-[26px] w-32 -translate-x-1/2 rounded-b-[50%] bg-white md:block" />
            </div>
        </header>
    );
}

function HeroIllustration() {
    return (
        <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center p-4 sm:p-6">
            
            {/* باکس حاشیه دار با انیمیشن تغییر رنگ rgba */}
            <div 
                className="relative w-full rounded-3xl border-2 bg-white/50 backdrop-blur-sm p-3 sm:p-5"
                style={{ animation: "colorGlow 4s linear infinite" }}
            >
                {/* تصویر اصلی */}
                <img
                    src="/images/hero-dashboard.png"
                    alt="تصویر تجهیزات و داشبورد دیجیتال"
                    className="relative z-10 h-auto w-full object-contain rounded-2xl"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = "flex";
                        }
                    }}
                />

                {/* جایگزین موقت در صورت نبودن تصویر */}
                <div className="hidden w-full aspect-square relative overflow-hidden items-center justify-center rounded-2xl bg-blue-50 text-center text-sm text-blue-700">
                    <img className="w-full h-full object-cover" src="/images/admin1.jpg" alt="پیش‌نمایش" />
                    <div className="w-full h-full bg-black/20 absolute"></div>
                </div>
            </div>

            {/* 1. Next.js - بالا سمت چپ */}
            <span 
                className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-blue-500 bg-white shadow-lg flex items-center justify-center overflow-hidden z-20"
                style={{ animation: "float 3s ease-in-out infinite" }}
            >
                <svg className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 180 180">
                    <circle cx="90" cy="90" r="90" className="fill-black" />
                    <linearGradient id="next-a" x1="93.23" x2="128.73" y1="52.776" y2="8.776" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <path d="M149.5 157.5 69.1 54H54v72h12.1V69.4l73.9 95.5c3.3-2.3 6.5-4.7 9.5-7.4" style={{ fill: "url(#next-a)" }} />
                    <linearGradient id="next-b" x1="121.14" x2="120.94" y1="128.02" y2="75.147" gradientTransform="matrix(1 0 0 -1 0 182)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <path fill="url(#next-b)" d="M115 54h12v72h-12z" />
                </svg>
            </span>

            {/* 2. PHP - راست بالا */}
            <span 
                className="absolute right-0 top-10 w-14 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden z-20"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
            >
                <svg className="w-full h-full p-1.5" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 711 384">
                    <defs fill="#fff">
                        <clipPath id="php-a" fill="#fff" clipPathUnits="userSpaceOnUse">
                            <path d="M11.52 162C11.52 81.677 135.307 16.561 288 16.561S564.481 81.677 564.481 162 440.693 307.439 288 307.439 11.52 242.322 11.52 162" />
                        </clipPath>
                        <clipPath id="php-b" fill="#fff" clipPathUnits="userSpaceOnUse">
                            <path d="M0 324h576V0H0z" />
                        </clipPath>
                        <clipPath id="php-c" fill="#fff" clipPathUnits="userSpaceOnUse">
                            <path d="M0 324h576V0H0z" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#php-a)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
                        <path d="M11.52 162C11.52 81.677 135.307 16.561 288 16.561S564.481 81.677 564.481 162 440.693 307.439 288 307.439 11.52 242.322 11.52 162" style={{ fill: "#e8e8e8", stroke: "none" }} />
                    </g>
                    <g clipPath="url(#php-b)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
                        <path d="M0 0c146.729 0 265.68 60.281 265.68 134.641S146.729 269.282 0 269.282-265.68 209-265.68 134.641C-265.68 60.281-146.729 0 0 0" style={{ fill: "#777bb3", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(288 27.36)" />
                    </g>
                    <g clipPath="url(#php-c)" transform="matrix(1.25 0 0 -1.25 -4.4 394.299)">
                        <path d="M0 0c12.065 0 21.072 2.225 26.771 6.611 5.638 4.341 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348C32.783 53.086 25.417 55 14.297 55H-4.984L-15.673 0zm-63.063-67.75a2.998 2.998 0 0 0-2.944 3.572l28.328 145.751A3 3 0 0 0-34.734 84H26.32c19.188 0 33.47-5.21 42.447-15.487 9.025-10.331 11.812-24.772 8.283-42.921-1.436-7.394-3.906-14.261-7.341-20.409-3.439-6.155-7.984-11.85-13.511-16.93-6.616-6.192-14.104-10.682-22.236-13.324C25.959-27.678 15.681-29 3.414-29h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(161.734 145.307)" />
                        <path d="M0 0h16.808c13.421 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545C22.29-46.986 13.898-49 2.511-49H-9.523zm28.831 35h-61.055a6 6 0 0 1-5.889-4.855l-28.328-145.751a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855L-16.324-84H5.925c12.582 0 23.174 1.372 31.479 4.077 8.541 2.775 16.399 7.48 23.354 13.984 5.752 5.292 10.49 11.232 14.08 17.657 3.591 6.427 6.171 13.594 7.668 21.302 3.715 19.104.697 34.402-8.969 45.466C63.965 29.444 48.923 35 28.831 35m-45.633-90H2.511q19.203 0 28.601 7.234c6.266 4.824 10.492 12.875 12.688 24.157Q46.951-7.36 40.929-.68 34.9 6 16.808 6H-4.946zm45.633 84c18.367 0 31.766-4.82 40.188-14.461 8.421-9.641 10.957-23.098 7.597-40.375q-2.075-10.676-7.015-19.519-4.944-8.848-12.922-16.184-9.509-8.9-21.133-12.679C27.796-76.743 17.925-78 5.925-78h-27.196l-7.531-38.75h-31.75L-32.224 29z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(159.224 197.307)" />
                        <path d="M0 0c-.896 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48L9.586 68.061c1.192 6.133.898 10.535-.827 12.395C7.703 81.593 4.531 83.5-4.848 83.5H-27.55L-43.305 2.428A3 3 0 0 0-46.25 0h-31.5a2.998 2.998 0 0 0-2.945 3.572l28.328 145.751a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572L-21.813 113H2.609c18.605 0 31.221-3.28 38.569-10.028 7.49-6.884 9.827-17.891 6.947-32.719L34.945 2.428A3 3 0 0 0 32 0z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(311.583 116.307)" />
                        <path d="M0 0h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.751a5.998 5.998 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855L-7.155-74.25h20.229c9.363 0 11.328-2 11.407-2.086.568-.611 1.315-3.441.082-9.781l-12.531-64.489a5.998 5.998 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855L68.991-85.07c3.093 15.921.447 27.864-7.861 35.5-7.928 7.281-21.208 10.82-40.599 10.82H-.253L5.89-7.145A6 6 0 0 1 0 0m0-6-7.531-38.75h28.062c17.657 0 29.836-3.082 36.539-9.238 6.703-6.16 8.711-16.141 6.032-29.938l-13.18-67.824h-32l12.531 64.488q2.14 11.005-1.574 15.008-3.716 4.003-15.805 4.004h-25.176l-16.226-83.5h-31.5L-31.5-6z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(293.661 271.057)" />
                        <path d="M0 0c12.065 0 21.072 2.225 26.771 6.611 5.638 4.34 9.532 11.861 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348C32.783 53.086 25.417 55 14.297 55H-4.984L-15.673 0zm-63.062-67.75a3 3 0 0 0-2.945 3.572l28.328 145.751A3 3 0 0 0-34.733 84H26.32c19.189 0 33.47-5.21 42.448-15.487 9.025-10.33 11.811-24.771 8.283-42.921-1.438-7.394-3.907-14.261-7.342-20.409-3.439-6.155-7.984-11.85-13.511-16.93-6.616-6.192-14.104-10.682-22.236-13.324C25.959-27.678 15.681-29 3.414-29h-24.723l-7.057-36.322a3 3 0 0 0-2.946-2.428z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(409.55 145.307)" />
                        <path d="M0 0h16.808c13.421 0 18.083-2.945 19.667-4.7 2.629-2.914 3.125-9.058 1.435-17.766-1.898-9.751-5.417-16.664-10.458-20.546C22.29-46.986 13.898-49 2.511-49H-9.522zm28.831 35h-61.054a6 6 0 0 1-5.889-4.855L-66.44-115.606a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855L-16.324-84H5.925c12.582 0 23.174 1.372 31.479 4.077 8.541 2.775 16.401 7.481 23.356 13.986 5.752 5.291 10.488 11.23 14.078 17.655 3.591 6.427 6.171 13.594 7.668 21.302 3.715 19.105.697 34.403-8.969 45.467C63.965 29.444 48.924 35 28.831 35m-45.632-90H2.511q19.202 0 28.601 7.234c6.267 4.824 10.492 12.875 12.688 24.157Q46.953-7.36 40.929-.68 34.9 6 16.808 6H-4.946zm45.632 84c18.367 0 31.766-4.82 40.188-14.461s10.957-23.098 7.597-40.375q-2.075-10.676-7.015-19.519-4.944-8.848-12.922-16.184-9.509-8.9-21.133-12.679C27.796-76.743 17.925-78 5.925-78h-27.196l-7.53-38.75h-31.75L-32.223 29z" style={{ fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} transform="translate(407.04 197.307)" />
                    </g>
                </svg>
            </span>

            {/* 3. Python - پایین سمت چپ */}
            <span 
                className="absolute bottom-0 left-6 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center overflow-hidden z-20"
                style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
            >
                <svg className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
                    <linearGradient id="py-a" x1="47.667" x2="544.303" y1="363.376" y2="-63.912" gradientTransform="matrix(.5625 0 0 -.568 -36.442 220.966)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#5a9fd4" }} />
                        <stop offset="1" style={{ stopColor: "#306998" }} />
                    </linearGradient>
                    <path d="M253 0c-20.9.1-40.8 1.9-58.4 5-51.7 9.1-61.1 28.2-61.1 63.5V115h122.1v15.5H87.7c-35.5 0-66.6 21.3-76.3 61.9C.2 239-.3 268 11.4 316.6c8.7 36.2 29.4 61.9 64.9 61.9h42v-55.8c0-40.3 34.9-75.9 76.3-75.9h122c34 0 61.1-28 61.1-62.1V68.5c0-33.1-27.9-58-61.1-63.5-21-3.5-42.7-5.1-63.6-5m-66.1 37.4c12.6 0 22.9 10.5 22.9 23.3s-10.3 23.2-22.9 23.2C174.3 84 164 73.6 164 60.8c0-12.9 10.3-23.4 22.9-23.4" style={{ fill: "url(#py-a)" }} />
                    <linearGradient id="py-b" x1="736.305" x2="558.957" y1="-322.524" y2="-71.607" gradientTransform="matrix(.5625 0 0 -.568 -36.442 220.966)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#ffd43b" }} />
                        <stop offset="1" style={{ stopColor: "#ffe873" }} />
                    </linearGradient>
                    <path d="M392.9 130.6v54.2c0 42.1-35.7 77.4-76.3 77.4h-122c-33.4 0-61.1 28.6-61.1 62.1v116.3c0 33.1 28.8 52.6 61.1 62.1 38.7 11.4 75.7 13.4 122 0 30.8-8.9 61.1-26.8 61.1-62.1V394h-122v-15.5h183.1c35.5 0 48.7-24.8 61.1-61.9 12.8-38.3 12.2-75.1 0-124.1-8.8-35.3-25.5-61.9-61.1-61.9zm-68.6 294.5c12.7 0 22.9 10.4 22.9 23.2 0 12.9-10.3 23.3-22.9 23.3s-22.9-10.5-22.9-23.3 10.3-23.2 22.9-23.2" style={{ fill: "url(#py-b)" }} />
                </svg>
            </span>
        </div>
    );
}

function ServiceFeatures() {
    return (
        <div
            id="services"
            className="mt-7 grid grid-cols-2 pr-2 sm:pr-0 gap-4 sm:grid-cols-2 sm:gap-3"
        >
            {services.map((service) => {
                const { Svg, title, description } = service;

                return (
                    <div key={title} className="flex items-center gap-2 text-right">
                        <span className="flex sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-md text-sm text-blue-600">
                            <Svg className="size-6" />
                        </span>

                        <div className="min-w-0">
                            <h3 className="text-[10px] font-bold text-gray-700">{title}</h3>
                            <p className="mt-1 text-[9px] leading-5 text-gray-400">{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function BrandsSection() {
    return (
        <section id="brands" className="bg-[#fafafa]">
            <div className="mx-auto grid max-w-[1200px] grid-cols-4 items-center gap-x-3 gap-y-5 px-4 py-6 sm:grid-cols-4 sm:px-8 md:grid-cols-8 md:gap-5 lg:px-10">
                {brands.map((brand) => (
                    <div key={brand.name} className="flex min-h-9 items-center justify-center">
                        {/* استفاده از span به جای svg برای نمایش صحیح متن */}
                        <span
                            className="whitespace-nowrap text-xs font-black tracking-tight sm:text-sm"
                            style={{ color: brand.color }}
                        >
                            {brand.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}



export default function HiroSection() {
    return (
        <main dir="rtl" className="min-h-screen bg-white text-gray-800">
            <div className="mx-auto max-w-[1440px]">
                <Header />

                {/* flex-col-reverse برای نمایش تصویر بالا در موبایل */}
                <section
                    id="home"
                    className="mx-auto flex flex-col-reverse md:grid max-w-[1200px] items-center gap-8 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 md:grid-cols-2 md:gap-10 md:py-16 lg:px-12 lg:py-20"
                >
                    {/* متن سمت راست */}
                    <div className="order-1 text-right w-full">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-[2px] w-8 bg-gray-300" />
                            <span className="h-[2px] w-3 bg-gray-200" />
                        </div>
                        <div className="flex items-center text-[20px] gap-2">

                        <span>در </span>
                        <span className="text-yellow-500">روژ وب</span>
                        <span className=" text-gray-900 sm:text-3xl lg:text-[40px]">
                            تمرکز روی سود شماست
                        </span>
                        </div>

                        <p className="mt-4 max-w-lg text-xs leading-7 text-gray-500 sm:text-sm sm:leading-8">
                            ما باور داریم تلاشی که به «سود» ختم نشود، بی‌نتیجه است. در
                            رونق، تمام استراتژی‌های ما فقط با یک هدف طراحی می‌شوند:
                            رشد مالی قطعی برای کسب و کار شما
                        </p>

                        {/* دکمه‌ها */}
                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
                            <Link
                                to="#"
                                className="inline-flex w-full sm:w-auto min-h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-[10px] font-bold text-white shadow-sm transition hover:bg-blue-700 sm:text-xs"
                            >
                                <span aria-hidden="true">▣</span>
                                مشاوره میخوام
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                </svg>
                            </Link>

                            <Link
                                to="#"
                                className="inline-flex w-full sm:w-auto min-h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-[10px] font-bold text-white shadow-sm transition hover:bg-blue-700 sm:text-xs"
                            >
                                <span>مشاوره میخوام</span>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                </svg>
                            </Link>
                        </div>

                        <ServiceFeatures />
                    </div>

                    <div className="order-2 md:order-1 mx-auto w-full max-w-[480px]">
                        <HeroIllustration />
                    </div>
                </section>

                <BrandsSection />
            </div>
        </main>
    );
}