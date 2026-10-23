import { useState } from "react";

// دیتای نمونه کارها (می‌توانید بعداً با دیتای واقعی جایگزین کنید)
const portfolioData = [
    {
        id: 1,
        title: "طراحی سایت فروشگاهی",
        category: "فروشگاهی",
        client: "دیجی‌کالا",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "طراحی سایت شرکتی",
        category: "شرکتی",
        client: "اسنپ",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "طراحی وب اپلیکیشن",
        category: "وب اپلیکیشن",
        client: "ترب",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "طراحی سایت شخصی",
        category: "شخصی",
        client: "مهندس محمدی",
        image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        title: "طراحی فروشگاه لوازم خانگی",
        category: "فروشگاهی",
        client: "فروشگاه لوازم خانگی رضایی",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        title: "طراحی سایت کلینیک زیبایی",
        category: "شرکتی",
        client: "کلینیک زیبایی احمدی",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

// دسته‌بندی‌ها
const categories = ["همه", "فروشگاهی", "شرکتی", "وب اپلیکیشن", "شخصی"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("همه");

    // فیلتر کردن پروژه‌ها بر اساس دسته‌بندی انتخاب‌شده
    const filteredData = activeCategory === "همه"
        ? portfolioData
        : portfolioData.filter(item => item.category === activeCategory);

    return (
        <div dir="rtl" className="w-full bg-white font-Dana pb-20">
            
            {/* بخش هدر (Header) */}
            <div className="relative bg-[#2c6df0] py-20 text-center text-white">
                {/* طرح تزئینی پس‌زمینه */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                     }}
                ></div>
                
                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">نمونه کارهای روژ وب</h1>
                    <p className="mt-4 text-sm text-blue-100 sm:text-base">
                        نگاهی به برخی از پروژه‌هایی که با افتخار برای مشتریان‌مان انجام داده‌ایم.
                    </p>
                </div>
            </div>

            {/* محتوای اصلی */}
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mt-12">
                
                {/* فیلتر دسته‌بندی */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* گرید نمونه کارها */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredData.map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* تصویر */}
                            <div className="relative h-60 w-full overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* اورلی هاور */}
                                <div className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/20 flex items-center justify-center">
                                    <span className="rounded-lg bg-white/90 px-4 py-2 text-xs font-bold text-blue-600 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        مشاهده پروژه
                                    </span>
                                </div>
                            </div>

                            {/* اطلاعات پروژه */}
                            <div className="p-5">
                                <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-md">
                                    {item.category}
                                </span>
                                <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-xs text-gray-500">
                                    کارفرما: {item.client}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* پیام اگر پروژه‌ای پیدا نشد */}
                {filteredData.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        پروژه‌ای در این دسته‌بندی یافت نشد.
                    </div>
                )}
            </div>
        </div>
    );
}