// آیکون فلش گوشه باکس‌ها
const ArrowUpLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5 4.5 4.5m0 0h11.25M4.5 4.5v11.25" />
    </svg>
);

const portfolioItems = [
    {
        // کارت اول: سایت خودرو (راست در تصویر)
        title: "سایت آسان مالیات",
        description: "با آسان مالیات همراه باشید و مالیات خود را به ساده‌ترین شکل ممکن پرداخت کنید.",
        image: "./images/1.png"
        // اگر لوکال داری از آدرس زیر استفاده کن:
        // image: "/images/car-site.jpg",
    },
    {
        // کارت دوم: سایت سازه (وسط در تصویر)
        title: "سایت آسان مالیات",
        description: "با آسان مالیات همراه باشید و مالیات خود را به ساده‌ترین شکل ممکن پرداخت کنید.",
        image: "./images/1.png"
        // اگر لوکال داری از آدرس زیر استفاده کن:
        // image: "/images/structure-site.jpg",
    },
    {
        // کارت سوم: سایت شخصی (چپ در تصویر)
        title: "سایت آسان مالیات",
        description: "با آسان مالیات همراه باشید و مالیات خود را به ساده‌ترین شکل ممکن پرداخت کنید.",
        image: "./images/1.png"
    }
];

function PortfolioSection() {
    return (
        <section dir="rtl" className="w-full bg-white py-16 font-Dana">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                
                <div className="mb-10 flex justify-start  flex items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                        نمونه کارها
                    </h2>
                    <span className="h-6 w-1.5 rounded-full bg-blue-600"></span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between p-5 pb-4">
                                <div className="pl-4">
                                    <h3 className="text-sm font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-[11px] leading-5 text-gray-500 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                                    <ArrowUpLeftIcon />
                                </div>
                            </div>

                            <div className="relative mt-auto  h-48 w-full overflow-hidden bg-gray-50 px-3 pb-3">
                                <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="h-full w-full object-contain pt-5 object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/10"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;