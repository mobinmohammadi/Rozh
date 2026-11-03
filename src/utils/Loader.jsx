import React from 'react'

const Loader = () => {
 return (
    <div className="fixed font-Dana inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* حلقه‌های چرخان */}
        <div className="relative w-24 h-24 mb-8">
          {/* حلقه بیرونی */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-pink-500 animate-spin"></div>
          {/* حلقه میانی */}
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-400 border-l-purple-400 animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
          ></div>
          {/* حلقه داخلی */}
          <div
            className="absolute inset-4 rounded-full border-4 border-transparent border-t-blue-400 border-b-blue-400 animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
          {/* نقطه مرکزی */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* نام برند */}
        <h2 className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent text-3xl font-black tracking-tight animate-pulse">
          روژ وب
        </h2>

        {/* متن لودینگ */}
        <p className="text-gray-400 text-sm mt-3 tracking-wider">....در حال بارگذاری</p>

        {/* نوار پیشرفت */}
        <div className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader