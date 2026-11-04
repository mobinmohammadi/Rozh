import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiChevronDown } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Loader from '../utils/Loader';

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const subjects = [
    { value: '', label: 'انتخاب کنید...' },
    { value: 'design', label: 'طراحی وب‌سایت' },
    { value: 'redesign', label: 'بازطراحی وب‌سایت' },
    { value: 'ui-ux', label: 'طراحی UI/UX' },
    { value: 'logo', label: 'طراحی لوگو و برند' },
    { value: 'ecommerce', label: 'فروشگاه اینترنتی' },
    { value: 'support', label: 'پشتیبانی فنی' },
    { value: 'other', label: 'سایر موارد' },
  ];

  if (isLoading) return <Loader />;

  return (
    <div
      className="min-h-screen font-Dana bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-10 sm:py-14 lg:py-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden animate-[fadeIn_0.6s_ease-in]"
      dir="rtl"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ================= Header ================= */}
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
            تیم طراحی روژ وب آماده پاسخگویی به سوالات شماست. ایده‌های خود را با ما در میان بگذارید و پروژه‌تان را به واقعیت تبدیل کنید.
          </p>
          <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* ================= Grid اصلی =================
            - موبایل: 1 ستون (اطلاعات بالا، فرم پایین)
            - تبلت (sm): 1 ستون با کارت‌های کنار هم برای اطلاعات
            - دسکتاپ (lg): 2/3 فرم + 2/5 اطلاعات
        */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* ================= Contact Info ================= */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* کارت‌های تماس: در تبلت 3 ستونه، در موبایل 1 ستونه، در دسکتاپ عمودی */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5">
              {[
                {
                  icon: <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'ایمیل',
                  value: 'rozhwebs@gmail.com',
                  gradient: 'from-pink-500 to-rose-500',
                },
                {
                  icon: <FiPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'تلفن',
                  value: '09391177395',
                  gradient: 'from-purple-500 to-indigo-500',
                },
                {
                  icon: <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  title: 'آدرس',
                  value: 'مهاباد، خیابان ولیعصر، پلاک ۱۲۳',
                  gradient: 'from-blue-500 to-cyan-500',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-4">
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
                  { icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-pink-500' },
                  { icon: <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-blue-500' },
                  { icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-gray-600' },
                  { icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />, color: 'hover:bg-green-500' },
                ].map((social, i) => (
                  <button
                    key={i}
                    aria-label="social link"
                    className={`p-2.5 sm:p-3 rounded-xl bg-white/10 text-white ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Contact Form ================= */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl">
              {isSubmitted ? (
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
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                    ارسال پیام
                  </h2>

                  {/* نام و ایمیل — در موبایل 1 ستون، از sm به بالا 2 ستون */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        نام و نام خانوادگی <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <FiUser className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pr-10 sm:pr-11 pl-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm sm:text-base"
                          placeholder="نام شما"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        ایمیل <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <FiMail className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pr-10 sm:pr-11 pl-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm sm:text-base"
                          placeholder="email@example.com"
                          dir="ltr"
                          style={{ textAlign: 'right' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* شماره تماس و موضوع */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        شماره تماس <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9+\-\s()]{10,}"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pr-10 sm:pr-11 pl-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-sm sm:text-base"
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          dir="ltr"
                          style={{ textAlign: 'right' }}
                        />
                      </div>
                      <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 pr-1">
                        مثال: 09123456789
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        موضوع <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 pl-10 text-white appearance-none focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all cursor-pointer text-sm sm:text-base"
                        >
                          {subjects.map((s) => (
                            <option
                              key={s.value}
                              value={s.value}
                              disabled={s.value === ''}
                              className="bg-slate-800 text-white"
                            >
                              {s.label}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* پیام */}
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">
                      پیام <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none text-sm sm:text-base sm:rows-5"
                      placeholder="پیام خود را بنویسید..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    <FiSend className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ================= Footer ================= */}
        <div className="mt-10 sm:mt-14 lg:mt-16 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2026 روژ وب — تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </div>
  );
}