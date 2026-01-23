import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Trubers
import tb1 from '../assets/images/Trubers/1.png';
import tb2 from '../assets/images/Trubers/2.png';
import tb3 from '../assets/images/Trubers/3.png';
import tb4 from '../assets/images/Trubers/4.png';
import tb5 from '../assets/images/Trubers/5.png';
import tb6 from '../assets/images/Trubers/6.png';

// WAJO
import wajo1 from '../assets/images/Wajo/1.png';
import wajo2 from '../assets/images/Wajo/2.png';
import wajo3 from '../assets/images/Wajo/3.png';
import wajo4 from '../assets/images/Wajo/4.png';
import wajo5 from '../assets/images/Wajo/5.png';
import wajo6 from '../assets/images/Wajo/6.png';

// Ratu-Boga
import rb1 from '../assets/images/Ratu-Boga/1.png';
import rb2 from '../assets/images/Ratu-Boga/2.png';
import rb3 from '../assets/images/Ratu-Boga/3.png';
import rb4 from '../assets/images/Ratu-Boga/4.png';
import rb5 from '../assets/images/Ratu-Boga/5.png';
import rb6 from '../assets/images/Ratu-Boga/6.png';

// SI-FA
import sifa1 from '../assets/images/SI-FA/1.png';
import sifa2 from '../assets/images/SI-FA/2.png';
import sifa3 from '../assets/images/SI-FA/3.png';
import sifa4 from '../assets/images/SI-FA/4.png';
import sifa5 from '../assets/images/SI-FA/5.png';
import sifa6 from '../assets/images/SI-FA/6.png';

// Travloc
import trv1 from '../assets/images/Travloc/1.png';
import trv2 from '../assets/images/Travloc/2.png';
import trv3 from '../assets/images/Travloc/3.png';
import trv4 from '../assets/images/Travloc/4.png';
import trv5 from '../assets/images/Travloc/5.png';
import trv6 from '../assets/images/Travloc/6.png';

