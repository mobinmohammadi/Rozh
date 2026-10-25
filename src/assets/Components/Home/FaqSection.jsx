import { useState } from "react";

// آیکون‌ها
const AngleDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const AngleUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
);

const HeadsetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
);

const faqs = [
    {
        question: "آیا طراحی سایت در روژ وب با گارانتی انجام می‌شود؟",
        answer: "بله، تمامی پروژه‌های طراحی سایت در روژ وب دارای گارانتی کیفیت و پشتیبانی هستند. ما متعهد می‌شویم که سایت شما دقیقاً مطابق با نیازها و استانداردهای روز دنیا طراحی شود. پس از تحویل پروژه، تا ۶ ماه پشتیبانی رایگان و رفع باگ‌ها به صورت کاملاً رایگان انجام می‌شود.",
    },
    {
        question: "مدت زمان طراحی یک وب‌سایت چقدر است؟",
        answer: "مدت زمان بستگی به نوع پروژه (سایت شرکتی، فروشگاهی، شخصی و ...) دارد. معمولاً طراحی یک سایت شرکتی بین ۳ تا ۴ هفته زمان می‌برد. برای سایت‌های فروشگاهی یا پروژه‌های اختصاصی، زمان‌بندی دقیق پس از بررسی نیازمندی‌ها به شما اعلام می‌شود.",
    },
    {
        question: "آیا سایت‌های طراحی شده توسط روژ وب ریسپانسیو هستند؟",
        answer: "قطعاً. تمامی سایت‌هایی که در روژ وب طراحی می‌شوند، به صورت کاملاً ریسپانسیو (واکنش‌گرا) هستند و در تمامی دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ به بهترین شکل ممکن نمایش داده می‌شوند.",
    },
    {
        question: "خدمات سئو (SEO) هم در روژ وب ارائه می‌شود؟",
        answer: "بله، تیم روژ وب علاوه بر طراحی سایت، خدمات تخصصی سئو و بهینه‌سازی موتورهای جستجو را نیز ارائه می‌دهد. ما سایت شما را از ابتدا با اصول سئو طراحی می‌کنیم و پس از راه‌اندازی، خدمات سئو ماهانه برای رشد رتبه سایت شما در گوگل ارائه می‌شود.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section  className="w-full bg-white py-16 font-Dana">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                
                {/* تیتر بخش */}
                <div className="mb-10 text-center">
                    <h2 className="text-xl font-bold text-blue-600 sm:text-2xl">
                        سوالات متداول روژ وب
                    </h2>
                </div>

                {/* چیدمان اصلی: در موبایل زیر هم، در دسکتاپ دو ستونه */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                    
                    {/* ستون سوالات (سمت راست) */}
                    <div className="lg:col-span-5 lg:order-2 flex flex-col gap-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div 
                                    key={index}
                                    onClick={() => toggleFAQ(index)}
                                    className={`group cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden ${
                                        isOpen 
                                            ? "border-blue-200 bg-blue-50/50 shadow-sm" 
                                            : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm"
                                    }`}
                                >
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-3">
                                            {/* بج آبی با آیکون */}
                                            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                                isOpen ? "bg-blue-600 text-white" : "bg-blue-500 text-white group-hover:bg-blue-600"
                                            }`}>
                                                {isOpen ? <AngleUpIcon /> : <AngleDownIcon />}
                                            </span>
                                            <h3 className={`text-sm font-bold transition-colors ${
                                                isOpen ? "text-blue-700" : "text-gray-700 group-hover:text-blue-600"
                                            }`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ستون پاسخ‌ها (سمت چپ) */}
                    <div className="lg:col-span-7 lg:order-1">
                        <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8 transition-all duration-500 ease-in-out">
                            
                            {/* آیکون علامت سوال بالای باکس پاسخ */}
                            <div className="absolute -top-4 right-6 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
                                <span className="text-sm font-bold">؟</span>
                            </div>

                            {/* محتوای پاسخ با قابلیت اسکرول */}
                            <div className="mt-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {openIndex !== null ? (
                                    <div className="animate-[fadeIn_0.4s_ease-out]">
                                        <h3 className="mb-4 text-sm font-black text-right text-gray-900">
                                             : پاسخ
                                        </h3>
                                        <p className="text-xs text-right leading-7 text-gray-600 sm:text-sm sm:leading-8 text-justify">
                                            {faqs[openIndex].answer}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex h-full min-h-[150px] items-center justify-center text-sm text-gray-400">
                                        برای مشاهده پاسخ، روی یکی از سوالات کلیک کنید.
                                    </div>
                                )}
                            </div>

                            {/* فوتر باکس پاسخ (پشتیبانی) */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gray-50 p-3 sm:px-4">
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <span>در صورت بروز مشکل می‌توانید با پشتیبانی روژ وب تماس بگیرید</span>
                                </div>
                                <a href="#support" className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold text-blue-600 shadow-sm transition hover:bg-blue-50 border border-blue-100">
                                    <HeadsetIcon />
                                    پشتیبانی
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* استایل‌های سفارشی */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </section>
    );
}