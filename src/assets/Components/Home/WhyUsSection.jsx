// آیکون‌های مورد استفاده در لیست
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

export default function WhyUsSection() {
    return (
        <section dir="rtl" className="w-full bg-white py-16 font-Dana">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    
                    {/* ستون چپ: محتوا (در دسکتاپ سمت راست دیده می‌شود چون RTL است) */}
                    <div className="order-1 lg:order-2">
                        
                        {/* تیتر */}
                        <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                            چرا باید <span className="text-blue-600">با روژ وب</span> کار انتخاب کنیم؟
                        </h2>

                        {/* باکس آبی روشن (هایلایت) */}
                        <div className="relative mt-6 rounded-2xl bg-blue-50/50 p-5 sm:p-6">
                            {/* نوار آبی سمت راست */}
                            <div className="absolute right-0 top-0 h-full w-1.5 rounded-r-2xl bg-blue-600"></div>
                            
                            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                                <span className="text-blue-600">✦</span>
                                امکانات منظم امنیتی و شناسایی آسیب‌پذیری‌ها
                            </h3>
                            <p className="mt-3 text-xs leading-6 text-gray-600 text-justify">
                                در روژ وب با استفاده از تکنیک‌های نوین، امنیت وب‌سایت شما را تضمین می‌کنیم. با انجام تست نفوذ (Penetration Testing)، آسیب‌پذیری‌های موجود در سیستم را شناسایی و برطرف می‌کنیم. در صورت بروز هرگونه تهدید، تیم فنی ما به سرعت وارد عمل می‌شود و امنیت سایت شما را تامین می‌کند.
                            </p>
                        </div>

                        {/* لیست ویژگی‌ها */}
                        <ul className="mt-8 flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200">
                                    <CheckCircleIcon />
                                </span>
                                <span className="text-xs font-bold text-gray-700">
                                    مدیریت یکپارچه تهدیدات و ریسک‌های امنیتی (SIEM)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200">
                                    <CheckCircleIcon />
                                </span>
                                <span className="text-xs font-bold text-gray-700">
                                    امکانات منظم امنیتی و شناسایی آسیب‌پذیری‌ها
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200">
                                    <CheckCircleIcon />
                                </span>
                                <span className="text-xs font-bold text-gray-700">
                                    مدیریت یکپارچه تهدیدات و ریسک‌های امنیتی (SIEM)
                                </span>
                            </li>
                        </ul>

                        {/* دکمه‌ها */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                                درخواست مشاوره
                            </button>
                            
                            <a href="tel:021-36798712" className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-xs font-bold text-gray-700 transition hover:border-blue-600 hover:text-blue-600">
                                <PhoneIcon />
                                09391177395
                            </a>
                        </div>
                    </div>

                    {/* ستون راست: تصویر */}
                    <div className="order-2 lg:order-1">
                        {/* باکس با حاشیه آبی */}
                        <div className="relative flex items-center justify-center rounded-2xl border-2 border-blue-600 bg-white p-4 sm:p-6">
                            <img 
                                src="/images/support.jpg" 
                                alt="امکانات امنیتی روژ وب" 
                                className="h-auto w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}