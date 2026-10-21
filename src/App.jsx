import React, { useState } from 'react';

// ==========================================
// 1. هدر (Header) - ریسپانسیو با منوی موبایل
// ==========================================
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* لوگو */}
        <div className="text-2xl font-bold text-blue-600">LOGO</div>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition">صفحه اصلی</a>
          <a href="#" className="hover:text-blue-600 transition">محصولات</a>
          <a href="#" className="hover:text-blue-600 transition">درباره ما</a>
          <a href="#" className="hover:text-blue-600 transition">تماس با ما</a>
        </nav>

        {/* دکمه ورود دسکتاپ */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm">
            ورود / ثبت نام
          </button>
        </div>

        {/* دکمه منوی موبایل */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* منوی بازشونده موبایل */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">صفحه اصلی</a>
          <a href="#" className="hover:text-blue-600">محصولات</a>
          <a href="#" className="hover:text-blue-600">درباره ما</a>
          <a href="#" className="hover:text-blue-600">تماس با ما</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full mt-2">
            ورود / ثبت نام
          </button>
        </div>
      )}
    </header>
  );
};

// ==========================================
// 2. بخش قهرمان (Hero Section)
// ==========================================
const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-12 md:py-20 px-4 md:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10">
        
        {/* متن */}
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            لورم ایپسوم متن ساختگی <br className="hidden md:block" /> با تولید سادگی نامفهوم
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              شروع کنید
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto">
              اطلاعات بیشتر
            </button>
          </div>
        </div>

        {/* تصویر */}
        <div className="w-full md:w-1/2 pb-5 object-contain flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 rounded-full flex items-center justify-center text-blue-500 shadow-lg">
            <img className='rounded-full ring-5 bg-sky-700' src="./../public/images/admin1.jfif" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. نوار لوگوها (Logos Strip)
// ==========================================
const LogoStrip = () => {
  return (
    <div className="w-full py-8 border-b border-gray-100 overflow-hidden" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-16 h-8 md:w-20 md:h-10 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. خدمات (Services)
// ==========================================
const Services = () => {
  const services = [
    { title: 'خدمات ۱', desc: 'توضیحات کوتاه درباره این خدمت' },
    { title: 'خدمات ۲', desc: 'توضیحات کوتاه درباره این خدمت' },
    { title: 'خدمات ۳', desc: 'توضیحات کوتاه درباره این خدمت' },
    { title: 'خدمات ۴', desc: 'توضیحات کوتاه درباره این خدمت' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">خدمات ما</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">لورم ایپسوم متن ساختگی با تولید سادگی</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                ★
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. نمونه کارها (Portfolio)
// ==========================================
const Portfolio = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-center md:text-right w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">نمونه کارها</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">پروژه‌های اخیر ما</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-md text-sm font-medium">همه</button>
            <button className="bg-white text-gray-600 border px-4 py-2 rounded-md text-sm hover:bg-gray-50">طراحی</button>
            <button className="bg-white text-gray-600 border px-4 py-2 rounded-md text-sm hover:bg-gray-50">برنامه‌نویسی</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [تصویر پروژه]
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">عنوان پروژه {item}</h3>
                <p className="text-gray-500 text-sm">دسته‌بندی پروژه</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. بنر آبی (Call to Action)
// ==========================================
const BlueBanner = () => {
  return (
    <section className="bg-blue-600 py-10 md:py-14 px-4 md:px-8 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-2">آماده همکاری با ما هستید؟</h2>
          <p className="text-blue-100 text-sm md:text-base">همین حالا با ما تماس بگیرید و پروژه خود را شروع کنید.</p>
        </div>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition w-full md:w-auto">
          تماس با ما
        </button>
      </div>
    </section>
  );
};

// ==========================================
// 7. تیم ما (Team)
// ==========================================
const Team = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">تیم ما</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">عکس</div>
                <div className="absolute bottom-0 w-full h-1/2 bg-red-500 opacity-20"></div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base">نام و نام خانوادگی</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1">سمت شغلی</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. نظرات (Testimonials)
// ==========================================
const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">نظرات مشتریان</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="text-red-500 text-4xl absolute top-4 left-4 opacity-20 font-serif">"</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">نام مشتری</h4>
                  <p className="text-gray-400 text-xs">مدیرعامل شرکت</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. آمار و ارقام (Statistics)
// ==========================================
const Statistics = () => {
  return (
    <section className="bg-blue-600 py-12 md:py-20 px-4 md:px-8 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* بخش اعداد */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-3/5">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="bg-white/10 p-4 md:p-6 rounded-lg text-center backdrop-blur-sm border border-white/20">
              <div className="text-2xl md:text-4xl font-bold mb-2">+۱۰۰</div>
              <div className="text-xs md:text-sm text-blue-100">پروژه موفق</div>
            </div>
          ))}
        </div>

        {/* بخش تصویر گرافیکی */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="text-8xl md:text-9xl font-black text-white/20 select-none">
            7
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. وبلاگ (Blog)
// ==========================================
const Blog = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">وبلاگ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((post) => (
            <div key={post} className="group cursor-pointer">
              <div className="h-48 md:h-56 bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition mb-2">
                عنوان مقاله شماره {post}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                توضیحات کوتاه درباره این مقاله که در اینجا قرار می‌گیرد...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 11. فوتر (Footer)
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ستون اول */}
        <div className="md:col-span-2">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-gray-900 font-bold mb-6">
            LOGO
          </div>
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-blue-600 cursor-pointer transition"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-blue-600 cursor-pointer transition"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-blue-600 cursor-pointer transition"></div>
          </div>
        </div>
        
        {/* ستون دوم */}
        <div>
          <h4 className="font-bold text-white mb-6">دسترسی سریع</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition text-gray-400">صفحه اصلی</a></li>
            <li><a href="#" className="hover:text-white transition text-gray-400">درباره ما</a></li>
            <li><a href="#" className="hover:text-white transition text-gray-400">خدمات</a></li>
            <li><a href="#" className="hover:text-white transition text-gray-400">تماس با ما</a></li>
          </ul>
        </div>

        {/* ستون سوم */}
        <div>
          <h4 className="font-bold text-white mb-6">اطلاعات تماس</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>تهران، خیابان ولیعصر، پلاک ۱۲۳</li>
            <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>ایمیل: info@example.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>تمامی حقوق محفوظ است © ۱۴۰۲</p>
      </div>
    </footer>
  );
};

// ==========================================
// کامپوننت اصلی (App)
// ==========================================
export default function App() {
  return (
    <div className="font-sans w-full overflow-x-hidden min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <Services />
        <Portfolio />
        <BlueBanner />
        <Team />
        <Testimonials />
        <Statistics />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}