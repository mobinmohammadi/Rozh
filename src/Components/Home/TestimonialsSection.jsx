import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-400">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

const commentsData = [
    {
        name: "علی رضایی",
        role: "مدیر فروشگاه",
        domain: "فروشگاه لوازم خانگی",
        date: "۱۴۰۳/۰۵/۱۲",
        rating: 5,
        text: "از تیم حرفه‌ای روژ وب و به‌ویژه جناب مهندس محمدی صمیمانه تشکر می‌کنم. نتیجه کار بسیار فراتر از انتظارات ما بود. دقت، خلاقیت و پشتیبانی عالی‌شان واقعاً ستودنی است.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali&backgroundColor=b6e3f4",
    },
    {
        name: "مریم احمدی",
        role: "مدیر کلینیک",
        domain: "کلینیک زیبایی",
        date: "۱۴۰۳/۰۴/۲۸",
        rating: 5,
        text: "تجربه همکاری با روژ وب یکی از بهترین تجربه‌های کاری ما بود. از آقای مهندس محمدی بابت مدیریت و پشتیبانی بی‌نظیرشان بسیار سپاسگزارم. وب‌سایت کلینیک ما به بهترین شکل ممکن طراحی شد.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam&backgroundColor=ffd5dc",
    },
    {
        name: "حسین کریمی",
        role: "مدیر عامل",
        domain: "شرکت ساختمانی",
        date: "۱۴۰۳/۰۶/۰۵",
        rating: 5,
        text: "واقعاً از زحمات مجموعه روژ وب و مهندس محمدی سپاسگزارم. سایت جدید شرکت با طراحی مدرن و سرعت بالا، رضایت کامل مشتریان‌مان را جلب کرده است. پشتیبانی ۲۴ ساعته آن‌ها همیشه در دسترس است.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hossein&backgroundColor=c0aede",
    },
    {
        name: "سارا موسوی",
        role: "مدیر آموزشگاه",
        domain: "آموزشگاه زبان",
        date: "۱۴۰۳/۰۳/۱۵",
        rating: 5,
        text: "تشکر ویژه از جناب مهندس محمدی و تیم روژ وب بابت طراحی فوق‌العاده سایت آموزشگاه‌مان. از مشاوره اولیه تا اجرای نهایی، همه چیز با نظم و دقت انجام شد. صمیمانه پیشنهاد می‌کنم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara&backgroundColor=ffdfbf",
    },
    {
        name: "رضا نوری",
        role: "مدیر بازاریابی",
        domain: "شرکت پخش مواد غذایی",
        date: "۱۴۰۳/۰۷/۰۲",
        rating: 5,
        text: "همکاری با روژ وب نقطه عطفی در کسب و کار ما بود. سایت جدید باعث افزایش چشمگیر فروش آنلاین ما شده است. تیم پشتیبانی همیشه پاسخگو و حرفه‌ای هستند. از صمیم قلب به همه پیشنهاد می‌کنم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza&backgroundColor=d1d4f9",
    },
    {
        name: "نرگس شریفی",
        role: "بنیان‌گذار",
        domain: "فروشگاه پوشاک",
        date: "۱۴۰۳/۰۲/۱۰",
        rating: 4,
        text: "طراحی سایت با روژ وب تجربه‌ای بسیار خوب و بدون استرس بود. همه چیز طبق برنامه پیش رفت و سایت من با کیفیت عالی و زیبایی منحصر به فرد راه‌اندازی شد. واقعاً ممنونم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Narges&backgroundColor=ffd5dc",
    },
    {
        name: "امیر حسینی",
        role: "مدیر فنی",
        domain: "شرکت نرم‌افزاری",
        date: "۱۴۰۳/۰۸/۲۰",
        rating: 5,
        text: "به عنوان یک مدیر فنی، استانداردهای بالایی دارم. تیم روژ وب توانست تمام نیازهای فنی و امنیتی ما را به بهترین شکل ممکن پیاده‌سازی کند. سرعت لود سایت فوق‌العاده است. سپاس از تیم حرفه‌ای‌شان.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amir&backgroundColor=c0aede",
    },
    {
        name: "الهام کاظمی",
        role: "مدیر آژانس",
        domain: "آژانس مسافرتی",
        date: "۱۴۰۳/۰۱/۲۲",
        rating: 5,
        text: "از اینکه با روژ وب آشنا شدم بسیار خوشحالم. سایت آژانس ما حالا یکی از بهترین‌ها در حوزه گردشگری است. طراحی جذاب و قابلیت‌های خوب آن، رضایت مشتریان ما را به دنبال داشته است. تشکر می‌کنم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elham&backgroundColor=b6e3f4",
    },
    {
        name: "محمد جعفری",
        role: "مدیر فروش",
        domain: "فروشگاه لوازم یدکی",
        date: "۱۴۰۳/۰۹/۱۴",
        rating: 4,
        text: "روژ وب واقعاً کارش را بلد است. سایت قبلی ما را کاملاً بازسازی کردند و سرعت آن را چند برابر کردند. مشاوره‌های اولیه‌شان هم بسیار دقیق و تخصصی بود. از این بابت بسیار ممنونم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammad&backgroundColor=ffdfbf",
    },
    {
        name: "پریسا حیدری",
        role: "مدیر عامل",
        domain: "شرکت مشاوره مالی",
        date: "۱۴۰۳/۰۶/۱۸",
        rating: 5,
        text: "تیم روژ وب فراتر از انتظارات ما ظاهر شد. سایت ما به یک ابزار قدرتمند برای جذب مشتری تبدیل شده است. از مشاوره تا اجرا و پشتیبانی، همه چیز عالی بود. صمیمانه تشکر می‌کنم.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parisa&backgroundColor=d1d4f9",
    },
];

