// آیکون‌های شبکه‌های اجتماعی
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

const EitaaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

export default function Footer() {
    return (
        <footer dir="rtl" className="w-full bg-[#1a1a1a] text-gray-300 font-Dana border-t-[3px] border-blue-600">
            <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
                
                {/* بخش اصلی فوتر (۴ ستون) */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* ستون اول: درباره روژ وب و شبکه‌های اجتماعی */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-base font-bold text-white">
                            <span className="text-blue-500">روژ</span> وب
                        </h3>
                        <p className="text-[11px] leading-6 text-gray-400 text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                        
                        {/* شبکه‌های اجتماعی */}
                        <div className="mt-2 flex items-center gap-2">
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-white text-gray-900 transition hover:bg-gray-200">
                                <EitaaIcon />
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-[#25D366] text-white transition hover:opacity-90">
                                <WhatsappIcon />
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-[#0088cc] text-white transition hover:opacity-90">
                                <TelegramIcon />
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition hover:opacity-90">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    {/* ستون دوم: دسترسی سریع */}
                    <div>
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-4 w-1 rounded-full bg-gray-500"></span>
                            <h4 className="text-sm font-bold text-white">دسترسی سریع</h4>
                        </div>
                        <ul className="flex flex-col gap-3 text-[11px]">
                            <li><a href="#" className="transition hover:text-blue-400">پنل کاربردی</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">شرایط و قوانین</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">سوالات متداول</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">همکاری با نمایندگان</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">تماس با ما</a></li>
                        </ul>
                    </div>

                    {/* ستون سوم: دسترسی سریع (دوم) */}
                    <div>
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-4 w-1 rounded-full bg-gray-500"></span>
                            <h4 className="text-sm font-bold text-white">دسترسی سریع</h4>
                        </div>
                        <ul className="flex flex-col gap-3 text-[11px]">
                            <li><a href="#" className="transition hover:text-blue-400">پنل کاربردی</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">شرایط و قوانین</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">سوالات متداول</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">همکاری با نمایندگان</a></li>
                            <li><a href="#" className="transition hover:text-blue-400">تماس با ما</a></li>
                        </ul>
                    </div>

                    {/* ستون چهارم: نمادهای اعتماد */}
                    <div>
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-4 w-1 rounded-full bg-gray-500"></span>
                            <h4 className="text-sm font-bold text-white">نمادهای اعتماد</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {/* نماد ۱ */}
                            <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-white p-1 shadow-sm">
                                <img src="https://trustseal.enamad.ir/logo.aspx?id=your_id&Code=your_code" alt="نماد اعتماد الکترونیکی" className="h-full w-full object-contain" />
                            </div>
                            {/* نماد ۲ */}
                            <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-white p-1 shadow-sm">
                                <img src="https://trustseal.enamad.ir/logo.aspx?id=your_id&Code=your_code" alt="نماد ساماندهی" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* خط جداکننده */}
                <div className="my-8 h-px w-full bg-gray-800"></div>

                {/* کپی رایت و سازنده */}
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <p className="text-[10px] text-gray-500 leading-6">
                        کلیه حقوق، محفوظات و محتوای این سایت متعلق به <span className="text-gray-300 font-bold">روژ وب</span> است و هرگونه اینترنتی و برداشت از محتوا و عکس‌های سایت بدون اجازه و رضایت غیرقانونی می‌باشد.
                    </p>
                    <p className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 mt-1">
                        ساخته شده توسط <span className="text-blue-500">Mobin Rc </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}