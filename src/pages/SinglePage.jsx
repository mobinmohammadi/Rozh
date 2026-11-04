import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

// ===== دیتای نمونه =====
const projectData = {
  id: 1,
  title: "طراحی سایت فروشگاهی دیجی‌کالا",
  category: "فروشگاهی",
  client: "دیجی‌کالا",
  year: "۱۴۰۳",
  duration: "۳ ماه",
  website: "https://digikala.com",
  description:
    "طراحی و پیاده‌سازی کامل فروشگاه اینترنتی با تمرکز بر تجربه کاربری روان، سرعت بالا و طراحی مدرن. این پروژه شامل سیستم سبد خرید پیشرفته، درگاه پرداخت امن و پنل مدیریت اختصاصی است.",
  challenge:
    "چالش اصلی این پروژه، بهینه‌سازی سرعت بارگذاری در شرایطی بود که هزاران محصول و تصویر با کیفیت بالا باید نمایش داده می‌شد. با استفاده از lazy loading، CDN و بهینه‌سازی تصاویر، زمان بارگذاری را تا ۶۰٪ کاهش دادیم.",
  panels: [
    { label: "صفحه اصلی فروشگاه", icon: "store", gradient: "from-blue-500 to-indigo-600" },
    { label: "سبد خرید", icon: "cart", gradient: "from-emerald-500 to-teal-600" },
    { label: "پنل مدیریت", icon: "dashboard", gradient: "from-purple-500 to-fuchsia-600" },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  services: ["طراحی UI/UX", "توسعه فرانت‌اند", "توسعه بک‌اند", "بهینه‌سازی SEO"],
  stats: [
    { label: "کاربران فعال", value: "۲M+" },
    { label: "رضایت مشتری", value: "۹۸٪" },
    { label: "افزایش فروش", value: "۴۵٪" },
  ],
};

const relatedProjects = [
  { id: 2, title: "طراحی سایت شرکتی اسنپ", category: "شرکتی", gradient: "from-sky-500 to-blue-600", icon: "building" },
  { id: 3, title: "طراحی وب اپلیکیشن ترب", category: "وب اپلیکیشن", gradient: "from-violet-500 to-purple-600", icon: "app" },
  { id: 5, title: "فروشگاه لوازم خانگی رضایی", category: "فروشگاهی", gradient: "from-amber-500 to-orange-600", icon: "cart" },
];

// ===== کامنت‌های اولیه =====
const initialComments = [
  {
    id: 1,
    name: "سارا محمدی",
    avatar: "س",
    avatarColor: "from-pink-500 to-rose-500",
    rating: 5,
    date: "۲ روز پیش",
    text: "طراحی فوق‌العاده‌ای داره! مخصوصاً قسمت سبد خرید خیلی روان و کاربرپسند شده. خسته نباشید به تیم.",
    likes: 24,
    liked: false,
    replies: [
      {
        id: 11,
        name: "تیم روژ وب",
        avatar: "ر",
        avatarColor: "from-blue-500 to-indigo-500",
        date: "۱ روز پیش",
        text: "ممنون از شما سارا جان! خوشحالیم که تجربه‌تون مثبت بوده. 🙏",
        isAdmin: true,
      },
    ],
  },
  {
    id: 2,
    name: "علی رضایی",
    avatar: "ع",
    avatarColor: "from-emerald-500 to-teal-500",
    rating: 4,
    date: "۵ روز پیش",
    text: "سرعت لود واقعاً عالیه. فقط یه پیشنهاد: کاش توی موبایل منوی دسته‌بندی محصولات یه کم بزرگ‌تر بود.",
    likes: 12,
    liked: false,
    replies: [],
  },
  {
    id: 3,
    name: "مریم کریمی",
    avatar: "م",
    avatarColor: "from-purple-500 to-fuchsia-500",
    rating: 5,
    date: "۱ هفته پیش",
    text: "پنل مدیریت خیلی حرفه‌ای و کامل طراحی شده. به عنوان یه برنامه‌نویس، از دیدن این سطح از جزئیات لذت بردم.",
    likes: 38,
    liked: true,
    replies: [],
  },
];

// ===== آیکون‌های SVG =====
const icons = {
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9v11h18V9" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 9c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
};

// ===== آیکون ستاره =====
function StarIcon({ filled, className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ===== سیستم ستاره‌دهی =====
function StarRating({ value, onChange, size = "w-5 h-5", readOnly = false }) {
  const [hover, setHover] = useState(0);
  const display = hover || value;

  return (
    <div className="flex items-center gap-1" dir="ltr">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => !readOnly && onChange?.(star)}
          onMouseEnter={() => !readOnly && setHover(star)}
          onMouseLeave={() => !readOnly && setHover(0)}
          className={`${readOnly ? "cursor-default" : "cursor-pointer"} transition-transform ${
            !readOnly ? "hover:scale-110" : ""
          } ${display >= star ? "text-amber-400" : "text-gray-300"}`}
          aria-label={`${star} ستاره`}
        >
          <StarIcon filled={display >= star} className={size} />
        </button>
      ))}
    </div>
  );
}

// ===== بخش کامنت‌ها =====
function CommentsSection() {
  const [comments, setComments] = useState(initialComments);
  const [sortBy, setSortBy] = useState("newest"); // newest | mostLiked
  const [form, setForm] = useState({ name: "", email: "", text: "", rating: 0 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  // آمار
  const stats = useMemo(() => {
    const total = comments.length;
    const sum = comments.reduce((acc, c) => acc + (c.rating || 0), 0);
    const avg = total ? (sum / total).toFixed(1) : "0.0";
    const counts = [5, 4, 3, 2, 1].map(
      (r) => comments.filter((c) => c.rating === r).length
    );
    return { total, avg, counts };
  }, [comments]);

  // مرتب‌سازی
  const sortedComments = useMemo(() => {
    const copy = [...comments];
    if (sortBy === "mostLiked") return copy.sort((a, b) => b.likes - a.likes);
    return copy.sort((a, b) => b.id - a.id);
  }, [comments, sortBy]);

  // اعتبارسنجی
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "نام را وارد کنید";
    else if (form.name.trim().length < 3) e.name = "حداقل ۳ کاراکتر";
    if (!form.email.trim()) e.email = "ایمیل را وارد کنید";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "ایمیل معتبر نیست";
    if (!form.text.trim()) e.text = "متن نظر را بنویسید";
    else if (form.text.trim().length < 10) e.text = "حداقل ۱۰ کاراکتر";
    if (!form.rating) e.rating = "امتیاز بدهید";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newComment = {
      id: Date.now(),
      name: form.name.trim(),
      avatar: form.name.trim().charAt(0),
      avatarColor: "from-blue-500 to-indigo-500",
      rating: form.rating,
      date: "همین الان",
      text: form.text.trim(),
      likes: 0,
      liked: false,
      replies: [],
    };
    setComments([newComment, ...comments]);
    setForm({ name: "", email: "", text: "", rating: 0 });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const toggleLike = (id) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 }
          : c
      )
    );
  };

  const handleReply = (commentId) => {
    if (!replyText.trim()) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: Date.now(),
                  name: "شما",
                  avatar: "ش",
                  avatarColor: "from-gray-500 to-gray-700",
                  date: "همین الان",
                  text: replyText.trim(),
                },
              ],
            }
          : c
      )
    );
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
          نظرات کاربران
          <span className="mr-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-600">
            {stats.total}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* ===== ستون چپ: خلاصه امتیازات ===== */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900">{stats.avg}</div>
              <div className="mt-2 flex justify-center" dir="ltr">
                <StarRating value={Math.round(parseFloat(stats.avg))} readOnly size="w-5 h-5" />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                از {stats.total} نظر
              </p>
            </div>

            {/* نمودار میله‌ای */}
            <div className="mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((r, i) => {
                const count = stats.counts[i];
                const pct = stats.total ? (count / stats.total) * 100 : 0;
                return (
                  <div key={r} className="flex items-center gap-2 text-xs" dir="ltr">
                    <span className="w-3 text-gray-500">{r}</span>
                    <StarIcon filled className="w-3 h-3 text-amber-400" />
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-gray-500">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== ستون راست: فرم + لیست ===== */}
        <div className="space-y-6 lg:col-span-2">
          {/* فرم ارسال */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
            <h3 className="text-base font-black text-gray-900">نظر خود را بنویسید</h3>
            <p className="mt-1 text-xs text-gray-500">
              دیدگاه شما به بهبود پروژه‌های بعدی کمک می‌کند.
            </p>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700 ring-1 ring-emerald-200">
                <span>✅</span>
                نظر شما با موفقیت ثبت شد. سپاسگزاریم!
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* امتیاز */}
              <div>
                <label className="mb-2 block text-xs font-bold text-gray-700">
                  امتیاز شما <span className="text-rose-500">*</span>
                </label>
                <StarRating
                  value={form.rating}
                  onChange={(v) => setForm({ ...form, rating: v })}
                  size="w-7 h-7"
                />
                {errors.rating && (
                  <p className="mt-1 text-xs text-rose-500">{errors.rating}</p>
                )}
              </div>

              {/* نام و ایمیل */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-gray-700">
                    نام <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-rose-300 focus:ring-rose-200"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                    }`}
                    placeholder="نام شما"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-gray-700">
                    ایمیل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    dir="ltr"
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-left transition focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-rose-300 focus:ring-rose-200"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* متن */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  نظر شما <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
                    errors.text
                      ? "border-rose-300 focus:ring-rose-200"
                      : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                  placeholder="تجربه‌تان از این پروژه را بنویسید..."
                />
                {errors.text && (
                  <p className="mt-1 text-xs text-rose-500">{errors.text}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-l from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-600/50 active:scale-[0.98] sm:w-auto"
              >
                ثبت نظر
              </button>
            </form>
          </div>

          {/* مرتب‌سازی + لیست */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500">ترتیب نمایش:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortBy("newest")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    sortBy === "newest"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  جدیدترین
                </button>
                <button
                  onClick={() => setSortBy("mostLiked")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    sortBy === "mostLiked"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  مفیدترین
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {sortedComments.length === 0 && (
                <div className="rounded-2xl bg-white p-10 text-center text-sm text-gray-500 ring-1 ring-gray-100">
                  هنوز نظری ثبت نشده. اولین نفر باشید!
                </div>
              )}

              {sortedComments.map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition hover:ring-blue-200 sm:p-6"
                >
                  {/* هدر کامنت */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${c.avatarColor} text-sm font-black text-white`}
                    >
                      {c.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">{c.name}</span>
                        <span className="text-[11px] text-gray-400">{c.date}</span>
                      </div>
                      <div className="mt-1" dir="ltr">
                        <StarRating value={c.rating} readOnly size="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* متن */}
                  <p className="mt-3 text-sm leading-7 text-gray-600">{c.text}</p>

                  {/* اکشن‌ها */}
                  <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs">
                    <button
                      onClick={() => toggleLike(c.id)}
                      className={`flex items-center gap-1.5 transition ${
                        c.liked ? "text-rose-500" : "text-gray-500 hover:text-rose-500"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={c.liked ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{c.likes}</span>
                    </button>
                    <button
                      onClick={() => setReplyingTo(replyingTo === c.id ? null : c.id)}
                      className="flex items-center gap-1.5 text-gray-500 transition hover:text-blue-600"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      پاسخ
                    </button>
                  </div>

                  {/* فرم پاسخ */}
                  {replyingTo === c.id && (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="پاسخ خود را بنویسید..."
                        className="flex-1 rounded-lg border border-gray-200 bg-slate-50 px-3 py-2 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                      <button
                        onClick={() => handleReply(c.id)}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700 active:scale-95"
                      >
                        ارسال
                      </button>
                    </div>
                  )}

                  {/* پاسخ‌ها */}
                  {c.replies.length > 0 && (
                    <div className="mt-4 space-y-3 border-r-2 border-blue-100 pr-4">
                      {c.replies.map((r) => (
                        <div key={r.id} className="flex items-start gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${r.avatarColor} text-xs font-black text-white`}
                          >
                            {r.avatar}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold text-gray-900">{r.name}</span>
                              {r.isAdmin && (
                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-600">
                                  مدیر
                                </span>
                              )}
                              <span className="text-[10px] text-gray-400">{r.date}</span>
                            </div>
                            <p className="mt-1 text-xs leading-6 text-gray-600">{r.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== کامپوننت اصلی =====
export default function PortfolioDetail() {
  const { id } = useParams();
  const [activePanel, setActivePanel] = useState(0);
  const project = projectData;
  const active = project.panels[activePanel];

  return (
    <div dir="rtl" className="w-full bg-slate-50 font-Dana pb-20">
      {/* ===== هدر ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-16 text-white sm:py-24">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">خانه</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-white transition-colors">نمونه کارها</Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>

          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm ring-1 ring-white/20">
            {project.category}
          </span>
          <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-slate-50" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,40 C240,100 480,0 720,30 C960,60 1200,90 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ===== محتوای اصلی ===== */}
      <div className="mx-auto max-w-[1200px] mt-8 px-4 sm:px-6 lg:px-8 ">
        {/* پیش‌نمایش پروژه */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
            <div className={`relative flex aspect-video w-full flex-col items-center justify-center gap-4 bg-gradient-to-br ${active.gradient} text-white overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 p-5 backdrop-blur-sm ring-1 ring-white/30">
                {icons[active.icon]}
              </div>
              <span className="relative z-10 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold backdrop-blur-sm ring-1 ring-white/30">
                {active.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {project.panels.map((panel, idx) => (
              <button
                key={idx}
                onClick={() => setActivePanel(idx)}
                className={`group relative flex aspect-video flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br ${panel.gradient} text-white ring-2 transition-all duration-300 ${
                  activePanel === idx
                    ? "ring-blue-600 shadow-lg shadow-blue-600/20 scale-[1.02]"
                    : "ring-transparent opacity-70 hover:opacity-100 hover:ring-white/50"
                }`}
              >
                <div className="h-8 w-8 opacity-90">{icons[panel.icon]}</div>
                <span className="text-[10px] font-bold">{panel.label}</span>
                {activePanel !== idx && (
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* محتوا و سایدبار */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">📝</span>
                درباره پروژه
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.description}</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">💡</span>
                چالش‌ها و راه‌حل‌ها
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.challenge}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg shadow-blue-600/20 transition-transform hover:-translate-y-1">
                  <div className="text-2xl font-black sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">✓</span>
                خدماتی که ارائه دادیم
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">اطلاعات پروژه</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">کارفرما</span>
                  <span className="font-bold text-gray-900">{project.client}</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">دسته‌بندی</span>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">{project.category}</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-gray-100 pb-3">
                  <span className="text-gray-500">سال انجام</span>
                  <span className="font-bold text-gray-900">{project.year}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-500">مدت زمان</span>
                  <span className="font-bold text-gray-900">{project.duration}</span>
                </li>
              </ul>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/50 active:scale-95"
              >
                <span>مشاهده سایت</span>
                <span>↗</span>
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">تکنولوژی‌های استفاده‌شده</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-600/20">
              <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <h3 className="text-base font-black">پروژه مشابهی در ذهن دارید؟</h3>
                <p className="mt-2 text-xs leading-6 text-blue-100">با ما تماس بگیرید تا در مورد ایده‌تان صحبت کنیم.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600 transition-transform hover:scale-105 active:scale-95">
                  شروع گفتگو ←
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ===== بخش کامنت‌ها (جدید) ===== */}
        <CommentsSection />

        {/* ===== پروژه‌های مشابه ===== */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900 sm:text-2xl">پروژه‌های مشابه</h2>
            <Link to="/portfolio" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">مشاهده همه ←</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((item, idx) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-200 animate-fadeInUp"
              >
                <div className={`relative flex h-40 w-full items-center justify-center bg-gradient-to-br ${item.gradient} text-white overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 h-14 w-14 opacity-90 transition-transform duration-500 group-hover:scale-110">
                    {icons[item.icon]}
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur-sm ring-1 ring-white/30">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600">{item.title}</h3>
                </div>
                <div className="h-1 w-full scale-x-0 bg-gradient-to-l from-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100 origin-right" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}