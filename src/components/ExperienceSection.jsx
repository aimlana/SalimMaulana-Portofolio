const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Java Developer',
      company: 'Library Inventory',
      date: 'February – July 2021',
      description: [
        'Created a basic desktop application using Java for managing a library’s book collection.',
        'Implemented core CRUD operations for books and members, connected to a local database.',
      ],
      tags: ['Java', 'Desktop App']
    },
    {
      title: 'Laravel Developer',
      company: 'RM. Ratu Boga',
      date: 'January – June 2022',
      description: [
        'Built a digital restaurant system using Laravel for food ordering and sales management.',
        'Implemented dynamic menus, transaction workflows, and multi-level user access.',
      ],
      tags: ['Laravel', 'Web'],
    },
    {
      title: 'UI/UX Designer',
      company: 'Faculty of Pharmacy Hasanuddin University',
      date: 'January – June 2022',
      description: [
        'Designed and developed a final project management system and digital correspondence platform.',
        'Created a faculty information system with user-friendly UI/UX and efficient data flow.',
      ],
      tags: ['Figma', 'UI/UX'],
    },
  ];

  return (
    <div className='min-h-screen py-16 px-5 lg:px-12 font-alumni'>
      <div className='font-alumni pb-12'>
        <h2 className='text-9xl font-medium text-black'>Experience</h2>
      </div>
      <div className='mx-auto'>
        <div className='space-y-8 mx-2'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start py-6 border-b border-gray-200 last:border-b-0'
            >
              {/* Column 1 - title Info */}
              <div className='space-y-3'>
                <h3 className='text-4xl font-medium text-black leading-tight'>
                  {exp.title}
                </h3>
                <p className='text-xl text-gray-400'>{exp.date}</p>
              </div>

              {/* Column 2 - description Description */}
              <ul className='list-disc ml-5 space-y-2'>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Column 3 - Tags */}
              <div className='flex flex-wrap gap-2 justify-end'>
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-gray-100 text-gray-700 text-xl rounded-full border border-gray-300'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
