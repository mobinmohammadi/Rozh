
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  UserRound
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "چرا طراحی سایت حرفه‌ای برای کسب‌وکارها ضروری است؟",
    description:
      "در دنیای دیجیتال امروز، داشتن یک وب‌سایت حرفه‌ای می‌تواند اعتبار برند شما را افزایش دهد و مشتریان بیشتری جذب کند.",
    category: "طراحی سایت",
    date: "۱۴۰۵/۰۸/۲۰",
    readTime: "۶ دقیقه",
    author: "تیم روژ وب",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    id: 2,
    title: "۷ راهکار کاربردی برای افزایش رتبه سایت در گوگل",
    description:
      "با رعایت اصول سئو و بهینه‌سازی محتوای سایت، شانس دیده‌شدن کسب‌وکار خود را در نتایج گوگل افزایش دهید.",
    category: "سئو",
    date: "۱۴۰۵/۰۸/۱۸",
    readTime: "۸ دقیقه",
    author: "تیم روژ وب",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900",
  },
  {
    id: 3,
    title: "تفاوت طراحی سایت وردپرسی و اختصاصی چیست؟",
    description:
      "اگر قصد راه‌اندازی وب‌سایت دارید، در این مقاله تفاوت‌های طراحی سایت با وردپرس و برنامه‌نویسی اختصاصی را بررسی می‌کنیم.",
    category: "آموزش طراحی سایت",
    date: "۱۴۰۵/۰۸/۱۵",
    readTime: "۷ دقیقه",
    author: "تیم روژ وب",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },
  {
    id: 4,
    title: "اصول طراحی تجربه کاربری یا UX در وب‌سایت",
    description:
      "تجربه کاربری مناسب باعث می‌شود بازدیدکنندگان راحت‌تر به اطلاعات موردنظرشان برسند و احتمال تبدیل آن‌ها به مشتری بیشتر شود.",
    category: "UI / UX",
    date: "۱۴۰۵/۰۸/۱۲",
    readTime: "۵ دقیقه",
    author: "تیم روژ وب",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
  },
  {
    id: 5,
    title: "چگونه سرعت سایت را افزایش دهیم؟",
    description:
      "سرعت بارگذاری سایت یکی از عوامل مهم در تجربه کاربری و سئو است. در این مطلب روش‌های بهبود عملکرد سایت را یاد می‌گیرید.",
    category: "بهینه‌سازی سایت",
    date: "۱۴۰۵/۰۸/۱۰",
    readTime: "۶ دقیقه",
    author: "تیم روژ وب",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900",
  },
];

export default function ArticlesSection() {
  return (
    <section dir="rtl" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              مجله روژ وب
            </span>

            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              جدیدترین مقالات و آموزش‌ها
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-8 text-slate-500">
              با مقالات تخصصی روژ وب، کسب‌وکار خود را هوشمندانه‌تر در فضای
              دیجیتال توسعه دهید.
            </p>
          </div>

          <Link
            to="/articles"
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            مشاهده همه مقالات
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <Link
                to={`/articles/${article.id}`}
                className="relative block overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-orange-600 shadow">
                  {article.category}
                </span>
              </Link>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={15} />
                    {article.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 size={15} />
                    {article.readTime}
                  </span>
                </div>

                <Link to={`/articles/${article.id}`}>
                  <h3 className="mb-3 line-clamp-2 text-lg font-extrabold leading-8 text-slate-800 transition group-hover:text-orange-500">
                    {article.title}
                  </h3>
                </Link>

                <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-500">
                  {article.description}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <UserRound size={16} />
                    {article.author}
                  </span>

                  <Link
                    to={`/articles/${article.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-orange-500 transition hover:gap-3"
                  >
                    ادامه مطلب
                    <ArrowLeft size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
