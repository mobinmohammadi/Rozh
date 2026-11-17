
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

const advantages = [
  "راهکار متناسب با کسب‌وکار شما",
  "تمرکز بر نتیجه و کیفیت",
  "طراحی خلاقانه و اختصاصی",
  "پشتیبانی و همراهی مستمر",
  "شفافیت در هزینه و زمان‌بندی",
  "استفاده از تکنولوژی‌های روز",
  "توجه به تجربه کاربری و رضایت مشتری",
];

export function AdvantagesSlider() {
  return (
    <div className="relative mt-9 w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={12}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            spaceBetween: 16,
          },
        }}
        className="advantages-swiper !overflow-visible"
      >
        {[...advantages, ...advantages].map((item, index) => (
          <SwiperSlide
            key={`${item}-${index}`}
            className="!w-auto"
          >
            <div className="group flex min-h-12 items-center gap-2.5 rounded-full border border-blue-100 bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/10">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-black text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                ✓
              </span>

              <span className="whitespace-nowrap text-xs font-bold text-gray-600 transition group-hover:text-blue-700 sm:text-sm">
                {item}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .advantages-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}
