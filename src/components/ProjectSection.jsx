import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Import gambar-gambar project
import ratuBogaOrderImg from '../assets/images/ratu-boga-order.png';
import travlocImg from '../assets/images/travloc.png';
import academicManagerImg from '../assets/images/travloc.png';
import ratuBogaWebImg from '../assets/images/travloc.png';
import libraryInventoryImg from '../assets/images/travloc.png';
import portfolioV3Img from '../assets/images/travloc.png';

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'ratu-boga-order',
      title: 'RM. Ratu Boga Order Management',
      subtitle: 'Full-Stack Food Ordering System',
      description: 'A comprehensive web application that enables customers to place orders by scanning QR codes.',
      tags: ['React', 'Express', 'Node.js'],
      color: '#FF6B6B',
      accentColor: 'bg-[#FF6B6B]',
      projectLink: '/projects/ratu-boga-order',
      image: ratuBogaOrderImg,
      imageColor: 'from-[#FF6B6B] to-[#FF8E8E]'
    },
    {
      id: 'travloc',
      title: 'Travloc Tourism Platform',
      subtitle: 'Local Tourism & UMKM Promotion',
      description: 'Progressive web application promoting local tourism and small businesses across Indonesia.',
      tags: ['JavaScript', 'PWA', 'Webpack'],
      color: '#4ECDC4',
      accentColor: 'bg-[#4ECDC4]',
      projectLink: '/projects/travloc',
      image: travlocImg,
      imageColor: 'from-[#4ECDC4] to-[#6EE7E7]'
    },
    {
      id: 'academic-manager',
      title: 'Academic Project Manager',
      subtitle: 'University Management System',
      description: 'User-friendly academic management system for Faculty of Pharmacy.',
      tags: ['UI/UX', 'Figma', 'Design System'],
      color: '#FFD166',
      accentColor: 'bg-[#FFD166]',
      projectLink: '/projects/academic-manager',
      image: academicManagerImg,
      imageColor: 'from-[#FFD166] to-[#FFE08C]'
    },
    {
      id: 'ratu-boga-web',
      title: 'RM. Ratu Boga Web System',
      subtitle: 'Restaurant Management Platform',
      description: 'Laravel-based system for managing restaurant operations.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      color: '#9D4EDD',
      accentColor: 'bg-[#9D4EDD]',
      projectLink: '/projects/ratu-boga-web',
      image: ratuBogaWebImg,
      imageColor: 'from-[#9D4EDD] to-[#C77DFF]'
    },
    {
      id: 'library-inventory',
      title: 'Library Inventory App',
      subtitle: 'Desktop Library Management',
      description: 'Java desktop application for small libraries.',
      tags: ['Java', 'Desktop App', 'SQLite'],
      color: '#06D6A0',
      accentColor: 'bg-[#06D6A0]',
      projectLink: '/projects/library-inventory',
      image: libraryInventoryImg,
      imageColor: 'from-[#06D6A0] to-[#4ECDC4]'
    },
    {
      id: 'portfolio-v3',
      title: 'Personal Portfolio V3',
      subtitle: 'Modern Portfolio Website',
      description: 'Current portfolio built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind', 'Vite'],
      color: '#FF9E6D',
      accentColor: 'bg-[#FF9E6D]',
      projectLink: '/projects/portfolio-v3',
      image: portfolioV3Img,
      imageColor: 'from-[#FF9E6D] to-[#FFB896]'
    }
  ];

  const handleProjectClick = (projectLink) => {
    console.log('Navigating to:', projectLink);
    // Implement your navigation logic here
  };

  return (
    <section className='min-h-screen py-16 px-5 md:px-12 lg:px-13 font-alumni'>
      <div className='font-alumni pb-10 md:pb-24 lg:pb-20'>
        <h2
          className='font-alumni text-6xl text-black font-medium leading-[75%]
                      md:text-9xl
                      lg:text-[10rem]'
        >
          Projects
        </h2>
      </div>

      {/* Grid Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.projectLink}
            onClick={(e) => {
              e.preventDefault();
              handleProjectClick(project.projectLink);
            }}
            className='relative block overflow-hidden bg-gray-900 aspect-[4/3] rounded-none transition-all duration-500 hover:scale-[1.02] group'
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image Container */}
            <div className='absolute inset-0 transition-all duration-500 overflow-hidden'>
              {/* Gambar dengan filter monokrom saat normal */}
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  hoveredProject === project.id
                    ? 'opacity-100 grayscale scale-105'
                    : 'grayscale-0 opacity-100'
                }`}
              />

              {/* Overlay warna saat hover */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredProject === project.id
                    ? `bg-gradient-to-br from-[#7b7b7b] to-[#ffffff] opacity-80`
                    : 'opacity-0'
                }`}
              ></div>
            </div>

            {/* Content Overlay - HANYA muncul saat hover */}
            <div
              className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Top Section - Title */}
              <div className='transform transition-all duration-500'>
                <h3 className='text-3xl md:text-4xl font-medium text-black mb-2'>
                  {project.title}
                </h3>
                <p className='text-black text-lg'>{project.subtitle}</p>
              </div>

              {/* Bottom Section - View Project Button */}
              <div className='transform transition-all duration-500'>
                <div className='flex items-center justify-between'>
                  <span className='text-black text-xl font-medium flex items-center gap-2'>
                    View Project
                    <ExternalLink
                      size={20}
                      className='ml-1 transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </span>

                  {/* Tags */}
                  <div className='flex gap-1'>
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className='px-2 py-1 bg-black/20 backdrop-blur-sm text-black text-xs rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project ID Badge - HANYA muncul saat hover */}
            <div
              className={`absolute top-4 right-4 px-3 py-1 text-sm transition-all duration-500 ${
                hoveredProject === project.id
                  ? 'bg-white/20 backdrop-blur-sm text-white opacity-100'
                  : 'opacity-0'
              } rounded`}
            >
              {projects.indexOf(project) + 1 < 10
                ? `0${projects.indexOf(project) + 1}`
                : projects.indexOf(project) + 1}
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute inset-0 border-2 transition-all duration-500 ${
                hoveredProject === project.id
                  ? 'border-white/30'
                  : 'border-transparent'
              }`}
            ></div>
          </a>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className='text-center mt-12'>
        <a
          href='/projects'
          onClick={(e) => {
            e.preventDefault();
            handleProjectClick('/projects');
          }}
          className='inline-flex items-center text-2xl text-black font-medium hover:text-crayola transition-colors duration-300 no-underline'
        >
          View all projects
          <ExternalLink size={20} className='ml-2' />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;