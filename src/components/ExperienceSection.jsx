const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Java Developer',
      project: 'Library Inventory',
      date: 'Feb 2021 – Jul 2021',
      description: [
        'Created a basic desktop application using Java for managing a library’s book collection.',
        'Implemented core CRUD operations for books and members, connected to a local database.',
      ],
      tags: ['Java', 'Desktop App'],
    },
    {
      title: 'Laravel Developer',
      project: 'RM. Ratu Boga Web System',
      date: 'Jan 2022 – Jun 2022',
      description: [
        'Built a digital restaurant system using Laravel for food ordering and sales management.',
        'Implemented dynamic menus, transaction workflows, and multi-level user access.',
      ],
      tags: ['Laravel', 'Web'],
    },
    {
      title: 'UI/UX Designer',
      project: 'SI-FA Faculty of Pharmacy Hasanuddin University',
      date: 'Dec 2022 - May 2023',
      description: [
        'Designed and developed a final project management system and digital correspondence platform.',
        'Created a faculty information system with user-friendly UI/UX and efficient data flow.',
      ],
      tags: ['Figma', 'UI/UX'],
    },
    {
      title: 'Web Developer',
      project: 'RM. Ratu Boga Order Management',
      date: 'Jun 2025 – present',
      description: [
        'Developed a web-based self-ordering system where customers can scan a QR code to place food orders directly.',
        'Integrated features like cart, checkout, table tracking, payment methods, and real-time order flow.',
      ],
      tags: ['React', 'Express'],
    },
  ];

  return (
    <section className='min-h-screen py-16 px-5 lg:px-12 font-alumni overflow-x-hidden'>
      <div className='font-alumni pb-24'>
        <h2
          className='font-alumni text-6xl text-black font-medium leading-[75%]
                      md:text-9xl
                      lg:text-[10rem]'
        >
          Experience
        </h2>
      </div>
      <div className='max-w-full'>
        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row gap-4 md:gap-8 items-start py-6 border-b border-gray-200 last:border-b-0'
            >
              {/* Column 1 - Title Info */}
              <div className='w-full md:w-[30%] space-y-3 min-w-0'>
                <h3 className='text-4xl font-medium text-black leading-tight break-words'>
                  {exp.title}
                  <span className='text-xl text-gray-400 mt-3 ms-3'>
                    ({exp.date})
                  </span>
                </h3>
                <p className='text-2xl text-crayola'>{exp.project}</p>
              </div>

              {/* Column 2 - Description */}
              <div className='w-full md:w-1/2 min-w-0 md:px-4'>
                <ul className='space-y-2'>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className='flex items-start'>
                      <span className='text-black mr-3 mt-1 flex-shrink-0'>
                        •
                      </span>
                      <span className='flex-1 leading-relaxed break-words text-[1.35rem]'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Tags */}
              <div className='w-full md:w-1/6 min-w-0'>
                <div className='flex flex-wrap gap-2 justify-start md:justify-end'>
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='px-5 py-1 bg-gray-100 text-gray-700 text-xl rounded-full border border-gray-300 whitespace-nowrap'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
