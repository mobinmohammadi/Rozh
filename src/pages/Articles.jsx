import React from "react";

export default function FullBlogPage() {
  // داده‌های ۱۰ کامنت تعریف و تمجید
  const commentsData = [
    {
      name: "علی رضایی",
      initial: "ع",
      time: "۱ ساعت پیش",
      text: "واقعاً مقاله فوق‌العاده‌ای بود. دست مریزاد به مهندس محمدی بابت این محتوای ارزشمند و تیم روژ وب بابت این پلتفرم عالی.",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "سارا احمدی",
      initial: "س",
      time: "۳ ساعت پیش",
      text: "من همیشه مطالب سایت روژ وب رو دنبال می‌کنم. خیلی خوشحالم که مهندس محمدی با این دقت و ظرافت مطالب رو توضیح می‌دن. خسته نباشید.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "محمد کریمی",
      initial: "م",
      time: "۵ ساعت پیش",
      text: "بهترین توضیحی که در مورد کوگل خونده بودم. لطفاً از طرف من به مهندس محمدی بگید که کارشون واقعاً درجه یکه. روژ وب هم که همیشه عالیه.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "نسترن محمودی",
      initial: "ن",
      time: "دیروز",
      text: "مهندس محمدی واقعاً استاد این کار هستن. این مقاله رو باید چند بار بخونم تا کاملاً برام جا بیفته. ممنون از روژ وب برای انتشار چنین مقالاتی.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "رضا تهرانی",
      initial: "ر",
      time: "دیروز",
      text: "دقیقاً همین نکاتی که مهندس محمدی گفتن، تو دوره‌های بازاریابی هم تدریس می‌شه. دمتون گرم روژ وب که اینقدر به فکر یادگیری کاربراتون هستید.",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "فاطمه صادقی",
      initial: "ف",
      time: "۲ روز پیش",
      text: "خیلی خوب و روان توضیح داده شده. از مهندس محمدی و کل تیم روژ وب صمیمانه تشکر می‌کنم. منتظر مقاله‌های بعدی هستم.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "حسین نوری",
      initial: "ح",
      time: "۲ روز پیش",
      text: "واقعاً این سایت روژ وب یه گنجینه‌ست! مقاله‌های مهندس محمدی هم همیشه پر از نکته‌های ریز و کاربردی هستش. خسته نباشید.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "مریم حسینی",
      initial: "م",
      time: "۳ روز پیش",
      text: "من تازه با روژ وب آشنا شدم و باید بگم مقالاتی که مهندس محمدی می‌نویسن فوق‌العاده حرفه‌ای و باکیفیته. دمتون گرم.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "امیر عباسی",
      initial: "ا",
      time: "۳ روز پیش",
      text: "ممنون از مقاله مفیدتون. مخصوصاً بخش فهرست مطالب و مثال موتور سیکلت خیلی به درک مطلب کمک کرد. درود به مهندس محمدی و تیم روژ وب.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      name: "زهرا کاظمی",
      initial: "ز",
      time: "۴ روز پیش",
      text: "به جرات می‌تونم بگم یکی از بهترین منابع فارسی برای یادگیری بازاریابی، همین سایت روژ وب و مطالب مهندس محمدی هست. به امید موفقیت‌های بیشتر.",
      color: "bg-rose-100 text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-Dana text-gray-800" dir="rtl">
      {/* نوار بالایی آبی رنگ */}
      <div className="h-1 w-full bg-blue-600 fixed top-0 left-0 z-50"></div>

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {/* ================= بخش اول: هدر مقاله و تصویر کاور ================= */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center md:text-right leading-relaxed">
            گوگل ادورز یا کوگل چیست و چگونه کار می‌کند؟
          </h1>

          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6 shadow-sm bg-orange-100 flex items-center justify-center">
            {/* تصویر کاور اول (کارتونی) */}
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop"
              alt="تصویر کاور مقاله"
              className="w-full h-full object-cover opacity-0" // اینجا تصویر اصلی خود را قرار دهید
            />
            {/* Placeholder برای نمایش ساختار */}
            <span className="absolute text-orange-400 font-bold">
              تصویر کاور اول
            </span>
          </div>

          {/* متادیتای نویسنده و زمان مطالعه */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2 text-center items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/admin1.jpg"
                  alt=""
                />
                <div className="text-right">
                  <p className="text-[16px] font-Morabba text-gray-800 font-bold">
                    مبین محمدی{" "}
                  </p>
                  <p className="text-sm text-slate-400 text-zinc-700">
                    برنامه نویس
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center text-xs text-gray-500 gap-2">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                زمان مطالعه: ۵ دقیقه
              </span>
            </div>
          </div>
        </header>

        {/* ================= بخش دوم: متن اصلی و فهرست مطالب ================= */}
        <article className="mb-10 text-gray-700 leading-loose text-sm md:text-base text-justify">
          <p className="mb-4">
            هر فردی که ریزش مخاطب و کار و کوگل را بر عهده دارد، آگاه است که شغل
            کدام اثر را در جای‌گاه ویژه‌ای دارد. هر شخصی که با سایت‌های پربازدید
            سر و کار دارد، می‌داند که این کوگل‌ها در واقع ابزاری برای تبلیغات
            هستند.
          </p>
          <p className="mb-6">
            در واقع کوگل یک پلتفرم تبلیغاتی است که به کسب‌وکارها این امکان را
            می‌دهد تا آگهی‌های خود را به مخاطبان هدف خود نمایش دهند. این پلتفرم
            بر اساس کلمات کلیدی و علاقه‌مندی‌های کاربران عمل می‌کند و می‌تواند
            بسیار موثر باشد.
          </p>

          {/* باکس فهرست مطالب */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-8">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <h3 className="font-bold text-gray-800">فهرست مطالب</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                روش‌های بهبود عملکرد کسب و کار کوگل
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                تعریف و تشخیص صحیح کلمات کلیدی و سنجش دقیق آن‌ها
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                تعریف و تشخیص صحیح کلمات کلیدی و سنجش دقیق آن‌ها (بخش دوم)
              </li>
            </ul>
          </div>
        </article>

        {/* ================= بخش سوم: لیست ویژگی‌ها ================= */}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full inline-block"></span>
            ۴ روش برای بهبود عملکرد کسب و کار کوگل
          </h2>

          <ul className="space-y-4">
            {[
              "با بازاریابی عملکرد، تمام کسب و کار، خدمات و محصولات از طریق مقایسه مستقیم عملکرد و بازدهی قابل اندازه‌گیری خواهند بود.",
              "با بازاریابی عملکرد، می‌توانید مخاطبان هدف خود را با دقت بیشتری شناسایی کنید.",
              "با بازاریابی عملکرد، می‌توانید هزینه‌های تبلیغاتی خود را بهینه کنید.",
              "با بازاریابی عملکرد، می‌توانید نتایج کمپین‌های خود را به طور دقیق اندازه‌گیری کنید.",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= بخش چهارم: تصویر موتور و متن (از عکس دوم) ================= */}
        <div className="mb-10 text-gray-700 leading-loose text-sm md:text-base text-justify">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-8 shadow-md bg-gray-800 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop"
              alt="تصویر موتور سیکلت"
              className="w-full h-full object-cover opacity-0"
            />
            <span className="absolute text-gray-400 font-bold">
              تصویر موتور سیکلت
            </span>
          </div>

          <p className="mb-8">
            هر فردی که ریزش مخاطب و کار و کوگل را بر عهده دارد، آگاه است که شغل
            کدام اثر را در جای‌گاه ویژه‌ای دارد. هر شخصی که با سایت‌های پربازدید
            سر و کار دارد، می‌داند که این کوگل‌ها در واقع ابزاری برای تبلیغات
            هستند.
          </p>

          {/* باکس نقل قول (Blockquote) */}
          <div className="bg-blue-50 border-r-4 border-blue-500 rounded-l-xl p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">سخن آخر</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              هر فردی که ریزش مخاطب و کار و کوگل را بر عهده دارد، آگاه است که
              شغل کدام اثر را در جای‌گاه ویژه‌ای دارد. هر شخصی که با سایت‌های
              پربازدید سر و کار دارد، می‌داند که این کوگل‌ها در واقع ابزاری برای
              تبلیغات هستند. به عنوان یک بازاریاب، شما باید بتوانید مخاطبان خود
              را به درستی شناسایی کنید.
            </p>
          </div>
        </div>

        {/* ================= بخش پنجم: نوار اکشن (اشتراک‌گذاری و متادیتا) ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div className="flex gap-2 text-center items-center">
            <img
              className="w-14 h-14 rounded-full"
              src="/images/admin1.jpg"
              alt=""
            />
            <div className="text-right">
              <p className="text-[16px] font-Morabba text-gray-800 font-bold">
                مبین محمدی{" "}
              </p>
              <p className="text-sm text-slate-400 text-zinc-700">
                برنامه نویس
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              زمان مطالعه: ۵ دقیقه
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              ۱۴۰۲/۰۵/۱۲
            </span>
            <button className="flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
              اشتراک گذاری
            </button>
          </div>
        </div>

        {/* ================= بخش ششم: نظرات کاربران ================= */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              نظرات کاربران
            </h2>
            <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
              <span>۴.۵</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-400 font-normal text-xs">(۱۳ نظر)</span>
            </div>
          </div>

          {/* فرم ثبت نظر */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-700 mb-2">
              نظر خود را بنویسید
            </h3>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50 min-h-[100px]"
              placeholder="نظر خود را بنویسید..."
            ></textarea>
            <div className="flex justify-end mt-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm">
                ارسال نظر
              </button>
            </div>
          </div>

          {/* لیست نظرات و نمودار امتیازدهی */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ستون نمودار امتیازدهی (یک ستون در دسکتاپ) */}
            <div className="bg-gray-50 rounded-xl p-4 h-fit">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">۴.۵</div>
                <div className="flex justify-center gap-1 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star === 5 ? "text-gray-300" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">بر اساس ۱۳ نظر</p>
              </div>

              <div className="space-y-2">
                {[
                  { label: "۵ ستاره", width: "80%", color: "bg-yellow-400" },
                  { label: "۴ ستاره", width: "15%", color: "bg-yellow-400" },
                  { label: "۳ ستاره", width: "5%", color: "bg-yellow-400" },
                  { label: "۲ ستاره", width: "0%", color: "bg-yellow-400" },
                  { label: "۱ ستاره", width: "0%", color: "bg-yellow-400" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-xs text-gray-500 gap-2"
                  >
                    <span className="w-12">{item.label}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full`}
                        style={{ width: item.width }}
                      ></div>
                    </div>
                    <span className="w-8 text-left">{item.width}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ستون لیست کامنت‌ها (دو ستون در دسکتاپ) */}
            <div className="md:col-span-2 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {commentsData.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${comment.color}`}
                      >
                        {comment.initial}
                      </div>
                      <span className="font-bold text-gray-800 text-sm">
                        {comment.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed text-justify">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}