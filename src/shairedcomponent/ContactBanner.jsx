import { FiPhoneCall, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { FaPaperPlane, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

export default function ResponsiveContactBanner() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 " dir="rtl">
      
      <div className="relative w-full max-w-md lg:max-w-6xl bg-[#4a90e2] bg-gradient-to-b from-[#4a90e2] to-[#357abd] lg:bg-gradient-to-br lg:from-[#4a90e2] lg:to-[#357abd] rounded-[2.5rem] lg:rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between px-6 pt-10 pb-8 lg:p-10 gap-8 min-h-[280px] border border-blue-400/30 transition-all duration-300">
        
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 border-[1px] border-white rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[1px] border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/50 rounded-full rotate-12"></div>
        </div>

        {/* <div className="relative z-10 w-full lg:w-1/4 flex justify-center lg:justify-start order-1 lg:order-3 mb-4 lg:mb-0">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-6067897-4999226.png"
            alt="Web Design"
            className="w-56 lg:w-64 h-auto object-contain drop-shadow-2xl"
          />
        </div> */}

        <div className="relative z-10 w-full lg:w-1/2 order-2 lg:order-2">
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[220px] lg:h-full">
              <FaCheckCircle className="w-12 h-12 text-green-300 mb-3 animate-bounce" />
              <h3 className="text-white font-bold text-lg mb-1">درخواست شما ثبت شد!</h3>
              <p className="text-blue-100 text-sm">به زودی با شما تماس می‌گیریم.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-4">
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    placeholder="نام و نام خانوادگی"
                    className="w-full pr-10 bg-[#3b7dd8]/50 lg:bg-white/20 backdrop-blur-md border border-white/10 lg:border-white/30 rounded-xl pl-10 py-3.5 lg:py-3 text-white placeholder-blue-100 focus:outline-none text-sm text-right transition-colors"
                  />
                    <FiUser className="absolute left-3 lg:right-4 lg:left-auto top-1/2 -translate-y-1/2 text-blue-200 w-5 lg:w-4 h-5 lg:h-4" />
                </div>
                <div className="relative w-full">
                  <input
                    type="tel"
                    required
                    placeholder="شماره تماس"
                    className="w-full pr-10 bg-[#3b7dd8]/50 lg:bg-white/20 backdrop-blur-md border border-white/10 lg:border-white/30 rounded-xl pl-10 py-3.5 lg:py-3 text-white placeholder-blue-100 focus:outline-none text-sm text-right transition-colors"
                  />
                  <FiPhone className="absolute left-3 lg:right-4 lg:left-auto top-1/2 -translate-y-1/2 text-blue-200 w-5 lg:w-4 h-5 lg:h-4" />
                </div>
                
              </div>

              {/* ایمیل */}
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  placeholder="ایمیل"
                  className="w-full pr-10 bg-[#3b7dd8]/50 lg:bg-white/20 backdrop-blur-md border border-white/10 lg:border-white/30 rounded-xl pl-10 py-3.5 lg:py-3 text-white placeholder-blue-100 focus:outline-none text-sm text-right transition-colors"
                />
                <FiMail className="absolute left-3 lg:right-4 lg:left-auto top-1/2 -translate-y-1/2 text-blue-200 w-5 lg:w-4 h-5 lg:h-4" />
              </div>

              <div className="flex justify-end mt-2 lg:mt-1">
                <button
                  type="submit"
                  className="bg-white text-[#3b7dd8] rounded-full py-2.5 px-3 lg:px-6 lg:pr-6 flex items-center justify-between lg:justify-center gap-4 lg:gap-2 font-bold text-sm shadow-lg hover:bg-gray-50 transition-colors group"
                >
                  <span>ارسال تیکت / درخواست</span>
                  
                  <div className="bg-[#3b7dd8] text-white rounded-full p-2 lg:p-1.5 flex items-center justify-center lg:hidden">
                    <FaArrowLeft className="w-4 h-4" />
                  </div>
                  
                  <div className="hidden lg:flex bg-[#3b7dd8] text-white rounded-full p-1.5 items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <FaPaperPlane className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="relative z-10 w-full lg:w-1/3 flex flex-col items-center text-center lg:flex-row-reverse lg:items-center lg:justify-end lg:text-right gap-4 mt-4 lg:mt-0 order-3 lg:order-1">
          

          <div className="flex flex-col lg:text-right items-center lg:justify-start w-full md:items-right">
            <h2 className="text-xl lg:text-2xl  font-bold mb-2 text-white">
              هر لحظه همراه شما هستیم
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              روژ وب را به عنوان همراه خود در طراحی وبسایت انتخاب کنید.
            </p>
          </div>
          <div className="hidden lg:block flex-shrink-0 relative">
            <div className="absolute inset-0 border-t-2 border-l-2 border-white/40 rounded-tl-full w-16 h-16 -top-4 -right-4 rounded-tr-full rotate-45"></div>
            <FiPhoneCall className="w-12 sm:w-15 h-12 sm:h-15 text-white relative z-10" />
          </div>
        </div>

      </div>
    </div>
  );
}