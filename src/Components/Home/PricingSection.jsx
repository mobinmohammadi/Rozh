
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-4 w-4 text-blue-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 12 4 4L19 6"
    />
  </svg>
);

const pricingPlans = [
  {
    title: "پلن رایگان",
    subtitle: "برای شروع و آشنایی با خدمات روژ وب",
    basePrice: 0,
    color: "gray",
    features: [
      "جلسه مشاوره اولیه رایگان",
      "بررسی وضعیت فعلی وب‌سایت",
      "شناسایی مشکلات اولیه سایت",
      "ارائه پیشنهادهای بهبود کسب‌وکار",
      "معرفی خدمات مناسب با نیاز شما",
      "برآورد اولیه هزینه پروژه",
    ],
  },
  {
    title: "پلن اقتصادی",
    subtitle: "مناسب کسب‌وکارهای کوچک و نوپا",
    basePrice: 4900000,
    color: "blue",
    features: [
      "بررسی و بهینه‌سازی اولیه سئو",
      "تحقیق و انتخاب کلمات کلیدی",
      "بهینه‌سازی سرعت بارگذاری سایت",
      "بررسی مشکلات فنی وب‌سایت",
      "بهینه‌سازی عنوان و توضیحات صفحات",
      "پشتیبانی فنی پایه",
      "گزارش عملکرد ماهانه",
    ],
  },
  {
    title: "پلن حرفه‌ای",
    subtitle: "مناسب کسب‌وکارهای در حال رشد",
    basePrice: 9900000,
    color: "blue",
    popular: true,
    features: [
      "تمام امکانات پلن اقتصادی",
      "استراتژی جامع سئو و کلمات کلیدی",
      "بهینه‌سازی حرفه‌ای صفحات سایت",
      "تحلیل رقبا و بررسی بازار",
      "تولید و بهینه‌سازی محتوای ماهانه",
      "بهبود تجربه کاربری و UI/UX",
      "بررسی و بهبود نرخ تبدیل",
      "پشتیبانی تخصصی",
      "گزارش تحلیلی ماهانه",
    ],
  },
  {
    title: "پلن اختصاصی",
    subtitle: "مناسب برندها و کسب‌وکارهای بزرگ",
    basePrice: 19900000,
    color: "dark",
    features: [
      "تمام امکانات پلن حرفه‌ای",
      "طراحی استراتژی اختصاصی دیجیتال",
      "طراحی و توسعه اختصاصی وب‌سایت",
      "خدمات پیشرفته سئو و رشد ارگانیک",
      "برنامه‌ریزی و تولید محتوای اختصاصی",
      "طراحی و بهبود رابط کاربری UI/UX",
      "تحلیل رفتار کاربران و نرخ تبدیل",
      "مانیتورینگ و بررسی مستمر سایت",
      "مدیریت و بهینه‌سازی عملکرد سایت",
      "مدیر پروژه و پشتیبانی اختصاصی",
      "گزارش‌دهی و جلسات مشاوره منظم",
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // نمایش انیمیشنی بخش
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // محاسبه قیمت
  const getPricingDetails = (basePrice) => {
    if (basePrice === 0) {
      return {
        price: "رایگان",
        period: "بدون هزینه",
        unit: "",
        discountBadge: null,
      };
    }

    switch (billingCycle) {
      case "yearly":
        return {
          price: Math.floor(
            basePrice * 12 * 0.8
          ).toLocaleString("fa-IR"),
          period: "پرداخت سالانه",
          unit: "تومان",
          discountBadge: "۲۰٪ تخفیف",
        };

      case "installment":
        return {
          price: Math.floor(
            (basePrice * 12 * 1.1) / 4
          ).toLocaleString("fa-IR"),
          period: "هر قسط (۳ ماه)",
          unit: "تومان",
          discountBadge: null,
        };

      default:
        return {
          price: basePrice.toLocaleString("fa-IR"),
          period: "ماهانه",
          unit: "تومان",
          discountBadge: null,
        };
    }
  };

  const activeBtnClass =
    "rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 transition sm:text-sm whitespace-nowrap";

  const inactiveBtnClass =
    "rounded-xl px-4 py-2.5 text-xs font-bold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 sm:text-sm whitespace-nowrap";

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative w-full overflow-hidden bg-[#f7f9ff] py-20 font-Dana"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

        {/* Section header */}

        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            تعرفه خدمات روژ وب
          </span>

          <h2 className="mt-6 text-2xl font-black leading-relaxed text-gray-900 sm:text-3xl md:text-4xl">
            پلن مناسب کسب‌وکار خودت رو انتخاب کن
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            از مشاوره رایگان تا خدمات تخصصی طراحی سایت، سئو و
            بهینه‌سازی تجربه کاربری؛ متناسب با نیاز و بودجه
            کسب‌وکارت همراه شما هستیم.
          </p>

          {/* Billing selector */}

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-gray-100 bg-white p-1.5 shadow-sm">

            <button
              onClick={() => setBillingCycle("monthly")}
              className={
                billingCycle === "monthly"
                  ? activeBtnClass
                  : inactiveBtnClass
              }
            >
              ماهانه
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
              className={
                billingCycle === "yearly"
                  ? activeBtnClass
                  : inactiveBtnClass
              }
            >
              سالانه (۲۰٪ تخفیف)
            </button>

            <button
              onClick={() => setBillingCycle("installment")}
              className={
                billingCycle === "installment"
                  ? activeBtnClass
                  : inactiveBtnClass
              }
            >
              اقساطی
            </button>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            تمام مبالغ به تومان هستند.
          </p>
        </div>

        {/* Pricing cards */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {pricingPlans.map((plan, index) => {
            const details = getPricingDetails(plan.basePrice);

            return (
              <div
                key={`${plan.title}-${billingCycle}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className={`relative mt-5 flex flex-col rounded-3xl border bg-white px-5 pb-6 pt-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-blue-500 shadow-xl shadow-blue-100"
                    : "border-gray-100"
                } ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-12 scale-95 opacity-0"
                }`}
              >

                {/* Popular badge */}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-l from-blue-700 to-blue-500 px-5 py-2 text-[11px] font-bold text-white shadow-lg shadow-blue-500/30">
                    پیشنهاد ویژه روژ وب
                  </div>
                )}

                {/* Discount badge */}

                {details.discountBadge && (
                  <div className="absolute left-4 top-4 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold text-green-600">
                    {details.discountBadge}
                  </div>
                )}

                {/* Plan header */}

                <div className="mt-3 text-center">

                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      plan.color === "dark"
                        ? "bg-gray-900 text-white"
                        : plan.color === "gray"
                        ? "bg-gray-100 text-gray-500"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {index === 0 && (
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M12 3v18M3 12h18" />
                      </svg>
                    )}

                    {index === 1 && (
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M4 19V5m0 14h16M8 15l4-5 3 3 5-7" />
                      </svg>
                    )}

                    {index === 2 && (
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
                      </svg>
                    )}

                    {index === 3 && (
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" />
                        <path d="m3 8 9 5 9-5M12 13v8" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-gray-900">
                    {plan.title}
                  </h3>

                  <p className="mt-2 min-h-8 text-[11px] leading-6 text-gray-400">
                    {plan.subtitle}
                  </p>

                </div>

                {/* Price */}

                <div className="mt-5 flex min-h-[85px] flex-col items-center justify-center border-y border-dashed border-gray-200 py-4">

                  <div className="flex items-center gap-2">

                    <span className="text-xs text-gray-400">
                      {details.period}
                    </span>

                  </div>

                  <div
                    key={details.price}
                    className="mt-2 flex items-center gap-2 animate-[fadeInUp_0.4s_ease-out]"
                  >
                    <span
                      className={`text-2xl font-black ${
                        plan.popular
                          ? "text-blue-600"
                          : "text-gray-900"
                      }`}
                    >
                      {details.price}
                    </span>

                    {details.unit && (
                      <span className="text-xs text-gray-400">
                        {details.unit}
                      </span>
                    )}
                  </div>

                </div>

                {/* Features */}

                <div className="mt-6 flex-1">

                  <p className="mb-4 text-xs font-bold text-gray-800">
                    امکانات این پلن:
                  </p>

                  <ul className="flex flex-col gap-4">

                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2.5 text-[11px] leading-6 text-gray-600"
                      >
                        <span className="mt-1">
                          <CheckIcon />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}

                  </ul>

                </div>

                {/* CTA */}

                <div className="mt-8">

                  <Link
                    to="/contact-us"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl"
                        : plan.color === "dark"
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "border border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {index === 0
                      ? "دریافت مشاوره رایگان"
                      : index === 3
                      ? "درخواست پلن اختصاصی"
                      : "ثبت سفارش"}

                    <span>←</span>
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom note */}

        <div className="mt-12 rounded-2xl border border-blue-100 bg-white/80 p-6 text-center shadow-sm">

          <h3 className="text-base font-bold text-gray-900">
            به خدمات متفاوتی نیاز داری؟
          </h3>

          <p className="mt-2 text-xs leading-7 text-gray-500 sm:text-sm">
            اگر به طراحی سایت اختصاصی، فروشگاه اینترنتی، سئوی
            تخصصی یا طراحی UI/UX نیاز داری، می‌تونیم متناسب با
            پروژه‌ات یک پیشنهاد اختصاصی آماده کنیم.
          </p>

          <a
            href="/contact-us"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-5 py-3 text-xs font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            دریافت مشاوره و استعلام قیمت
            <span>←</span>
          </a>

        </div>

      </div>

      {/* Animation */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}