// Portofolio
import porto1 from '../assets/images/Portofolio/1.png';
import porto2 from '../assets/images/Portofolio/2.png';
import porto3 from '../assets/images/Portofolio/3.png';
import porto4 from '../assets/images/Portofolio/4.png';
import porto5 from '../assets/images/Portofolio/5.png';
import porto6 from '../assets/images/Portofolio/6.png';

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 'ratu-boga-order',
      title: 'RM. Ratu Boga QR Order System',
      subtitle: 'Fullstack Food Ordering System',
      description:
        'End-to-end web-based self-ordering system using QR codes with real-time order processing via WebSocket.',
      fullDescription:
        'RM. Ratu Boga QR Order System is a comprehensive web application designed to revolutionize the dining experience. This full-stack solution allows customers to scan QR codes at their tables, browse digital menus, place orders, and make payments—all without waiter intervention. The system features real-time order tracking, admin dashboard for restaurant management, and automated notifications.',
      tags: ['React', 'Express', 'Node.js', 'WebSocket', 'MongoDB'],
      color: '#FF6B6B',
      accentColor: 'bg-[#FF6B6B]',
      projectLink: 'https://ratuboga-order.example.com',
      githubLink: 'https://github.com/salimmlana/ratu-boga-order',
      images: [rb1, rb2, rb3, rb4, rb5, rb6],
      features: [
        'QR Code based ordering system',
        'Real-time order updates with WebSocket',
        'Admin dashboard for menu and order management',
        'Payment integration and transaction history',
        'Responsive design for mobile and desktop',
      ],
      role: 'Full Stack Developer',
      duration: '5 months',
      year: '2025',
    },
    {
      id: 'trubers',
      title: 'TRUBERS',
      subtitle: 'Trust Builder Telkomsel Sulawesi',
      description:
        'Content evaluation and leaderboard system developed during Telkomsel internship.',
      fullDescription:
        'TRUBERS is an internal platform for Telkomsel Regional Sulawesi to evaluate content creator performance. The system scrapes social media data, calculates engagement scores, and displays leaderboards. Features include admin dashboard for content management, automated scoring algorithms, and comprehensive analytics.',
      tags: ['React', 'Express', 'JavaScript', 'Web Scraping', 'Chart.js'],
      color: '#4ECDC4',
      accentColor: 'bg-[#4ECDC4]',
      projectLink: 'https://trubers.example.com',
      githubLink: 'https://github.com/salimmlana/trubers',
      images: [tb1, tb2, tb3, tb4, tb5, tb6],
      features: [
        'Social media data scraping from TikTok & Instagram',
        'Automated content scoring algorithm',
        'Interactive leaderboard with ranking system',
        'Admin dashboard for content management',
        'Data visualization with charts and graphs',
      ],
      role: 'Frontend Developer & Data Scraper',
      duration: '5 months',
      year: '2025',
    },
    {
      id: 'wajo',
      title: 'WAJO',
      subtitle: 'WhatsApp Jadwal Otomatis',
      description: 'Automated WhatsApp scheduling and broadcast system.',
      fullDescription:
        'WAJO (WhatsApp Jadwal Otomatis) is an automated messaging system designed to help communities manage scheduled communications. The platform allows administrators to create message templates, schedule broadcasts, and manage contact lists. Built with React frontend and Express backend.',
      tags: ['React', 'Express', 'JavaScript', 'WhatsApp API', 'Node.js'],
      color: '#06D6A0',
      accentColor: 'bg-[#06D6A0]',
      projectLink: 'https://wajo.example.com',
      githubLink: 'https://github.com/salimmlana/wajo',
      images: [wajo1, wajo2, wajo3, wajo4, wajo5, wajo6],
      features: [
        'Automated WhatsApp message scheduling',
        'Contact list management',
        'Message template system',
        'Broadcast analytics and reporting',
        'Multi-admin support',
      ],
      role: 'Full Stack Developer',
      duration: '3 months',
      year: '2025',
    },
    {
      id: 'travloc',
      title: 'Travloc',
      subtitle: 'Tourism & UMKM Promotion Platform',
      description: 'Capstone project for Baparekraf Digital Talent 2024.',
      fullDescription:
        'Travloc is a tourism and local business promotion platform created as a capstone project for Baparekraf Digital Talent 2024. The platform connects tourists with local businesses, featuring destination guides, business listings, booking systems, and user reviews.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'UI/UX Design'],
      color: '#FFD166',
      accentColor: 'bg-[#FFD166]',
      projectLink: 'https://travloc.example.com',
      githubLink: 'https://github.com/salimmlana/travloc',
      images: [trv1, trv2, trv3, trv4, trv5, trv6],
      features: [
        'Destination directory with filtering',
        'Local business listings',
        'Booking and reservation system',
        'User review and rating system',
        'Responsive mobile-first design',
      ],
      role: 'UI/UX Designer & Frontend Developer',
      duration: '4 months',
      year: '2024',
    },
    {
      id: 'academic-manager',
      title: 'SI-FA Academic Information System',
      subtitle: 'Faculty Information System',
      description: 'UI/UX design project for Faculty of Pharmacy.',
      fullDescription:
        'Academic Information System for Faculty of Pharmacy, Universitas Hasanuddin. This project involved comprehensive UI/UX design following design system principles. The system manages student data, course schedules, academic records, and faculty administration.',
      tags: ['UI/UX', 'Figma', 'Design System', 'Prototyping', 'Wireframing'],
      color: '#9D4EDD',
      accentColor: 'bg-[#9D4EDD]',
      projectLink: 'https://sifa.example.com',
      githubLink: null,
      images: [sifa1, sifa2, sifa3, sifa4, sifa5, sifa6],
      features: [
        'Comprehensive design system',
        'Interactive prototypes',
        'User flow documentation',
        'Accessibility compliance',
        'Responsive design for all devices',
      ],
      role: 'UI/UX Designer',
      duration: '6 months',
      year: '2023',
    },
    {
      id: 'portfolio-v3',
      title: 'Personal Portfolio V3',
      subtitle: 'Modern Developer Portfolio',
      description:
        'Personal portfolio website built with React and Tailwind CSS.',
      fullDescription:
        'Personal portfolio website version 3 showcasing projects, experience, and skills. Built with modern technologies including React, Tailwind CSS, and Framer Motion for animations. Features dark/light mode, responsive design, and interactive elements.',
      tags: ['React', 'Tailwind', 'Vite', 'Framer Motion', 'Responsive Design'],
      color: '#FF9E6D',
      accentColor: 'bg-[#FF9E6D]',
      projectLink: 'https://salimmaulana.example.com',
      githubLink: 'https://github.com/salimmlana/portfolio-v3',
      images: [porto1, porto2, porto3, porto4, porto5, porto6],
      features: [
        'Dark/light mode toggle',
        'Smooth animations with Framer Motion',
        'Responsive design for all screen sizes',
        'Project filtering and categorization',
        'Contact form with validation',
      ],
      role: 'Frontend Developer & Designer',
      duration: '2 months',
      year: '2024',
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
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
          <button
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className='relative block cursor-pointer overflow-hidden bg-gray-900 aspect-4/3 rounded-none transition-all duration-500 hover:scale-[1.02] group text-left w-full'
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image Container */}
            <div className='absolute border border-neutral-300 inset-0 transition-all duration-500 overflow-hidden'>
              {/* Gambar dengan filter monokrom saat normal */}
              <img
                src={project.images[0]}
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
                    ? `bg-linear-to-br from-[#000000] to-[#ffffff] opacity-80`
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
                <h3 className='text-3xl md:text-4xl font-semibold text-crayola mb-2'>
                  {project.title}
                </h3>
                <p className='text-crayola text-lg'>{project.subtitle}</p>
              </div>

              {/* Bottom Section - View Project Button */}
              <div className='transform transition-all duration-500'>
                <div className='flex items-center justify-between'>
                  <span className='text-crayola text-xl font-medium flex items-center gap-2'>
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
                        className='px-2 py-1 bg-crayola backdrop-blur-sm text-white text-xs rounded'
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
          </button>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className='text-center mt-12'>
        <button
          onClick={() => navigate('/projects')}
          className='inline-flex items-center text-2xl text-black font-medium hover:text-crayola transition-colors duration-300 no-underline'
        >
          View all projects
          <ExternalLink size={20} className='ml-2' />
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
