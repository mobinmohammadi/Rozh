import { FiArrowLeft } from 'react-icons/fi';

const teamMembers = [
  {
    id: 1,
    name: 'مبین محمدی',
    role: 'مدیر / برنامه نویس',
    image: '/images/admin1.jpg',
    bgColor: 'bg-[#d1d5db]', // خاکستری روشن
  },
  {
    id: 2,
    name: 'مبین محمدی',
    role: 'مدیر / برنامه نویس',
    image: '/images/admin1.jpg',
    bgColor: 'bg-[#dc2626]', // قرمز
  },
  {
    id: 3,
    name: 'مبین محمدی',
    role: 'مدیر / برنامه نویس',
    image: '/images/admin1.jpg',
    bgColor: 'bg-[#d1d5db]',
  },
  {
    id: 4,
    name: 'مبین محمدی',
    role: 'مدیر / برنامه نویس',
    image: '/images/admin1.jpg',
    bgColor: 'bg-[#dc2626]',
  },
  {
    id: 5,
    name: 'مبین محمدی',
    role: 'مدیر / برنامه نویس',
    image: '/images/admin1.jpg',
    bgColor: 'bg-[#d1d5db]',
  },
];

export default function TeamSection() {
  return (
    <div className="w-full font-Dana  bg-[#f8f9fa] py-16 px-4 md:px-8 " dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-6 bg-blue-600 rounded-sm"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">اعضای تیم</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`relative group rounded-2xl overflow-hidden ${member.bgColor} h-[320px] md:h-[380px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />

            <div className="absolute top-[74%] sm:top-[79%] right-8 bg-white/40 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
  <span className="text-white drop-shadow-md text-xs font-bold px-6 py-1.5 block rounded-full">
    {member.role}
  </span>
</div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]">
                <div className="bg-white rounded-full py-2.5 px-4 text-center shadow-md transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-lg">
                  <span className="text-gray-900 font-bold text-sm md:text-base">
                    {member.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}