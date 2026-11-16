
import React, { useState } from "react";

const initialComments = [
  {
    id: 1,
    name: "علی محمدی",
    rating: 5,
    text: "مقاله بسیار مفید و کاربردی بود. ممنون از مطالب خوبتون!",
    date: "۲ ساعت پیش",
  },
  {
    id: 2,
    name: "سارا احمدی",
    rating: 4,
    text: "مطالب عالی بود. منتظر مقالات بعدی هستم.",
    date: "دیروز",
  },
  {
    id: 3,
    name: "رضا کریمی",
    rating: 5,
    text: "توضیحات کامل و قابل فهم بودند.",
    date: "۳ روز پیش",
  },
];

export default function ArticleDetails() {
  const [comments, setComments] = useState(initialComments);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const average =
    comments.reduce((sum, item) => sum + item.rating, 0) /
    comments.length;

  const submitComment = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim() || !rating) {
      alert("لطفاً نام، نظر و امتیاز خود را وارد کنید.");
      return;
    }

    setComments([
      {
        id: Date.now(),
        name,
        rating,
        text: comment,
        date: "همین الان",
      },
      ...comments,
    ]);

    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Article */}
       
<article className="bg-white border border-slate-100 rounded-[28px] overflow-hidden">

  {/* Cover */}
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400"
      className="w-full h-[280px] md:h-[460px] object-cover"
      alt="تصویر مقاله"
    />

    <div className="absolute bottom-5 right-5">
      <span className="bg-white/95 backdrop-blur text-blue-700 text-sm font-bold px-5 py-2 rounded-full">
        آموزش و تکنولوژی
      </span>
    </div>
  </div>

  <div className="max-w-3xl mx-auto px-5 md:px-10 py-10">

    {/* Meta */}
    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
      <span>✍️ تحریریه سایت</span>
      <span>📅 ۱۷ آبان ۱۴۰۵</span>
      <span>⏱ ۸ دقیقه مطالعه</span>
    </div>

    {/* Title */}
    <h1 className="text-3xl md:text-[42px] font-extrabold leading-[1.8] text-slate-900 mt-7">
      راهنمای جامع طراحی یک وب‌سایت حرفه‌ای و مدرن
    </h1>

    <p className="text-lg leading-9 text-slate-500 mt-5">
      در این مقاله با مهم‌ترین اصول طراحی سایت،
      تجربه کاربری و روش‌های ساخت یک وب‌سایت
      استاندارد و حرفه‌ای آشنا می‌شوید.
    </p>

    <div className="flex items-center justify-between border-y border-slate-100 py-5 mt-8 text-sm text-slate-500">
      <span>👁 ۲٬۴۸۰ بازدید</span>
      <span>💬 ۲۴ دیدگاه</span>
      <button className="text-blue-600 font-bold">
        اشتراک‌گذاری ↗
      </button>
    </div>

    {/* Body */}
    <div className="mt-10 space-y-8 text-[16px] md:text-[17px] leading-[2.5] text-slate-700">

      <section id="intro">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
          مقدمه
        </h2>
        <p>
          امروزه طراحی وب‌سایت تنها به ظاهر زیبا محدود
          نمی‌شود. یک وب‌سایت حرفه‌ای باید تجربه کاربری
          مناسبی داشته باشد و در تمام دستگاه‌ها به‌درستی
          نمایش داده شود.
        </p>
      </section>

      <blockquote className="border-r-4 border-blue-600 bg-blue-50 rounded-l-2xl p-6 text-blue-900 font-medium">
        طراحی خوب، ترکیبی از زیبایی، سادگی و تجربه
        کاربری مناسب است.
      </blockquote>

      <section id="design">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
          اصول طراحی حرفه‌ای
        </h2>
        <p>
          استفاده از رنگ‌بندی مناسب، فاصله‌گذاری اصولی،
          فونت خوانا و ساختار استاندارد از مهم‌ترین
          فاکتورهای طراحی یک وب‌سایت موفق هستند.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-7 mb-3">
          ۱. طراحی رابط کاربری
        </h3>
        <p>
          رابط کاربری باید ساده، قابل فهم و هماهنگ با
          هویت بصری برند باشد.
        </p>
      </section>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
        <h3 className="font-extrabold text-slate-900 mb-3">
          نکته مهم
        </h3>
        <p>
          همیشه طراحی موبایل را جدی بگیرید؛
          تجربه کاربری در صفحه‌های کوچک اهمیت زیادی دارد.
        </p>
      </div>

      <section id="conclusion">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
          جمع‌بندی
        </h2>
        <p>
          برای داشتن یک وب‌سایت حرفه‌ای باید به تمام
          جزئیات از جمله طراحی، سرعت، محتوا و تجربه
          کاربری توجه کنید.
        </p>
      </section>

    </div>

  </div>
</article>


        {/* Comments */}
        <section className="bg-white rounded-3xl shadow-sm p-6 md:p-10 mt-8">

          <h2 className="text-2xl font-black text-slate-800">
            نظرات کاربران ({comments.length})
          </h2>

          {/* Comment Form */}
          <form onSubmit={submitComment} className="mt-8 space-y-4">

            <div>
              <label className="block text-sm font-bold mb-2">
                نام شما
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام خود را وارد کنید"
                className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                امتیاز شما
              </label>

              <div className="flex gap-2" dir="ltr">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                    className={`text-3xl transition ${
                      star <= (hover || rating)
                        ? "text-amber-400"
                        : "text-slate-300"
                    }`}
                    aria-label={`امتیاز ${star} از ۵`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                متن دیدگاه
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="نظر خود را بنویسید..."
                className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              ارسال دیدگاه
            </button>
          </form>

          {/* Comments List */}
          <div className="mt-10 space-y-5">
            {comments.map((item) => (
              <div
                key={item.id}
                className="border border-slate-100 rounded-2xl p-5"
              >
                <div className="flex justify-between items-center gap-3">
                  <h3 className="font-bold text-slate-800">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {item.date}
                  </span>
                </div>

                <div className="text-amber-400 mt-2">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <p className="text-slate-600 leading-8 mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </section>

      </div>
    </main>
  );
}
