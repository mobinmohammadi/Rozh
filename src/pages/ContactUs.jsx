import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

import { FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

import Loader from "../utils/Loader";
import {
  add_request_client,
  messageClear,
} from "./../store/Reducers/addRequestClientReducer";
import toast from "react-hot-toast";

export default function ContactUs() {
  const dispatch = useDispatch();

  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.requstClient,
  );

  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Page Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // Submit Form
  const onSubmit = (data) => {
    dispatch(add_request_client(data)).unwrap();
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      reset()
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  // Subjects
const subjects = [
  { value: "", label: "انتخاب کنید..." },
  { value: "طراحی وب‌سایت", label: "طراحی وب‌سایت" },
  { value: "بازطراحی وب‌سایت", label: "بازطراحی وب‌سایت" },
  { value: "طراحی UI/UX", label: "طراحی UI/UX" },
  { value: "طراحی لوگو و برند", label: "طراحی لوگو و برند" },
  { value: "فروشگاه اینترنتی", label: "فروشگاه اینترنتی" },
  { value: "پشتیبانی فنی", label: "پشتیبانی فنی" },
  { value: "سایر موارد", label: "سایر موارد" },
];

  // Input Styles
  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm sm:text-base";

  const errorClass = "text-red-400 text-xs mt-1.5 pr-1";

  if (isLoading) return <Loader />;

  return (
    <div
      className="min-h-screen font-Dana bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-10 sm:py-14 lg:py-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden animate-[fadeIn_0.6s_ease-in]"
      dir="rtl"
    >
      {/* Background Decorative Elements */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              روژ وب
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            با ما در تماس باشید
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            تیم طراحی روژ وب آماده پاسخگویی به سوالات شماست. ایده‌های خود را با
            ما در میان بگذارید و پروژه‌تان را به واقعیت تبدیل کنید.
          </p>

          <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Information */}

          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Contact Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5">
              {[
                {
                  icon: <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "ایمیل",
                  value: "rozhwebs@gmail.com",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "تلفن",
                  value: "09391177395",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  icon: <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: "آدرس",
                  value: "مهاباد، خیابان ولیعصر، پلاک ۱۲۳",
                  gradient: "from-blue-500 to-cyan-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg shrink-0`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">
                        {item.title}
                      </p>

                      <p className="text-white font-medium text-sm sm:text-base lg:text-lg break-words leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                ما را دنبال کنید
              </h3>

              <div className="flex gap-2.5 sm:gap-3">
                {[
                  {
                    icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                    color: "hover:bg-pink-500",
                  },
                  {
                    icon: <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />,
                    color: "hover:bg-blue-500",
                  },
                  {
                    icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />,
                    color: "hover:bg-gray-600",
                  },
                  {
                    icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />,
                    color: "hover:bg-green-500",
                  },
                ].map((social, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label="social link"
                    className={`p-2.5 sm:p-3 rounded-xl bg-white/10 text-white ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl">
              {successMessage ? (
                /* Success Message */

                <div className="flex flex-col items-center justify-center py-14 sm:py-20 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-5 sm:mb-6 animate-bounce">
                    <FiSend className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    پیام شما ارسال شد!
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base">
                    به زودی با شما تماس خواهیم گرفت.
                  </p>
                </div>
              ) : (
                /* Form */

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-5"
                  noValidate
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                    ارسال پیام
                  </h2>

                  {/* Name & Email */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        نام و نام خانوادگی
                        <span className="text-pink-400">*</span>
                      </label>

                      <div className="relative">
                        <FiUser className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

                        <input
                          type="text"
                          placeholder="نام شما"
                          className={`${inputClass} pr-10 sm:pr-11`}
                          {...register("name", {
                            required: "نام و نام خانوادگی الزامی است",
                            minLength: {
                              value: 3,
                              message: "نام باید حداقل ۳ کاراکتر باشد",
                            },
                          })}
                        />
                      </div>

                      {errors.name && (
                        <p className={errorClass}>{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        ایمیل
                        <span className="text-pink-400">*</span>
                      </label>

                      <div className="relative">
                        <FiMail className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

                        <input
                          type="email"
                          placeholder="email@example.com"
                          dir="ltr"
                          style={{ textAlign: "right" }}
                          className={`${inputClass} pr-10 sm:pr-11`}
                          {...register("email", {
                            required: "ایمیل الزامی است",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "ایمیل معتبر وارد کنید",
                            },
                          })}
                        />
                      </div>

                      {errors.email && (
                        <p className={errorClass}>{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Phone */}

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        شماره تماس
                        <span className="text-pink-400">*</span>
                      </label>

                      <div className="relative">
                        <FiPhone className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

                        <input
                          type="tel"
                          placeholder="09123456789"
                          dir="ltr"
                          style={{ textAlign: "right" }}
                          className={`${inputClass} pr-10 sm:pr-11`}
                          {...register("phone", {
                            required: "شماره تماس الزامی است",
                            pattern: {
                              value: /^[0-9+\-\s()]{10,}$/,
                              message: "شماره تماس معتبر وارد کنید",
                            },
                          })}
                        />
                      </div>

                      {errors.phone ? (
                        <p className={errorClass}>{errors.phone.message}</p>
                      ) : (
                        <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 pr-1">
                          مثال: 09123456789
                        </p>
                      )}
                    </div>

                    {/* Subject */}

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        موضوع
                        <span className="text-pink-400">*</span>
                      </label>

                      <div className="relative">
                        <select
                          defaultValue=""
                          className={`${inputClass} appearance-none cursor-pointer pl-10`}
                          {...register("subject", {
                            required: "لطفاً موضوع پیام را انتخاب کنید",
                          })}
                        >
                          {subjects.map((s) => (
                            <option
                              key={s.value}
                              value={s.value}
                              disabled={s.value === ""}
                              className="bg-slate-800 text-white"
                            >
                              {s.label}
                            </option>
                          ))}
                        </select>

                        <FiChevronDown className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                      </div>

                      {errors.subject && (
                        <p className={errorClass}>{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                      پیام
                      <span className="text-pink-400">*</span>
                    </label>

                    <textarea
                      rows={4}
                      placeholder="پیام خود را بنویسید..."
                      className={`${inputClass} resize-none`}
                      {...register("message", {
                        required: "نوشتن پیام الزامی است",
                        minLength: {
                          value: 10,
                          message: "پیام باید حداقل ۱۰ کاراکتر باشد",
                        },
                      })}
                    />

                    {errors.message && (
                      <p className={errorClass}>{errors.message.message}</p>
                    )}
                  </div>

                  {/* API Error */}

                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                      <p className="text-red-400 text-sm">
                        {typeof error === "string"
                          ? error
                          : "خطا در ارسال پیام. لطفاً دوباره تلاش کنید."}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />

                    {loading ? "در حال ارسال..." : "ارسال پیام"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 sm:mt-14 lg:mt-16 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2026 روژ وب — تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </div>
  );
}
