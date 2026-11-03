import { useState, useEffect, useRef } from "react";

// آیکون قلب
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const pricingPlans = [
    {
        title: "پلن رایگان",
        subtitle: "برای شروع و آشنایی",
        basePrice: 190,
        features: [
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
            "و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.",
            "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد.",
            "با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
        ],
    },
    {
        title: "پلن اقتصادی",
        subtitle: "برای کسب و کارهای کوچک",
        basePrice: 190,
        features: [
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
            "و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.",
            "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد.",
            "با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
        ],
    },
    {
        title: "پلن حرفه‌ای",
        subtitle: "برای کسب و کارهای متوسط",
        basePrice: 190,
        features: [
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
            "و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.",
            "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد.",
            "با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
        ],
    },
    {
        title: "پلن اختصاصی",
        subtitle: "برای کسب و کارهای بزرگ",
        basePrice: 190,
        features: [
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
            "و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.",
            "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد.",
            "با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
        ],
    },
];

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // تشخیص ورود بخش به صفحه
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const getPricingDetails = (basePrice) => {
        switch (billingCycle) {
            case "yearly":
                return {
                    price: Math.floor(basePrice * 12 * 0.8).toLocaleString("fa-IR"),
                    period: "سالانه",
                    unit: "تومان",
                    discountBadge: "۲۰٪ تخفیف",
                };
            case "installment":
                return {
                    price: Math.floor((basePrice * 12 * 1.1) / 4).toLocaleString("fa-IR"),
                    period: "۴ قسط ماهانه",
                    unit: "تومان",
                    discountBadge: null,
                };
            case "monthly":
            default:
                return {
                    price: basePrice.toLocaleString("fa-IR"),
                    period: "ماهیانه",
                    unit: "تومان",
                    discountBadge: null,
                };
        }
    };

    const activeBtnClass = "rounded-md bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition sm:text-sm whitespace-nowrap";
    const inactiveBtnClass = "rounded-md px-4 py-2 text-xs font-bold text-gray-600 transition hover:text-blue-600 sm:text-sm whitespace-nowrap";

    return (
        <section 
            ref={sectionRef}
            dir="rtl" 
            className="w-full bg-[#1d6cf0] py-16 font-Dana overflow-hidden"
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                
                {/* هدر با انیمیشن ورود */}
                <div 
                    className={`mb-16 text-center transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                        پلن مناسب خود را براساس نوع نیاز انتخاب کنید
                    </h2>
                    <p className="mt-3 text-sm text-blue-100 sm:text-base">
                        برای مشاهده لیست قیمت ها و خرید اشتراک یکی از پلن های زیر را انتخاب کنید
                    </p>
                    
                    <div className="mt-6 inline-flex items-center rounded-lg bg-white p-1 shadow-sm gap-1">
                        <button 
                            onClick={() => setBillingCycle("monthly")}
                            className={billingCycle === "monthly" ? activeBtnClass : inactiveBtnClass}
                        >
                            ماهیانه
                        </button>
                        <button 
                            onClick={() => setBillingCycle("yearly")}
                            className={billingCycle === "yearly" ? activeBtnClass : inactiveBtnClass}
                        >
                            یک ساله (تخفیف)
                        </button>
                        <button 
                            onClick={() => setBillingCycle("installment")}
                            className={billingCycle === "installment" ? activeBtnClass : inactiveBtnClass}
                        >
                            اقساطی
                        </button>
                    </div>
                </div>

                {/* گرید کارت‌ها */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {pricingPlans.map((plan, index) => {
                        const details = getPricingDetails(plan.basePrice);

                        return (
                            <div 
                                // نکته کلیدی: کلید کارت به billingCycle وابسته است تا با تغییر، کارت مجدداً رندر شود
                                key={`${plan.title}-${billingCycle}`} 
                                style={{ transitionDelay: `${index * 100}ms` }}
                                className={`relative mt-6 flex flex-col rounded-2xl bg-white px-5 pb-6 pt-10 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${
                                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                                }`}
                            >
                                {/* برچسب تخفیف */}
                                {details.discountBadge && (
                                    <div className="absolute -top-3 right-4 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white shadow-md animate-bounce">
                                        {details.discountBadge}
                                    </div>
                                )}

                                {/* آیکون قلب */}
                                <div className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#1d6cf0] bg-white shadow-sm">
                                    <HeartIcon />
                                </div>

                                {/* عنوان پلن */}
                                <div className="text-center">
                                    <h3 className="text-base font-bold text-gray-900">{plan.title}</h3>
                                    <p className="mt-1 text-[10px] text-gray-500">{plan.subtitle}</p>
                                </div>

                                {/* قیمت با انیمیشن ظاهر شدن */}
                                <div className="mt-4 flex items-end justify-center gap-2 border-b border-gray-100 pb-5 h-[60px] overflow-hidden">
                                    <span className="text-[10px] text-gray-500 mb-1">{details.period}</span>
                                    <span 
                                        // انیمیشن داخلی برای تغییر قیمت
                                        className="text-3xl font-black text-gray-900 animate-[fadeInUp_0.4s_ease-out] inline-block"
                                    >
                                        {details.price}
                                    </span>
                                    <span className="text-[10px] text-gray-500 mb-1">{details.unit}</span>
                                </div>

                                {/* لیست ویژگی‌ها (ثابت هستند) */}
                                <ul className="mt-5 flex flex-1 flex-col gap-4">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2 text-[10px] leading-5 text-gray-600">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* دکمه پایین */}
                                <div className="mt-8">
                                    <button className="w-full rounded-lg border border-gray-300 bg-white py-2.5 text-xs font-bold text-gray-700 transition hover:border-blue-600 hover:text-blue-600">
                                        {billingCycle === "installment" ? "پرداخت اولین قسط" : "مشاهده تعرفه"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* استایل انیمیشن برای تغییر قیمت */}
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