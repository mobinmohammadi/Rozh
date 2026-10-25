import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
        
        <header dir="rtl" className="relative  font-Dana z-10 bg-white">
            <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
          
                <nav className="hidden items-center gap-6 text-[11px] text-gray-600 md:flex">
                    <a href="#home" className="transition hover:text-blue-600">صفحه اصلی</a>
                    <a href="#services" className="transition hover:text-blue-600">خدمات</a>
                    <a href="#about" className="transition hover:text-blue-600">درباره ما</a>
                    <a href="#contact" className="transition hover:text-blue-600">تماس با ما</a>
                </nav>

                {/* اقدامات هدر */}
                <div className="flex items-center gap-2">
                    <button aria-label="جستجو" className="hidden h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 sm:flex">
                        ⌕
                    </button>

                    <button className="rounded-md bg-yellow-400 px-3 py-2 text-[10px] font-bold text-gray-900 transition hover:bg-yellow-300 sm:px-5">
                        ثبت درخواست
                    </button>

                    {/* منوی موبایل */}
                    <details className="relative md:hidden">
                        <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md border border-gray-200 text-lg">
                            ☰
                        </summary>
                        <nav className="absolute left-0 top-10 z-50 flex w-44 flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 text-xs shadow-xl">
                            <a href="#home">صفحه اصلی</a>
                            <Link to="/portfolio">خدمات</Link>
                            <a href="#about">درباره ما</a>
                            <a href="#contact">تماس با ما</a>
                        </nav>
                    </details>
                </div>
            </div>

            {/* نوار آبی ناوبری */}
            <div className="relative bg-blue-600 text-white">
                <div className="mx-auto flex h-10 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    <nav className="flex items-center gap-4 text-[10px] sm:gap-7 sm:text-xs">
                        <a href="#home" className="hover:text-yellow-300">درباره ما</a>
                        <Link to="/portfolio" href="#services" className="hover:text-yellow-300">خدمات</Link>
                    </nav>

                    <nav className="flex items-center gap-3 text-[10px] sm:gap-7 sm:text-xs">
                        <a href="#contact" className="hover:text-yellow-300">تماس با ما</a>
                        <a href="#brands" className="hover:text-yellow-300">برندهای همکار</a>
                    </nav>
                </div>

                {/* فرورفتگی تزئینی وسط نوار */}
                <div className="pointer-events-none absolute -bottom-[13px] left-1/2 hidden h-[26px] w-32 -translate-x-1/2 rounded-b-[50%] bg-white md:block" />
            </div>
        </header>

        <Outlet/>
        </>

    );
}
