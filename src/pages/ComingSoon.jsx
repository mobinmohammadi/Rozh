
import { Link, useNavigate } from "react-router-dom";

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-16 font-Dana"
    >
      {/* Background decorations */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/10" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border border-blue-300/20 bg-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-xl">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-12 w-12 text-blue-300"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 2h8"
              />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-5 py-2 text-xs font-bold text-blue-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          در حال آماده‌سازی
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black leading-relaxed text-white sm:text-5xl">
          این صفحه به‌زودی
          <span className="block bg-gradient-to-l from-blue-300 to-cyan-200 bg-clip-text text-transparent">
            در دسترس خواهد بود!
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-sm leading-9 text-slate-300 sm:text-base">
          ما در روژ وب در حال آماده‌سازی این بخش هستیم تا تجربه‌ای بهتر،
          حرفه‌ای‌تر و جذاب‌تر برای شما فراهم کنیم.
          از صبوری شما سپاسگزاریم.
        </p>

        {/* Progress decoration */}
        <div className="mx-auto mt-10 max-w-xs">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
            <span>تیم روژ وب در حال کار روی این بخش است</span>
            <span>...</span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-l from-blue-400 to-cyan-300" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            بازگشت به صفحه اصلی
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m0 0 7 7m-7-7 7-7"
              />
            </svg>
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
          >
            بازگشت به صفحه قبل
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            طراحی و توسعه با ❤️ توسط{" "}
            <Link to="/" className="font-bold text-blue-300 hover:text-blue-200">
              روژ وب
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}

export default ComingSoon;