export default function TestimonialsSection() {
    return (
        <section dir="rtl" className="relative w-full overflow-hidden bg-[#8cb4f5] py-16 font-Dana">

            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

                <div className="mb-12 text-center">
                    <h2 className="text-xl font-black text-white sm:text-2xl">
                        نظر مشتریان
                    </h2>
                </div>

                <div className="relative">

                    <div className="absolute bottom-0 left-0 right-0 h-[70%] rounded-[3rem] bg-[#2c6df0] shadow-inner"></div>

                    <div className="absolute -bottom-4 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-white/50"></div>

                    <div className="relative z-10 pb-12 pt-8">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="!px-4 !pb-12"
                        >
                            {commentsData.map((comment, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative mt-8 rounded-2xl bg-white p-5 pt-10 shadow-lg">

                                        <div className="absolute -top-8 right-6 flex flex-col items-center gap-3">
                                            {/* تصویر آواتار با حالت ایرانی */}
                                            <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-md bg-gray-200">
                                                <img src={comment.image} alt={comment.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-bold text-gray-900">{comment.name}</h3>
                                                <span className="text-[10px] text-gray-500">{comment.role}</span>
                                                <span className="text-[10px] text-blue-500 font-medium mt-0.5">{comment.domain}</span>
                                            </div>
                                        </div>

                                        <div className="mt-2 flex  flex-col   border-b border-gray-100 pb-3">
                                            <div className="flex items-end text-center justify-end flex-col gap-1">
                                                <span className="text-[10px] text-gray-400">{comment.date}</span>
                                                <div className="flex">

                                                    {[...Array(comment.rating)].map((_, i) => (
                                                        <StarIcon key={i} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-[11px] leading-6 text-gray-600 text-justify">
                                            {comment.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #ffffff !important;
                    background-color: rgba(255, 255, 255, 0.2);
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 50%;
                    backdrop-filter: blur(4px);
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 16px !important;
                    font-weight: bold;
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
                .swiper-pagination-bullet {
                    background-color: #ffffff !important;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 20px;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
}