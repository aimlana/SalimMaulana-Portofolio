import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: 'Fullstack Web Developer',
      company: 'Sistem Pemesanan QR Code RM. Ratu Boga',
      location: 'Makassar, Indonesia',
      date: 'Jul 2025 – Nov 2025',
      duration: '5 months',
      description: [
        'Developed an end-to-end web-based self-ordering system using QR codes as a full system renewal.',
        'Built frontend with ReactJS and backend with ExpressJS, separating guest, customer, and admin roles.',
        'Implemented QR-based ordering flow, menu & order management, and payment transaction records.',
        'Applied WebSocket for real-time new orders, order status updates, and payment confirmations.',
        'Project completed 100% and ready for deployment.',
      ],
      tags: ['React', 'Express', 'Node.js', 'WebSocket', 'MySQL'],
      type: 'fullstack',
    },
    {
      title: 'UI/UX Designer',
      company: 'NPE Digital – SI-FA Faculty of Pharmacy Universitas Hasanuddin',
      location: 'Makassar, Indonesia',
      date: 'Nov 2022 – Apr 2023',
      duration: '6 months',
      description: [
        'Collaborated with team to identify user needs and align designs with brand guidelines.',
        'Designed consistent and professional UI for faculty information systems.',
        'Conducted UI testing and iterative design improvements to ensure usability.',
      ],
      tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping'],
      type: 'design',
    },
    {
      title: 'Youth IT Digital Development Intern',
      company: 'Telkomsel Regional Sulawesi',
      location: 'Makassar, Indonesia',
      date: 'Aug 2025 – Dec 2025',
      duration: '5 months',
      description: [
        'Developed TRUBERS system including content scoring, leaderboard, and admin dashboard.',
        'Scraped public data from TikTok and Instagram to analyze engagement metrics.',
        'Built WAJO (WhatsApp Jadwal Otomatis) for automated scheduling and broadcast messaging.',
        'Supported operational and field activities for digital education and fintech adoption.',
      ],
      tags: ['React', 'Express', 'JavaScript', 'Web Scraping', 'MySQL'],
      type: 'internship',
    },
  ];

  const getTypeLabel = (type) => {
    switch (type) {
      case 'current':
        return 'Current Role';
      case 'design':
        return 'UI/UX Design';
      case 'backend':
        return 'Backend Development';
      case 'desktop':
        return 'Desktop Application';
      default:
        return 'Professional';
    }
  };

  return (
    <section className='min-h-screen py-16 px-5 md:px-12 lg:px-13 font-alumni overflow-x-hidden'>
      {/* Header */}
      <div className='font-alumni pb-12 md:pb-16 lg:pb-20'>
        <h2
          className='font-alumni text-6xl text-black font-medium leading-[75%]
                      md:text-9xl
                      lg:text-[10rem]'
        >
          Experience
        </h2>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Left Column - Timeline Selector (Desktop) */}
        <div className='lg:w-1/3'>
          {/* Mobile Tabs */}
          <div className='flex overflow-x-auto lg:hidden mb-6 pb-2 gap-2'>
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-none border transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
                }`}
              >
                {exp.company.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Desktop Timeline Selector */}
          <div className='hidden lg:block space-y-2'>
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-none transition-all duration-300 border-l-2 ${
                  activeIndex === index
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='text-2xl font-medium text-black truncate'>
                        {exp.title}
                      </h3>
                      {exp.type === 'current' && (
                        <span className='px-2 py-1 text-xs bg-crayola text-white'>
                          Current
                        </span>
                      )}
                    </div>
                    <p className='text-gray-600 text-lg truncate'>
                      {exp.company}
                    </p>
                    <div className='flex items-center gap-2 text-gray-500 mt-1'>
                      <Calendar size={14} />
                      <span className='text-sm'>{exp.date}</span>
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? 'rotate-90 text-crayola'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Experience Details */}
        <div className='lg:w-2/3'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeIndex === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 absolute -translate-y-4 pointer-events-none'
              }`}
            >
              {/* Experience Card */}
              <div className='bg-white border border-gray-200 rounded-none overflow-hidden'>
                {/* Header with type label */}
                <div className='flex items-center justify-between border-b border-gray-200 px-6 md:px-8 py-4'>
                  <div className='flex items-center gap-3'>
                    <Briefcase size={20} className='text-gray-500' />
                    <span className='text-lg text-gray-700'>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-gray-500 text-sm'>0{index + 1}</span>
                  </div>
                </div>

                <div className='p-6 md:p-8'>
                  {/* Title and Company */}
                  <div className='mb-8'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6'>
                      <div>
                        <h3 className='text-4xl md:text-6xl font-medium text-black'>
                          {exp.title}
                        </h3>
                        <p className='text-2xl md:text-3xl text-gray-700 mt-2'>
                          {exp.company}
                        </p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`px-4 py-2 text-base border rounded-none ${
                            exp.type === 'current'
                              ? 'border-crayola text-crayola'
                              : 'border-gray-400 text-gray-700'
                          }`}
                        >
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className='flex flex-wrap gap-4 md:gap-6 text-gray-600 border-t border-b border-gray-100 py-4'>
                      <div className='flex items-center gap-2'>
                        <Calendar size={18} className='text-gray-500' />
                        <span className='text-base'>{exp.date}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MapPin size={18} className='text-gray-500' />
                        <span className='text-base'>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className='mb-10'>
                    <h4 className='text-xl md:text-2xl text-gray-800 mb-6 font-medium flex items-center gap-2'>
                      <span className='w-4 h-0.5 bg-crayola'></span>
                      Responsibilities & Achievements
                    </h4>
                    <ul className='space-y-4'>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className='flex items-start group'>
                          <div className='w-1 h-1 bg-gray-400 mt-2 mr-3 flex-shrink-0 group-hover:bg-crayola transition-colors duration-300'></div>
                          <span className='text-lg md:text-xl text-gray-700 flex-1 leading-relaxed'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className='text-xl md:text-2xl text-gray-800 mb-6 font-medium flex items-center gap-2'>
                      <span className='w-4 h-0.5 bg-crayola'></span>
                      Technologies Used
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='px-4 py-2 bg-gray-100 text-gray-700 text-base rounded-none border border-gray-300 hover:border-crayola hover:text-crayola transition-all duration-300'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation for Mobile */}
              <div className='flex justify-between items-center mt-8 lg:hidden'>
                <button
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === 0
                        ? experiences.length - 1
                        : activeIndex - 1,
                    )
                  }
                  className='flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300'
                >
                  <ChevronRight size={20} className='rotate-180' />
                  <span className='text-base'>Previous</span>
                </button>

                <div className='flex items-center gap-2'>
                  <span className='text-gray-500'>0{activeIndex + 1}</span>
                  <div className='w-12 h-0.5 bg-gray-300'></div>
                  <span className='text-gray-500'>0{experiences.length}</span>
                </div>

                <button
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % experiences.length)
                  }
                  className='flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300'
                >
                  <span className='text-base'>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden lg:flex justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200'>
        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? experiences.length - 1 : activeIndex - 1,
            )
          }
          className='flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 group'
        >
          <ChevronRight
            size={24}
            className='rotate-180 group-hover:-translate-x-1 transition-transform'
          />
          <span className='text-xl'>Previous</span>
        </button>

        <div className='flex items-center gap-3'>
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-none transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-crayola scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveIndex((activeIndex + 1) % experiences.length)}
          className='flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 group'
        >
          <span className='text-xl'>Next</span>
          <ChevronRight
            size={24}
            className='group-hover:translate-x-1 transition-transform'
          />
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
