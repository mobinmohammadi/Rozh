import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolioData, icons } from "../../data/portfolioData";

// ===== گالری تصاویر با انیمیشن =====
function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const touchStartX = useRef(null);
  const count = images?.length || 0;

  const next = () => {
    setDirection(1);
    setActive((i) => (i + 1) % count);
  };
  const prev = () => {
    setDirection(-1);
    setActive((i) => (i - 1 + count) % count);
  };
  const goTo = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const openLightbox = () => {
    setLightbox(true);
    requestAnimationFrame(() => setLightboxVisible(true));
  };
  const closeLightbox = () => {
    setLightboxVisible(false);
    setTimeout(() => setLightbox(false), 250);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, count]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (!count) return null;

  return (
    <>
      {/* ===== تصویر اصلی ===== */}
      <div
        className="relative select-none overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-gray-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-72 w-full overflow-hidden sm:h-96">
          <img
            key={images[active].src}
            src={images[active].src}
            alt={images[active].alt}
            onClick={openLightbox}
            className={`h-full w-full cursor-zoom-in object-cover ${
              direction === 1 ? "animate-slideInRight" : "animate-slideInLeft"
            }`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="قبلی"
              className="group absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white active:scale-90"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">›</span>
            </button>
            <button
              onClick={next}
              aria-label="بعدی"
              className="group absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white active:scale-90"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">‹</span>
            </button>
          </>
        )}

        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
          {active + 1} / {count}
        </span>

        {count > 1 && (
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${((active + 1) / count) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* ===== نقطه‌ها ===== */}
      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`اسلاید ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-blue-600"
                  : "w-2 bg-gray-300 hover:w-4 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* ===== تامبنیل‌ها ===== */}
      {count > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={img.alt}
              className={`group relative overflow-hidden rounded-xl ring-2 transition-all duration-300 ${
                i === active
                  ? "ring-blue-600 shadow-lg shadow-blue-600/20 scale-105"
                  : "ring-transparent opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-16 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {i !== active && (
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* ===== لایت‌باکس ===== */}
      {lightbox && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity duration-300 ${
            lightboxVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={images[active].src}
            src={images[active].src}
            alt={images[active].alt}
            className={`max-h-[90vh] max-w-[95vw] rounded-xl object-contain transition-all duration-300 ${
              lightboxVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          />

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="قبلی"
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/30 active:scale-90"
              >
                ›
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="بعدی"
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/30 active:scale-90"
              >
                ‹
              </button>
            </>
          )}

          <button
            onClick={closeLightbox}
            aria-label="بستن"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-white/30"
          >
            ×
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">
            {active + 1} / {count}
          </span>
        </div>
      )}
    </>
  );
}

// ===== صفحه‌ی جزئیات پروژه =====
export default function SinglePage() {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === Number(id));

  // ===== اسکرول به بالا هنگام تغییر پروژه =====
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ===== حالت پیدا نشدن =====
  if (!project) {
    return (
      <div
        dir="rtl"
        className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 font-Dana animate-pageEnter"
      >
        <div className="text-6xl">😕</div>
        <h1 className="mt-6 text-2xl font-black text-gray-800">پروژه‌ای یافت نشد</h1>
        <p className="mt-2 text-sm text-gray-500">آدرس وارد شده معتبر نیست یا پروژه حذف شده است.</p>
        <Link
          to="/portfolio"
          className="mt-8 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 active:scale-95"
        >
          <span className="rotate-180">{icons.arrow}</span>
          بازگشت به نمونه کارها
        </Link>
      </div>
    );
  }

  const relatedProjects = portfolioData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div
      key={id}
      dir="rtl"
      className="w-full bg-slate-50 font-Dana pb-20 animate-pageEnter"
    >
      {/* ===== هدر ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 pb-32 pt-20 text-white animate-headerFade">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-blue-200">
            <Link to="/" className="transition-colors hover:text-white">خانه</Link>
            <span>/</span>
            <Link to="/portfolio" className="transition-colors hover:text-white">نمونه کارها</Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>

          <span className="mt-8 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm ring-1 ring-white/20">
            {project.category}
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            {project.description}
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-slate-50"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,40 C240,100 480,0 720,30 C960,60 1200,90 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ===== محتوا ===== */}
      <div className="mx-auto -mt-24 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* ستون اصلی */}
          <div className="lg:col-span-2 space-y-6">
            <ProjectGallery images={project.images} title={project.title} />

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="text-lg font-black text-gray-900">درباره این پروژه</h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.description}</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">💡</span>
                چالش‌های پروژه
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-600">{project.challenge}</p>
            </div>

            {project.solution && (
              <div className="rounded-2xl border-r-4 border-emerald-500 bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
                <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">✅</span>
                  راه‌حل ما
                </h2>
                <p className="mt-4 text-sm leading-8 text-gray-600">{project.solution}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl font-black sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <h2 className="text-lg font-black text-gray-900">خدماتی که ارائه دادیم</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm text-gray-700 ring-1 ring-gray-100 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      {icons.check}
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* سایدبار */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">اطلاعات پروژه</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                  <dt className="text-gray-500">کارفرما</dt>
                  <dd className="font-bold text-gray-800">{project.client}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                  <dt className="text-gray-500">دسته‌بندی</dt>
                  <dd className="font-bold text-gray-800">{project.category}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                  <dt className="text-gray-500">سال انجام</dt>
                  <dd className="font-bold text-gray-800">{project.year}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-500">مدت زمان</dt>
                  <dd className="font-bold text-gray-800">{project.duration}</dd>
                </div>
              </dl>

              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 active:scale-95"
              >
                مشاهده سایت
                {icons.external}
              </a>
              <Link
                to="/portfolio"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-50 px-5 py-3 text-sm font-bold text-gray-700 ring-1 ring-gray-200 transition-all hover:bg-gray-100"
              >
                <span className="rotate-180">{icons.arrow}</span>
                بازگشت به نمونه کارها
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-base font-black text-gray-900">تکنولوژی‌های استفاده شده</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 ring-1 ring-blue-100 transition-colors duration-300 hover:bg-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg shadow-blue-900/20">
              <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <h3 className="text-base font-black">پروژه مشابهی دارید؟</h3>
                <p className="mt-2 text-xs leading-6 text-blue-100">
                  تیم روژ وب آماده طراحی و اجرای پروژه شما با بهترین کیفیت است.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-2.5 text-xs font-black text-blue-700 transition-all hover:bg-blue-50 active:scale-95"
                >
                  درخواست مشاوره رایگان
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ===== پروژه‌های مشابه ===== */}
        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black text-gray-900">پروژه‌های مشابه</h2>
              <Link to="/portfolio" className="text-xs font-bold text-blue-600 transition-colors hover:text-blue-800">
                مشاهده همه
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/portfolio/${item.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-blue-200"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.cover.src}
                      alt={item.cover.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-blue-600/90 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm ring-1 ring-white/30">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-gray-500">کارفرما: {item.client}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}